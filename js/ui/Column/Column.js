/**
 * @typedef {import('./types').CategorieData} CategorieData
 */

/**
 *@function Column
 * @param {CategorieData} data
 * @returns {string} HTML
 */

export const Column = (data) => {
  const { name, links } = data;

  return `
    <div class="column">
      <h3 class="column__title">
        ${name}
      </h3>
      <ul class="column__list">
        ${links.map((link) => `
          <li class="column__item">
            <a href="${link.url}">
              ${link.content.type === 'text' ? link.content.data : `<img src="${link.content.data}" alt="${name}">`}
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
};
