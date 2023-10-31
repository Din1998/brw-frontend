import GLightbox from 'glightbox';

import { Row, Container, Col, Tabs, Tab } from 'react-bootstrap';

import React, { useState,useEffect,useRef  } from 'react'

import Image from 'next/image';


import img1 from '@/assets/image/product/img2.png'
import img2 from '@/assets/image/product/img3.png'
import img3 from '@/assets/image/product/img4.png'
import img4 from '@/assets/image/product/img1.png'
import img5 from '@/assets/image/product/img5.png'

export default function Gallery(){

    const lightbox = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          // Load GLightbox only on the client-side
          const lightboxInstance = GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
          });
          lightbox.current = lightboxInstance;
        }
      }, []);


    return(
        <div>
            <Row className='gx-3'>
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
                        <a href='https://boat-rental.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg3.d714f3ef.png&w=384&q=75' className="glightbox">
                            <Image src={img2} alt='...' />
                        </a>
                        </div>
                        <div className='thumb_wrap'>
                            <a href='https://boat-rental.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg4.787519fb.png&w=384&q=75' className="glightbox">
                            <Image src={img3} alt='...' />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}