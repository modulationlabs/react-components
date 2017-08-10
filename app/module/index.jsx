import React from 'react';
import Sidebar, { config } from './../../shared/sidebar';
import { SideBarItem } from './../../shared/sidebar/sidebar-item';

import './module.scss';
import svg from './../../assets/sample.svg';

class Module extends React.Component {
  render () {
    return (
      <div className="module">
        <Sidebar>
          <SidebarItem icon={svg} description="Hello" link="www.google.com" />
          <SidebarItem icon={svg} description="Item2" link="www.cnn.com" />
        </Sidebar>
        <h1>Module</h1>
        <img src={svg} alt="image" />
      </div>
    );
  }
}

export default Module;
