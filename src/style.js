import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;

    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
      font-size: 56.25%;
    }
  }
`;

export const theme = {
  primaryColor: 'rgb(12, 160, 255)',
  greyLight: '#dbdbdb',
  grey: '#484848',
  greyDark: '#222',
  black: '#000',
  white: '#fff',
};
