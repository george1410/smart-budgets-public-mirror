import { createGlobalStyle } from 'styled-components';
import media from './util/mediaQueries';
import isiPhoneX from './util/detectiPhoneX';

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

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

const isX = isiPhoneX();

export const theme = {
  primaryBlue: '#0056FF',
  primaryBlueDark: '#052B80',
  primaryBlueShadow: 'rgba(00, 86, 255, 0.1)',
  error: '#E01967',
  errorDark: '#c31e5f',
  errorShadow: 'rgba(224, 25, 103, 0.1)',
  greyLightest: '#959595',
  greyLight: '#767676',
  grey: '#555',
  greyDark: '#222',
  black: '#000',
  offWhite: '#eee',
  white: '#fff',
  font: 'Montserrat',
  fontTiny: '1.2rem',
  fontSmall: '1.8rem',
  fontMedium: '2.5rem',
  borderRadius: '4px',
  shadowCol: 'rgba(0, 0, 0, 0.2)',
  cardShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
  navHeight: isX ? '10rem' : '5rem',
  bottomPad: isX ? '15rem' : '10rem',
  innerHeight: isX ? 'calc(100vh - 15rem)' : 'calc(100vh - 10rem)',
  isX,
};
