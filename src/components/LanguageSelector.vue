<template>
  <form class="mx-auto max-w-sm">
    <div
      v-if="langDropdown"
      class="absolute left-0 top-0 h-screen w-screen"
      @click="langDropdown = false"
    ></div>
    <div class="relative flex">
      <button
        id="states-button"
        @click="langDropdown = !langDropdown"
        class="dropdown-toggle z-10 inline-flex flex-shrink-0 items-center gap-x-2 rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-center text-sm font-semibold uppercase text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100"
        type="button"
      >
        <component :is="selectedLanguageFlag" />
        {{ selectedLanguage }}
        <ChevronIcon />
      </button>
      <div
        v-if="langDropdown"
        id="dropdown-states"
        class="absolute top-10 z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow"
      >
        <ul class="py-2 text-sm text-gray-700" aria-labelledby="states-button">
          <li v-for="option in languageOptions" :key="option.language">
            <button
              type="button"
              class="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="changeLanguage(option)"
            >
              <Component :is="option.flagIcon" /> {{ option.language }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'
import EnglishIcon from './icons/EnglishIcon.vue'
import SpanishIcon from './icons/SpanishIcon.vue'
import ChevronIcon from './icons/ChevronIcon.vue'
import BrazilIcon from './icons/BrazilIcon.vue'

const langDropdown = ref(false)
const selectedLanguageFlag = shallowRef(BrazilIcon)
const selectedLanguage = ref('pt')
const locale = useI18n()
const languageOptions = [
  { language: 'Português', flagIcon: BrazilIcon, code: 'pt' },
  { language: 'English', flagIcon: EnglishIcon, code: 'en' },
  { language: 'Español', flagIcon: SpanishIcon, code: 'es' },
]
interface OptionObject {
  language: string
  flagIcon: any
  code: string
}
const changeLanguage = (option: OptionObject) => {
  selectedLanguage.value = option.code
  selectedLanguageFlag.value = option.flagIcon
  locale.locale.value = option.code.toLocaleLowerCase()
  langDropdown.value = false
}
</script>

<style></style>
