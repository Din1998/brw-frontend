"use client"

import DashboardProductCard from "@/components/dashboardProductCard/dashboardCard"
import Link from "next/link"
import { Row, Container, Col,Modal} from "react-bootstrap"


import { useState } from 'react';



export default function AllBoat () {


    const [modalShow, setModalShow] = useState(false);


    return(
        <section className="dashboard_section">
            <Container fluid>
                <Row className="py-4">
                    <Col lg={12} className="px-0">
                        <div className="base_card">
                            <Row>
                                <Col lg={12}>
                                    <div className="user_cta">
                                        <h6>All Boats</h6>
                                        <Link href='/dashboard/addboat' className="btn__base"><i class="fa-solid fa-plus"></i> Add Boat</Link>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="gy-4 mt-3">
                                <Col lg={3}>
                                    <DashboardProductCard showModal={setModalShow} />
                                </Col>
                                <Col lg={3}>
                                    <DashboardProductCard showModal={setModalShow} />
                                </Col>
                                <Col lg={3}>
                                    <DashboardProductCard showModal={setModalShow} />
                                </Col>
                                <Col lg={3}>
                                    <DashboardProductCard showModal={setModalShow} />
                                </Col>
                                <Col lg={3}>
                                    <DashboardProductCard showModal={setModalShow} />
                                </Col>
                                <Col lg={3}>
                                    <DashboardProductCard showModal={setModalShow} />
                                </Col>
                                <Col lg={3}>
                                    <DashboardProductCard showModal={setModalShow} />
                                </Col>
                                <Col lg={3}>
                                    <DashboardProductCard showModal={setModalShow} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </section>
    )
}



function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="coustom_modal"
      >
        
        <Modal.Body>
            <div className="modal_content">
                <h6 className="title">Are you sure you want to delete this add</h6>
                <div className='btn_wrap'>
                    <button className="btn__base base-2 btn--sm me-2">Yes</button>
                    <button className="btn__base btn--sm black" onClick={props.onHide}>No</button>
                </div>
            </div>
             
            
        </Modal.Body>
       
      </Modal>
    );
  }