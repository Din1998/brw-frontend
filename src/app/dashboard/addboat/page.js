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
                                        <div className="essential add-boat_panel">
                                            <Row>
                                                <Col lg={12}>
                                                    <form>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className='form_group mb-4'>
                                                                    <label className='mb-3'>Listing Title</label>
                                                                    <input className='form_control' placeholder="Enter a catchy title to attract customers to you listing..."/>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className='form_group mb-4'>
                                                                    <label className='mb-3'>Short Name</label>
                                                                    <input className='form_control' placeholder="Ex: kayes Yacht"/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg={12}>
                                                                <div className='form_group mb-4'>
                                                                    <label className='mb-3'>Description</label>
                                                                    <textarea className='form_control' placeholder="Enter a catchy title to attract customers to you listing..."/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg={12}>
                                                                <div className="boat_type">
                                                                    <div className="boat_type-content_wrap mb-4">
                                                                        <h6>What type of charter with listing?</h6>
                                                                        <p>Depending on the flexibility of your offering, you can choose more than one charter type.</p>
                                                                    </div>
                                                                    <div class="form-radio mb-20">
                                                                        <input class="form-check-input" type="radio" value="1" name="categories" />
                                                                        <label class="form-check-label" for="chekbox-0">Captain provided in price</label>
                                                                        <p className="form_radio_subTitle">A captain is provided by the listing owner to host and operate the trip.</p>
                                                                    </div>
                                                                    <div class="form-radio mb-20">
                                                                        <input class="form-check-input" type="radio" value="1" name="categories" />
                                                                        <label class="form-check-label" for="chekbox-0">Captain arranged separately</label>
                                                                        <p className="form_radio_subTitle">Professional captain required, arranged and paid for separately.</p>
                                                                    </div>
                                                                    <div class="form-radio mb-20">
                                                                        <input class="form-check-input" type="radio" value="1" name="categories" />
                                                                        <label class="form-check-label" for="chekbox-0">Captain not provided</label>
                                                                        <p className="form_radio_subTitle">Customer provides or acts as the qualified operator.</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="capacity">
                                                                    <h6>Capacity</h6>
                                                                    <p className="mb-3">Additional documentation may be required for operation <br/> with more than 12 passengers</p>
                                                                    <div className='form_group mb-4'>
                                                                        <input className='form_control' />
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>

                                                            <div className="category mb-4">
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
                                        <Row>
                                            <Col lg={12}>
                                                <div className="location_tab add-boat_panel">
                                                    <div className="map_wrap mb-4">
                                                        <Gmap />
                                                    </div>
                                                </div>
                                                <form>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <div className='form_group mb-4'>
                                                                <label className='mb-3'>Add Location</label>
                                                                <input className='form_control' />
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className='form_group mb-4'>
                                                                <label className='mb-3'>Add Latitude</label>
                                                                <input className='form_control' />
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className='form_group mb-4'>
                                                                <label className='mb-3'>Add Longitude</label>
                                                                <input className='form_control' />
                                                            </div>
                                                        </Col>
                                                        <Col lg={2} className="d-flex justify-content-center align-items-center flex-column">
                                                            <div className="btn_group pt-4">
                                                                <button className="btn__base disable me-3">Discard Changes</button>
                                                                <button className="btn__base">Save</button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </form>

                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="3">
                                        <div className="photo_upload add-boat_panel">
                                            <form>
                                                <div className="drag_area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                                                    {isDragging ? (
                                                        <span className="select">
                                                            Drop image here
                                                        </span>
                                                    ) : (
                                                        <div className="drag_drop_content">
                                                            <span className="icon_wrap" role="button" onClick={selectFiles}><i class="fa-regular fa-images"></i></span>
                                                            <p role="button" onClick={selectFiles}>Drag and drop an image, Browse</p>
                                                            <p>Minimum 1200px width recommended. Max 10MB each</p>
                                                        </div>

                                                    )

                                                    }


                                                    <input name="file" type="file" className="file" multiple ref={fileInputRef} onChange={onFileSelect} />
                                                </div>
                                                <div className="container_area">
                                                    {images.map((images, index) => {
                                                        console.log(images.name)
                                                        return (
                                                            <div className="image" key={index}>
                                                                <span className="delete" onClick={() => deleteImage(index)}><i class="fa-solid fa-xmark"></i></span>
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
                                        <div className="vessel_dtails add-boat_panel">
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
                                        <div className="price_tab add-boat_panel">
                                            <form>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div class="form-group mb-3">
                                                            <label className='mb-3'>Price(USD)</label>
                                                            <input className='form_control' placeholder="00.00" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div class="form-group mb-3">
                                                            <label className='mb-3'>Type of Rent</label>
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

                                                </Row>
                                                <Row>
                                                    <Col lg={12}>
                                                        <div class="form-group mb-3">
                                                            <label className='mb-3'>Description</label>
                                                            <textarea className='form_control' placeholder="Enter a catchy title to attract customers to you listing..."></textarea>
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