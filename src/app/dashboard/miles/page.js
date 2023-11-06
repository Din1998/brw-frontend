import { Row,Col,Container } from "react-bootstrap"

export default function Miles(){
    return(
        <section className="dashboard_section">
            <Container fluid>
                <Row className="py-4">
                    <Col lg={12} className="px-0">
                        <div className="base_card">
                        <form>
                            <Row className="gy-4 align-items-center">
                               <Col lg={6}>
                                    <div class="form_group mb-4">
                                        <label class="mb-3">Miles accumulated</label>
                                        <input class="form_control" />
                                    </div>
                               </Col>
                               <Col lg={6}>
                                <div>
                                    <h6 className="mb-0">1 mile equals to 10 USD</h6>
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