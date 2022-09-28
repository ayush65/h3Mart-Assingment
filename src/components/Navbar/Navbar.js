/** @format */

import React from "react";
import { GrSearch } from "react-icons/gr";
import { RiSettings3Fill } from "react-icons/ri";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      {" "}
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-list-name'>Coins</li>
          <li className='nav-list-name'>Exchanges</li>
          <li className='nav-list-name'>Swap</li>
        </ul>

        <div className='nav-image'>
          <img
            src='https://coincap.io/static/logos/black.svg'
            alt='coincap logo'
            
          />
        </div>

        <ul className='nav-list'>
          <li>
            <GrSearch />
          </li>
          <li>
            <RiSettings3Fill />
          </li>

          <li>
            <button className='button'>Connect wallet</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
