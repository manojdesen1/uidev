import React, { useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Modal, Col, Card, Dropdown, Button, Form } from "react-bootstrap";
import CardDropdown from "../common/CardDropdown";
import { Icon } from "@iconify/react";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import InvoiceTable from "./InvoiceTable";
import file from '../../Components/Projectimages/BathroomFitting.jpg'
import RaiseInvoiceTable from "./OwnerInvoice";
const InvoiceTableCard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);




    const columns = [
        {
            accessor: 'id',
            Header: 'Invoice No'
        },
        {
            accessor: 'itemName',
            Header: 'Item Name'
        },
        {
            accessor: 'date',
            Header: 'Date'
        },
        {
            accessor: 'description',
            Header: 'Description'
        },
        {
            accessor: 'amount',
            Header: 'Amount'
        },
        {
            accessor: 'status',
            Header: 'Status'
        },
        {
            accessor: 'action',
            Header: 'Action'
        },
    ];
    const data = [
        {
            id: 'MAI/INV/2737',
            itemName: 'CALACATTA LIGHT QUARTZ',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-success">Paid</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow2}>View</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>
            </CardDropdown>,
        },
        {
            id: 'MAI/INV/2737',
            itemName: 'CALACATTA LIGHT QUARTZ',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-warning">New</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow2}>View</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>
            </CardDropdown>,
        },
        {
            id: 'MAI/INV/2737',
            itemName: 'CALACATTA LIGHT QUARTZ',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-danger">Rejected</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>
            </CardDropdown>,
        }
    ]

    function BulAction({ selectedRowIds }) {
        return (
            <>
                <Row className="flex-between-center mb-3">
                    <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                        {/* <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                            {
                                Object.keys(selectedRowIds).length > 0 ?
                                    'You have selected ' + Object.keys(selectedRowIds).length + ' Enquiries'
                                    :
                                    ''
                            }
                        </h5> */}
                    </Col>
                    {/* <Row className="flex-end-center mt-2 mb-3">
                            <Col xs="auto">
                                <AdvanceTableSearchBox table />
                            </Col>
                        </Row> */}
                    <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
                        {Object.keys(selectedRowIds).length > 0 ? (
                            <div className="d-flex">

                            </div>
                        ) : (
                            <div id="orders-actions">

                            </div>
                        )}
                    </Col>
                </Row>
            </>
        );
    };

    return (
        <>
            <Card className="mb-3 mt-4 btn-reveal-trigger h-100">
                <Card.Header className="d-flex flex-between-center bg-light ">
                    <h5 className="text-capitalize">
                        Invoice
                    </h5>

                </Card.Header>
                <Card.Body>
                    <AdvanceTableWrapper
                        columns={columns}
                        data={data}
                        sortable
                        pagination
                        perPage={5}
                        selection
                        selectionColumnWidth={30}
                    >
                        <BulAction table />
                        <AdvanceTable
                            table
                            headerClassName="bg-200 text-900 text-nowrap align-middle"
                            rowClassName="align-middle white-space-nowrap"
                            tableProps={{
                                striped: true,
                                className: 'fs--1 mb-0 overflow-hidden'
                            }}
                        />
                        <div className="mt-3">
                            <AdvanceTableFooter
                                rowCount={data.length}
                                table
                                rowInfo
                                navButtons
                                rowsPerPageSelection
                            />
                        </div>
                    </AdvanceTableWrapper>
                </Card.Body>
            </Card>

            {/* Invoice Modal */}
            <Modal
                show={show2}
                onHide={() => setShow2(false)}
                // backdrop="static"
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton className="">
                    {/* <h5>
                        Invoice :<span style={{ fontSize: '14px' }} className="ms-2 text-danger">Project Id : #123456</span>
                    </h5> */}

                </Modal.Header>
                <Modal.Body>
                    <div className="card mb-3">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md">
                                        <h5 className="mb-2 mb-md-0"># MAI/INV/2737</h5>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-falcon-success btn-sm mb-2 me-1 mb-sm-0" type="button">
                                            Download
                                        </button>
                                        <button className="btn btn-falcon-default btn-sm me-1 mb-2 mb-sm-0" type="button">
                                            <span className="fas fa-print me-1"> </span>
                                            Print
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row align-items-center text-center mb-3">
                                    <div className="col-sm-6 text-sm-start">
                                        {/* <img src="../../assets/img/logos/logo-invoice.png" alt="invoice" width="150" /> */}
                                        <h1 style={{ color: '#003f6b' }}>MAI</h1>
                                        <p style={{ color: '#003f6b' }}>Myproject.ai</p>
                                        <h6 className="">From,</h6>
                                        <h6>Jagan</h6>
                                        <p className="fs--1 mb-0">156 University Ave, Toronto<br></br>On, Canada, M5H 2H7</p>
                                    </div>

                                    <div className="col-12">
                                        <hr></hr>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-500">Invoice to</h6>
                                        <h5>Peter Leverkus</h5>
                                        <p className="fs--1">1954 Bloor Street West<br></br>Torronto ON, M6P 3K9<br></br>Canada</p>
                                    </div>
                                    <div className="col-sm-auto ms-auto">
                                        <div className="table-responsive">
                                            <table className="table table-sm table-borderless fs--1">
                                                <tbody>
                                                    <tr>
                                                        <th className="text-sm-end">Invoice No:</th>
                                                        <td># MAI/EST/2737</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-sm-end">Enquiry Number:</th>
                                                        <td>#2737</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-sm-end">Invoice Date:</th>
                                                        <td>2018-09-25</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-sm-end">Payment Status:</th>
                                                        <td><span className="badge bg-success">Paid</span></td>
                                                    </tr>
                                                    <tr className="alert alert-success fw-bold">
                                                        <th className="text-sm-end">Amount:</th>
                                                        <td>£ 19688.40</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive scrollbar mt-4 fs--1">
                                    <table className="table table-striped border-bottom">
                                        <thead className="light">
                                            <tr className="bg-primary text-white dark__bg-1000">
                                                <th className="border-0">Products</th>
                                                <th className="border-0 text-center">Quantity</th>
                                                <th className="border-0 text-end">Rate</th>
                                                <th className="border-0 text-end">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="align-middle">
                                                    <h6 className="mb-0 text-nowrap">Platinum web hosting package</h6>
                                                    <p className="mb-0">Down 35mb, Up 100mb</p>
                                                </td>
                                                <td className="align-middle text-center">2</td>
                                                <td className="align-middle text-end">£ 65.00</td>
                                                <td className="align-middle text-end">£ 130.00</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">
                                                    <h6 className="mb-0 text-nowrap">2 Page website design</h6>
                                                    <p className="mb-0">Includes basic wireframes and responsive templates</p>
                                                </td>
                                                <td className="align-middle text-center">1</td>
                                                <td className="align-middle text-end">£ 2,100.00</td>
                                                <td className="align-middle text-end">£ 2,100.00</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">
                                                    <h6 className="mb-0 text-nowrap">Mobile App Development</h6>
                                                    <p className="mb-0">Includes responsive navigation</p>
                                                </td>
                                                <td className="align-middle text-center">8</td>
                                                <td className="align-middle text-end">£ 5,00.00</td>
                                                <td className="align-middle text-end">£ 4,000.00</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">
                                                    <h6 className="mb-0 text-nowrap">Web App Development</h6>
                                                    <p className="mb-0">Includes react spa</p>
                                                </td>
                                                <td className="align-middle text-center">6</td>
                                                <td className="align-middle text-end">£ 2,000.00</td>
                                                <td className="align-middle text-end">£ 12,000.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row justify-content-end">
                                    <div className="col-auto">
                                        <table className="table table-sm table-borderless fs--1 text-end">
                                            <tbody><tr>
                                                <th className="text-900">Subtotal:</th>
                                                <td className="fw-semi-bold">£ 18,230.00 </td>
                                            </tr>
                                                <tr>
                                                    <th className="text-900">Tax 8%:</th>
                                                    <td className="fw-semi-bold">£ 1458.40</td>
                                                </tr>
                                                <tr className="border-top">
                                                    <th className="text-900">Total:</th>
                                                    <td className="fw-semi-bold">£ 19688.40</td>
                                                </tr>
                                                <tr className="border-top border-top-2 fw-bolder text-900">
                                                    <th>Amount Due:</th>
                                                    <td>£ 19688.40</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-light">
                                <p className="fs--1 mb-0"><strong>Notes: </strong>We really appreciate your business and if there’s anything else we can do, please let us know!</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Invoice Modal */}
        </>
    )
}
export default InvoiceTableCard
