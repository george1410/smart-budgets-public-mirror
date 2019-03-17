import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon, FeedIcon, SettingsIcon, BudgetsIcon,
} from './Icons';
import Icon from './Icon';
import Logo from './Logo.png';
import NavigationBar from './NavigationBar';
import NavItem from './NavItem';

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
