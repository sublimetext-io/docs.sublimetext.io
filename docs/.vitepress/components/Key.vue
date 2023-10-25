<template>
  <span class="kbd-container" v-html="keysHtml" />
</template>

<script>
const TRANSLATION_MAP = new Map([
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
]);

const MODIFIER_ORDER = ['super', 'ctrl', 'alt', 'altgr', 'option', 'shift', 'command'];

export default {
  props: {
    k: String,
  },
  computed: {
    chords() {
      return this.k.trim()
        .split(/\s*\,(?!$)\s*/)
        .map(this.parseChord);
    },
    keysHtml() {
      return this.chords
        .map(chord => {
          const kbds = chord
            .map(this.translateKey)
            .map(key => `<kbd>${key}</kbd>`)
            .join("&nbsp;");
          return `<span title="${chord.join("+")}">${kbds}</span>`;
        })
        .join(", ");
    }
  },
  methods: {
    parseChord(chordString) {
      const chord = chordString.trim().split(/\s*\+(?!$)\s*/);
      this.sortModifiers(chord);
      return chord;
    },
    translateKey(key) {
      if (TRANSLATION_MAP.has(key)) {
        return TRANSLATION_MAP.get(key);
      } else if (key.startsWith("keypad")) {
        return key.substring(6) + " (Keypad)";
      } else {
        return key.charAt(0).toUpperCase() + key.slice(1);
      }
    },
    modifierIndex(modifier) {
      const index = MODIFIER_ORDER.indexOf(modifier);
      return index !== -1 ? index : MODIFIER_ORDER.length;
    },
    sortModifiers(chord) {
      chord.sort((a, b) => this.modifierIndex(a) - this.modifierIndex(b));
    },
  },
}
</script>
