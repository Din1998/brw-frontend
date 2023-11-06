import { Row, Col, Container } from "react-bootstrap"

export default function Affiliate() {
    return (
        <section className="dashboard_section">
            <Container fluid>
                <Row className="py-4">
                    <Col lg={12} className="px-0">
                        <div className="base_card">
                            <form>
                                <Row>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>Company Name</label>
                                            <input className='form_control' />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>VAT Number</label>
                                            <input className='form_control' />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>Occupations</label>
                                            <input className='form_control' />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>Commissions</label>
                                            <input className='form_control' />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>Payout</label>
                                            <input className='form_control' />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form_group mb-4'>
                                            <label className='mb-3'>Commissions</label>
                                            <div class="input-group">
                                                <input type="text" value="HJGHTYGHJGHGH" class="form-control form_control" readonly="" id="key" />
                                                <button type="button" class="input-group-text btn btn--base copytext"  id="copyBoard"> <i class="fa fa-copy"></i> </button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                              
                                <div>
                                    <button className="btn__base">Send</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}