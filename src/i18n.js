import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

// Usage
// template - $t("message.hello") 
// js - this.$i18n.t('message.hello')

export const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界'
      }
    }
  }
})
