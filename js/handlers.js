import { IconMoon } from './ui/icons/index.js';
import { IconSun } from './ui/icons/index.js';

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
 * @typedef {import('./widgets/Сlients/types.js').BrandFromAPI} BrandFromAPI
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
 * @function onBurgerClick
 * @description Handles burger button clicks and hides/shows menu items
 */

export const onBurgerClick = () => {
  const $burgerBtn = document.querySelector('#burger');
  const $nav = document.querySelector('#nav');
  if (!$burgerBtn || !$nav) return;
  $burgerBtn.classList.toggle('active');
  $nav.classList.toggle('active');

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      $nav.classList.remove('active');
      $burgerBtn.classList.remove('active');
      const targetElement = document.querySelector(link.getAttribute('href') || '');
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
};
