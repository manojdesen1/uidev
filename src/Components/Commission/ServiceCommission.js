// import React, { useState } from "react";
// import AiMenu from "../Menubar/AiMenu";
// import AiHeader from "../Header/AiHeader";
// import { createData } from "../../Services/ProxyService";
// import toast, { Toaster } from 'react-hot-toast';
// function ServiceCommission() {

//     const [form, setform] = useState([]);
//     const [form1, setForm1] = useState({ update_old_values: false });

//     const handlechange = (e) => {
//         const myData = { ...form };
//         myData[e.target.name] = e.target.value;
//         setform(myData)
//     }
//     const handlechange1 = (e) => {
//         setForm1({
//             ...form1,
//             [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
//         });
//     };
//     const AddSRcommission = async () => {
//         const GBcommdata = {
//             commission_type: form.commission_type,
//             commission_category: 2,
//             email: "",
//             first_commission: form.first_commission,
//             second_commission: form.second_commission,
//             category: "default",
//             option: "default",
//             status: true,
//             update_old_values: form1.update_old_values,
//             created_by: "1",
//         }
//         const response = await createData("commission/new", GBcommdata)
//         if (response.status === 201) {
//             toast.success('Successfully Service Commission Added')
//             setform("")
//             setForm1("")
//             cleardata()
//         } else {
//             toast.error('Something went wrong')
//         }
//         console.log(response)
//     }

//     const formsubmit = (e) => {
//         e.preventDefault()
//         AddSRcommission();
//         setForm1("")
//     }

//     const cleardata = () => {
//         setform({
//             commission_type: "",
//             email: "",
//             first_commission: "",
//             second_commission: "",
//             category: "",
//             option: "",
//             update_old_values: false,

//         })
//     }

//     return (
//         <>
//             <div className="row">
//                 <div className="col-2">
//                     <AiMenu />
//                 </div>
//                 <div className="col-10">
//                     <div className="row">
//                         <div className="col-12">
//                             <AiHeader />
//                         </div>
//                         <div className="col-12 page-bg">
//                             <div >
//                                 <p className="capital-title">Commission / Service Commission</p>
//                                 <h4 className="ms-3 mt-1">Service Commission</h4>
//                                 <p className="med-sub-title">Here are setting for Service Commission</p>
//                                 <div className="imp-note">
//                                     <p className="not-tit">Note:</p>
//                                     <ul type="none">
//                                         <li className="note-list">% - In this type of commission,the
//                                             percentage amount will be deducted from the base price of the product.</li>
//                                         <li className="note-list">
//                                             Fixed -In this type of commission ,
//                                             the fixed amount will be deducted from the base price.
//                                         </li>
//                                         <li className="note-list">% + Fixed - In this type of commission ,
//                                             first the percentage amount will be deducted from the base price of the product
//                                             and then a fixed amount will be deducted from the remaining amount.
//                                         </li>
//                                         <li className="note-list">
//                                             Fixed + % - In this type of commission , first a fixed amount will be deducted from the base price
//                                             and then the percentage amount will be deducted from the remaining price.
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <form onSubmit={(e) => { formsubmit(e) }}>
//                                     <div className="global-com-setting-div mt-4">
//                                         <p className="head-title ms-3 pt-2">Service Commission</p>
//                                         <p className="med-sub-title">Here are the setting for service commission</p>
//                                         <p className="sub-topic-title">Service Commission Type</p>
//                                         <select value={form.commission_type} required name="commission_type" onChange={(e) => { handlechange(e) }} className="Dropdown-box-600">
//                                             <option value="">Choose service commission type</option>
//                                             <option value="%">%</option>
//                                             <option value="Fixed">Fixed</option>
//                                             <option value="% + Fixed">% + Fixed</option>
//                                             <option value="Fixed + %">Fixed + %</option>
//                                         </select>

//                                         {form.commission_type == "%" || form.commission_type == "Fixed" ? (
//                                             <>
//                                                 <label className="label">Service Commission</label>
//                                                 <input type="number" required value={form.first_commission} className="input-focus input-box-600" name="first_commission" onChange={(e) => { handlechange(e) }} /><button className="per-btn-dis" disabled>{form.commission_type}</button>

//                                             </>
//                                         ) : ""}
//                                         {form.commission_type == "% + Fixed" || form.commission_type == "Fixed + %" ? (
//                                             <>
//                                                 <label className="label">Service Commission</label>
//                                                 <input type="number" required value={form.first_commission} name="first_commission" onChange={(e) => { handlechange(e) }} className="input-focus input-box-600" /><button className="per-btn-dis" disabled>%</button>

