import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector} from "react-redux";
import avatarImg from "../assets/commentor.png";
import { logout } from '../redux/features/auth/authSlice';
import { useLogoutUserMutation } from '../redux/features/auth/authApi';
import crpitImg from '../assets/CRPIT.png';

const navList = [
    {name:"Početna", path: "/"},
    {name:"INN&TECH Konferencija", path: "/konferencija"},
    {name:"INN&TECH Časopis", path: "/inn-tech-casopis"},
    {name:"O nama", path: "/about-us"},
    //{name:"Partneri i prijatelji", path: "/partneri-i-prijatelji"},
    {name:"Kontakt", path: "/contact-us"},
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user} = useSelector((state) => state.auth);
    console.log(user);
    
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const dispatch = useDispatch();
    const [logoutUser] = useLogoutUserMutation()

    const handleLogout = async () => {
        try {
            await logoutUser().unwrap();
            dispatch(logout())
        } catch (error) {
        }
    }

  return (
    <header className='bg-white py-6 border'>
        
        <nav className='container mx-auto flex justify-between px-5'>
            <a href="/">
                <img src={crpitImg} alt="" className='h-20' />
            </a>
            <ul className='sm:flex hidden items-center gap-8'>
                {
                    navList.map((list, index) => (
                        <li key={index}>
                            <NavLink to={`${list.path}`}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            >{list.name}</NavLink>
                        </li>
                    ))
                }

                {/* Prikaz dugmeta zavisno od toga da li je korisnik prijavljen */}
                {
                    user ? (
                        <li className='flex items-center gap-3'>
                            <img src={avatarImg} alt="" className='size-8'/>
                            {
                                user.role === "admin" && (
                                    <Link to="/dashboard">
                                        <button className='bg-[#1E73BE] hover:bg-blue-600 px-4 py-1.5 text-white rounded-sm'>Kontrolna ploča</button>
                                    </Link>
                                )
                            }
                            {
                                user?.role === "user" && (
                                <li className='flex items-center gap-3'>
                                    <button
                                    onClick={handleLogout}
                                    className='bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm'>
                                    Odjava
                                    </button>
                                </li>
                                )
                            }
                        </li>
                    ) : (
                        <li>
                            <NavLink to="/login">Prijava</NavLink>
                        </li>
                    )
                }       
                
            </ul>

            { /* Otvaranje/zatvaranje menija */ }
            <div className='flex items-center sm:hidden'>
                <button 
                onClick={toggleMenu}
                className='flex items-center px-3 py-4 bg-[#fafafa] roun text-sm text-gray-500 hover:text-gray-900'>
                    {
                        isMenuOpen ? <IoClose className='size-6'/> : <IoMenuSharp className='size-6' />
                    }
                </button>
            </div>
        </nav>

        { /*Stavke menija za mobilne uređaje */ }
        {
            isMenuOpen && (
                <ul className='fixed top-[180px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50'>
                {
                    navList.map((list, index) => (
                        <li className='mt-5 px-4' key={index}>
                            <NavLink 
                            onClick={() => setIsMenuOpen(false)}
                            to={`${list.path}`}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            >{list.name}</NavLink>
                        </li>
                    ))
                }
                <li className='px-4 mt-5'>
                    <NavLink to="/login">Prijava</NavLink>
                </li>
            </ul>
            )
        }
    </header>

  ) 
}

export default Navbar