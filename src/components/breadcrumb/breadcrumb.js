import { Row, Container,Col } from 'react-bootstrap';

import Link from 'next/link';

import styles from './breadcrumb.module.css'


export default function Breadcrumb (){
    return(
        <div className={styles.Breadcrumb_1}>
           
                <Row>
                    <Col lg={12}>
                        <div className={styles.wrapper}>
                            <ul className={styles.lists}>
                                <li className={styles.item}> <Link href='/'>Home</Link></li>
                                <li className={styles.icon}><i class="fa-solid fa-circle"></i></li>
                                <li className={styles.item}>Yachts Camille</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
       
        </div>
    )
}