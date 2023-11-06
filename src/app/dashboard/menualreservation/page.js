import Link from "next/link"
import { Row, Col, Container } from "react-bootstrap"


export default function MenualReserv() {
    return (
        <section className="dashboard_section">
            <Container fluid>
                <Row className="py-4">
                    <Col lg={12} className="px-0">
                        <div className="base_card">
                            <Row className="justify-content-end">
                                <Col lg={2} className="d-flex justify-content-end">
                                    <Link href='/dashboard/reservations' className="btn__base">Reservations Status</Link>
                                </Col>
                            </Row>
                            <form>
                                <Row>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>Name of client</label>
                                            <input className='form_control' placeholder="Name of client" />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>Email</label>
                                            <input className='form_control' placeholder="Email"/>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>Phone Number</label>
                                            <input className='form_control' placeholder="Phone Number"/>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>Select Boat</label>
                                            <div class="form-group mb-3">
                                                <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                    <option value="">Select One</option>
                                                    <option value="101" data-gateway="">Paypal - USD</option>
                                                    <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                    <option value="1000" data-gateway="">Mobile</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>Total Price(USD)</label>
                                            <input className='form_control' placeholder="Total Price(USD)"/>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>deposit(USD)</label>
                                            <input className='form_control' placeholder="deposit(USD)"/>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>Remaining</label>
                                            <input className='form_control' placeholder="Remaining"/>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>Fees</label>
                                            <input className='form_control' placeholder="Fees"/>
                                        </div>
                                    </Col>
                                </Row>
                                {/* cta btn */}
                                <Row>
                                    <Col lg={12}>
                                        <div className="btn_group pt-4">
                                            <Link href='/dashboard' className="btn__base disable me-3">Back</Link>
                                            <button className="btn__base">Save</button>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}