import React from 'react';
import PropTypes from 'prop-types';

import './menu.scss';


class Sidebar extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.setState({ visible: true });
  }

  handleClick() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const className = `sidebar ${this.state.visible ? '' : 'hide'}`;
    return (
      <nav className={className} onMouseEnter={this.handleClick}>
        <button onClick={this.handleClick}>Close</button>
        <ul>
          {this.props.children}
        </ul>
      </nav>
    );
  }
}


Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
