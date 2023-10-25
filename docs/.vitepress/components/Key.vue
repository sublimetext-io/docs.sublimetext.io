<template>
  <span class="kbd-container" v-html="keysHtml" />
</template>

<script lang="ts">
import { computed } from 'vue';

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

type Chord = Array<string>;
</script>

<script setup lang="ts">
const props = defineProps<{
  k: string,
}>();

const chords = computed(() =>
  props.k.trim()
    .split(/\s*\,(?!$)\s*/)
    .map(parseChord),
);

function parseChord(chordString: string): Chord {
  const chord = chordString.trim().split(/\s*\+(?!$)\s*/);
  sortModifiers(chord);
  return chord;
}

// compute HTML directly because of NBSP usage
const keysHtml = computed(() =>
  chords.value
    .map(chord => {
      const kbds = chord
        .map(translateKey)
        .map(key => `<kbd>${key}</kbd>`)
        .join("&nbsp;");
      return `<span title="${chord.join("+")}">${kbds}</span>`;
    })
    .join(", "),
);

function translateKey(key: string): string {
  if (TRANSLATION_MAP.has(key)) {
    return TRANSLATION_MAP.get(key);
  } else if (key.startsWith("keypad")) {
    return key.substring(6) + " (Keypad)";
  } else {
    return key.charAt(0).toUpperCase() + key.slice(1);
  }
}

function modifierIndex(modifier: string): number {
  const index = MODIFIER_ORDER.indexOf(modifier);
  return index !== -1 ? index : MODIFIER_ORDER.length;
}

function sortModifiers(chord: Chord): void {
  chord.sort((a, b) => modifierIndex(a) - modifierIndex(b));
}
</script>
