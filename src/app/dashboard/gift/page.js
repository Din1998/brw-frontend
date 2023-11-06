import GiftCard from "@/components/giftCard/giftCard"
import { Row,Col,Container } from "react-bootstrap"

export default function Gift(){
    return(
        <section className="dashboard_section">
            <Container fluid>
                <Row className="py-4">
                    <Col lg={12} className="px-0">
                        <div className="base_card">
                            <Row className="gy-4">
                                <Col lg={3}>
                                    <GiftCard />
                                </Col>
                                <Col lg={3}>
                                    <GiftCard />
                                </Col>
                                <Col lg={3}>
                                    <GiftCard />
                                </Col>
                                <Col lg={3}>
                                    <GiftCard />
                                </Col>
                                <Col lg={3}>
                                    <GiftCard />
                                </Col>
                                <Col lg={3}>
                                    <GiftCard />
                                </Col>
                                <Col lg={3}>
                                    <GiftCard />
                                </Col>
                                <Col lg={3}>
                                    <GiftCard />
                                </Col>
                                <Col lg={3}>
                                    <GiftCard />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}