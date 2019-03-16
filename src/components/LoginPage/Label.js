import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Label = styled.label`
  font-size: ${props => props.theme.fontSmall};
  padding: 1rem 1.5rem;
  color: ${props => props.theme.greyLight};
  position: absolute;
  top: -3.7rem;
  cursor: text;
  user-select: none;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  ${media.phone`
    color: ${props => props.theme.grey};
  `}

  /* needs constant height to counter font-size change on focus */
  height: 4rem;
`;

export default Label;
