import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import media from '../../util/mediaQueries';
import {
  HomeIcon, FeedIcon, SettingsIcon, BudgetsIcon,
} from './Icons';
import Logo from './Logo.png';

const NavigationBar = styled.nav`
  display: flex;
  position: fixed;
  background-color: ${props => props.theme.white};
  box-shadow: 0 1px 1px ${props => props.theme.shadowCol};
  align-items: ${props => (props.theme.isX ? 'flex-start' : 'center')};
  width: 100%;
  height: 5rem;
  z-index: 6;
  ${media.tablet`
    position: fixed;
    background-color: ${props => props.theme.white};
    box-shadow: 0 -1px 0 ${props => props.theme.shadowCol};
    justify-content: space-around;
    width: 100%;
    height: ${props => props.theme.navHeight};
    bottom: 0;
  `}
`;

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

const Navigation = () => (
  <NavigationBar>
    <Icon>
      <NavLink to="/home">
        <img alt="logo" src={Logo} />
      </NavLink>
      <NavLink to="/home">
        Smart Budgets
      </NavLink>
    </Icon>
    <NavItem to="/home">
      <span>Home</span>
      <HomeIcon />
    </NavItem>
    <NavItem to="/budgets">
      <span>Budgets</span>
      <BudgetsIcon />
    </NavItem>
    <NavItem to="/feed">
      <span>Feed</span>
      <FeedIcon style={{ transform: 'rotate(90deg)' }} />
    </NavItem>
    <NavItem to="/settings">
      <span>Settings</span>
      <SettingsIcon />
    </NavItem>
  </NavigationBar>
);

export default Navigation;
