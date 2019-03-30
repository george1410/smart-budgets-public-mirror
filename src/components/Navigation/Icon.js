import styled from 'styled-components';
import media from '../../util/mediaQueries';


const Icon = styled.div`
  display: flex;
  align-items: center;
  flex: 2;

  & > a {
    color: ${props => props.theme.primaryBlue};
    text-decoration: none;
    font-weight: 500;
    font-size: ${props => props.theme.fontSmall};
  }

  & > a > img {
    height: 4.5rem;
    width: 4.5rem;
  }

  padding: 0 2rem;
  ${media.tablet`
    display: none;
  `}
`;

export default Icon;
