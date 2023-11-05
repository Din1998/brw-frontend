"use client"
import { Row,Col,Container,Tabs, Tab,Nav } from "react-bootstrap"


export default function AddBoat () {
    return(
        <section className="dashboard_section">
            <Container fluid>
                <Row className="py-4">
                    <Col lg={12} className="px-0">
                        <div className="base_card">
                            {/* <Tabs variant='pills' defaultActiveKey="tab-1" className='coustome-tabs mt-3'>
                                <Tab eventKey="tab-1" title="Essentials" >

                                </Tab>
                                <Tab eventKey="tab-2" title=" Location" >

                                </Tab>
                                <Tab eventKey="tab-3" title="Photos" >

                                </Tab>
                                <Tab eventKey="tab-4" title="Vessel Details" >

                                </Tab>
                                <Tab eventKey="tab-5" title="Pricing" >

                                </Tab>
                            </Tabs> */}


                        <Tab.Container id="my-tabs" defaultActiveKey="1" >
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="1">
                                        <i class="fa-solid fa-pencil"></i> Essentials
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="2">
                                        <i class="fa-regular fa-map"></i> Location
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="3">
                                        <i class="fa-regular fa-image"></i> Photos
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="4">
                                        <i class="fa-solid fa-sailboat"></i> Vessel Details
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5">
                                        <i class="fa-solid fa-dollar-sign"></i> Pricing
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                    <div className="essential mt-5">   
                                        <Row>
                                            <Col lg={12}>
                                                <form>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <div className='form_group mb-4'>
                                                                <label className='mb-3'>Listing Title</label>
                                                                <input className='form_control' />
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className='form_group mb-4'>
                                                                <label className='mb-3'>Short Name</label>
                                                                <input className='form_control' />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col lg={12}>
                                                        <div className='form_group mb-4'>
                                                            <label className='mb-3'>Description</label>
                                                            <textarea className='form_control' />
                                                        </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col lg={12}>
                                                            <div className="boat_type">
                                                                <div className="boat_type-content_wrap">
                                                                    <h6>What type of charter with listing?</h6>
                                                                    <p>Depending on the flexibility of your offering, you can choose more than one charter type.</p>
                                                                </div>
                                                                <div class="form-radio mb-20">
                                                                    <input class="form-check-input"  type="radio" value="1" name="categories" />
                                                                    <label class="form-check-label" for="chekbox-0">Captain provided in price</label>
                                                                    <p>A captain is provided by the listing owner to host and operate the trip.</p>
                                                                </div>
                                                                <div class="form-radio mb-20">
                                                                    <input class="form-check-input"  type="radio" value="1" name="categories" />
                                                                    <label class="form-check-label" for="chekbox-0">Captain arranged separately</label>
                                                                    <p>Professional captain required, arranged and paid for separately.</p>
                                                                </div>
                                                                <div class="form-radio mb-20">
                                                                    <input class="form-check-input"  type="radio" value="1" name="categories" />
                                                                    <label class="form-check-label" for="chekbox-0">Captain not provided</label>
                                                                    <p>Customer provides or acts as the qualified operator.</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </form>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <div>   
                                        Content for the second tab goes here2.
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <div>   
                                        Content for the second tab goes here3.
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="4">
                                    <div>   
                                        Content for the second tab goes here4.
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="5">
                                    <div>   
                                        Content for the second tab goes here5.
                                    </div>
                                </Tab.Pane>
                               
                            </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}