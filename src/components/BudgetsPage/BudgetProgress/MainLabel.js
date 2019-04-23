import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const MainLabel = styled.span`
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontMedium};
  text-align: center;
  align-self: center;
  width: 33.3%;
  font-weight: 500;
  ${media.phone`
    /* font-size: ${props => props.theme.fontSmall}; */
    width: 50%;
  `}
`;

export default MainLabel;
