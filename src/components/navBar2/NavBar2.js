'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Row, Container } from 'react-bootstrap';

import { useState } from 'react';

import Login from '../login/login';
import Signin from '../singnin/signin';



import logo from '@/assets/image/logo/f-logo.png'

import styles from './navBar2.module.css'

export default function NavBar2() {

    
    const [isClassNameActive, setClassNameActive] = useState(false);

    const [showSignin, setShowSignin] = useState(false);



    const handleButtonClick = () => {

        setClassNameActive(!isClassNameActive);


    };

    const handleOverlayClick = () => {

        setClassNameActive(false);
    };
    const toggleSignin = () => {
        setShowSignin(!showSignin);
      };
   

    return (
        <div className={styles.header_area}>
            <div className={styles.header} id="header">
                <Container fluid>
                    <Row>
                        <div className={styles.header_wrapper}>
                            {/* <i className={fa-sharp fa-solid fa-bars-staggered ham__menu} data-bs-toggle="offcanvas"
            data-bs-target={#offcanvasExample} aria-controls="offcanvasExample"></i> */}


                            <div className={styles.header_menu_wrapper}>
                                <div className={styles.logo_wrapper}>
                                    <Link href="/" className={styles.normal - logo} id="normal-logo">
                                        <Image
                                            src={logo}
                                            alt='logo'
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.menu_wrapper}>
                                <ul className={styles.main_menu}>
                                    <li className={styles.home}><Link className={styles.active} href="/">Home </Link></li>
                                    <li><Link href="/browse">Browse</Link></li>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
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
        </div>
    )
}