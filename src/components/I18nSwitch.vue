<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { messages } from '../locales'

const languages = Object.keys(messages)

const i18n = useI18n()
function handleLanguageChanged(e: Event) {
  console.log(e)
  i18n.locale.value = (e.target as HTMLSelectElement).value
}
</script>
<template>
  <div>
    <select :value="$i18n.locale" @change="handleLanguageChanged">
      <option v-for="language in languages">{{ language }}</option>
    </select>
    <p>{{ $t('hello_i18n') }}</p>
  </div>
</template>
