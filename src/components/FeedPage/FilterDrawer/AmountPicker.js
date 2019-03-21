import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const AmountPicker = styled.input`
  padding: 4px 8px;
  font-size: 1.6rem;
  border: 1px solid ${props => props.theme.primaryBlue};
  margin-top: 0.5rem;
  width: 10rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.insetShadow};
  outline-color: ${props => props.theme.white};
  ${media.tablet`
    outline-color: -webkit-focus-ring-color;
    font-size: ${props => props.theme.fontSmall};
    padding: 0.5rem 1rem;
    :first-of-type {
      margin-right: 1rem;
    }
  `}
  ${media.phone`
    margin-left: 0.5rem;
  `}
`;

export default AmountPicker;
