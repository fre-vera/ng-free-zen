import { Iconlogo } from '../../ui/Icons/IconLogo/IconLogo.js';

/**
 * @function Logo
 * @param {string} className
 * @returns {string} HTML
 */

export const Logo = (className) => `
  <button class="${className}"
    type="button"
    id="logo"
  >
    ${Iconlogo()}
  </button>
`;
