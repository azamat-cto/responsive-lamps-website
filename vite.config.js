import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      // Custom fonts.
      custom: {
        /**
         * Fonts families lists
         */
        families: [
          {
            /**
             * Name of the font family.
             */
            name: 'Poppins',
            /**
             * Local name of the font. Used to add `src: local()` to `@font-rule`.
             */
            local: 'Poppins',
            /**
             * Regex(es) of font files to import. The names of the files will
             * predicate the `font-style` and `font-weight` values of the `@font-rule`'s.
             */
            src: './src/assets/fonts/poppins/Poppins-Regular.ttf',

            /**
             * This function allow you to transform the font object before it is used
             * to generate the `@font-rule` and head tags.
             */
            transform(font) {
              if (font.basename === 'Poppins-Regular') {
                // update the font weight
                font.weight = 400
              }

              // we can also return null to skip the font
              return font
            }
          },
          {
            name: 'Poppins',
            local: 'Poppins',
            src: './src/assets/fonts/poppins/Poppins-Medium.ttf',
            transform(font) {
              if (font.basename === 'Poppins-Medium') {
                font.weight = 500
              }
              return font
            }
          },
          {
            name: 'Montserrat',
            local: 'Montserrat',
            src: './src/assets/fonts/montserrat/Montserrat-Regular.ttf',
            transform(font) {
              if (font.basename === 'Montserrat-Regular') {
                font.weight = 400
              }
              return font
            }
          },
          {
            name: 'Montserrat',
            local: 'Montserrat',
            src: './src/assets/fonts/montserrat/Montserrat-Medium.ttf',
            transform(font) {
              if (font.basename === 'Montserrat-Medium') {
                font.weight = 500
              }
              return font
            }
          },
          {
            name: 'Montserrat',
            local: 'Montserrat',
            src: './src/assets/fonts/montserrat/Montserrat-SemiBold.ttf',
            transform(font) {
              if (font.basename === 'Montserrat-SemiBold') {
                font.weight = 600
              }
              return font
            }
          }
        ],
        /**
         * Defines the default `font-display` value used for the generated
         * `@font-rule` classes.
         */
        display: 'swap',

        /**
         * Using `<link rel="preload">` will trigger a request for the WebFont
         * early in the critical rendering path, without having to wait for the
         * CSSOM to be created.
         */
        preload: true,

        /**
         * Using `<link rel="prefetch">` is intended for prefetching resources
         * that will be used in the next navigation/page load
         * (e.g. when you go to the next page)
         *
         * Note: this can not be used with `preload`
         */
        prefetch: false,

        /**
         * define where the font load tags should be inserted
         * default: 'head-prepend'
         *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
         */
        injectTo: 'head-prepend',
      }
    })
  ],
})
