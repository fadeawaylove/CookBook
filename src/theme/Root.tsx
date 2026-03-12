import React, { useEffect } from 'react';
import type { ReactNode } from 'react';

export default function Root({ children }: { children: ReactNode }) {
  useEffect(() => {
    // 手风琴效果：展开一个分类时，自动关闭其他分类

    const setupAccordion = () => {
      // 查找侧边栏容器
      const sidebar = document.querySelector('.theme-doc-sidebar-container');
      if (!sidebar) return;

      // 查找所有可点击的分类（带有 aria-expanded 的 button）
      const categoryButtons = sidebar.querySelectorAll('button[aria-expanded]');

      // 检查是否已经初始化
      if (categoryButtons.length > 0 && (categoryButtons[0] as HTMLElement).dataset.accordionReady) {
        return;
      }

      categoryButtons.forEach((btn) => {
        const button = btn as HTMLElement;
        button.dataset.accordionReady = 'true';

        button.addEventListener('click', () => {
          // 延迟执行，等待 Docusaurus 更新 aria-expanded
          setTimeout(() => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
              // 找到所有其他按钮并关闭它们
              categoryButtons.forEach((otherBtn) => {
                const otherButton = otherBtn as HTMLElement;
                if (otherButton !== button) {
                  otherButton.setAttribute('aria-expanded', 'false');
                  // 隐藏子菜单
                  const parentLi = otherButton.closest('li');
                  if (parentLi) {
                    const childUl = parentLi.querySelector(':scope > ul');
                    if (childUl) {
                      (childUl as HTMLElement).style.display = 'none';
                    }
                  }
                }
              });
            }
          }, 50);
        });
      });
    };

    // 立即执行一次
    setupAccordion();

    // 监听 DOM 变化
    const observer = new MutationObserver(() => {
      setupAccordion();
    });

    // 监听整个文档
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
