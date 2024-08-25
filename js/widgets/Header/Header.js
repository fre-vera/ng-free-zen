import { Logo } from '../../features/Logo/Logo.js';
import { Navigation } from '../../features/Navigation/Navigation.js';

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
        <!-- Lang -->
        <!-- Theme -->
        <!-- Burger -->
      </div>
    </div>
  </header>
`;
