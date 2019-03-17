import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../util/mediaQueries';

const activeClassName = 'nav-item-active';

const NavItem = styled(NavLink).attrs({
  activeClassName,
})`
  color: ${props => props.theme.grey};
  margin: 1.5rem 2rem;
  font-size: 1.6rem;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  user-select: none;

  &.${activeClassName} {
    color: ${props => props.theme.primaryBlue};
  }

  & > span:hover {
    color: ${props => props.theme.primaryBlue};
  }

  & > svg {
    display: none;
  }

  ${media.tablet`
    flex: 1;
    color: ${props => props.theme.greyLight};
    height: ${props => (props.theme.isX ? 50 : 100)}%;
    margin: 0;

    & > span {
      display: none;
    }

    & > svg {
      display: block
    }

    &.${activeClassName} > svg > g {
      fill: ${props => props.theme.primaryBlue};
    }
  `}
`;

export default NavItem;
