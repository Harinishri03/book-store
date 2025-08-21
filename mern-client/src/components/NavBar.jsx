import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";


//react-icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import AuthProvider, { AuthContext } from '../contacts/AuthProvider';

export const NavBar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isSticky, setisSticky] = useState(false);

    const {user} =useContext(AuthContext);
    //console.log(user);

    //defining a toggle menu
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setisSticky(true);
            }
            else {
                setisSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    },[])

    //navItems is initialised here
    const navItems = [
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        {link: "Shop", path: "/shop"},
        {link: "Sell your Books", path: "/admin/dashboard"},
        {link: "Blog", path: "/blog"},
        {link: "Contact", path: "/contact"},
    ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-cyan-400" : "" }`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/*insert logo*/}
                <Link to="/" className="text-2xl font-bold text-blue-800 flex items-center">
                <img src={logo} alt="logo" className="h-8 w-8" />
                <span className="ml-1 px-3">Harine's Book Store</span>
                </Link>
            
                {/*nav items for large devices */}

                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-rose-400'>{link}</Link>)
                    }
                </ul>

                {/*button for large devices */}
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-rose-400'/></button>
                </div> 

                {/*menu button for mobile devices*/}

                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>
                        }
                    </button>
                </div>
            </div>  

            {/*ass navitems for small devices like mobile */}  
            <div className={`space-y-4 px-4 mt-16 py-7 bg-cyan-500 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-rose-400'>{link}</Link>)
                }
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        </nav>
    </header>
  )
}

export default NavBar;