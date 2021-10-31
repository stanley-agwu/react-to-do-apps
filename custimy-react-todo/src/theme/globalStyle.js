import { createGlobalStyle } from 'styled-components/macro';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    font-family: Roboto, sans-serif, serif;
    background: #f8f9fb;
    margin: 10px 0;
    padding: 0 5px;
    list-style: none;
    box-sizing: border-box;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }
`;

const globalTheme = {
  backgroundColor: '#f8f9fb',
  lightGrey: '#d3d7dd',
  darkerGrey: '#b6bdc7',
  darkestGrey: '#2c3139',
  OtherRed: '#f7ccbd',
  darkRed: '#f1a88e',
  normalRed: '#e60000',
  lightRed: '#ff6666',
  blue: '#0080ff',
  white: '#ffffff',
  green: '#04aa6d',
  lightBlue: '#99ccff'
};

export { GlobalStyle, globalTheme };
