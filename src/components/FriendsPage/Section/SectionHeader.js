import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const SectionHeader = styled.span`
  width: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  background-color: ${props => props.theme.offWhite};
  background-color: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontSmall};
  font-weight: 500;
  margin: 1rem 0;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.cardShadow};
  ${media.phone`
    box-shadow: none;
    border: 1px solid ${props => props.theme.white};
    background-color: ${props => props.theme.white};
    border-radius: 0;
    width: 100%;
  `}
`;

export default SectionHeader;
