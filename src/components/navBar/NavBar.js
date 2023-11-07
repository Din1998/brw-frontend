'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Row, Container, Offcanvas } from 'react-bootstrap';

import { useState, useEffect } from "react";

import { usePathname } from 'next/navigation';


import logo from '../../assets/image/logo/Logo.png'
import logo2 from '@/assets/image/logo/f-logo.png'

import styles from './navBar.module.css'
import Login from '../login/login';
import Signin from '../singnin/signin';



export default function NavBar() {
    const path = usePathname()


    const [isClassNameActive, setClassNameActive] = useState(false);

    const [showSignin, setShowSignin] = useState(false);
    const [headerClass, setHeaderClass] = useState('');



    const handleButtonClick = () => {

        setClassNameActive(!isClassNameActive);


    };

    const handleOverlayClick = () => {

        setClassNameActive(false);
    };
    const toggleSignin = () => {
        setShowSignin(!showSignin);
    };



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                setHeaderClass('fixed-header');
            } else {
                setHeaderClass('');
            }

            // Apply the class to the element with id "header"
            const header = document.querySelector('#header');
            if (header) {
                if (window.scrollY >= 80) {
                    header.classList.add('fixed-header');
                } else {
                    header.classList.remove('fixed-header');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className={styles.header_area}>
            <div className={styles.header} id="header">
                <Container fluid>
                    <Row>
                        <div className={styles.header_wrapper}>
                         
                               
                                <div className={styles.header_menu_wrapper}>
                                <i className='fa-sharp fa-solid fa-bars-staggered ham__menu' id="ham_menu" onClick={handleShow}></i>
                                    <div className={styles.logo_wrapper}>
                                        <Link href="/" className={`${styles.normal} ${styles.logo}`} id="normal-logo">
                                            {headerClass !== 'fixed-header' ? (
                                                <Image
                                                    src={logo}
                                                    alt="logo"
                                                />
                                            ) : (
                                                <Image
                                                    src={logo2}
                                                    alt="new logo"
                                                />
                                            )}
                                        </Link>
                                    </div>
                                </div>
                           
                            
                            <div className={styles.menu_wrapper}>
                                <ul className={styles.main_menu}>
                                    <li className={styles.home}><Link className={path === '/' ? styles.active : ''} href="/">Home </Link></li>
                                    <li><Link className={path === '/browse' ? styles.active : ''} href="/browse">Browse</Link></li>
                                    <li><Link className={path === '/about' ? styles.active : ''} href="/about">About</Link></li>
                                    <li><Link className={path === '/contact' ? styles.active : ''} href="/contact">Contact</Link></li>

                                </ul>

                                <div className={styles.menu_right_wrapper}>
                                    <ul>
                                        <li className={styles.login_cta}>

                                            <button onClick={handleButtonClick} className={styles.booknow_btn}>Book Now</button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </Row>

                </Container>
            </div>
            {/* login signin option */}
            <div>
                <div
                    className={`${styles.sidebar_overlay} ${isClassNameActive ? styles.show : ''}`}
                    onClick={handleOverlayClick}
                >

                </div>
                {showSignin ? (
                    <Signin isClassNameActive={isClassNameActive} toggleSignin={toggleSignin} />
                ) : (
                    <Login isClassNameActive={isClassNameActive} toggleSignin={toggleSignin} />
                )}
            </div>


            {/* offcanvas */}
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <div class="logo">
                        <div class="header-menu-wrapper align-items-center d-flex">
                            <div class="logo-wrapper">
                                <a href="index.html" class="normal-logo" id="offcanvas-logo-normal">
                                    <img src="assets/images/logo/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div class="user-info">
                        <div class="user-thumb">
                            <a href="userDashboard.html">
                                <img src="assets/images/user/user3.png" alt="user-thumb" />
                            </a>
                        </div>
                        <a href="userDashboard.html">
                            <h4>Anonymous Alex</h4>
                        </a>
                    </div>
                    <ul class="side-Nav">
                        <li>
                            <a class="active" href="index.html">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="about.html">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="blog.html">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="login.html">
                                Login
                            </a>
                        </li>
                        <li>
                            <button class="login-btn cart-btn">Cart Item</button>
                        </li>
                        <li>
                            <a href="login.html" class="login-btn">Signup</a>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    )
}