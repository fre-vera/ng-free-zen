/**
 * @function CashbackButton
 * @param {string} text
 * @param {string} className
 * @returns {string} HTML
 */

export const CashbackButton = (text, className) => `
  <button class="${className}"
    type="button"
    id="order-open"
  >
    ${text}
  </button>
`;
