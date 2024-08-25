import { Iconlang } from '../../ui/Icons/IconLang/IconLang.js';

/**
 * @function Lang
 * @param {string} className
 * @returns {string} HTML
 */

export const Lang = (className) => `
  <label class="${className}"
  > ${Iconlang()}
    <select id="lang">
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  </label>
`;
