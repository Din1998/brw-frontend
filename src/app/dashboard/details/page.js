import { Row, Container, Col } from "react-bootstrap"

export default function AccDetails() {
    return (
        <section className="dashboard_section">
            <Container fluid>
                <Row className="py-4">
                    <Col lg={12} className="px-0">
                        <div className="base_card">
                            <h6>Account Details</h6>

                            <form>
                                <Row className="gy-4">
                                    <Col lg={6}>
                                        <div class="form_group mb-4">
                                            <label class="mb-3">Current Email</label>
                                            <input class="form_control" />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div class="form_group mb-4">
                                            <label class="mb-3">New Email</label>
                                            <input class="form_control" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="gy-4">
                                    <Col lg={6}>
                                        <div class="form_group mb-4">
                                            <label class="mb-3">Current Password</label>
                                            <input type="password" class="form_control" />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div class="form_group mb-4">
                                            <label class="mb-3">New Password</label>
                                            <input class="form_control" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <div class="form-group mb-3">
                                            <label class="mb-3">payout method</label>
                                            <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                <option value="">Select One</option>
                                                <option value="101" data-gateway="">Paypal - USD</option>
                                                <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                <option value="1000" data-gateway="">Mobile</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div class="form_group mb-4">
                                            <label class="mb-3">Company Name(Optional)</label>
                                            <input class="form_control" />
                                        </div>
                                    </Col>
                                </Row>
                                <button className="btn__base">Update Profile</button>
                            </form>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}