import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaArrowRight } from "react-icons/fa";



const Header = () => {
const{user,logOut}=useContext(AuthContext);
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/about'>About</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
       
       {

        user?.email?
       <>
        <li className='font-semibold'><Link to='/orders'>Orders</Link></li>,
        <li className='font-semibold'><Link to='/allServices'>Services</Link></li>
        <button onClick={logOut}>logOut</button>
       </>
        :
        <li className='font-semibold'><Link to='/login'>Login</Link></li>
       }
    </>

    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <span className='text-2xl font-bold text-blue-500'>iDot</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
            <Link to='/login'>
              <button className='btn hover:font-bold gap-2 btn-sm btn-outline text-blue-500 hover:bg-white hover:text-blue-500'>
              Get Start <FaArrowRight></FaArrowRight>
              </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;