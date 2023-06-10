import React, { useRef, useEffect } from "react";

import interior_design_1 from "../Images/int-design-3.jpg"
import interior_design_2 from "../Images/int-design-3.jpg"
// import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import 'swiper/css';
import { Button, Col, Row, Card, Container } from "react-bootstrap";
import profile from '../Projectimages/Handyman.jpg'
// Import Swiper styles
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import com_work from '../Projectimages/com-work.png'
import wood from '../Images/wood-img.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import Footer from "../Footer/Footer";
function HomePage() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
    }, []);


    return (

        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container>
                    <Col lg={12} className="mt-3">
                        <div className="mt-5 mb-5">
                            {/* Section-1 */}

                            <div data-aos="fade-right" className="row  d-flex justify-content-lg-between justify-content-xl-between align-items-center">
                                <div className="col-md col-lg-5 order-md-2">
                                    <img className="img-fluid  px-md-0 text-end" style={{ borderRadius: '50px 2px' }} src={interior_design_1} alt="" />
                                </div>
                                <div className="col-md mt-3  col-lg-7 col-xl-4">
                                    <h6 className="text-700 text-uppercase">BUILD AWESOME PROPERTIES</h6>
                                    <h1 className="fs-2 text-capitalize fs-sm-4 fs-md-5">Your Abode of Interior and Exterior Experts
                                    </h1>
                                    <p className="" style={{ fontSize: '16px' }}>
                                        We connect you with the most experienced and certified construction professionals who have been creating properties that mesmerise the millions.
                                    </p>
                                    <Button as={Link} to="/Allsellerlist" style={{ background: '#003f6b', border: '0px', borderRadius: '50px 2px' }}>Discover Experts</Button>
                                </div>
                            </div>
                            {/* </motion.div> */}
                        </div>
                        {/* Special Section */}
                        <h1 className="fs-2 mt-5 fs-sm-4 mb-3 fs-md-5">Frequently Bought Materials</h1>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            // centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            // navigation={true}
                            modules={[Autoplay, Pagination]}
                            // onAutoplayTimeLeft={onAutoplayTimeLeft}
                            className="mySwiper mb-5"
                        >
                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Marble Slabs</h5>
                                    {/* <p className="text-light m-2">Hello World</p> */}
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Quartz Slabs</h5>
                                    {/* <p className="text-light m-2">Hello World</p> */}
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Sinks</h5>
                                    {/* <p className="text-light m-2">Hello World</p> */}
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Quartzite Slabs</h5>
                                    {/* <p className="text-light m-2">Hello World</p> */}
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Granite Slabs</h5>
                                    {/* <p className="text-light m-2">Hello World</p> */}
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Semi-Precious</h5>
                                    {/* <p className="text-light m-2">Hello World</p> */}
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Tiles</h5>
                                    {/* <p className="text-light m-2">Hello World</p> */}
                                </Link>
                            </SwiperSlide>


                        </Swiper>
                        {/* Section-2 */}

                        <div data-aos="fade-down" className="row mb-5">
                            <h6 className="text-700 text-start text-uppercase">CHECK OUT</h6>
                            <h1 className="fs-2 text-start fs-sm-4 fs-md-5">Popularly Enquired Projects</h1>
                            <div className=" col-lg-4 col-md-4 mt-2 mt-lg-0">

                                <div style={{ borderRadius: '50px 2px' }} className=" card card-span h-100">
                                    <div className=" card-body pt-4 pb-3">
                                        <p style={{ fontSize: '20px' }} className="mb-2 fw-semibold ">Kitchen Worktops</p>
                                        <p>Long lasting, easy maintenance, durable countertops</p>
                                    </div>
                                </div>

                            </div>
                            <div className=" col-lg-4 col-md-4 mt-3 mt-lg-0">
                                {/* <Link to="/productlist" className="text-900"> */}
                                <div style={{ borderRadius: '50px 2px' }} className=" card card-span h-100">
                                    <div className=" card-body pt-4 pb-3">
                                        <p style={{ fontSize: '20px' }} className="mb-2 fw-semibold ">Bathroom Interiors</p>
                                        <p>Highly moisture-resistant wall claddings and vanity tops</p>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </div>
                            <div className=" col-lg-4 col-md-4 mt-3 mt-lg-0">
                                {/* <Link to="/servicelist" className="text-900"> */}
                                <div style={{ borderRadius: '50px 2px' }} className=" card card-span h-100">
                                    <div className=" card-body pt-4 pb-3 ">
                                        <p style={{ fontSize: '20px' }} className="mb-2 fw-semibold ">Reception Desks</p>
                                        <p>Trendy and classy stone surfaces
                                        </p>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </div>
                        </div>
                        {/* Section-3 */}
                        <div data-aos="fade-left" className="row  mb-5 d-flex justify-content-lg-between justify-content-xl-between align-items-center">
                            <div className="col-md  col-lg-5 ">
                                <img className="img-fluid " style={{ borderRadius: '50px 2px' }} src={interior_design_2} alt="" />
                            </div>
                            <div className="col-md mt-3  col-lg-7 col-xl-4">
                                <h6 className="text-700 text-start text-uppercase">DON'T MISS</h6>
                                <h1 className="fs-2 fs-sm-4 fs-md-5">Tempting Discounts</h1>
                                <p style={{ fontSize: '16px' }}>
                                    We keep you updated about unmissable offers from numerous sellers and
                                    traders so that you can grab the best deal from the comfort of your home.
                                </p>
                                <Button style={{ background: '#003f6b', border: '0px', borderRadius: '50px 2px' }}>Check Offers</Button>
                            </div>
                        </div>
                        {/* Section-4 */}
                        <div data-aos="fade-right" >

                            <div className="row  mb-5 d-flex justify-content-lg-between justify-content-xl-between align-items-center">
                                <div className="col-md col-lg-5">
                                    <h6 className="text-700 text-start text-uppercase">SUCCESSFUL TRADE EXPERTS</h6>
                                    <h1 className="fs-2 fs-sm-4 fs-md-5">Choose to become Limitless</h1>
                                    <p style={{ fontSize: '16px' }}>
                                        Do not limit yourself to your local regions. Join our network and connect with millions of customers,
                                        nationwide, who are looking for a variety of services. You are unstoppable, give chance to the bigger
                                        self within you.
                                    </p>
                                    <Button as={Link} to="/freelancer/false" style={{ background: '#003f6b', border: '0px', borderRadius: '50px 2px' }}>Register Your Trade</Button>
                                </div>
                                <div className="col-md  col-lg-5">
                                    <img className="img-fluid " style={{ borderRadius: '50px 2px' }} src={interior_design_2} alt="" />
                                </div>
                            </div>
                            {/* Section-5 */}

                            <div data-aos="fade-left" className="row  mb-5 d-flex justify-content-lg-between justify-content-xl-between align-items-center">
                                <div className="col-md  col-lg-5 ">
                                    <img className="img-fluid " style={{ borderRadius: '50px 2px' }} src={interior_design_2} alt="" />
                                </div>
                                <div className="col-md mt-3  col-lg-7 col-xl-4">
                                    <h6 className="text-700 text-start text-uppercase">UNIQUE IN THE INDUSTRY</h6>
                                    <h1 className="fs-2 fs-sm-4 fs-md-5">2 Way Review Facility</h1>
                                    <p style={{ fontSize: '16px' }}>
                                        Here at MAI, the project owners as well as the traders get fair opportunities to review one another.
                                        This is one of the most-unique advantages of using our platform. This increases the quality of service
                                        being provided as well as puts an insight on the compatibility with the project owner.
                                    </p>
                                    {/* <Button style={{ background: '#003f6b', border: '0px', borderRadius: '50px 2px' }}>Check Offers</Button> */}
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${interior_design_2})` }} data-aos="fade-down" className="row mb-5">
                                <div className="col-12 text-center mt-3 mb-3">
                                    <div style={{ fontSize: '25px' }} className="row text-white fw-bold">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <h2 className="text-white">Projects</h2>
                                            <CountUp end={980} duration={5} separator="," />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <h2 className="text-white">Happy Clients</h2>
                                            <CountUp end={520} duration={5} separator="," />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <h2 className="text-white">Winners</h2>
                                            <CountUp end={330} duration={5} separator="," />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <h2 className="text-white">Recommendations</h2>
                                            <CountUp end={120} duration={5} separator="," />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Section-5 */}
                        <div data-aos="fade-right" className="mb-5 text-center">
                            <h5 className="mb-3 text-700 text-uppercase">STORIES</h5>
                            <div className="col">
                                <h1 className="fs-2 mb-4 fs-sm-4 fs-md-5">See What Our Users Felt</h1>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-xl-12">
                                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                        <SwiperSlide>
                                            <img src={profile} width="100px" height="100px" className="mb-3 rounded-circle" />
                                            <h4>Peter Lverkus<span className="ms-2 text-700" style={{ fontSize: "14px" }}>/CEO at Google Inc.</span></h4>
                                            <div className="d-flex justify-content-center">
                                                <p style={{ width: '50%' }}>
                                                    It is a long established fact that a reader will be distracted by the readable content
                                                    of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={profile} width="100px" height="100px" className="mb-3 rounded-circle" />
                                            <h4>Saravanan<span className="ms-2 text-700" style={{ fontSize: "14px" }}>/CEO at Google Inc.</span></h4>
                                            <div className="d-flex justify-content-center">
                                                <p style={{ width: '50%' }}>
                                                    It is a long established fact that a reader will be distracted by the readable content
                                                    of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        {/* Section-6 */}
                        {/* <div data-aos="fade-up" className="text-center">

                            <h5 className="mb-3 text-700 text-uppercase">Latest News</h5>
                            <div className="col">
                                <h1 className="fs-2 mb-4 fs-sm-4 fs-md-5">From Our Blog</h1>
                            </div>
                            <div className="row mb-5 d-flex justify-content-lg-around justify-content-xl-around align-items-center">
                                <div className="col-md  col-lg-5 mb-3">
                                    <img className="img-fluid " style={{ borderRadius: '50px 2px' }} src={interior_design_2} alt="" />
                                    <h1 className="mt-3 text-start">2020 Interior Design Trends</h1>
                                    <p className="mt-3 text-start">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua,
                                    </p>
                                </div>
                                <div className="col-md  col-lg-5 ">
                                    <img className="img-fluid  " style={{ borderRadius: '50px 2px' }} src={interior_design_2} alt="" />
                                    <h1 className="mt-3 text-start">2020 Interior Design Trends</h1>
                                    <p className="mt-3 text-start">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua,
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </Col>
                </Container>
                <Col>
                    <Footer />
                </Col>
            </Row >
        </>
    )
}
export default HomePage