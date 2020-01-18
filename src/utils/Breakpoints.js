import { css } from 'styled-components'

const size = {
    sm: 575,
    smish: 745,
    md: 960,
    lg: 1140
}

export const above = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => `
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
    return acc;
}, {})

export const below = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => `
    @media (max-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
    return acc;
}, {})