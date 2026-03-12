import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'link',
      label: '🏠 首页',
      href: '/',
    },
    {
      type: 'category',
      label: '📚 课程目录',
      collapsed: false,
      items: [
        'candles-setups/index',
        'pullbacks/index',
        'pressure/index',
        'gaps/index',
        'cycle/index',
        'always-in/index',
        'trends/index',
      ],
    },
  ],
};

export default sidebars;
