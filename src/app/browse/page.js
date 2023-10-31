"use client"
import Breadcrumb from '@/components/breadcrumb/breadcrumb';


import { Row, Container,Col} from 'react-bootstrap';

import   '../details/yachts.css'
import BaseCard from '@/components/baseCard/BaseCard';
import Pagination from '@/components/pagination/pagination';



export default function brows(){



    return(
        <section  className="yachts_details">

            {/* container start */}
            <Container fluid>
                {/* breadcrumb */}
                <Breadcrumb />
                
                    <Row className='gx-3'>
                        <Col lg={6}>
                           <Row className='gy-4'>
                                <Col lg={4}>
                                    <BaseCard />
                                </Col>
                                <Col lg={4}>
                                    <BaseCard />
                                </Col>
                                <Col lg={4}>
                                    <BaseCard />
                                </Col>
                                <Col lg={4}>
                                    <BaseCard />
                                </Col>
                                <Col lg={4}>
                                    <BaseCard />
                                </Col>
                                <Col lg={4}>
                                    <BaseCard />
                                </Col>
                                <Col lg={4}>
                                    <BaseCard />
                                </Col>
                                <Col lg={4}>
                                    <BaseCard />
                                </Col>
                                <Col lg={4}>
                                    <BaseCard />
                                </Col>
                           </Row>
                      
                        </Col>
                        <Col lg={6}>
                          
                            <div class="google-map-wrap">
                                <iframe src="https://maps.google.com/maps?q={{ @$contact->data_values->latitude }},{{ @$contact->data_values->longitude }}&hl=es;z=14&amp;output=embed" ></iframe>
                            </div>
                          
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                        <Pagination />
                        </Col>
                    </Row>
                
            </Container>

        </section>
    )
}