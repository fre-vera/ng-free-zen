import { Logo } from '../../features/Logo/Logo.js';
import { Navigation } from '../../features/Navigation/Navigation.js';
import { Lang } from '../../features/Lang/Lang.js';
import { Theme } from '../../features/Theme/Theme.js';
import { Burger } from '../../features/Burger/Burger.js';

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
        ${Burger('burger')}
      </div>
    </div>
  </header>
`;
