import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const DatePicker = styled.input.attrs({
  type: 'date',
})`
  appearance: none;
  height: 3rem;
  padding: 4px 8px;
  font-size: 1.6rem;
  border: 1px solid ${props => props.theme.primaryBlue};
  margin-top: 0.5rem;
  min-width: 14rem;
  width: 90%;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.insetShadow};
  outline-color: ${props => props.theme.white};
  ${media.desktop`
    width: 18rem;
  `}
  ${media.tablet`
    width: auto;
    font-size: ${props => props.theme.fontSmall};
    padding: 0.5rem 1rem;
  `}
  ${media.phone`
    margin-left: 2px;
  `}
`;

export default DatePicker;
