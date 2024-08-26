import { IconTheme } from '../../ui/Icons/IconTheme/IconTheme.js';

/**
 * @function Theme
 * @param {string} className
 * @returns {string} HTML
 */

export const Theme = (className) => `
  <button class="${className}"
    type="button"
    id="theme"
  >
    ${IconTheme()}
  </button>
`;
