import { data as dataFromAPI } from './data.js';
import { handleLogoClick, onThemeClick, handleBurgerClick, handleNavClick } from './handlers.js';
import { App } from './App.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', App(dataFromAPI));

const $logoBtn = document.querySelector('#logo');
const $themeBtn = document.querySelector('#theme');
const $burgerBtn = document.querySelector('#burger');

$logoBtn?.addEventListener('click', handleLogoClick);
$themeBtn?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands));
$burgerBtn?.addEventListener('click', handleBurgerClick);
$burgerBtn?.addEventListener('click', handleNavClick);
