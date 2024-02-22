import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaTasks } from 'react-icons/fa';

import './style.css';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <>
      <header className="main-header">
        <div>
          <div className="main-header__brand">
            <NavLink className="nav-link" to="/home">
              LOGO
            </NavLink>
          </div>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <NavLink className="nav-logo" to="/home">
                <FaHome className="nav-icon"></FaHome> HOME
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink className="nav-link" to="/tasks">
                <FaTasks className="nav-icon"></FaTasks> TASKS
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
