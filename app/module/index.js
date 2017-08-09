import React from 'react';
import { Route } from 'react-router-dom';

import './module.scss';
import svg from './../../assets/sample.svg';

console.log('svg: ', svg);

class Module extends React.Component {

  render () {
    return (
      <div className="module">
        <h1>Module</h1>
        <img src={svg} alt="image" />
      </div>
    );
  }

}

export default Module;
