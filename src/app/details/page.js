"use client"
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import Image from 'next/image';

import { Row, Container,Col,Tabs,Tab } from 'react-bootstrap';

import   './yachts.css'

import img1 from '@/assets/image/product/img2.png'
import img2 from '@/assets/image/product/img3.png'
import img3 from '@/assets/image/product/img4.png'


export default function details(){
    return(
        <section  className="yachts_details">

            {/* container start */}
            <Container>
                 {/* breadcrumb */}
                    <Breadcrumb />
                <div className="page_wrap">
                    <Row className='gx-3'>
                        <Col lg={8}>
                            <div className='left_side'>
                                <div className="thumb_wrap">
                                    <Image src={img1} alt='...' />
                                </div>
                                <div className='details_wrap'>
                                    <div className='title_wrap'>
                                        <h6 className='title'>Romantic Lagoon 380</h6>
                                        <div className='key_wrap'>
                                            <div className='key_item'>
                                                <ul>
                                                    <li>5Star <i class="fa-solid fa-star"></i></li>
                                                    <li>3Cabin <i class="fa-solid fa-layer-group"></i></li>
                                                    <li>19 People <i class="fa-solid fa-person"></i></li>
                                                    <li>30”ft <i class="fa-solid fa-sitemap"></i></li>
                                                </ul>
                                            </div>
                                            <div className='star_wrap'>
                                                <ul>
                                                    <li><i class="fa-solid fa-star"></i></li>
                                                    <li><i class="fa-solid fa-star"></i></li>
                                                    <li><i class="fa-solid fa-star"></i></li>
                                                    <li><i class="fa-solid fa-star"></i></li>
                                                    <li><i class="fa-regular fa-star"></i></li>
                                                </ul>
                                                <p>3.2<span>(530)</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wishlist'>
                                        <button><i class="fa-regular fa-heart"></i> Add to wishlist</button>
                                    </div>
                                </div>

                                {/* tab panel */}

                                <Tabs justify variant='pills' defaultActiveKey="tab-1" className='coustome-tabs mt-3'>
                                    <Tab eventKey="tab-1" title="Description" >
                                        <div className='description'>
                                            <p className='mb-3'>With a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. Tgenerated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section </p>
                                            <p>Maecenas blandit lacinia metus eu tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis volutpat finibus justo sed vehicula. Fusce pellentesque turpis ac molestie auctor. Pellentesque habitant morbi tristique senectus</p>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="tab-2" title="Gallery">
                                        <div>
                                            <h1>asdfghjk</h1>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="tab-3" title="Amenities">
                                        <div>
                                            <h1>asdfghjk</h1>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="tab-4" title="Specification">
                                        <div>
                                            <h1>asdfghjk</h1>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="tab-5" title="Location">
                                        <div>
                                            <h1>asdfghjk</h1>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="tab-6" title="Add review">
                                        <div>
                                            <h1>asdfghjk</h1>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                        <Col lg={4}>
                            {/* thumb box */}
                            <div className="thumb_right">
                                <div className='thumb_wrap'>
                                    <Image src={img2} alt='...' />
                                </div>
                                <div className='thumb_wrap'>
                                    <Image src={img3} alt='...' />
                                </div>
                            </div>
                            {/* user input box */}
                            <div className='right_box'>
                                <div className='price_wrap mb-4'>
                                    <div className='price_item'>
                                        <h6 className='price'>$878</h6>
                                        <p className='discount_price'>$988<span>/Night</span></p>
                                    </div>
                                    <p>Offer Ends: December 29, 2023</p>
                                    <span className='discount_tag'>
                                        -10%
                                    </span>
                                </div>
                                <form>
                                    <div className='form_group mb-3'>
                                        <label className='mb-2'>Check In</label>
                                        <input className='form_control' type='date' />
                                    </div>
                                    <div className='form_group mb-3'>
                                        <label className='mb-2'>Check Out</label>
                                        <input className='form_control' type='date' />
                                    </div>
                                    
                                    <div className='form_group mb-3'>
                                        <label className='mb-2'>Guests</label>
                                        <input className='form_control' type='number' placeholder='Guests'/>
                                    </div>
                                    
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

        </section>
    )
}