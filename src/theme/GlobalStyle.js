import { createGlobalStyle } from 'styled-components/macro'

import AldiOTF from '../assets/fonts/Aldi-Regular.otf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Aldi';
    src: ${AldiOTF} format('opentype');
    font-display: fallback;
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Aldi', sans-serif;
    font-weight: normal;
    letter-spacing: 0.08em;
  }
`

export default GlobalStyle;