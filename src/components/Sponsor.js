
import { Row, Col, Container } from 'react-bootstrap'

import Image from 'next/image'

import styles from './sponsor.module.css'

import img1 from '@/assets/image/common/sponsorLogo1.png'
import img2 from '@/assets/image/common/sponsorLogo2.png'
import img3 from '@/assets/image/common/sponsorLogo3.png'

export default function Sponsor() {
    return(
        <section className={styles.section}>
            <Container>
                <Row>
                    <Col lg={4} className='d-flex justify-content-center'>
                        <div className={styles.sponsor_card}>
                            <div className={styles.thumb_wrap}>
                                <Image src={img1} alt='...'/>
                            </div>
                            <div className={styles.rating_wrap}>
                                <ul>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                                <p>5.0</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='d-flex justify-content-center'>
                        <div className={styles.sponsor_card}>
                            <div className={styles.thumb_wrap}>
                                <Image src={img2} alt='...'/>
                            </div>
                            <div className={styles.rating_wrap}>
                                <ul>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                                <p>5.0</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='d-flex justify-content-center'>
                        <div className={styles.sponsor_card}>
                            <div className={styles.thumb_wrap}>
                                <Image src={img3} alt='...'/>
                            </div>
                            <div className={styles.rating_wrap}>
                                <ul>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                                <p>5.0</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}