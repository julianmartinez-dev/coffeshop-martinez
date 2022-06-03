import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../Cart/CartWidget';
import NavButton from './NavButton';

const Header = () => {
  return (
    <header className="navbar fixed mx-auto bg-transparent/40 z-10  h-32 md:px-32 backdrop-blur-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent/90 rounded-box w-48 lg:w-96 text-slate-300"
          >
            <li>
              <NavButton path="Capsulas" />
            </li>
            <li>
              <NavButton path="Cafe Molido" />
            </li>
            <li>
              <NavButton path="Accesorios" />
            </li>
            <li>
              <NavButton path="Maquinas" />
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/">
          <div className="btn btn-outline ">
            <img
              src="/img/coffee-beans.png"
              alt="imagen logo"
              className="w-8 mr-2"
            />
            <p className="text-2xl text-white">Coffee Shop</p>
          </div>
        </Link>
      </div>
      <div className="navbar-end">
        <CartWidget />
      </div>
    </header>
  );
};

export default Header;
