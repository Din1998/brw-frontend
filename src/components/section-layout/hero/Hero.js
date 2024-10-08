import { Row, Col, Container } from 'react-bootstrap'

import { RevealWrapper } from  'next-reveal'

import styles from './hero.module.css';


import heroBg from '../../../assets/image/hero/hero-bg.png'

export default function Hero() {
    
    return (
        <section className={styles.hero_section} style={{ background: `url(${heroBg.src})` }}>
            <Container fluid>
                <Row className={`justify-content-center`}>
                    <Col xl={6} lg={10} md={10}>
                        <div className={styles.hero_item_wrap}>
                            <div className={styles.hero_content}>
                            <RevealWrapper origin='bottom' delay={100}>
                                <h1 className={styles.hero_title}>We Charter Professionally Luxury Yachts</h1>
                            </RevealWrapper>
                            <div className={styles.hero_subtitle_wrap}>
                                <RevealWrapper origin='bottom' delay={200}>
                                    <p className={styles.hero_subtitle}>We do our best to make your sailing experience one of the most
                                            memorable in your life.</p>
                                </RevealWrapper>
                            </div>
                            </div>
                            <div className={styles.hero_search_box}>
                            <RevealWrapper origin='bottom' delay={300}>
                                <div className={styles.hero_search_wrap}>
                                    <form>
                                        <input className={styles.hero_input} placeholder='Where are you going?'/>
                                        <button className={styles.hero_input_btn}><i class="fa-solid fa-magnifying-glass"></i> Search</button>
                                    </form>
                                </div>
                            </RevealWrapper>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}