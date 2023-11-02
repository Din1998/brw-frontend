
"use client"
import Breadcrumb2 from '@/components/breadcrumb2/breadcrumb2';
import { Row, Container, Col } from 'react-bootstrap';
import './contact.css'
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import ReactMapGL from 'react-map-gl';

import 'mapbox-gl/src/css/mapbox-gl.css'




import React from 'react';


import img from '@/assets/image/common/contact.png'


const contactContent = [
    {
        title: 'Contact',
        subTitle: '',
    },
];

export default function Contact() {


    const [viewport, setViewport] = React.useState({
        width: '100%',
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
      });
    
    return (
        <>

            {/* page banner */}
            <div>
                {contactContent.map((data, index) => (
                    <div key={index}>
                        <Breadcrumb2 title={data.title} subTitle={data.subTitle} />
                    </div>
                ))}
            </div>

            <Container>
                <Row>
                    <Col lg={12}>
                        <Breadcrumb />
                        <div className="map_wrap">
                          
                            <ReactMapGL
                                {...viewport}
                                mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}

                                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                            ></ReactMapGL>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className='contact_info_wrap'>
                            <div className='icon_wrap'>
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div className='content_wrap'>
                                <h6 className='title'>Office Location</h6>
                                <p className='subtitle'>517 Washington Ave. Manchester, Kentucky 39295</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='contact_info_wrap'>
                            <div className='icon_wrap'>
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div className='content_wrap'>
                                <h6 className='title'>Phone Number</h6>
                                <Link href="#">(589) 8789 5489, (589) 8789 5489</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='contact_info_wrap'>
                            <div className='icon_wrap'>
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div className='content_wrap'>
                                <h6 className='title'>Office Location</h6>
                                <Link href="#">demo123@gmail.com
                                    test123@gmail.com</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='get_intouch'>
                    <Row>
                        <Col lg={6}>
                            <div className='contact_form_wrap'>
                                <form>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='form_group mb-4'>
                                                <label className='mb-3'>Name</label>
                                                <input className='form_control' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form_group'>
                                                <label className='mb-3'>Name</label>
                                                <input className='form_control' />
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className='form_group mb-4'>
                                        <label className='mb-3'>Message</label>
                                        <textarea className='form_control' />
                                    </div>
                                    <button className='btn__base'>Send Message</button>
                                </form>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='thumb_wrap'>
                                <Image src={img} />
                            </div>
                        </Col>


                    </Row>
                </div>
                
            </Container>


        </>
    )
}