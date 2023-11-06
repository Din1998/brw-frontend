import { Row, Col, Container } from 'react-bootstrap'
import { RevealWrapper } from 'next-reveal'
import styles from './explore2.module.css'


import exploreBg from '@/assets/image/common/exploreBg.png'

export default function Explore2() {
    return (
        <section className={styles.explore_section} >
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className={styles.explore_card} style={{ background: `url(${exploreBg.src})` }}>
                            <RevealWrapper origin='bottom' delay={100}>
                                <h6 className={styles.title}>Explore Our Life with Us</h6>
                            </RevealWrapper>
                            <RevealWrapper origin='bottom' delay={200}>
                                <p className={styles.subtitle}>List your boat an Boatarund and earn money</p>
                            </RevealWrapper>
                            <RevealWrapper origin='bottom' delay={300}>
                                <div>
                                    <button className='btn__base'>Get Started</button>
                                </div>
                            </RevealWrapper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}