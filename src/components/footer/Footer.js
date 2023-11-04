import { Row, Col, Container } from 'react-bootstrap'
import { useEffect,useState} from "react";
import { animateScroll as scroll } from 'react-scroll';
import Image from 'next/image'
import Link from 'next/link';
import styles from './footer.module.css'

import logo from '@/assets/image/logo/f-logo.png'


import img1 from '@/assets/image/footer/img1.png'
import img2 from '@/assets/image/footer/img2.png'
import img3 from '@/assets/image/footer/img3.png'
import img4 from '@/assets/image/footer/img4.png'
import img5 from '@/assets/image/footer/img5.png'
import img6 from '@/assets/image/footer/img6.png'

export default function Footer(){


 // tap to top btn function
 const [isVisible, setIsVisible] = useState(false);

 const toggleVisibility = () => {
   if (window.pageYOffset > 300) {
     setIsVisible(true);
   } else {
     setIsVisible(false);
   }
 };

 const scrollToTop = () => {
   scroll.scrollToTop();
 };
 
 useEffect(() => {
   window.addEventListener('scroll', toggleVisibility);
   return () => {
     window.removeEventListener('scroll', toggleVisibility);
   };
 }, []);

    return(
        <section className={styles.section}>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className={styles.logo_item}>
                            <div className={styles.logo_wrap}>
                                <Image src={logo} alt='...' />
                            </div>
                            <p className={styles.description}>There are many variations of passages of Lorem Ipsum available, but the majo hsuffered alteration</p>
                            <p className={styles.telNumber}>(878) 7845 8965</p>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className={styles.item}>
                            <h6 className={styles.item_title}>Quick Link</h6>
                            <ul className={styles.menu_wrap}>
                                <li><Link href="/">Home</Link> </li>
                                <li><Link href="/">Best Offer</Link></li>
                                <li><Link href="/">Destinations</Link></li>
                                <li><Link href="/">Booking</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className={styles.item}>
                            <h6 className={styles.item_title}>Popular Yachts</h6>
                            <ul className={styles.menu_wrap}>
                                <li><Link href="/">Nirvana Yacht Charter </Link></li>
                                <li><Link href="/">Serene Yacht Charter</Link></li>
                                <li><Link href="/">mega Yacht Charter</Link></li>
                                <li><Link href="/">Big Fish Yacht Charter</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className={styles.item}>
                            <h6 className={styles.item_title}>Contact Us</h6>
                            <ul className={styles.menu_wrap}>
                                <li>
                                    <h6 className={styles.city}>London </h6>
                                    <Link href="/" className={styles.number}>(487) 8789 5457</Link>
                                    
                                </li>
                                <li>
                                    <h6 className={styles.city}>London </h6>
                                    <Link href="/" className={styles.number}>(487) 8789 5457</Link>
                                    
                                </li>
                               
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={styles.item}>
                            <h6 className={styles.item_title}>instagram</h6>
                            <div className={styles.ins_thumbWrap}>
                                <Row className='gy-2 gx-0'>
                                    <Col lg={4}>
                                        <div className={styles.thumb}>
                                            <Image src={img1} alt='...'/>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={styles.thumb}>
                                            <Image src={img2} alt='...'/>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={styles.thumb}>
                                            <Image src={img3} alt='...'/>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={styles.thumb}>
                                            <Image src={img4} alt='...'/>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={styles.thumb}>
                                            <Image src={img5} alt='...'/>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={styles.thumb}>
                                            <Image src={img6} alt='...'/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
             {/* tap to top scroll  btn*/}
            <div>
                {isVisible && (
                <div className="scroll-top scroll-top-button show" onClick={scrollToTop}>
                    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
                    </svg>
                </div>
                )}
            </div>
        </section>
    )
}