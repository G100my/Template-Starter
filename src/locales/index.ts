import { createI18n } from 'vue-i18n'
import en from './en.json'
import zhTW from './zh-TW.json'

export const messages = {
  en,
  'zh-TW': zhTW,
}

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
