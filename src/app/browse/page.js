"use client"
import Breadcrumb from '@/components/breadcrumb/breadcrumb';

import { Row, Container, Col } from 'react-bootstrap';

import { useState } from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import '../details/yachts.css'


import BaseCard from '@/components/baseCard/BaseCard';
import Pagination from '@/components/pagination/pagination';

import './browse.css'
import Gmap from '@/components/googleMap/googleMap';

export default function Brows() {


    const [className, setClassName] = useState('');
    const [icon, setIcon] = useState('');

    const handleButtonClick = () => {
        setClassName((prevClassName) =>
            prevClassName === 'show_filter' ? '' : 'show_filter'
        );
        setIcon((prevClassName) =>
        prevClassName === 'fa-solid fa-xmark' ? '' : 'fa-solid fa-xmark'
        );
    };


    const [priceRange, setPriceRange] = useState([0, 1000]);

    const handlePriceChange = (value) => {
      setPriceRange(value);
    };

    return (
        <section className="all-yachts">

            {/* container start */}
            <Container fluid>
                {/* breadcrumb */}
                <Breadcrumb />

                <Row>
                    <Col lg={12}>
                        <div className='filter_cta'>
                            <p>Filters</p>
                            <button className='filter_btn' onClick={handleButtonClick} ><i class={`fa-solid fa-sliders ${icon}`}></i></button>
                        </div>
                        <div className={`filter_box ${className}`}>
                            <h6 className='title'>Filter By</h6>
                            <form>
                                <Row className='gx-0 gy-4'>
                                    <Col lg={2}>
                                        <div className='filter_option1'>
                                            <div className='form_group mb-3'>
                                                <label className='mb-2'>Check In</label>
                                                <input className='form_control' type='date' />
                                            </div>
                                            <div className='form_group mb-3'>
                                                <label className='mb-2'>Check Out</label>
                                                <input className='form_control' type='date' />
                                            </div>

                                            <div className='form_group'>
                                                <label className='mb-2'>Guests</label>
                                                <input className='form_control' type='number' placeholder='Guests' />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={2}>
                                        <div className='filter_option2'>
                                            <div className=''>
                                                <h6 className='mb-4'>Type of charter</h6>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Crewed (with Skipper)
                                                        </label>
                                                    </div>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Bareboat (without Skipper)
                                                        </label>
                                                    </div>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Demise (with Skipper)
                                                        </label>
                                                    </div>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Voyago Charter
                                                        </label>
                                                    </div>
                                                    <div class="form_check">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Voyago Charter
                                                        </label>
                                                    </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={2}>
                                        <div className='filter_option3'>
                                            <div className=''>
                                                <h6 className='mb-4'>Boat type</h6>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Sailboat
                                                        </label>
                                                    </div>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Catamaran
                                                        </label>
                                                    </div>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Motor Boat
                                                        </label>
                                                    </div>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Gullet
                                                        </label>
                                                    </div>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Gullet
                                                        </label>
                                                    </div>
                                                    <div class="form_check">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Gullet
                                                        </label>
                                                    </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={2}>
                                        <div className='filter_option4'>
                                            <div className=''>
                                                <h6 className='mb-4'>Brand / Model</h6>
                                               
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Sailboat
                                                        </label>
                                                    </div>
                                          
                                         
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Catamaran
                                                        </label>
                                                    </div>
                                         
                                               
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Motor Boat
                                                        </label>
                                                    </div>
                                          
                                    
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Gullet
                                                        </label>
                                                    </div>
                                           
                                            
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Gullet
                                                        </label>
                                                    </div>
                                          
                                        
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            Gullet
                                                        </label>
                                                    </div>
                                              
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={1}>
                                        <div className='filter_option5'>
                                            <div className=''>
                                                <h6 className='mb-4'>Cabin</h6>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="01" />
                                                        <label class="form-check-label" for="01">
                                                            01
                                                        </label>
                                                    </div>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            02
                                                        </label>
                                                    </div>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            03
                                                        </label>
                                                    </div>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            04
                                                        </label>
                                                    </div>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            05
                                                        </label>
                                                    </div>
                                                    <div class="form_check mb-3">
                                                        <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                        <label class="form-check-label" for="chekbox-0">
                                                            06
                                                        </label>
                                                    </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={1}>
                                        <div className='filter_option6'>
                                            <div className=''>
                                                    <h6 className='mb-4'>Length</h6>
                                                        <div class="form_check mb-3">
                                                            <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                            <label class="form-check-label" for="chekbox-0">
                                                            38ft”
                                                            </label>
                                                        </div>
                                                        <div class="form_check mb-3">
                                                            <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                            <label class="form-check-label" for="chekbox-0">
                                                            40ft”
                                                            </label>
                                                        </div>
                                                        <div class="form_check mb-3">
                                                            <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                            <label class="form-check-label" for="chekbox-0">
                                                            56ft”
                                                            </label>
                                                        </div>
                                            
                                                        <div class="form_check mb-3">
                                                            <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                            <label class="form-check-label" for="chekbox-0">
                                                            89ft”
                                                            </label>
                                                        </div>
                                                        <div class="form_check mb-3">
                                                            <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                            <label class="form-check-label" for="chekbox-0">
                                                            120ft”
                                                            </label>
                                                        </div>
                                                        <div class="form_check">
                                                            <input class="form-check-input" name="categories" type="checkbox" value="1" id="categories" />
                                                            <label class="form-check-label" for="chekbox-0">
                                                            178ft”
                                                            </label>
                                                        </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={2}>
                                        <div className='filter_option7'>
                                            <h6 className='mb-4'>Price</h6>
                                            <div className='show_price'>
                                                <div className='price_input_wrap'>
                                                    <label>Min</label>
                                                    <input
                                                        className='price_input form_control'
                                                        type="number"
                                                        value={priceRange[0]}
                                                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                                                    />
                                                </div>
                                                <p>To</p>
                                                <div className='price_input_wrap'>
                                                    <label>Max</label>
                                                    <input
                                                        className='price_input form_control'
                                                        type="number"
                                                        value={priceRange[1]}
                                                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                                    />
                                                </div>
                                            </div>
                                           
                                            <Slider
                                                className='range_slider'
                                                range
                                                min={0}
                                                max={1000}
                                                step={10}
                                                defaultValue={priceRange}
                                                value={priceRange}
                                                onChange={handlePriceChange}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='justify-content-end py-3'>
                                    <Col lg={4} className='d-flex justify-content-end align-items-end gap-3'>
                                        <p>Reset All Filters</p>
                                        <button className='btn__base'>Search</button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>

                <Row className='gx-3 pt-4'>
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
                           <Gmap />
                        </div>

                    </Col>
                </Row>

                <Row className='pb-4'>
                    <Col lg={12}>
                        <Pagination />
                    </Col>
                </Row>

            </Container>

        </section>
    )
}