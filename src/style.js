import { createGlobalStyle } from 'styled-components';
import media from './util/mediaQueries';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    ${media.tablet`
      font-size: 56.25%;
    `}
  }

  body {
    font-family: ${props => props.theme.font};
  }
`;

export const theme = {
  primaryBlue: '#0056FF',
  primaryBlueDark: '#052B80',
  error: '#E41317',
  greyLightest: '#ddd',
  greyLight: '#888',
  grey: '#555',
  greyDark: '#222',
  black: '#000',
  offWhite: '#eee',
  white: '#fff',
  font: 'Montserrat',
};
