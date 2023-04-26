import React from "react";
import { Row,Col } from "react-bootstrap";

function PostPg() {
    return (
        <Row style={{background: "#7fa6c7"}}>
            <Col className="p-1" lg={12}>
                <Row>
                    <Col lg={6}>
                        <h3 className="text-start text-white m-5">Good Afternoon , Abigail</h3>
                    </Col>
                    <Col lg={6}>
                        <div className="m-5">
                        <span className="ms-3">Open Projects <span className="badge bg-secondary">0</span></span>
                        <span className="ms-3">WorkStreams <span className="badge bg-secondary">2</span></span>
                        <span className="ms-3">Invoice Due <span className="badge bg-secondary">1</span></span>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
export default PostPg