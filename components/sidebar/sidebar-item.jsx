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
    this.isActive = this.isActive.bind(this);
    this.state = {
      isHovering: false,
      isActive: false,
    }
  }

  handleMouseEnter() {
    this.setState({ isHovering: true });
  }

  handleMouseLeave() {
    this.setState({ isHovering: false });
  }

  getText() {
    const { link, description, color, activeColor } = this.props;
    return (<span style={{ color: this.state.isHovering ? activeColor : color }}>{description}</span>);
  }

  isActive(index) {
    if (index === this.props.index) return true;
    return false;
  }

  render() {
    const { index, link, description, Icon, color, activeColor, setActive, active } = this.props;
    const className = `sidebar-item ${this.isActive(active) ? 'active' : ''}`;
    return ( // eslint-disable-next-line 
      <li 
        className={className}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={setActive.bind(this, index)}
      >
        <Link to={link}>
          <Icon className="icon" width="50px" height="50px" />
          <div className="text" >
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
  setActive: () => {},
  active: 1,
};

SidebarItem.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  color: PropTypes.string,
  activeColor: PropTypes.string,
  hover: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default SidebarItem;
