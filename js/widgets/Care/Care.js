import { Title } from '../../ui/Title/index.js';

/**
 * @typedef {import('./types.js').СareData} СareData
*/

/**
 * @function Care
 * @param {СareData} data
 * @returns {string} HTML
 */

export const Care = (data) => {
  const { title, texts, image } = data;
  return `
    <section class="care" id="care">
      <div class="care__wrapper">
        <div class="care__text-block">
          ${Title(title, 'care__title')}
          ${texts.map((text) => `<p class="care__copy">${text}</p>`).join('')}
        </div>
        <div class="care__image-block">
          <img src="${image.source}" alt="${image.description}">
        </div>
      </div>
    </section>
  `;
};
