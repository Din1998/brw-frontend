import { useState } from 'react';

import logo from '@/assets/image/logo/f-logo.png'
import Image from 'next/image';
import Link from 'next/link';

export default function LeftSideBar() {
    
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

  
    const toggleMenu = (menuNumber) => {
      switch (menuNumber) {
        case 1:
            setIsOpen1(!isOpen1);
            break;
        case 2:
            setIsOpen2(!isOpen2);
            break;
        case 3:
            setIsOpen3(!isOpen3);
            break;
        case 4:
            setIsOpen4(!isOpen4);
            break;
        case 5:
            setIsOpen5(!isOpen5);
            break;
        
        default:
          break;
      }
    };

    return (
        <div className="dashboard">

            <div className="dashboard_profile">
                <div className="dashboard_profile__details">
                    <div className="sidebar-menu">
                        <span className="sidebar-menu__close"><i className="las la-times"></i></span>
                        <div className="logo-wrapper">
                            <Link href="/" className="sidebar_logo"><Image src={logo} alt='...' /></Link>
                           
                        </div>
                        <ul className="sidebar-menu-list">
                            
                            <li className={isOpen1 ? "openSubmenu": 'sidebar-menu-list__item openSubmenu'}>
                                <Link href='/dashboard'>
                                    <div className="sidebar-menu-list__link has-dropdown" onClick={() => toggleMenu(1)}>
                                        <span className="icon"><i class="fa-regular fa-user"></i></span>
                                        <span className="text">Profile</span>
                                    </div>
                                </Link>
                                
                                
                            </li>

                            <li className={isOpen2 ? "openSubmenu": 'sidebar-menu-list__item'}>
                                <div className="sidebar-menu-list__link has-dropdown" onClick={() => toggleMenu(2)}>
                                    <span className="icon"><i class="fa-regular fa-address-card"></i></span>
                                    <span className="text">Account</span>
                                </div>
                               
                                <div className='sidebar-submenu'>
                                    <ul className="sidebar-submenu-list">
                                        <li className="sidebar-submenu-list__item active">
                                            <Link href='/dashboard/calender' className="sidebar-submenu-list__link">Calendar</Link>
                                            
                                        </li>
                                        <li className="sidebar-submenu-list__item">
                                            <Link href='/dashboard/details' className="sidebar-submenu-list__link">Account Details</Link>
                                       
                                        </li>
                                       
                                    </ul>
                                </div>
                            </li>

                            <li className={isOpen3 ? "openSubmenu": 'sidebar-menu-list__item'}>
                                <div className="sidebar-menu-list__link has-dropdown" onClick={() => toggleMenu(3)}>
                                    <span className="icon"><i class="fa-solid fa-ship"></i></span>
                                    <span className="text">Boat Management</span>
                                </div>
                               
                                <div className='sidebar-submenu'>
                                    <ul className="sidebar-submenu-list">
                                        <li className="sidebar-submenu-list__item active">
                                            <Link href='/dashboard/allboats' className="sidebar-submenu-list__link">All Boat</Link>
                                        </li>
                                        <li className="sidebar-submenu-list__item">
                                        <Link href='/dashboard/addboat' className="sidebar-submenu-list__link">Add Boat</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className={isOpen4 ? "openSubmenu": 'sidebar-menu-list__item'}>
                                <div className="sidebar-menu-list__link has-dropdown" onClick={() => toggleMenu(4)}>
                                    <span className="icon"><i class="fa-regular fa-calendar-check"></i></span>
                                    <span className="text">Manual Reservations</span>
                                </div>
                               
                                <div className='sidebar-submenu'>
                                    <ul className="sidebar-submenu-list">
                                        <li className="sidebar-submenu-list__item active">
                                            <a href="all-exchange.html" className="sidebar-submenu-list__link">All Exchange</a>
                                        </li>
                                        <li className="sidebar-submenu-list__item">
                                            <a href="all-exchange.html" className="sidebar-submenu-list__link">Approved Exchange</a>
                                        </li>
                                        <li className="sidebar-submenu-list__item active">
                                            <a href="all-exchange.html" className="sidebar-submenu-list__link">Refunded Exchange</a>
                                        </li>
                                        <li className="sidebar-submenu-list__item">
                                            <a href="all-exchange.html" className="sidebar-submenu-list__link">Canceled Exchange</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className={isOpen5 ? "openSubmenu": 'sidebar-menu-list__item'}>
                                <div className="sidebar-menu-list__link has-dropdown" onClick={() => toggleMenu(5)}>
                                    <span className="icon"><i class="fa-solid fa-timeline"></i></span>
                                    <span className="text">Affiliate</span>
                                </div>
                               
                                <div className='sidebar-submenu'>
                                    <ul className="sidebar-submenu-list">
                                        <li className="sidebar-submenu-list__item active">
                                            <a href="all-exchange.html" className="sidebar-submenu-list__link">All Exchange</a>
                                        </li>
                                        <li className="sidebar-submenu-list__item">
                                            <a href="all-exchange.html" className="sidebar-submenu-list__link">Approved Exchange</a>
                                        </li>
                                        <li className="sidebar-submenu-list__item active">
                                            <a href="all-exchange.html" className="sidebar-submenu-list__link">Refunded Exchange</a>
                                        </li>
                                        <li className="sidebar-submenu-list__item">
                                            <a href="all-exchange.html" className="sidebar-submenu-list__link">Canceled Exchange</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        
                            <li className="sidebar-menu-list__item">
                                <a href="login.html" className="sidebar-menu-list__link">
                                    <span className="icon"><i class="fa-solid fa-gift"></i></span>
                                    <span className="text">Gift Certificates</span>
                                </a>
                            </li>
                            <li className="sidebar-menu-list__item">
                                <a href="login.html" className="sidebar-menu-list__link">
                                    <span className="icon"><i class="fa-solid fa-ship"></i></span>
                                    <span className="text">Boating Mils</span>
                                </a>
                            </li>
                           
                            <li className="sidebar-menu-list__item">
                                <a href="login.html" className="sidebar-menu-list__link">
                                    <span className="icon"><i className="fa-solid fa-right-from-bracket"></i></span>
                                    <span className="text">Log Out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}