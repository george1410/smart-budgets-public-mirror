import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/overview">Overview</Link></li>
      <li><Link to="/feed">Feed</Link></li>
      <li><Link to="/social">Social</Link></li>
      <li><Link to="/settings">Settings</Link></li>

    </ul>
  </nav>
);

export default Navigation;
