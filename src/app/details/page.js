"use client"
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import Image from 'next/image';

import { Row, Container, Col, Tabs, Tab } from 'react-bootstrap';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


import 'glightbox/dist/css/glightbox.css';

import './yachts.css'

import img1 from '@/assets/image/product/img2.png'
import img2 from '@/assets/image/product/img3.png'
import img3 from '@/assets/image/product/img4.png'
import img4 from '@/assets/image/product/img1.png'
import img5 from '@/assets/image/product/img5.png'


import userImg1 from '@/assets/image/user/user1.png'
import userImg2 from '@/assets/image/user/user2.png'
import userImg3 from '@/assets/image/user/user3.png'


import Review from '@/components/productReciew/review';
import Pagination from '@/components/pagination/pagination';
import GLightbox from 'glightbox';


import Link from 'next/link';
import { DateRange } from 'react-date-range';
import { useState,useEffect } from 'react'



export default function Details() {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    useEffect(() => {
        // Check if we are on the client side (browser)
        if (typeof window !== 'undefined') {
          // Code that relies on the `window` object
          import('glightbox').then((GLightbox) => {
            const lightbox = GLightbox.default({
              selector: '.glightbox',
            });
            
            return () => {
              // Cleanup code, if needed
              lightbox.destroy();
            };
          });
        }
      }, []);

    return (
        <section className="yachts_details">

            {/* container start */}
            <Container>
                {/* breadcrumb */}
                <Breadcrumb />
                <div className="page_wrap">
                    <Row>
                        <Col lg={8}>

                            <div className="main_thumb_wrap">
                                <a href='https://boat-rental.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg2.ff5bc929.png&w=1080&q=75' className="glightbox">
                                 <Image src={img1} alt='...' />
                                </a>
                            </div>
                        </Col>
                        <Col lg={4}>

                        <div className="thumb_right">
                                <div className='thumb_wrap'>
                                <a href='https://boat-rental.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg2.ff5bc929.png&w=1080&q=75' className="glightbox">
                                    <Image src={img2} alt='...' />
                                </a>
                                </div>
                                <div className='thumb_wrap'>
                                    <a href='https://boat-rental.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg2.ff5bc929.png&w=1080&q=75' className="glightbox">
                                    <Image src={img3} alt='...' />
                                    </a>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='gx-3'>
                        <Col lg={8}>
                            <div className='left_side'>
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
                                <Tabs variant='pills' defaultActiveKey="tab-1" className='coustome-tabs mt-3'>
                                    <Tab eventKey="tab-1" title="Description" >
                                        {/* discription */}
                                        <div className='description mb-4'>
                                            <p className='mb-3'>With a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. Tgenerated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section </p>
                                           
                                        </div>
                                    
                                        {/* Amenities */}
                                        <div className='amenities_wrap mb-4'>
                                            <h6 className='title'>Amenities</h6>

                                            <div className='amenities_item_box'>
                                                <Row>
                                                    <Col lg={4}>
                                                        <div className='item_wrap'>
                                                            <ul>
                                                                <li><i class="fa-solid fa-fan"></i> <p>Air conditioning</p></li>
                                                                <li><i class="fa-solid fa-utensils"></i> <p>Cooker</p></li>
                                                                <li><i class="fa-solid fa-hot-tub-person"></i> <p>Heating</p></li>
                                                                <li><i class="fa-solid fa-volume-high"></i><p>Audio system</p></li>
                                                                <li><i class="fa-solid fa-headphones-simple"></i><p>Inside speakers</p></li>

                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className='item_wrap'>
                                                            <ul>
                                                                <li><i class="fa-solid fa-wifi"></i><p>Free Wifi</p></li>
                                                                <li><i class="fa-solid fa-tv"></i><p>Flat screen TV</p></li>
                                                                <li><i class="fa-solid fa-shower"></i> <p>Outside shower</p></li>
                                                                <li><i class="fa-solid fa-stroopwafel"></i> <p>BBQ</p></li>
                                                                <li><i class="fa-solid fa-utensils"></i><p>Kitchen utensils</p></li>

                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className='item_wrap'>
                                                            <ul>
                                                                <li><i class="fa-solid fa-mug-hot"></i> <p>Coffee machine</p></li>
                                                                <li><i class="fa-regular fa-snowflake"></i> <p>Fridge</p></li>
                                                                <li><i class="fa-solid fa-satellite-dish"></i> <p>Radar</p></li>
                                                                <li><i class="fa-solid fa-charging-station"></i> <p>Generator</p></li>
                                                                <li><i class="fa-solid fa-shirt"></i> <p>Towels</p></li>

                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>

                                            </div>
                                        </div>
                                        {/* Specification */}
                                        <div className='specification_wrap mb-4'>
                                            <h6 className='title'>Specification</h6>
                                            <div className='specification_item_box'>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className='item_wrap'>
                                                            <ul>
                                                                <li>
                                                                    <p className='title'><span><i class="fa-regular fa-calendar"></i></span> Year:</p>
                                                                    <p className='info'>2019</p>
                                                                </li>
                                                                <li>
                                                                    <p className='title'><span><i class="fa-solid fa-up-right-and-down-left-from-center"></i></span> Length:</p>
                                                                    <p className='info'>39ft</p>
                                                                </li>
                                                                <li>
                                                                    <p className='title'><span><i class="fa-solid fa-bed"></i></span> Berths:</p>
                                                                    <p className='info'>04</p>
                                                                </li>
                                                                <li>
                                                                    <p className='title'><span><i class="fa-solid fa-door-open"></i></span> Double Cabins:</p>
                                                                    <p className='info'>16</p>
                                                                </li>
                                                                <li>
                                                                    <p className='title'><span><i class="fa-solid fa-toilet"></i></span> Toilets:</p>
                                                                    <p className='info'>8</p>
                                                                </li>
                                                                <li>
                                                                    <p className='title'><span><i class="fa-solid fa-door-open"></i></span> Single cabins:</p>
                                                                    <p className='info'>12</p>
                                                                </li>
                                                                <li>
                                                                    <p className='title'><span><i class="fa-solid fa-sailboat"></i></span> Type of mainsail</p>
                                                                    <p className='info'>Classic mainsail</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className='thumb_wrap'>
                                                            <Image src={img5} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                        {/* location */}
                                        <div className='location_wrap mb-4'>
                                            <h6 className='title'>Yacht pick-up address</h6>
                                            <Row>
                                                <Col lg={12}>
                                                    <div className='map_wrap'>
                                                        <iframe src="https://maps.google.com/maps?q={{ @$contact->data_values->latitude }},{{ @$contact->data_values->longitude }}&hl=es;z=14&amp;output=embed" ></iframe>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        {/* calender */}
                                        <div>
                                            <h6>Boat Availability</h6>
                                            <Row>
                                                <Col lg={8}>
                                                    <DateRange
                                                        editableDateInputs={true}
                                                        onChange={item => setState([item.selection])}
                                                        moveRangeOnFirstSelection={false}
                                                        ranges={state}
                                                    />
                                                </Col>
                                            </Row>
                                        </div>

                                    </Tab>
                                    <Tab eventKey="tab-2" title="Add review">
                                        <div className='review_box_wrap pt-4'>
                                            <h6 className='title'>Review</h6>

                                            <Row className='gy-4'>
                                                <Col lg={12}>
                                                    <Review img={userImg1} />
                                                </Col>
                                                <Col lg={12}>
                                                    <Review img={userImg2} />
                                                </Col>
                                                <Col lg={12}>
                                                    <Review img={userImg3} />
                                                </Col>
                                            </Row>

                                            <Row className='py-3'>
                                                <Col lg={12} className='d-flex justify-content-end'>
                                                    <Pagination />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <div className='add_review'>
                                                        <h6 className='title'>Add a review</h6>
                                                        <p className='subtitle'>You must be <Link href='/'> logged in</Link> to post a comment.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                        <Col lg={4}>
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

                                    <div className='form_group mb-5'>
                                        <label className='mb-2'>Guests</label>
                                        <input className='form_control' type='number' placeholder='Guests' />
                                    </div>
                                    <div className='extra_service'>
                                        <h6 className='mb-4'>Add Extra Services <span>(optional)</span></h6>
                                        <div className='extra_item mb-2'>
                                            <div class="form_check mb-20">
                                                <input class="form_check_input" name="categories" type="checkbox" value="1" id="categories" />
                                                <label class="form_check_label" for="chekbox-0">
                                                    Safety net
                                                </label>
                                            </div>
                                            <h6 className='item_name'>$145.00 <span>per day</span></h6>
                                        </div>
                                        <div className='extra_item mb-2'>
                                            <div class="form_check mb-20">
                                                <input class="form_check_input" name="categories" type="checkbox" value="1" id="categories" />
                                                <label class="form_check_label" for="chekbox-0">
                                                    Crew change
                                                </label>
                                            </div>
                                            <h6 className='item_name'>$145.00 <span>per day</span></h6>
                                        </div>
                                        <div className='extra_item mb-2'>
                                            <div class="form_check mb-20">
                                                <input class="form_check_input" name="categories" type="checkbox" value="1" id="categories" />
                                                <label class="form_check_label" for="chekbox-0">
                                                    Kayak
                                                </label>
                                            </div>
                                            <h6 className='item_name'>$145.00 <span>per day</span></h6>
                                        </div>
                                        <div className='extra_item mb-2'>
                                            <div class="form_check mb-20">
                                                <input class="form_check_input" name="categories" type="checkbox" value="1" id="categories" />
                                                <label class="form_check_label" for="chekbox-0">
                                                    Extra bed
                                                </label>
                                            </div>
                                            <h6 className='item_name'>$145.00 <span>per day</span></h6>
                                        </div>
                                        
                                    </div>

                                    <div className='total_price'>
                                        <div className='price_wrap'>
                                            <h6 className='title'>Your Price</h6>
                                            <h6 className='price'>$979.00</h6>
                                        </div>
                                        <button className='btn__base w-100'>BOOK NOW</button>
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