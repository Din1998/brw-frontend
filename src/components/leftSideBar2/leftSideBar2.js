import { useState } from 'react';
import logo from '@/assets/image/logo/f-logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Sidebar2 = ({activeClass,toggleSidebar}) => {



    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    const sidebarItems = [
        {
            icon: 'fa-user',
            text: 'Profile',
            href: '/dashboard',
        },
        {
            icon: 'fa-address-card',
            text: 'Account',
            href: '#',
            submenuItems: [
                { text: 'Calendar', href: '/dashboard/calender' },
                { text: 'Account Details', href: '/dashboard/profiledetails' },

            ],
        },
        {
            icon: 'fa-ship',
            text: 'Boat Management',
            href: '#',
            submenuItems: [
                { text: 'All Boat', href: '/dashboard/allboats' },
                { text: 'Add Boat', href: '/dashboard/addboat' },
            ],
        },
        {
            icon: 'fa-calendar-check',
            text: 'Manual Reservations',
            href: '/dashboard/menualreservation',
        },
        {
            icon: 'fa-timeline',
            text: 'Affiliate',
            href: '/dashboard/affiliate',
        },
        {
            icon: 'fa-gift',
            text: 'Gift Certificates',
            href: '/dashboard/gift',
        },
        {
            icon: 'fa-ship',
            text: 'Boating Miles',
            href: '/dashboard/miles',
        },
    ];

    return (
        <div className='dashboard'>
            <div className="dashboard_profile">
                <div className="dashboard_profile__details">
                    <div className={`sidebar-menu ${activeClass ? 'show-sidebar' : 'closed'}`}>
                        <span className="sidebar-menu__close" onClick={toggleSidebar} >
                        <i class="fa-solid fa-xmark"></i>
                        </span>
                        <div className="logo-wrapper">
                            <Link href="/" className="sidebar_logo"><Image src={logo} alt='...' /></Link>

                        </div>
                        <ul className="sidebar-menu-list">
                            {sidebarItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`sidebar-menu-list__item${item.submenuItems ? ' has-dropdown' : ''
                                        }${activeDropdown === index ? ' active' : ''
                                        }`}
                                >
                                    <Link
                                        href={`${item.href}`}

                                        className="sidebar-menu-list__link"
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        <span className="icon">
                                            <i className={`fa-solid ${item.icon}`}></i>
                                        </span>
                                        <span className="text">{item.text}</span>
                                    </Link>
                                    {item.submenuItems && activeDropdown === index && (
                                        <div className="sidebar-submenu">
                                            <ul className="sidebar-submenu-list">
                                                {item.submenuItems.map((submenuItem, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className={`sidebar-submenu-list__item${subIndex === 0 ? ' active' : ''
                                                            }`}
                                                    >
                                                        <Link
                                                            href={submenuItem.href}
                                                            className="sidebar-submenu-list__link"
                                                        >
                                                            {submenuItem.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Sidebar2;