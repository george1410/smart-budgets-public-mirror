import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Title = styled.div`
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.white};
  margin-bottom: 1rem;
  user-select: none;
  ${media.tablet`
    color: ${props => props.theme.black};
    display: none;
  `}
`;

export default Title;
