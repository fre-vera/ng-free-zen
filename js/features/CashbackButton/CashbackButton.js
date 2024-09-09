/**
 * @function CashbackButton
 * @param {string} className
 * @param {string} text
 * @returns {string} HTML
 */

export const CashbackButton = (className, text) => `
  <button class="${className}"
    type="button"
    id="order-open"
  >
    ${text}
  </button>
`;
