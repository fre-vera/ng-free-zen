import { Column, Developer } from '../../ui/index.js';
import { IconFooterLogo } from '../../ui/icons/index.js';

/**
 * @typedef {import('./types').FooterData} FooterData
 */

/**
 * @function Footer
 * @param {FooterData} data
 * @returns {string} HTML
 */

export const Footer = (data) => {
  const { categories, texts, developer } = data;

  return `
    <footer class="footer" id="footer">
      <div class="footer__wrapper">
        <div class="footer__columns">
          ${categories.map((category) => Column(category)).join('')}
        </div>
        <div class="footer__info">
          <a class="footer__logo" href="https://example.com">
            ${IconFooterLogo()}
          </a>
          ${texts.map((text) => `<p class="footer__copy">${text}</p>`).join('')}
          ${Developer(developer)}
        </div>
      </div>
    </footer>
  `;
};
