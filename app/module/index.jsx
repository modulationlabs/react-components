import React from 'react';
import Sidebar from './../../shared/sidebar';
import SidebarItem from './../../shared/sidebar/sidebar-item';

import './module.scss';
import svg from './../../assets/sample.svg';

const Module = () =>
  (
    <div className="module">
      <Sidebar>
        <SidebarItem Icon={svg} description="Hello" link="www.google.com" />
        <SidebarItem Icon={svg} description="Item2" link="www.cnn.com" />
        <SidebarItem Icon={svg} description="Hello" link="www.google.com" />
        <SidebarItem Icon={svg} description="Item2" link="www.cnn.com" />
      </Sidebar>
      <h1>Module</h1>
    </div>
  );

export default Module;
