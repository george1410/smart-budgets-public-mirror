import { createGlobalStyle } from 'styled-components';
import media from './util/mediaQueries';

export const GlobalStyle = createGlobalStyle`
  html {
    /* makes 1rem equal to 10px, 62.5% of 16px(default) */
    font-size: 62.5%;
    ${media.tablet`
      /* makes 1rem equal to 8px */
      font-size: 56.25%;
    `}
  }

  body {
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.black};
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
  fontTiny: '1.2rem',
  fontSmall: '1.8rem',
  fontMedium: '2.5rem',
};
