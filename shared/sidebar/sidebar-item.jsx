import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './menu.scss';

const SidebarItem = (props) => {
  const { link, description, icon, color } = props;
  return (
    <li className="sidebar-item">
      <Link to={link}>
        <img src={icon} alt={description} /><br />
        <span style={{ color }}>{description}</span>
      </Link>
    </li>
  );
};

SidebarItem.defaultProps = {
  color: '#cc0033',
};

SidebarItem.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SidebarItem;
