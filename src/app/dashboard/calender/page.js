"use client"
import { Row,Col,Container } from "react-bootstrap"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from 'react'
import { Calendar } from 'react-date-range';

export default function UserCalendar(){

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    return(
        <section className="dashboard_section">
            <Container fluid>
                <Row className="py-4">
                    <Col lg={12} className="px-0">
                        <div className="base_card">
                            <h6>calender</h6>
                            <Calendar
                            />
                        </div>
                    
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}