import { Row, Col, Container } from 'react-bootstrap'
import styles from './explore2.module.css'


import exploreBg from '@/assets/image/common/exploreBg.png'

export default function Explore2(){
    return(
        <section className={styles.explore_section} >
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className={styles.explore_card} style={{ background: `url(${exploreBg.src})` }}>
                            <h6 className={styles.title}>Explore Our Life with Us</h6>
                            <p className={styles.subtitle}>List your boat an Boatarund and earn money</p>
                            <div>
                                <button className='btn__base'>Get Started</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}