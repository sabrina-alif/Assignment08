import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-gray-50 shadow-sm text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Apps</a>
        </li>
        <li><a>Installation</a></li>
      </ul>
    </div>
    <img className='h-6' src="../../assets/logo.png" alt="logo" />
    <a className="btn btn-ghost text-xl">HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <Link to='/Apps'>Apps</Link>
      </li>
      <li><a>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-gradient-to-r from-violet-600 to-violet-500 rounded-2xl"><AiFillGithub />Button</a>
  </div>
</div>
    );
};

export default Navbar;