import React from 'react';
import Logo from '../../assets/assets/logo.svg'
import { Link } from 'react-router-dom';
const NavBar = () => {
  const NavItems = <>
    <Link to='/' className='mr-5 text-[1.1rem] text-[#151515]'>Home</Link>
    <li className='mr-5 text-[1.1rem] text-[#151515]'>About</li>
    <li className='mr-5 text-[1.1rem] text-[#151515]'>Services</li>
    <li className='mr-5 text-[1.1rem] text-[#151515]'>Blog</li>
    <li className='mr-5 text-[1.1rem] text-[#151515]'>Contact</li>
  </>
  return (
    <div className="navbar  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-full">
            {NavItems}
          </ul>
        </div>
        <Link to='/'><img src={Logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-5">
          {NavItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-error">Appointment</a>
      </div>
    </div>
  );
};

export default NavBar;