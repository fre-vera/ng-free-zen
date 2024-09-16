import { data as dataFromAPI } from './data.js';
import { Header } from './widgets/Header/Header.js';
import { Download } from './widgets/Download/Download.js';
import { Warranty } from './widgets/Warranty/Warranty.js';
import { Care } from './widgets/Care/Care.js';
import { Cashback } from './widgets/Cashback/Cashback.js';
import { Clients } from './widgets/Сlients/Clients.js';
import { Footer } from './widgets/Footer/index.js';
import { handleLogoClick, onThemeClick } from './handlers.js';

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

$logoBtn?.addEventListener('click', handleLogoClick);
$themeBtn?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands));
