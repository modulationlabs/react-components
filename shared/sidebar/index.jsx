import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

class Sidebar extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseExit = this.handleMouseExit.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.state = {
      hover: false
    }
  }

  componentWillMount() {
    this.setState({ visible: true });
  }

  handleClick() {
    this.setState({ visible: !this.state.visible });
  }

  handleMouseEnter() {
    this.setState({ hover: true });
  }

  handleMouseExit() {
    this.setState({ hover: false });
  }

  render() {
    const className = `sidebar ${this.state.hover ? '' : 'disabled'}`;
    const clonedChildren = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { hover: this.state.hover });
    });
    return (
      <nav 
        className={className} 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseExit}
      >
        <ul>
          {clonedChildren}
        </ul>
      </nav>
    );
  }
}


Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
