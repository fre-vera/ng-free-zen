import { Header } from './widgets/index.js';
import { Download } from './widgets/index.js';
import { Warranty } from './widgets/index.js';
import { Care } from './widgets/index.js';
import { Cashback } from './widgets/index.js';
import { Clients } from './widgets/index.js';
import { Footer } from './widgets/index.js';

/**
 * @function App
 * @param {import('./types').AppData} data
 * @returns {string} HTML
 */

export const App = (data) => {
  return `
    ${Header(data.primaryInfo)}
    ${Download(data.download)}
    ${Warranty(data.warranty)}
    ${Care(data.care)}
    ${Cashback(data.cashback)}
    ${Clients(data.clients)}
    ${Footer(data.secondaryInfo)}
  `;
};
