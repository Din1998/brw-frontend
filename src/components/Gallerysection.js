import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { RevealWrapper } from  'next-reveal'
import styles from './gallery.module.css'

import img1 from '@/assets/image/gallery/img1.png'
import img2 from '@/assets/image/gallery/img2.png'
import img3 from '@/assets/image/gallery/img3.png'
import img4 from '@/assets/image/gallery/img4.png'
import img5 from '@/assets/image/gallery/img5.png'



export default function GallerySection() {
    return (
        <section className={styles.galley_section}>
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col lg={4}>
                        <div className={styles.section_content}>
                        <RevealWrapper origin='bottom' delay={100}>

                        
                            <h6 className={styles.title}>Explore Our Favorite Summer Charter Destinations</h6>
                            </RevealWrapper>
                            <RevealWrapper origin='bottom' delay={200}>
                            <span className={styles.wave}>
                                <svg
                                    width="49"
                                    height="16"
                                    viewBox="0 0 49 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M42.6805 5.76336C41.4573 5.8152 40.2872 5.14126 39.2767 4.20812C38.7449 3.74155 38.2662 3.17129 37.6812 2.80841C36.9898 2.34184 36.458 2.28999 35.7666 2.75657C35.2347 3.06761 34.8092 3.48234 34.3838 3.89707C33.7987 4.46732 33.1605 4.98574 32.4159 5.34863C30.6609 6.12624 28.959 6.02256 27.3634 4.93389C26.8316 4.57101 26.3529 4.10443 25.8743 3.63786C25.5551 3.32682 25.236 3.06761 24.8637 2.80841C24.2787 2.44552 23.7469 2.39368 23.1618 2.75657C22.63 3.06761 22.2045 3.48234 21.7259 3.89707C21.1408 4.41548 20.609 4.9339 19.9176 5.29678C18.1625 6.22993 16.0883 6.0744 14.546 4.88205C14.0141 4.46732 13.5354 4.00075 13.0036 3.53418C12.6845 3.27498 12.3654 3.01577 12.0463 2.80841C11.5676 2.5492 11.089 2.49736 10.5571 2.75657C10.1848 2.96393 9.81254 3.22314 9.49343 3.53418C8.69566 4.20812 8.00426 4.98574 6.99376 5.45231C5.23867 6.22992 3.53677 6.12624 1.94123 5.03758C1.3562 4.67469 0.877544 4.15628 0.398884 3.68971C-0.132961 3.1713 -0.132961 2.39368 0.398884 1.87527C0.930728 1.35685 1.7285 1.30501 2.26034 1.82342C2.63263 2.18631 3.00492 2.5492 3.4304 2.86025C4.28135 3.48234 5.18549 3.53418 6.08962 2.96393C6.62147 2.65288 7.04694 2.18631 7.5256 1.77158C8.217 1.14949 9.01477 0.579234 9.91891 0.268186C11.1953 -0.198384 12.3654 -0.0428583 13.4823 0.631077C14.0141 0.942124 14.546 1.35685 15.0246 1.82342C15.3969 2.13447 15.716 2.49736 16.0883 2.80841C16.9393 3.53418 17.9498 3.58603 18.9071 2.96393C19.4921 2.60104 19.9176 2.08263 20.4494 1.6679C21.0876 1.09765 21.8322 0.579237 22.63 0.320031C23.8532 -0.14654 25.0233 0.00898281 26.1934 0.631077C26.7784 0.942124 27.257 1.35685 27.7357 1.82342C28.108 2.18631 28.4803 2.5492 28.9058 2.86025C29.7567 3.53418 30.7672 3.58603 31.6714 2.96393C32.2564 2.60104 32.6819 2.08263 33.2137 1.6679C33.8519 1.14949 34.4901 0.682918 35.2347 0.371871C36.5111 -0.146541 37.7876 -0.0428591 38.9576 0.682918C39.5958 1.04581 40.1277 1.51238 40.6063 1.97895C40.8723 2.23815 41.1382 2.49736 41.4573 2.70472C42.521 3.58603 43.6379 3.58603 44.7016 2.70472C45.127 2.34184 45.5525 1.97895 45.9248 1.61606C46.7226 0.942125 47.9458 1.25317 48.1585 2.23815C48.2649 2.65288 48.2117 3.06761 47.8926 3.32682C47.0949 4.10444 46.2971 4.88205 45.2866 5.40047C44.4888 5.60783 43.7442 5.76336 42.6805 5.76336Z"

                                    />
                                    <path
                                        d="M42.6805 15.8051C41.4573 15.8569 40.2872 15.183 39.2767 14.2499C38.7449 13.7833 38.2662 13.213 37.6812 12.8502C36.9898 12.3836 36.458 12.3317 35.7666 12.7983C35.2347 13.1094 34.8092 13.5241 34.3838 13.9388C33.7987 14.5091 33.1605 15.0275 32.4159 15.3904C30.6609 16.168 28.959 16.0643 27.3634 14.9756C26.8316 14.6128 26.3529 14.1462 25.8743 13.6796C25.5551 13.3686 25.236 13.1094 24.8637 12.8502C24.2787 12.4873 23.7469 12.4354 23.1618 12.7983C22.63 13.1094 22.2045 13.5241 21.7259 13.9388C21.1408 14.4572 20.609 14.9756 19.9176 15.3385C18.1625 16.2717 16.0883 16.1161 14.546 14.9238C14.0141 14.5091 13.5354 14.0425 13.0036 13.5759C12.6845 13.3167 12.3654 13.0575 12.0463 12.8502C11.5676 12.5909 11.089 12.5391 10.5571 12.7983C10.1848 13.0057 9.81254 13.2649 9.49343 13.5759C8.69566 14.2499 8.00426 15.0275 6.99376 15.4941C5.23867 16.2717 3.53677 16.168 1.94123 15.0793C1.3562 14.7164 0.877544 14.198 0.398884 13.7315C-0.132961 13.213 -0.132961 12.4354 0.398884 11.917C0.930728 11.3986 1.7285 11.3468 2.26034 11.8652C2.63263 12.2281 3.00492 12.5909 3.4304 12.902C4.28135 13.5241 5.18549 13.5759 6.08962 13.0057C6.62147 12.6946 7.04694 12.2281 7.5256 11.8133C8.217 11.1912 9.01477 10.621 9.91891 10.3099C11.1953 9.84336 12.3654 9.99889 13.4823 10.6728C14.0141 10.9839 14.546 11.3986 15.0246 11.8652C15.3969 12.1762 15.716 12.5391 16.0883 12.8502C16.9393 13.5759 17.9498 13.6278 18.9071 13.0057C19.4921 12.6428 19.9176 12.1244 20.4494 11.7096C21.0876 11.1394 21.8322 10.621 22.63 10.3618C23.8532 9.89521 25.0233 10.0507 26.1934 10.6728C26.7784 10.9839 27.257 11.3986 27.7357 11.8652C28.108 12.2281 28.4803 12.5909 28.9058 12.902C29.7567 13.5759 30.7672 13.6278 31.6714 13.0057C32.2564 12.6428 32.6819 12.1244 33.2137 11.7096C33.8519 11.1912 34.4901 10.7247 35.2347 10.4136C36.5111 9.89521 37.7876 9.99889 38.9576 10.7247C39.5958 11.0876 40.1277 11.5541 40.6063 12.0207C40.8723 12.2799 41.1382 12.5391 41.4573 12.7465C42.521 13.6278 43.6379 13.6278 44.7016 12.7465C45.127 12.3836 45.5525 12.0207 45.9248 11.6578C46.7226 10.9839 47.9458 11.2949 48.1585 12.2799C48.2649 12.6946 48.2117 13.1094 47.8926 13.3686C47.0949 14.1462 46.2971 14.9238 45.2866 15.4422C44.4888 15.6496 43.7442 15.8051 42.6805 15.8051Z"

                                    />
                                </svg>
                            </span>
                            </RevealWrapper>
                        </div>
                    </Col>
                </Row>
                <Row className='gx-2'>
                    <Col lg={2}>
                        <Row className='gy-2'>
                            <Col lg={12}>
                                <Link href='/destination'>
                                    <div className={styles.card_wrap}>
                                        <div className={styles.thumb_wrap1}>
                                            <Image src={img1} />
                                        </div>

                                        <div className={styles.content_wrap}>
                                            <h6 className={styles.title}>Yacht charter Croatia</h6>
                                            <p className={styles.destination}>Starting from $69/night</p>
                                        </div>
                                    </div>
                                </Link>



                            </Col>
                            <Col lg={12}>
                                <Link href='/destination'>
                                    <div className={styles.card_wrap}>
                                        <div className={styles.thumb_wrap1}>
                                            <Image src={img1} />
                                        </div>

                                        <div className={styles.content_wrap}>
                                            <h6 className={styles.title}>Yacht charter Croatia</h6>
                                            <p className={styles.destination}>Starting from $69/night</p>
                                        </div>
                                    </div>

                                </Link>

                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3}>
                        <Row className='gx-2'>
                            <Col>
                                <Link href='/destination'>
                                    <div className={styles.card_wrap}>
                                        <div className={styles.thumb_wrap2}>
                                            <Image src={img2} />
                                        </div>

                                        <div className={styles.content_wrap}>
                                            <h6 className={styles.title}>Yacht charter Croatia</h6>
                                            <p className={styles.destination}>Starting from $69/night</p>
                                        </div>
                                    </div>

                                </Link>

                            </Col>
                        </Row>

                    </Col>
                    <Col lg={7}>
                        <div className={styles.layout_2}>
                            <Row className='gy-4 gx-2 mb-4'>
                                <Col lg={5}>
                                    <Link href='/destination'>
                                        <div className={styles.card_wrap}>
                                            <div className={styles.thumb_wrap}>
                                                <Image src={img3} />
                                            </div>

                                            <div className={styles.content_wrap}>
                                                <h6 className={styles.title}>Yacht charter Croatia</h6>
                                                <p className={styles.destination}>Starting from $69/night</p>
                                            </div>
                                        </div>
                                    </Link>


                                </Col>
                                <Col lg={4}>
                                    <Link href='/destination'>
                                        <div className={styles.card_wrap}>
                                            <div className={styles.thumb_wrap}>
                                                <Image src={img4} />
                                            </div>
                                            <div className={styles.content_wrap}>
                                                <h6 className={styles.title}>Yacht charter Croatia</h6>
                                                <p className={styles.destination}>Starting from $69/night</p>
                                            </div>
                                        </div>

                                    </Link>

                                </Col>
                                <Col lg={3}>
                                    <Link href='/destination'>
                                        <div className={styles.card_wrap}>
                                            <div className={styles.thumb_wrap}>
                                                <Image src={img1} />
                                            </div>
                                            <div className={styles.content_wrap}>
                                                <h6 className={styles.title}>Yacht charter Croatia</h6>
                                                <p className={styles.destination}>Starting from $69/night</p>
                                            </div>
                                        </div>

                                    </Link>


                                </Col>
                            </Row>
                        </div>
                        <div className={styles.layout_3}>
                            <Row className='gy-4 gx-2'>
                                <Col lg={4}>
                                    <Link href='/destination'>
                                        <div className={styles.card_wrap}>
                                            <div className={styles.thumb_wrap}>
                                                <Image src={img5} />
                                            </div>

                                            <div className={styles.content_wrap}>
                                                <h6 className={styles.title}>Yacht charter Croatia</h6>
                                                <p className={styles.destination}>Starting from $69/night</p>
                                            </div>
                                        </div>
                                    </Link>


                                </Col>
                                <Col lg={3}>
                                    <Link href='/destination'>
                                        <div className={styles.card_wrap}>
                                            <div className={styles.thumb_wrap}>
                                                <Image src={img3} />
                                            </div>

                                            <div className={styles.content_wrap}>
                                                <h6 className={styles.title}>Yacht charter Croatia</h6>
                                                <p className={styles.destination}>Starting from $69/night</p>
                                            </div>
                                        </div>
                                    </Link>


                                </Col>
                                <Col lg={5}>
                                    <Link href='/destination'>
                                        <div className={styles.card_wrap}>
                                            <div className={styles.thumb_wrap}>
                                                <Image src={img1} />
                                            </div>

                                            <div className={styles.content_wrap}>
                                                <h6 className={styles.title}>Yacht charter Croatia</h6>
                                                <p className={styles.destination}>Starting from $69/night</p>
                                            </div>
                                        </div>

                                    </Link>


                                </Col>
                            </Row>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}