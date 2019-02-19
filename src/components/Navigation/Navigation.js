import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import media from '../../util/mediaQueries';
import {
  OverviewIcon, FeedIcon, SettingsIcon, AchievementIcon,
} from './Icons';

const NavigationBar = styled.nav`
  display: flex;
  background-color: ${props => props.theme.white};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  align-items: center;
  z-index: 2;
  ${media.tablet`
    position: fixed;
    background-color: ${props => props.theme.white};
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);
    justify-content: space-around;
    width: 100%;
    height: 5rem;
    bottom: 0;
  `}
`;

const activeClassName = 'nav-item-active';

const NavItem = styled(NavLink).attrs({
  activeClassName,
})`
  color: ${props => props.theme.grey};
  margin: 1.5rem 4rem;
  font-size: 1.6rem;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;

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
    height: 100%;
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

const Logo = styled.div`
  flex: 2;

  & > a {
    color: ${props => props.theme.primaryBlue};
    text-decoration: none;
    font-weight: 500;
    font-size: ${props => props.theme.fontSmall};
  }

  padding: 0 2rem;
  ${media.tablet`
    display: none;
  `}
`;

const Navigation = () => (
  <NavigationBar>
    <Logo>
      <NavLink to="/overview">
        Smart Budgets
      </NavLink>
    </Logo>
    <NavItem to="/overview">
      <span>Overview</span>
      <OverviewIcon />
    </NavItem>
    <NavItem to="/feed">
      <span>Feed</span>
      <FeedIcon />
    </NavItem>
    <NavItem to="/social">
      <span>Social</span>
      <AchievementIcon />
    </NavItem>
    <NavItem to="/settings">
      <span>Settings</span>
      <SettingsIcon />
    </NavItem>
  </NavigationBar>
);

export default Navigation;
