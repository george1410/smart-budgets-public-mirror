import styled from 'styled-components';
import media from '../../../util/mediaQueries';

export const InputLine = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  outline-color: white;
  border: 1px solid ${props => props.theme.primaryBlue};
  width: 100%;
  padding: 4px 8px;
  font-size: 1.6rem;
  border-radius: 0;
  line-height: normal;

  ::placeholder {
    color: ${props => props.theme.grey};
    opacity: 1;
  }

  ${media.desktop`
    width: 15rem;
  `}
  ${media.tablet`
    margin-left: 4rem;
    padding: 1rem 1.5rem;
    border: 1px solid ${props => props.theme.primaryBlue};
    font-size: ${props => props.theme.fontSmall};
    width: 80%;
    max-width: 40rem;
    outline-color: -webkit-focus-ring-color;
    ::placeholder {
      color: ${props => props.theme.greyLight};
      opacity: 1;
    }
  `}
`;
