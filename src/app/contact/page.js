

import Breadcrumb2 from '@/components/breadcrumb2/breadcrumb2';
import { Row, Container, Col } from 'react-bootstrap';
import './contact.css'
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import Link from 'next/link';
import Image from 'next/image';



import img from '@/assets/image/common/contact.png'


const contactContent = [
    {
        title: 'Contact',
        subTitle: '',
    },
];

export default function Contact() {
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
                            <iframe src="https://maps.google.com/maps?q={{ lat:44 }},{{lon: -80 }}&hl=es;z=14&amp;output=embed" ></iframe>
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