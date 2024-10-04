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
            src: './src/assets/logo_robotic.svg',
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
    redirects: {
        '/pae-docs/guides': '/pae-docs/fr/',
        '/pae-docs/fr/guides': '/pae-docs/fr/',
        '/pae-docs/en/guides': '/pae-docs/en/',
    },
    devToolbar: {
        enabled: false,
    },
});