//                                                 <label className="label">Second Service Commission</label>
//                                                 <input type="number" className="input-focus input-box-600" required value={form.second_commission} name="second_commission" onChange={(e) => { handlechange(e) }} /><button className="per-btn-dis" disabled>FIXED</button>

//                                             </>
//                                         ) : ""}


//                                         <p className="upd-titl">UPDATE EARLIER PRODUCT PRICE</p>
//                                         <div className="form-check form-switch">
//                                             <input

//                                                 name="update_old_values"
//                                                 checked={form1.update_old_values}
//                                                 onChange={handlechange1}
//                                                 className="form-check-input"
//                                                 type="checkbox"
//                                                 role="switch"
//                                                 id="flexSwitchCheckDefault"
//                                             />
//                                         </div>
//                                         <p className="para-text margin-20">If you enable this option , all the prices of exisiting products will change according to the given commission value</p>
//                                         <button type="submit" className="create-btn">Save Changes</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Toaster />
//         </>
//     )
// }
// export default ServiceCommission




import React from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";

function ServiceCommission() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader />
                </Col>
                <Col lg={12} className="mt-4">
                    <Card className="ms-3 me-3 mb-3">
                        <Card.Header as="h2" className='bg-light text-justify text-uppercase'>Note</Card.Header>
                        <Card.Body className="">
                            <ul>
                                <li style={{  width: '100%' }} className="">% - In this type of commission,the
                                    percentage amount will be deducted from the base price of the product.</li>
                                <li style={{  width: '100%' }} className="">
                                    Fixed -In this type of commission ,
                                    the fixed amount will be deducted from the base price.
                                </li>
                                <li style={{  width: '100%' }} className="">% + Fixed - In this type of commission ,
                                    first the percentage amount will be deducted from the base price of the product
                                    and then a fixed amount will be deducted from the remaining amount.
                                </li>
                                <li style={{  width: '100%' }} className="">
                                    Fixed + % - In this type of commission , first a fixed amount will be deducted from the base price
                                    and then the percentage amount will be deducted from the remaining price.
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className=" ms-3 me-3 mb-3">
                        <Card.Header className="bg-light">
                            <h2>Service Commission</h2>
                            <p className="mt-2 ">Here are the setting for Service Commission</p>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    Service Commission Type
                                </Form.Label>
                                <Form.Select
                                    // value={form.commission_type}
                                    required name="commission_type"
                                    // onChange={(e) => { handlechange(e) }}
                                    className="">
                                    <option value="">Choose Service Commission type</option>
                                    <option value="%">%</option>
                                    <option value="Fixed">Fixed</option>
                                    <option value="% + Fixed">% + Fixed</option>
                                    <option value="Fixed + %">Fixed + %</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Service Commission</Form.Label>
                                <div className="mb-3">
                                    <InputGroup>
                                        <Form.Control type="number"
                                            required
                                            name="first_commission"
                                        />
                                        <Button>
                                            %    {/* {form.commission_type} */}
                                        </Button>
                                    </InputGroup>
                                </div>
                                <div className="mb-3">
                                    <InputGroup>
                                        <Form.Control type="number"
                                            required
                                            name="first_commission"
                                        />
                                        <Button>
                                            Fixed    {/* {form.commission_type} */}
                                        </Button>
                                    </InputGroup>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Second Service Commission</Form.Label>
                                <div className="mb-3">
                                    <InputGroup>
                                        <Form.Control type="number"
                                            required
                                            name="first_commission"
                                        />
                                        <Button>
                                            % + Fixed  {/* {form.commission_type} */}
                                        </Button>
                                    </InputGroup>
                                </div>
                                <div className="mb-3">
                                    <InputGroup>
                                        <Form.Control type="number"
                                            required
                                            name="first_commission"
                                        />
                                        <Button>
                                            Fixed + %    {/* {form.commission_type} */}
                                        </Button>
                                    </InputGroup>
                                </div>
                            </Form.Group>
                            <h3 className="mt-3">UPDATE EARLIER PRODUCT PRICE</h3>
                            <div className="form-check form-switch">
                                <input
                                    name="update_old_values"
                                    // checked={form1.update_old_values}
                                    // onChange={handlechange1}
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="custom-switch"
                                />
                            </div>
                            <p className="fs--1 fw-semibold">If you enable this option , all the prices of exisiting products will change according to the given commission value</p>
                            <Button type="submit" variant="success">Save Changes</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default ServiceCommission