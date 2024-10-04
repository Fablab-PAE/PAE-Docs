// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://fablab-pae.github.io',
    base: '/pae-docs',
    integrations: [
      starlight({
        title: '',
        logo: {
            // src: './src/assets/logo_robotic_light.svg',
            light: './src/assets/logo_robotic_light.svg',
            dark: './src/assets/logo_robotic_dark.svg',
          },
        // social: {
        //   github: 'https://github.com/withastro/starlight',
        // },
        defaultLocale: 'fr',
        locales: {
          'fr': {
            label: 'Français',
            lang: 'fr',
          },
          'en': {
            label: 'English',
          },
        },
        head: [
            {
              tag: 'script',
              attrs: {
                src: '/pae-docs/redirect.js',
              },
            },
        ],
        sidebar: [
          {
            label: 'Guides',
            translations: {
              'fr': 'Guides',
              'en': 'Guides',
            },
            items: [
              {
                label: 'CNC Machine Guide',
                translations: {
                  'fr': 'Machine CNC',
                  'en': 'CNC Machine',
                },
                link: '/guides/cnc-machine/',
              },
            //   {
            //     label: 'Example Guide',
            //     translations: {
            //       'fr': 'Guide Demo',
            //       'en': 'Demo Guide',
            //     },
            //     link: '/guides/example/',
            //   },
            ],
          },
        //   {
        //     label: 'Additional documents',
        //     translations: {
        //       'en': 'Additional documents',
        //       'fr': 'Documents additionnels',
        //     },
        //     autogenerate: { directory: 'reference' },
        //   },
        ],
      }),
    ],
    // redirects: {
    //     '/pae-docs': '/pae-docs/fr/',
    //     '/pae-docs/': '/pae-docs/fr/',
    //     '/pae-docs/guides': '/pae-docs/fr/',
    //     '/pae-docs/fr/guides': '/pae-docs/fr/',
    //     '/pae-docs/en/guides': '/pae-docs/en/',
    // },
    devToolbar: {
        enabled: false,
    },
});