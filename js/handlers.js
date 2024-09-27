import { IconMoon } from './ui/icons/index.js';
import { IconSun } from './ui/icons/index.js';
import { toggleBurgerAndNav } from './utils/index.js';

/**
 * @function handleLogoClick
 * @description Smooth scrolling up
 */

export const handleLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * @typedef {import('./types.js').BrandFromAPI} BrandFromAPI
 */

/**
 * @function onThemeClick
 * @description In an anonymous handler
 * @param {Event} event
 * @param {BrandFromAPI[]} brandsFromAPI
 * @returns {void}
 */

export const onThemeClick = (event, brandsFromAPI) => {
  const $root = document.querySelector('#root');
  const $themeBtn = /** @type { HTMLElement | null } */ (event.currentTarget);
  /** @type {NodeListOf<HTMLImageElement>} */
  const $brandNodes = document.querySelectorAll('[data-id="brand"]');

  if (!$root || !$themeBtn) return;

  $root.classList.toggle('dark')
    ? $root.classList.remove('light')
    : $root.classList.add('light');

  $themeBtn.dataset.theme = $themeBtn.dataset.theme === 'light'
    ? 'dark'
    : 'light';

  $themeBtn.innerHTML = $themeBtn.dataset.theme === 'light'
    ? IconMoon()
    : IconSun();

  $brandNodes.forEach((brand, index) => {
    brand.src = $themeBtn.dataset.theme === 'light'
      ? brandsFromAPI[index].logo.lightSource
      : brandsFromAPI[index].logo.darkSource;
  });
};

/**
 * @function handleBurgerClick
 * @description Handles burger button clicks and hides/shows menu items
 */

export const handleBurgerClick = () => {
  toggleBurgerAndNav();
};

/**
 * @function handleNavClick
 * @description Set scrolling with the header height, hide nav menu
 */

export const handleNavClick = (event) => {
  event.preventDefault();
  const NavItemID = event.target.hash;
  if (!NavItemID) return;
  const $targetElement = document.querySelector(NavItemID);
  if (!$targetElement) return;
  const headerHeight = document.querySelector('header')?.offsetHeight || 0;
  const targetPosition = $targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
  toggleBurgerAndNav();
};
