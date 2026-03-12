import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '交易课程思维导图',
  tagline: 'Brooks Price Action 学习笔记',
  favicon: 'img/favicon.ico',

  // GitHub Pages 配置
  url: 'https://fadeawaylove.github.io',
  baseUrl: '/CookBook/',

  // GitHub 仓库配置
  organizationName: 'fadeawaylove',
  projectName: 'CookBook',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // 国际化配置
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 禁用编辑链接
          editUrl: undefined,
          // 设置文档为首页
          routeBasePath: '/',
        },
        // 禁用博客
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 默认启用亮色模式
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    // 导航栏
    navbar: {
      title: '交易课程思维导图',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '课程目录',
        },
        {
          href: 'https://github.com/fadeawaylove/CookBook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // 页脚
    footer: {
      style: 'dark',
      links: [
        {
          title: '课程',
          items: [
            {
              label: '08 - Candles, Setups, and Signal Bars',
              to: '/candles-setups',
            },
            {
              label: '09 - Pullbacks and Bar Counting',
              to: '/pullbacks',
            },
            {
              label: '10 - Buying and Selling Pressure',
              to: '/pressure',
            },
            {
              label: '11 - Gaps',
              to: '/gaps',
            },
            {
              label: '12 - Market Cycle',
              to: '/cycle',
            },
            {
              label: '13 - Always In',
              to: '/always-in',
            },
            {
              label: '14 - Trends',
              to: '/trends',
            },
          ],
        },
        {
          title: '资源',
          items: [
            {
              label: 'Brooks Price Action',
              href: 'https://www.brookspriceaction.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trading Course Notes. Built with Docusaurus.`,
    },
    // 搜索配置（需要额外配置 Algolia）
    algolia: {
      // 这里需要配置 Algolia DocSearch，暂时留空
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
