import { css } from 'styled-components/macro'

const sizes = {
  phone: 420,
  tablet: 640,
  laptop: 1200,
  desktop: 1800
}

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  const emSize = sizes[label] / 16
  acc[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `
  return acc
}, {})

export default media;