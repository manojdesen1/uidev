import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllData } from "../../../../Services/ProxyService";
import ProjectOwnerLandingPage from '../ProjectOwnerLandingPage'
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
function OpenProjectCard() {

    const [jobs, setJobs] = useState([])

    const getJobList = async () => {
        const response = await getAllData('jobs/all');
        setJobs(response.data.jobs);
    }
    useEffect(() => {
        getJobList()
    }, [])

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <ProjectOwnerLandingPage />
                </Col>
                <Col lg={12}>
                    <h4 className="ms-5">Open Projects</h4>
                    <Card className="m-5 d-none">
                        <Card.Body>
                            <div className="mt-4 d-flex justify-content-center">
                                <h3 className="text-center">Please Post a Project Here</h3>
                            </div>
                            <div className="mt-4 d-flex justify-content-center">
                                <Link to="/postjob">
                                    <Button className="btn  text-white btn-outline-success">Post Project</Button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>

                    {jobs.map((data, key) => (
                        <Card className="me-5 ms-5 mt-4 mb-3" key={`jobs_${key}`}>
                            <Card.Header className="bg-white">
                            <h6 className="text-uppercase">{data?.project_title}</h6>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col lg={9}>
                                            <p style={{fontSize:'14px'}} className="text-justify">{data?.project_description}</p>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="d-flex justify-content-center mt-5">
                                        <Link to={`jobdetails/${data._id}`} role="button">
                                        <Button className="text-uppercase border-0" style={{background:'#003f6b'}}>View</Button>
                                        </Link>
                                        </div>
                                    </Col>
                                </Row>
                                {/* <table border="1px solid black" className="user-project-details-table">
                                    <tr>
                                        <td className="bg-white tab-clm">
                                            <p className="abt-user">{data?.project_description}
                                            </p>
                                        </td>
                                        <td className="bg-white tab-clm">
                                            <div className="btn-group">
                                                
                                                    <button type="button" className="btn user-prj-view">View</button>
                                                </Link>
                                                <button type="button" className="btn user-prj-dd dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span className="visually-hidden">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </table> */}
                            </Card.Body>
                        </Card>
                    ))}
                </Col >
            </Row >
        </>
    )
}
export default OpenProjectCard