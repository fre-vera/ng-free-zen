/**
 * @function toggleBurgerAndNav
 * @description Handles burger button clicks and hides/shows menu items
 */

export const toggleBurgerAndNav = () => {
  const $burgerBtn = document.querySelector('#burger');
  const $nav = document.querySelector('#nav');
  if (!$burgerBtn || !$nav) return;
  $burgerBtn.classList.toggle('active');
  $nav.classList.toggle('active');
};
