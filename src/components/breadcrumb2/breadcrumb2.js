import { Row, Container,Col } from 'react-bootstrap';

import Link from 'next/link';

import styles from './breadecrumb2.module.css'

import imgBg from'@/assets/image/common/breadcrumb.png'

export default function Breadcrumb2 ({title,subTitle}){

console.log(title,subTitle)
    return(
        <div className={styles.Breadcrumb_2} style={{ background: `url(${imgBg.src})` }}>
            <Container fluid>
                <Row>
                   
                        <div className={styles.wrapper}>
                            <div className={styles.item}>
                                <h6 className={styles.name}>{title}</h6>
                                <p className={styles.price}>{subTitle}</p>
                            </div>
                        </div>
                 
                </Row>
            </Container>
        </div>
    )
}