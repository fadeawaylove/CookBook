/**
 * Client-side script to enable accordion behavior in Docusaurus sidebar
 * Only one category can be expanded at a time
 */

import type { Callback } from '@docusaurus/types';

const accordionScript: Callback = () => {
  // Function to setup accordion
  const setupAccordion = () => {
    const sidebar = document.querySelector('.theme-doc-sidebar-container');
    if (!sidebar) return;

    // Find all collapsible category buttons
    const buttons = sidebar.querySelectorAll(
      '.menu__link--sublist-caret, .menu__link--sublist'
    );

    buttons.forEach((button) => {
      const btn = button as HTMLElement;

      // Skip if already initialized
      if (btn.dataset.accordionInitialized === 'true') return;
      btn.dataset.accordionInitialized = 'true';

      // Add click handler
      btn.addEventListener('click', (e) => {
        // Get the parent li element
        const parentLi = btn.closest('.menu__list-item');
        if (!parentLi) return;

        // Check if this category is being expanded
        const isExpanded = btn.getAttribute('aria-expanded') === 'true' ||
                          btn.classList.contains('menu__link--active');

        if (isExpanded) {
          // Close all OTHER categories
          const allCategoryItems = sidebar.querySelectorAll('.menu__list-item');
          allCategoryItems.forEach((item) => {
            const li = item as HTMLElement;
            if (li === parentLi) return; // Skip current

            // Find the button in this li
            const otherBtn = li.querySelector('.menu__link--sublist-caret, .menu__link--sublist') as HTMLElement;
            if (!otherBtn) return;

            // Skip if it's the same button
            if (otherBtn === btn) return;

            // Close this category
            otherBtn.setAttribute('aria-expanded', 'false');
            const childUl = li.querySelector(':scope > .menu__list');
            if (childUl) {
              (childUl as HTMLElement).style.display = 'none';
            }
            li.classList.remove('menu__list-item--expanded');
          });
        }
      });
    });
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAccordion);
  } else {
    setupAccordion();
  }

  // Run on navigation (Docusaurus client-side routing)
  window.addEventListener('hashchange', setupAccordion);
  window.addEventListener('popstate', setupAccordion);

  // Use Docusaurus's navigation events if available
  const originalPushState = history.pushState;
  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    setTimeout(setupAccordion, 100);
  };
};

export default accordionScript;
