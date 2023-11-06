
import ReservationsCard from "@/components/reservationsCard/reservationsCard"
import { Row,Col,Container } from "react-bootstrap"

export default function Reservations(){
    return(
        <section className="dashboard_section">
            <Container fluid>
                <Row className="py-4">
                    <Col lg={12} className="px-0">
                        <div className="base_card">
                            <Row className="gy-4">
                                <Col lg={3}>
                                    <ReservationsCard />
                                </Col>
                                <Col lg={3}>
                                    <ReservationsCard />
                                </Col>
                                <Col lg={3}>
                                    <ReservationsCard />
                                </Col>
                                <Col lg={3}>
                                    <ReservationsCard />
                                </Col>
                                <Col lg={3}>
                                    <ReservationsCard />
                                </Col>
                                <Col lg={3}>
                                    <ReservationsCard />
                                </Col>
                            </Row>

                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}