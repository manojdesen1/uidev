import { React, useState, useRef } from "react";
import { Row, Col, Button, Container, Card, Form, Modal } from "react-bootstrap";
import worktops from '../../Projectimages/worktops-installation.jpg'
import { Icon } from "@iconify/react";
import Divider from "../../../TemplateAssets/common/Divider";
import { Link } from "react-router-dom";
import freelancer from '../../Projectimages/Freelancer.jpg'
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from "../../Footer/Footer";
import { Editor } from "@tinymce/tinymce-react";

function ServiceInformation() {

    const editorRef = useRef(null);

    const [show, setShow] = useState(false);
    const [sellersList, setSellers] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // Review
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleReviewChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the review submission
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Review:', reviewText);
        console.log('Rating:', rating);
        setName('');
        setEmail('');
        setReviewText('');
        setRating(0);
    };
    // Review
    // 
    const toastDark = () => toast.success(<h6 className="text-sucess">Your Product is Successfully Added to Cart</h6>);
    const toastDanger = () => toast.success(<h6 className="text-sucess">Product Added to Wishlist</h6>);
    // 
    // 
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToWishlist = () => {
        setIsAdded(true);
        const toastDanger = () => toast.success(<h6 className="text-sucess">Product Added to Wishlist</h6>);

        toastDanger();
    };

    const handleRemoveFromWishlist = () => {
        setIsAdded(false);
        const toastDanger1 = () => toast.error(<h6 className="text-dark">Product Removed from Wishlist</h6>)
        toastDanger1();
    };

    // 

    return (
        <>

            <Row className="">
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12} className="mt-4 container mb-3">

                    <Card className="overflow-hidden light">
                        <Card.Body className="bg-dark">
                            <Row>
                                <Col xl={8} className="position-relative">
                                    <Row className="g-3 align-items-center">
                                        <Col lg={5}>
                                            <div className=''>
                                                <img className="w-100 rounded-1 overlay" src={freelancer} width={400} height={219} alt="profile-img" />
                                            </div>
                                        </Col>
                                        <Col lg={7}>
                                            <h1 className="text-uppercase text-white">
                                                Reliant Plumbing and Heating
                                            </h1>
                                            <p className=" text-white" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CAMBRIDGE</span></p>
                                            <p className="text-white fw-semi-bold fs--1">
                                                <span className="me-1">4.5</span>
                                                <span>
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="gray" width="20" height="20" />
                                                </span>
                                                <span className="text-info ms-2">
                                                    (78,259 reviews)
                                                </span>
                                            </p>

                                        </Col>
                                    </Row>
                                    <hr className="text-secondary text-opacity-50" />
                                    <ul className="list-unstyled d-flex flex-wrap gap-3 fs--1 fw-semi-bold text-300 mt-3 mb-0">

                                        <Link to="/service/categories" className="text-300">
                                            <li role="button" className="text-primary">
                                                Previous
                                            </li>
                                        </Link>

                                        {/* <Link to="/wishlist/products" className="text-300"> */}
                                        <>
                                            {isAdded ? (
                                                <li
                                                    onClick={handleRemoveFromWishlist}
                                                    role='button'
                                                    style={{ fontSize: '14px' }}
                                                    className=" fw-semibold"
                                                    href="#!"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    aria-label="Remove from Wishlist"
                                                    data-bs-original-title="Remove from Wishlist"
                                                >
                                                    <span>
                                                        <Icon icon="icon-park-solid:like" className="me-1" style={{ marginTop: '-2px', color: '#df2020' }} width="20" height="20" />Remove from Wishlist
                                                    </span>
                                                </li>
                                            ) : (
                                                <li
                                                    onClick={handleAddToWishlist}
                                                    role='button'
                                                    style={{ fontSize: '14px' }}
                                                    className=" fw-semibold"
                                                    href="#!"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    aria-label="Add to Wishlist"
                                                    data-bs-original-title="Add to Wishlist"
                                                >
                                                    <span>
                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-2px' }} width="20" height="20" />Add to Wishlist
                                                    </span>
                                                </li>
                                            )}
                                        </>
                                        {/* </Link> */}
                                        <li role="button" className="text-primary">
                                            Next
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Row className="">
                    <Col lg={8} className="order-2 order-lg-0 container">

                        {/* Service Images */}
                        <Card className="mb-3">
                            <Card.Header className="bg-light">
                                <h2>Photo Gallery</h2>
                            </Card.Header>
                            <Card.Body className="position-relative">

                                <div className="d-inline-block m-2">
                                    <img src={worktops} width="150px" height="130px" />
                                </div>
                                <div className="d-inline-block m-2">
                                    <img src={worktops} width="150px" height="130px" />
                                </div>
                                <div className="d-inline-block m-2">
                                    <img src={worktops} width="150px" height="130px" />
                                </div>

                            </Card.Body>
                        </Card>
                        {/* Product Images */}


                        {/* Profile */}
                        <Card className="mb-3">
                            <Card.Header className="bg-light">
                                <h2>Profile</h2>
                            </Card.Header>
                            <Card.Body className="position-relative">
                                <p>
                                    My name is Nick. I am the main tradesmen for Kentishbuilder.
                                    After reading my feedback you will see I am dedicated to my work.
                                    I always respect the customers wishes and work with them to
                                    achieve their results.
                                    Whatever the contract is worth I will give the same commitment.
                                    All the trades I use are
                                    from mybuilder and my family
                                    and I am on all my contracts from start to finish Let me help
                                    you with all your building contracts in 2021
                                </p>
                            </Card.Body>
                        </Card>
                        {/* Profile */}

                        {/* About company Reliant Plumbing and Heating */}
                        <Card className="mb-3">
                            <Card.Header className="bg-light">
                                <h2>About company Reliant Plumbing and Heating</h2>
                            </Card.Header>
                            <Card.Body className="position-relative">
                                <p
                                // className=""
                                >
                                    I have been in the building industry for 45years since |
                                    left school. | have been a brick-layer for 40 years and have
                                    vast experience in all ground works,including patios,drainage,
                                    concreting, block-paving, re-pointing of house's.One of the contracts
                                    | worked on was the new building at canterbury college, Dover road. |
                                    completed all slabwork, one of my big slab contracts was to lay all the
                                    town centre in ashford of york-stone and granite sets. | am a very clean
                                    and tidy bricklayer and | have worked for many big companys doing sub-contract
                                    work including serco,wates, bovis and can supply any references required.| have done
                                    quite a few contracts for customers on mybuilder who work for the police.You will always
                                    see me on my contracts | do not sub contract work out to anyone unless the customer asks
                                    me if | could help find a tradesman that doest have my skills.| will
                                    always be honest loyal to you and always seek to make your contract easy going
                                    .Many thanks nick Kentishbuilder
                                </p>
                            </Card.Body>
                        </Card>
                        {/* About company Reliant Plumbing and Heating */}

                        <ToastContainer
                            position="bottom-right"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                        {/* Skills */}
                        <Card className="mb-3">
                            <Card.Header className="bg-light">
                                <h2>Skills</h2>
                            </Card.Header>
                            <Card.Body className="position-relative">
                                <ol>
                                    <li>Worktops Installation</li>
                                    <li>Bathroom Fitting</li>
                                    <li>Brick Laying</li>
                                    <li>Carpentry & Joinery</li>
                                    <li>Carpet Fitting</li>
                                    <li>Chimneys & fireplaces</li>
                                    <li>Plastering</li>
                                    <li>Handyman</li>
                                    <li>Tilling</li>
                                    <li>Stonemasonry</li>
                                </ol>
                            </Card.Body>
                        </Card>
                        {/* Skills */}
                        {/* Review */}
                        <Card className="mb-3">
                            <Card.Header className="  bg-light">
                                <h2 className="">
                                    Reviews (60)
                                </h2>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex gap-2 mb-2 justify-content-lg-end">
                                    <Button
                                        variant="falcon-default"
                                        size="sm"
                                        onClick={handleShow1}
                                    >
                                        Write Review
                                    </Button>
                                    <div>
                                        <Form.Select className="cursor-pointer" size="sm" defaultValue="">
                                            <option value="">Sort by</option>
                                            <option value="oldest">Old</option>
                                            <option value="newest">New</option>
                                            <option value="name">A-Z</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div>
                                    <Form.Label>Filter By:</Form.Label>
                                    <div title="Excellent">
                                        <Form.Check type="checkbox" className="mb-0">
                                            <Form.Check.Input
                                                type="checkbox"
                                                className="cursor-pointer"
                                            />
                                            <Form.Check.Label className="mb-0 text-700">
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                    <div title="Awesome">
                                        <Form.Check type="checkbox" className="mb-0">
                                            <Form.Check.Input
                                                type="checkbox"
                                                className="cursor-pointer"
                                            />
                                            <Form.Check.Label className="mb-0 text-700">
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                    <div title="Average">
                                        <Form.Check type="checkbox" className="mb-0">
                                            <Form.Check.Input
                                                type="checkbox"
                                                className="cursor-pointer"
                                            />
                                            <Form.Check.Label className="mb-0 text-700">
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                    <div title="Good">
                                        <Form.Check type="checkbox" className="mb-0">
                                            <Form.Check.Input
                                                type="checkbox"
                                                className="cursor-pointer"
                                            />
                                            <Form.Check.Label className="mb-0 text-700">

                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                    <div title="Poor">
                                        <Form.Check type="checkbox" className="mb-0">
                                            <Form.Check.Input
                                                type="checkbox"
                                                className="cursor-pointer"
                                            />
                                            <Form.Check.Label className="mb-0 text-700">

                                                <FaStar color="#f68f57" />
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="mb-3">
                            {/*  */}
                            <Modal
                                show={show1}
                                onHide={() => setShow1(false)}
                                dialogClassName="modal-lg modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <Modal.Header closeButton>
                                    <h1 class="">Write your Review</h1>
                                </Modal.Header>
                                <Modal.Body>

                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="rating">
                                            <Form.Label>Rating</Form.Label>
                                            <div className="star-rating">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <FaStar
                                                        key={star}
                                                        className={star <= rating ? 'star selected' : 'star'}
                                                        onClick={() => handleStarClick(star)}
                                                    />
                                                ))}
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="name">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your name"
                                                value={name}
                                                onChange={handleNameChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={handleEmailChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="reviewText">
                                            <Form.Label>Write your review</Form.Label>
                                            {/* <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value={reviewText}
                                                onChange={handleReviewChange}
                                                required
                                            /> */}
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                initialValue=""
                                                init={{

                                                    height: 200,
                                                    menubar: false,
                                                    // plugins: [
                                                    //     'advlist autolink lists link image charmap print preview anchor',
                                                    //     'searchreplace visualblocks code fullscreen',
                                                    //     'insertdatetime media table paste code help wordcount'
                                                    // ],
                                                    toolbar: 'undo redo | formatselect | ' +
                                                        'bold italic  | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat ',
                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                }}
                                            />
                                        </Form.Group>

                                        <div className="d-flex justify-content-end mt-3">
                                            <Button type="submit" onClick={handleClose1}>Submit</Button>
                                        </div>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                            {/* Review */}
                            {/*  */}
                            <Card.Body className="py-0">

                                <Row className='g-3 align-items-center text-center text-md-start py-3'>
                                    <Col>
                                        <Row>
                                            <Col xs={12}>
                                                <div class="avatar avatar-2xl">
                                                    <div class="avatar-name rounded-circle"><span>EW</span>
                                                    </div>
                                                </div>
                                                <h6 className="text-primary fs-0">
                                                    Emma Watson
                                                </h6>
                                                <div>
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="gray" width="20" height="20" />
                                                </div>
                                            </Col>
                                            <Col md={10}>
                                                <p className=" text-800">
                                                    Excellent Course for any beginner like me :p
                                                    The trainer was very generous and helped whenever DMed.
                                                </p>
                                            </Col>
                                            <Col xs={12}>

                                                <div
                                                    className="d-flex align-items-center
                                                    flex-column
                                                     flex-md-row gap-2
                                                      text-600"
                                                >
                                                    <p className="text-900 fs--1 mb-0">3 Days Ago</p>
                                                    <p style={{ fontSize: "14px" }} className="fw-semibold mb-0 ms-1">
                                                        230 people found this helpful
                                                    </p>
                                                </div>
                                                {/* </Flex> */}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="auto" className="d-flex justify-content-center gap-2">
                                        <Button
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item focus-bg-primary"
                                        >
                                            <FontAwesomeIcon icon="thumbs-up" className="fs--2" />
                                        </Button>
                                        <Button
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item focus-bg-secondary"
                                        >
                                            <FontAwesomeIcon
                                                icon="thumbs-up"
                                                transform="rotate-180"
                                                className="fs--2"
                                            />
                                        </Button>
                                    </Col>
                                </Row>
                                <Card className="mb-3" style={{ background: '#f3f3f3' }}>
                                    <Card.Header className="d-flex justify-content-between">
                                        <h6 className="fw-bold fs-0"><Icon icon="mdi:reply-outline" width="24" height="24" hFlip={true} vFlip={true} />Reply from MAI</h6>
                                        <span className="fs--1 fw-semibold">01/01/2023</span>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className=" ">
                                            Thank you for this awesome review, Michael.
                                            We're so pleased to know that you love your new Urban Concrete Quartz worktops and have had a truly positive experience from start to finish with MAI.com.

                                            Thank you for choosing us.
                                            We would love to serve your friends and family as well.


                                            Thanks and regards,
                                            Team MAI

                                        </p>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                            <Divider />
                            {/*  */}
                            <Card.Body className="py-0">
                                <Row className='g-3 align-items-center text-center text-md-start py-3'>
                                    <Col>
                                        <Row>
                                            <Col xs={12}>
                                                <div class="avatar avatar-2xl">
                                                    <div class="avatar-name rounded-circle"><span>L</span>
                                                    </div>
                                                </div>
                                                <h6 className="text-primary fs-0">
                                                    Lee
                                                </h6>
                                                <div>
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="gray" width="20" height="20" />
                                                </div>
                                            </Col>
                                            <Col md={10}>
                                                <p className=" text-800">
                                                    Excellent Course for any beginner like me :p
                                                    The trainer was very generous and helped whenever DMed.
                                                </p>
                                            </Col>
                                            <Col xs={12}>

                                                <div
                                                    className="d-flex align-items-center
                                                    flex-column
                                                     flex-md-row gap-2
                                                      text-600"
                                                >
                                                    <p className=" text-900 fs--1 mb-0">3 Days Ago</p>
                                                    <p style={{ fontSize: "14px" }} className="fw-semibold mb-0 ms-1">
                                                        230 people found this helpful
                                                    </p>
                                                </div>
                                                {/* </Flex> */}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="auto" className="d-flex justify-content-center gap-2">
                                        <Button
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item focus-bg-primary"
                                        >
                                            <FontAwesomeIcon icon="thumbs-up" className="fs--2" />
                                        </Button>
                                        <Button
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item focus-bg-secondary"
                                        >
                                            <FontAwesomeIcon
                                                icon="thumbs-up"
                                                transform="rotate-180"
                                                className="fs--2"
                                            />
                                        </Button>
                                    </Col>
                                </Row>
                                <Card className="mb-3" style={{ background: '#f3f3f3' }}>
                                    <Card.Header className="d-flex justify-content-between">
                                        <h5 className="fw-bold fs-0"><Icon icon="mdi:reply-outline" width="24" height="24" hFlip={true} vFlip={true} />Reply from MAI</h5>
                                        <span className="fs--1 fw-semibold">01/01/2023</span>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className=" ">
                                            Thank you for this awesome review, Michael.
                                            We're so pleased to know that you love your new Urban Concrete Quartz worktops and have had a truly positive experience from start to finish with MAI.com.

                                            Thank you for choosing us.
                                            We would love to serve your friends and family as well.

                                            Thanks and regards,
                                            Team MAI

                                        </p>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                            <Card.Footer className="bg-light text-end py-2">
                                <p
                                    className="fw-medium mt-2"
                                    role="button"
                                    style={{ color: '#003f6b' }}
                                >
                                    See All Reviews
                                </p>

                            </Card.Footer>
                        </Card>
                        {/*  */}
                    </Col>
                    {/*  */}
                    <Col lg={4} className="container order-lg-0 order-1">
                        <div className="course-details-sticky-sidebar mb-lg-8 mt-xl-n10 pe-xl-4 pe-xxl-7">
                            {/* Plan Your Carrer */}
                            <div className="mt-5 d-none d-lg-block"></div>
                            <Card className="mb-3 mb-lg-0">
                                <Card.Body>
                                    <Row>
                                        <Col md={7} lg={12} className="">
                                            <Button
                                                variant="primary"
                                                size="lg"
                                                onClick={handleShow}
                                                className="mb-3 w-100 fs-0 mt-1"
                                            >
                                                Message Me                                                    </Button>

                                            <Link to="/s/enquiry">
                                                <Button
                                                    style={{ background: '#003f6b' }}
                                                    size="lg"
                                                    className="w-100 fs-0 mt-1"
                                                >
                                                    Request a Quote
                                                </Button>
                                            </Link>

                                        </Col>
                                    </Row>
                                    <hr className="border-top border-dashed" />
                                    <h5 className="fw-bold">Share </h5>
                                    <div className="d-flex justify-content-start mt-4 mt-xxl-0">
                                        <ul className="list-unstyled mb-0 d-flex flex-wrap flex-xxl-column gap-3 justify-content-start">

                                            <div class="d-flex gap-2">
                                                <button class="btn btn-falcon-default icon-item fs--2 icon-item-lg">
                                                    <FontAwesomeIcon style={{ width: '1rem', height: '1rem' }} icon="fa-solid fa-copy" />
                                                </button>
                                                <button class="btn btn-falcon-default icon-item fs--2 icon-item-lg">
                                                    <span class="fs-0 fab fa-facebook-f mr-1 text-primary"></span></button>
                                                <button class="btn btn-falcon-default icon-item fs--2 icon-item-lg">
                                                    <span class="fs-0 fab fa-twitter mr-1 text-twitter"></span>
                                                </button>
                                                <button class="btn btn-falcon-default icon-item fs--2 icon-item-lg">
                                                    <span class="fs-0 fab fa-linkedin-in mr-1 text-info"></span>
                                                </button>
                                            </div>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                            {/*  */}
                        </div>
                    </Col>

                    {/*  */}
                </Row>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row>

            {/*  */}
            {/* Message Me - Modal */}
            < div className='d-flex justify-content-between' >
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-lg modal-90w"

                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Contact Reliant Plumbing and Heating</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className=" fw-semibold">
                                    What's the Message About ?<span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className=" fw-semibold">
                                    Message<span className="text-danger">*</span>
                                </Form.Label>
                                {/* <Form.Control as="textarea" placeholder='Tag Your Description....' rows={8} /> */}
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue=""

                                    init={{

                                        height: 200,
                                        menubar: false,
                                        // plugins: [
                                        //     'advlist autolink lists link image charmap print preview anchor',
                                        //     'searchreplace visualblocks code fullscreen',
                                        //     'insertdatetime media table paste code help wordcount'
                                        // ],
                                        toolbar: 'undo redo | formatselect | ' +
                                            'bold italic  | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat ',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check type="checkbox" className="mb-0 mt-3">
                                    <Form.Check.Input type="checkbox" />
                                    <Form.Check.Label
                                        className="text-700 d-inline"
                                    >
                                        I Agree to the terms and conditions.
                                    </Form.Check.Label>
                                </Form.Check>
                            </Form.Group>
                        </Form>
                        <Button className="m-1  border-0" style={{ background: '#003f6b' }}>
                            attachments
                        </Button>
                        <Button as={Link} to="/Project-owner/login" className="m-1  border-0" style={{ background: '#003f6b' }}>
                            SEND
                        </Button>
                    </Modal.Body>
                </Modal>
            </div >

            {/*  */}
        </>
    )
}
export default ServiceInformation

