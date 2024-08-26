import { Title } from '../../ui/Title/index.js';

/**
 * @typedef {import('./types.js').WarrantydData} WarrantyData
/**

/**
 * @function Warranty
 * @param {WarrantyData} data
 * @returns {string} HTML
 */

export const Warranty = (data) => {
  const { title, texts, image } = data;
  return `
    <section class="warranty" id="warranty">
      <div class="warranty__wrapper">
        <div class="warranty__text-block">
          ${Title(title, 'warranty__title')}
          ${texts.map((text) => `<p class="warranty__copy">${text}</p>`).join('')}
        </div>
        <div class="warranty__image-block">
          <img src="${image.source}" alt="${image.description}">
        </div>
      </div>
    </section>
  `;
};
