'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Row, Container } from 'react-bootstrap';


import logo from '@/assets/image/logo/f-logo.png'

import styles from './navBar2.module.css'

export default function NavBar2() {
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
                                    <li><Link href="/browse">Yachts</Link></li>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/">Blog</Link></li>
                                    <li><Link href="/">Contact</Link></li>
                                </ul>

                                <div className={styles.menu_right_wrapper}>
                                    <ul>
                                        <li className={styles.login_cta}>
                                            <Link href="/" className={styles.booknow_btn}>Book Now</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}