# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

# Dependencies

- [Pinia](https://pinia.vuejs.org/getting-started.html#installation)
- [vue-router@4](https://router.vuejs.org/guide/)
  - [vue-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- [vue-i18n@9](https://vue-i18n.intlify.dev/introduction.html)
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress)
- [eslint-config-prettier](https://prettier.io/docs/en/related-projects.html#eslint-integrations)
- [@vue/eslint-config-typescript](https://github.com/vuejs/eslint-config-typescript)
  - @rushstack/eslint-patch
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [vee-validate](https://vee-validate.logaretm.com/v4/guide/composition-api/validation)
- [yup](https://github.com/jquense/yup)

# Testing

- [Cypress](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress)
- [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect)
  - [http://localhost:3000/\_\_inspect/](http://localhost:3000/__inspect/)

# Extensions

- [i18n-ally](https://github.com/lokalise/i18n-ally)
