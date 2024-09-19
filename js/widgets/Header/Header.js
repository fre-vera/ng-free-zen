import { Logo, Navigation, Lang, Theme, Burger } from '../../features/index.js';

/**
 * @typedef {import('./types').HeaderData} HeaderData
/**

/**
 * @function Header
 * @param {HeaderData} data
 * @returns {string} HTML
 */

export const Header = (data) => `
  <header class="header">
    <div class="header__wrapper">
      ${Logo('header__logo')}
      <nav class="header__nav">
        ${Navigation(data.navigation)}
      </nav>
      <div class="header__actions">
        ${Lang('header__lang')}
        ${Theme('header__theme')}
        ${Burger('header__burger')}
      </div>
    </div>
  </header>
`;
