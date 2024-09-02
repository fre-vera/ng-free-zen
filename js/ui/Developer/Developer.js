/**
 * @typedef {import('./types').LinkData} LinkData
*/

/**
 * @function Developer
 * @param {LinkData} data
 * @returns {string} HTML
 */

export const Developer = (data) => `
    <div class="footer__dev">
      <a class="footer__dev" href="${data.url}">
        <img src="${data.content.data}"
          alt="Developer" />
      </a>
    </div>
  `;
