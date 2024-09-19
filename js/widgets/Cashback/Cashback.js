import { Title } from '../../ui/index.js';
import { CashbackButton } from '../../features/index.js';

/**
 * @typedef {import('./types.js').CashbackData} CashbackData
*/

/**
 * @function Cashback
 * @param {CashbackData} data
 * @returns {string} HTML
 */

export const Cashback = (data) => {
  const { title, texts, buttonText } = data;
  return `
    <section class="cashback" id="cashback">
      <div class="cashback__wrapper">
        <div class="cashback__text-block">
          ${Title(title, 'cashback__title')}
          ${texts.map((text) => `<p class="cashback__copy">${text}</p>`).join('')}
          ${CashbackButton('cashback__button', buttonText)}
        </div>
      </div>
    </section>
  `;
};
