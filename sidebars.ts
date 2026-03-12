import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🚀 起步',
      collapsed: false,
      items: [
        'terminology/index',
        'chart-basics/index',
        'my-setup/index',
        'personality-traits/index',
        'starting-out/index',
      ],
    },
    {
      type: 'category',
      label: '🔄 市场周期',
      collapsed: false,
      items: [
        'cycle/index',
        'always-in/index',
        'candles-setups/index',
        'gaps/index',
        'pullbacks/index',
        'pressure/index',
      ],
    },
    {
      type: 'category',
      label: '📋 How to Trade Prerequisites',
      collapsed: false,
      items: [
        'trends/index',
      ],
    },
    {
      type: 'category',
      label: '⚡ Swing and Scalp Trading',
      collapsed: false,
      items: [
        'breakouts/index',
      ],
    },
  ],
};

export default sidebars;
