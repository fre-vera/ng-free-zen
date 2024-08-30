/**
 * @typedef {import('./types.js').ClientsData} ClientsData
/**

/**
 * @function Clients
 * @param {ClientsData} data
 * @returns {string} HTML
 */

export const Clients = (data) => {
  const { brands } = data;
  // Находим элемент с классом 'app'
  const appElement = document.querySelector('.app');
  // Проверка, есть ли у корневого элемента класс 'dark'
  const isDarkMode = document.documentElement.classList.contains('dark');
  return `
    <section class="clients" id="clients">
      <div class="clients__wrapper">
        <ul class="clients__brands">
          ${brands.map((brand) => `
            <li class="clients__brand">
              <img src='${isDarkMode ? brand.logo.darkSource : brand.logo.lightSource}' alt='${brand.name}'>
            </li>
          `).join('')}
        </ul>
      </div>
    </section>
  `;
};
