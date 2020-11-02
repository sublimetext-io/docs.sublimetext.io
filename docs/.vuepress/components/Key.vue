<template>
  <span class="kbd-container" v-html="keysHtml" />
</template>

<script>
const translationMap = new Map([
  // https://www.sublimetext.com/docs/key_bindings.html#keys
  // http://xahlee.info/comp/unicode_computing_symbols.html
  ['up', "↑"], // ▲
  ['down', "↓"], // ▼
  ['left', "←"], // ◀
  ['right', "→"], // ▶
  // ['insert', "⎀"],
  // ['home', "⤒"],
  // ['end', "⤓"],
  ['pageup', "Page Up"], // ⇞
  ['pagedown', "Page Up"], // ⇟
  ['backspace', "⌫"],
  ['delete', "⌦"],
  ['tab', "⭾"],
  ['enter', "⏎"],
  // ['pause', ""],
  ['escape', "Esc"], // ⎋
  ['space', "␣"],
  /* 'keypad0' etc handled in code */
  ['keypad_period', ". (Keypad)"],
  ['keypad_divide', "÷ (Keypad)"],
  ['keypad_multiply', "× (Keypad)"],
  ['keypad_minus', "- (Keypad)"],
  ['keypad_plus', "+ (Keypad)"],
  ['keypad_enter', "⏎ (Keypad)"],
  ['clear', "⌧"],
  /* Modifiers */
  // ['super', ""],
  // ['alt', ""],
  ['shift', "⇧"],
  ['command', "⌘"], // macOS only
  ['option', "⌥"], // macOS only
  // ['ctrl', "⌃"], // macOS only
  ['altgr', "AltGr"],
  /* Function keys omitted */
])

// context_menu

export default {
  props: {
    k: String,
  },
  data () {
    return {
      // The order is somewhat arbitrary, but should ideally work for both macOS and other bindings
      modifierOrder: ['super', 'ctrl', 'alt', 'altgr', 'option', 'shift', 'command'],
    }
  },
  computed: {
    chords () {
      return this.k.trim()
        .split(/\s*\,(?!$)\s*/) // don't single char
        .map(chordString => {
          const chord = chordString.trim()
            .split(/\s*\+(?!$)\s*/)
          sortModifiers(chord)
          return chord
        })
    },
    keysHtml () {
      // TODO consider joining modifiers for macOS
      // TODO OS-specific modifier translations & primary modifier
      return this.chord
        .map(chord => {
          const kbds = chord
            .map(this.translateKey)
            .map(x => `<kbd>${x}</kbd>`)
            .join("&nbsp;")
          return `<span title="${chord.join("+")}">${kbds}</span>`
        })
        .join(", ")
    }
  },
  methods: {
    translateKey (key) {
      if (translationMap.has(key))
        return translationMap.get(key)
      else if (key.startsWith("keypad")) // number keys
        return key.substring(6) + " (Keypad)"
      else
        return key.substring(0, 1).toUpperCase() + key.substring(1)
    },
    modifierIndex (x) {
      const x = this.modifierOrder.indexOf(x)
      return x != -1 ? x : this.modifierOrder.length  // non-modifier keys rank highest
    },
    sortModifiers (chord) {
      chord.sort((a, b) => this.modifierIndex(a) - this.modifierIndex(b))
    },
  },
}
</script>
