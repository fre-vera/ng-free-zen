import { IconLang } from '../../ui/icons/index.js';

/**
 * @function Lang
 * @param {string} className
 * @returns {string} HTML
 */

export const Lang = (className) => `
  <label class="${className}">
    ${IconLang()}
    <select id="lang">
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  </label>
`;
