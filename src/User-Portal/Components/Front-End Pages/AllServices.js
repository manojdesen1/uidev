import React from "react";
import { Card, Button, DropdownButton, Dropdown, Row, Col } from "react-bootstrap";
import ServiceAdvancedTable from "../../TemplateAssets/AdvanceTables/ServiceAdvanceTable";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function AllServices() {
    return (
        <>
            <Card className="mb-3">
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h4 className="mt-2">My Services</h4>
                        </div>
                        <div>
                            <Row>
                                <Col lg={12}>
                                    <Link to="/user/addservices">
                                        <Button className='m-1 bg-success border-success w-100'>Add Services</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="mt-3">
                        <ServiceAdvancedTable />
                    </div>
                </Card.Body>
            </Card>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default AllServices