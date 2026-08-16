import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KitBox Wiki',
  tagline: 'A KitBox hivatalos wiki oldala',
  favicon: 'img/logo.webp',

  // Set the production url of your site here
  url: 'https://wiki.kitbox.hu',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KitBox', // Usually your GitHub org/user name.
  projectName: 'kitbox-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'hu-HU',
    locales: ['hu-HU'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Roland0719/kitbox-wiki/tree/main/',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/banner.webp',
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'KitBox Wiki',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Közösség',
          items: [
            {
              label: 'Discord',
              href: 'https://dsc.gg/kitbox',
            },
          ],
        },
        {
          title: 'Hasznos linkek',
          items: [
            {
              label: 'Főoldal',
              href: 'https://kitbox.hu',
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} KitBox | Minden jog fenntartva!`,
    },
    prism: {
      theme: prismThemes.oceanicNext,
      darkTheme: prismThemes.oceanicNext,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
