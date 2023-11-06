"use client"
import Gmap from "@/components/googleMap/googleMap"
import Image from "next/image"
import { Row, Col, Container, Tab, Nav } from "react-bootstrap"

import { useState, useRef } from "react"


export default function AddBoat() {

    const [images, setImages] = useState([])
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef(null)

    function selectFiles() {
        fileInputRef.current.click()
    }

    function onFileSelect(event) {
        const files = event.target.files;

        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name == files[i].name)) {
                setImages((prevImage) => [
                    ...prevImage,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i])
                    }
                ]);
            }
        }
    }

    function deleteImage(index) {
        setImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        )
    }

    function onDragOver(event) {
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = "copy";
    }

    function onDragLeave(event) {
        event.preventDefault();
        setIsDragging(false)
    }

    function onDrop(event) {
        event.preventDefault();
        setIsDragging(false)
        const files = event.dataTransfer.files;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name == files[i].name)) {
                setImages((prevImage) => [
                    ...prevImage,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i])
                    }
                ]);
            }
        }
    }

    return (
        <section className="dashboard_section">
            <Container fluid>
                <Row className="py-4">
                    <Col lg={12} className="px-0">
                        <div className="base_card">

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
                                                                        <input class="form-check-input" type="radio" value="1" name="categories" />
                                                                        <label class="form-check-label" for="chekbox-0">Captain provided in price</label>
                                                                        <p>A captain is provided by the listing owner to host and operate the trip.</p>
                                                                    </div>
                                                                    <div class="form-radio mb-20">
                                                                        <input class="form-check-input" type="radio" value="1" name="categories" />
                                                                        <label class="form-check-label" for="chekbox-0">Captain arranged separately</label>
                                                                        <p>Professional captain required, arranged and paid for separately.</p>
                                                                    </div>
                                                                    <div class="form-radio mb-20">
                                                                        <input class="form-check-input" type="radio" value="1" name="categories" />
                                                                        <label class="form-check-label" for="chekbox-0">Captain not provided</label>
                                                                        <p>Customer provides or acts as the qualified operator.</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="capacity">
                                                                    <h6>Capacity</h6>
                                                                    <p>Additional documentation may be required for operation with more than 12 passengers</p>
                                                                    <div className='form_group mb-4'>
                                                                        <input className='form_control' />
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>

                                                            <div className="category">
                                                                <h6>Category</h6>
                                                                <p>Choose 3 categories for your vessel.</p>
                                                            </div>
                                                            <Col lg={6}>
                                                                <div className="category">

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
                                                                <div class="form-group mb-3">
                                                                    <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                                        <option value="">Select One</option>
                                                                        <option value="101" data-gateway="">Paypal - USD</option>
                                                                        <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                                        <option value="1000" data-gateway="">Mobile</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div class="form-group mb-3">
                                                                    <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                                        <option value="">Select One</option>
                                                                        <option value="101" data-gateway="">Paypal - USD</option>
                                                                        <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                                        <option value="1000" data-gateway="">Mobile</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div class="form-group mb-3">
                                                                    <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                                        <option value="">Select One</option>
                                                                        <option value="101" data-gateway="">Paypal - USD</option>
                                                                        <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                                        <option value="1000" data-gateway="">Mobile</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div class="form-group mb-3">
                                                                    <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                                        <option value="">Select One</option>
                                                                        <option value="101" data-gateway="">Paypal - USD</option>
                                                                        <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                                        <option value="1000" data-gateway="">Mobile</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div class="form-group mb-3">
                                                                    <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                                        <option value="">Select One</option>
                                                                        <option value="101" data-gateway="">Paypal - USD</option>
                                                                        <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                                        <option value="1000" data-gateway="">Mobile</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row className="justify-content-end pt-4">
                                                            <Col lg={3}>
                                                                <div className="btn_group">
                                                                    <button className="btn__base disable me-3">Discard Changes</button>
                                                                    <button className="btn__base">Save</button>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </form>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2">
                                        <Row className="py-4">
                                            <Col lg={12}>
                                                <div className="location_tab">
                                                    <div className="map_wrap">
                                                        <Gmap />
                                                    </div>
                                                </div>
                                                <div className="btn_group pt-4">
                                                    <button className="btn__base disable me-3">Discard Changes</button>
                                                    <button className="btn__base">Save</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="3">
                                        <div className="photo_upload">
                                            <form>
                                                <div className="top">
                                                    <p>Drag And Drop</p>
                                                </div>
                                                <div className="drag_area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                                                    {isDragging ? (
                                                        <span className="select">
                                                            Drop image here
                                                        </span>
                                                    ) : (
                                                        <>
                                                            drag and drop image hare or {""}
                                                            <span role="button" onClick={selectFiles}>
                                                                Browse
                                                            </span>
                                                        </>

                                                    )

                                                    }


                                                    <input name="file" type="file" className="file" multiple ref={fileInputRef} onChange={onFileSelect} />
                                                </div>
                                                <div className="container_area">
                                                    {images.map((images, index) => {
                                                        console.log(images.name)
                                                        return (
                                                            <div className="image" key={index}>
                                                                <span className="delete" onClick={() => deleteImage(index)}>&times;</span>
                                                                <Image fill={true} src={images.url} alt="..." />
                                                            </div>
                                                        )



                                                    })}
                                                </div>
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className="btn_group pt-4">
                                                            <button className="btn__base disable me-3">Discard Changes</button>
                                                            <button className="btn__base">Save</button>
                                                        </div>
                                                    </Col>
                                                </Row>


                                            </form>

                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="4">
                                        <div className="vessel_dtails pt-5">
                                            <Row>
                                                <Col lg={12}>
                                                    <form>

                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="category">

                                                                    <div class="form-group mb-3">
                                                                        <label className='mb-3'>Name of the Vessel</label>
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
                                                                <div class="form-group mb-3">
                                                                    <label className='mb-3'>Vessel Type</label>
                                                                    <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                                        <option value="">Select One</option>
                                                                        <option value="101" data-gateway="">Paypal - USD</option>
                                                                        <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                                        <option value="1000" data-gateway="">Mobile</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div class="form-group mb-3">
                                                                    <label className='mb-3'>Purpose</label>
                                                                    <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                                        <option value="">Select One</option>
                                                                        <option value="101" data-gateway="">Paypal - USD</option>
                                                                        <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                                        <option value="1000" data-gateway="">Mobile</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div class="form-group mb-3">
                                                                    <label className='mb-3'>Size in ft”</label>
                                                                    <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                                        <option value="">Select One</option>
                                                                        <option value="101" data-gateway="">Paypal - USD</option>
                                                                        <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                                        <option value="1000" data-gateway="">Mobile</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div class="form-group mb-3">
                                                                    <label className='mb-3'>Tonnage</label>
                                                                    <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                                        <option value="">Select One</option>
                                                                        <option value="101" data-gateway="">Paypal - USD</option>
                                                                        <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                                        <option value="1000" data-gateway="">Mobile</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div class="form-group mb-3">
                                                                    <label className='mb-3'>Engine and Propulsion</label>
                                                                    <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                                        <option value="">Select One</option>
                                                                        <option value="101" data-gateway="">Paypal - USD</option>
                                                                        <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                                        <option value="1000" data-gateway="">Mobile</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div class="form-group mb-3">
                                                                    <label className='mb-3'>Maximum Speed</label>
                                                                    <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                                        <option value="">Select One</option>
                                                                        <option value="101" data-gateway="">Paypal - USD</option>
                                                                        <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                                        <option value="1000" data-gateway="">Mobile</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div class="form-group mb-3">
                                                                    <label className='mb-3'>Current Location</label>
                                                                    <select class="form_control form-select" name="gateway" required="" id="gateway">
                                                                        <option value="">Select One</option>
                                                                        <option value="101" data-gateway="">Paypal - USD</option>
                                                                        <option value="114" data-gateway="">Stripe Checkout - USD</option>
                                                                        <option value="1000" data-gateway="">Mobile</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div class="form-group mb-3">
                                                                    <label className='mb-3'>Cabin</label>
                                                                    <input className='form_control' />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div class="form-group mb-3">
                                                                    <label className='mb-3'>Passenger Capacity</label>
                                                                    <input className='form_control' />
                                                                </div>
                                                            </Col>
                                                        </Row>

                                                        {/* cta btn */}
                                                        <Row>
                                                            <Col lg={12}>
                                                                <div className="btn_group pt-4">
                                                                    <button className="btn__base disable me-3">Discard Changes</button>
                                                                    <button className="btn__base">Save</button>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </form>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="5">
                                        <div className="price_tab pt-5">
                                            <form>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div class="form-group mb-3">
                                                            <label className='mb-3'>Cabin</label>
                                                            <input className='form_control' />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div class="form-group mb-3">
                                                            <label className='mb-3'>Passenger Capacity</label>
                                                            <input className='form_control' />
                                                        </div>
                                                    </Col>

                                                </Row>
                                                <Row>
                                                    <Col lg={12}>
                                                        <div class="form-group mb-3">
                                                            <label className='mb-3'>Passenger Capacity</label>
                                                            <textarea className='form_control'></textarea>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                {/* cta btn */}
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className="btn_group pt-4">
                                                            <button className="btn__base disable me-3">Discard Changes</button>
                                                            <button className="btn__base">Save</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
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