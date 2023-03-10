import { Button } from 'bootstrap';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css';
import img from '../../../assets/navbar/nav2.jpg'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.error(error))
    }
    const myButton = new Button();
    const menuItems =
        <>
            <li className='text-white font-semibold'><Link to='/'>Home</Link></li>
            <li className='text-white font-semibold'><Link to='/allservices'>Services</Link></li>
            {user?.uid ?
                <>
                    <li className='text-white font-semibold'><Link to='/myreview'>My Review</Link></li>
                    <li className='text-white font-semibold'><myButton onClick={handleLogOut} variant="outline-secondary">Log Out</myButton></li></>

                :
                <li className='text-white font-semibold'><Link to='/login'>Login</Link></li>
            }

        </>
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="navbar bg-[#2e158d]" style={{ backgroundImage: `url(${img})` }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-white">Dr.AB Siddique</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;