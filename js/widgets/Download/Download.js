/**
 * @typedef {import('./types').DownloadData} DownloadData
/**

/**
 * @function Download
 * @param {DownloadData} data
 * @returns {string} HTML
 */

import { Title } from '../../ui/Title/Title.js';
import { LinkImages } from '../../ui/Links/Links.js';


export const Download = (data) => {
  const { title, texts, links, image } = data;
  return `
  <section class="download" id="download">
    <div class="download__wrapper">
      <div class="download__text-block">
        ${Title(title, 'download__title')}
        ${texts.map((text) => `<p class="download__copy">${text}</p>`).join('')}
        ${links.map((link) => `
          <div class="download__links">
            <a class="download__link" href="${link.url}">
              ${`<img src='${LinkImages[link.name]}' alt='${link.name}'>`}
            </a>
          </div>
        `).join('')}
      </div>
      <div class="download__image-block">
        <img src="${image.source}" alt="${image.description}">
      </div>
    </div>
  </section>
  `;
};
