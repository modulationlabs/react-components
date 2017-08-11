import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './menu.scss';

class SidebarItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.getText = this.getText.bind(this);
    this.state = {
      isHovering: false,
      hasFocus: true,
    }
  }

  handleMouseEnter() {
    this.setState({ isHovering: true });
  }

  handleMouseLeave() {
    this.setState({ isHovering: false });
  }
  
  getText() {
    // if (!this.props.hover) return (<span>&nbsp;</span>);
    const { link, description, color, activeColor } = this.props;
    return (<span style={{ color: this.state.isHovering ? activeColor : color }}>{description}</span>);
  }

  render() {
    const { link, description, Icon, color, activeColor } = this.props;
    return (
      <li 
        className="sidebar-item"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Link to={link}>
          <Icon className="icon" width={50} height={50} /> 
          <div className="text" style={{ visibility: this.props.hover ? 'visible' : 'hidden' }}>
            {this.getText()}
          </div>
        </Link>
      </li>
    );
  }

};

SidebarItem.defaultProps = {
  color: '#fff',
  activeColor: '#cc0033',
  hover: false,
};

SidebarItem.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  color: PropTypes.string,
  activeColor: PropTypes.string,
  hover: PropTypes.bool.isRequired,
};

export default SidebarItem;
