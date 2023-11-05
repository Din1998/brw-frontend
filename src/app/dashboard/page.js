import Image from "next/image"
import { Row,Col,Container } from "react-bootstrap"

import user from '@/assets/image/user/user2.png'

export default function Dashboard(){
    return(
        <>
           <section className="dashboard_section">
                <Container fluid>
                    <Row className="gy-4 py-4">
                        <Col lg={12} className="px-0">
                            <div className="base_card">
                                <div className="user_profile_wrap">
                                    <div className="profile_thumb">
                                        <Image src={user} alt="..." />
                                    </div>
                                    <Row>
                                        <Col lg={12}>
                                            <form>
                                                <Row className="gy-4">
                                                    <Col lg={6}>
                                                        <div class="form_group mb-4">
                                                            <label class="mb-3">First Name</label>
                                                            <input class="form_control" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div class="form_group mb-4">
                                                            <label class="mb-3">Last Name</label>
                                                            <input class="form_control" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row className="gy-4">
                                                    <Col lg={6}>
                                                        <div class="form_group mb-4">
                                                            <label class="mb-3">Phone Number</label>
                                                            <input class="form_control" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div class="form_group mb-4">
                                                            <label class="mb-3">Address</label>
                                                            <input class="form_control" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <button className="btn__base w-100">Update Profile</button>
                                            </form>
                                            
                                        </Col>
                                    </Row>
                                </div>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
           </section>
        </>
    )
}