import React from 'react';
import PropTypes from 'prop-types';

import './menu.scss';

export const config = [{
  link: 'www.google.com',
  icon: null,
  description: 'hello',
  color: '#fff',
}];

const Sidebar = props => (
  <nav className="sidebar">
    <ul>
      {props.children}
    </ul>
  </nav>
);


export default Sidebar;
