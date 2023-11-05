
import Image from "next/image"
import { Row,Col,Container } from "react-bootstrap"

import img from '@/assets/image/product/img12.png'

export default function BoatDetails(){
    return(
        <section className="dashboard_section">
            <Container fluid>
                <Row className="py-4">
                    <Col lg={12} className="px-0">
                   
                    <div className="dashboard_boatdetails_wrap">
                        <div className="thumb">
                            <Image src={img} alt="..." />
                        </div>
                        <div className="board_meta_info">
                            <div className="info_section">
                                <div className="thumb2">
                                    <Image src={img} alt="..."/>
                                </div>
                                <div className="content_wrap">
                                    <h6 className="title">Romantic Lagoon 380</h6>
                                    <ul className="info_item_wrap">
                                        <li>Sun, jan11, 2023</li>
                                        <li>5 People</li>
                                        <li>1 night</li>
                                        <li><div className="status_tag"><p>Booked</p></div></li>
                                    </ul>
                                </div>
                               
                            </div>
                            <div className="price_section">
                                <h6>$878.00<span>/night</span></h6>
                            </div>
                        </div>
                        <ul className="others_info">
                            <li>
                                <div>
                                    <p>Commission 19%</p>
                                </div>
                                <div>
                                    <h6>$1,188.85</h6>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>Your earnings</p>
                                </div>
                                <div>
                                    <h6>$3,245.00</h6>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>Renter Total</p>
                                </div>
                                <div>
                                    <h6>$16,358.23</h6>
                                </div>
                            </li>

                        </ul>
                    </div>
                      
                    </Col>
                </Row>
            </Container>
        </section>
    )
}