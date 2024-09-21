import { data as dataFromAPI } from './data.js';
import {
  Header,
  Download,
  Warranty,
  Care,
  Cashback,
  Clients,
  Footer,
} from './widgets/index.js';
import { handleLogoClick, onThemeClick, onBurgerClick } from './handlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(dataFromAPI.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(dataFromAPI.download));
$root?.insertAdjacentHTML('beforeend', Warranty(dataFromAPI.warranty));
$root?.insertAdjacentHTML('beforeend', Care(dataFromAPI.care));
$root?.insertAdjacentHTML('beforeend', Cashback(dataFromAPI.cashback));
$root?.insertAdjacentHTML('beforeend', Clients(dataFromAPI.clients));
$root?.insertAdjacentHTML('beforeend', Footer(dataFromAPI.secondaryInfo));

const $logoBtn = document.querySelector('#logo');
const $themeBtn = document.querySelector('#theme');
const $burgerBtn = document.querySelector('#burger');

$logoBtn?.addEventListener('click', handleLogoClick);
$themeBtn?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands));
$burgerBtn?.addEventListener('click', onBurgerClick);
