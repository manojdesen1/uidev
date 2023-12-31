// import React, { useState, useEffect } from "react";
// import AiMenu from "../Menubar/AiMenu";
// import AiHeader from "../Header/AiHeader";
// import { createData, getAllData } from "../../Services/ProxyService";
// import toast, { Toaster } from 'react-hot-toast';
// import { Link } from "react-router-dom";
// function CategoryCommission() {

//     const [form, setform] = useState([]);
//     const [form1, setForm1] = useState({ update_old_values: false });
//     const [category, setcategory] = useState([]);
//     const [service, setservice] = useState([]);

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

//     const Productsdata = async () => {
//         const response = await getAllData("master/product_category")
//         setcategory(response.data.master[0].data)
//     }

//     const Servicedata = async () => {
//         const response = await getAllData("master/service_category")
//         setservice(response.data.master[0].data)
//     }

//     useEffect(() => {
//         Productsdata()
//         Servicedata()
//     }, [])

//     const AddCCcommission = async () => {
//         const GBcommdata = {
//             commission_type: form.commission_type,
//             commission_category: 3,
//             email: "",
//             first_commission: form.first_commission,
//             second_commission: form.second_commission,
//             category: form.category,
//             option: form.option,
//             status: true,
//             update_old_values: form1.update_old_values,
//             created_by: "1",
//         }
//         const response = await createData("commission/new", GBcommdata)
//         if (response.status === 201) {
//             toast.success('Successfully Category Commission Added')
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
//         AddCCcommission();
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
//                             <div>
//                                 <p className="ms-3 ai-sub-title">Commission / Category Commission</p>
//                                 <h4 className="ms-3">Category Commission</h4>
//                                 <p className="ms-3 ai-tit-desc">Here are setting for Category Commission</p>
//                                 <div className="imp-note">
//                                     <p className="not-tit">Note:</p>
//                                     <ul type="none">
//                                         <li id="note-list">% - In this type of commission,the
//                                             percentage amount will be deducted from the base price of the product.</li>
//                                         <li id="note-list">
//                                             Fixed -In this type of commission ,
//                                             the fixed amount will be deducted from the base price.
//                                         </li>
//                                         <li id="note-list">% + Fixed - In this type of commission ,
//                                             first the percentage amount will be deducted from the base price of the product
//                                             and then a fixed amount will be deducted from the remaining amount.
//                                         </li>
//                                         <li id="note-list">
//                                             Fixed + % - In this type of commission , first a fixed amount will be deducted from the base price
//                                             and then the percentage amount will be deducted from the remaining price.
//                                         </li>
//                                     </ul>
//                                 </div>
//                                <form onSubmit={(e) => { formsubmit(e) }}>
//                                <div className="global-com-setting-div">
//                                     <p className="global-com-setting-heading">Category Commission</p>
//                                     <p className="global-desc">Here are the setting for category commission</p>
//                                     <span className="category">Select Category Type</span>
//                                     <br></br>
//                                     <select required name="category" onChange={(e) => { handlechange(e) }} id="aipro-service-comm">
//                                         <option value="">Choose the Option</option>
//                                         <option value="Products">Products</option>
//                                         <option value="Services">Services</option>
//                                     </select>
//                                     {form.category == "Products" ? (
//                                         <>
//                                             <span className="category-service">Select Product Category</span>
//                                             <select  value={form.option} required name="option" onChange={(e) => { handlechange(e) }} id="aipro-service-comm">
//                                                 <option value="">Choose the Option</option>
//                                                 {category.map((data, key) => (
//                                                     <option key={key} value={data.name}>{data.name}</option>
//                                                 ))}
//                                             </select>
//                                         </>

//                                     ) : ( "" )}

//                                     {form.category == "Services" ? (
//                                         <>
//                                             <span className="category-service">Select Service Category</span>
//                                             <select  value={form.option} required name="option" onChange={(e) => { handlechange(e) }} id="aipro-service-comm">
//                                                 <option>Choose the Option</option>
//                                                 {service.map((data, key) => (
//                                                     <option key={key} value={data.value}>{data.value}</option>
//                                                 ))}
//                                             </select>
//                                         </>
//                                     ) : ""}

//                                     <br></br>
//                                     <br></br>
//                                     <p className="gct">Category Commission Type</p>
//                                     <select value={form.commission_type} required name="commission_type" onChange={(e) => { handlechange(e) }} className="cgct">
//                                         <option value="">Choose category commission type</option>
//                                         <option value="%">%</option>
//                                         <option value="Fixed">Fixed</option>
//                                         <option value="% + Fixed">% + Fixed</option>
//                                         <option value="Fixed + %">Fixed + %</option>
//                                     </select>

//                                     {form.commission_type == "%" || form.commission_type == "Fixed" ? (
//                                         <>
//                                             <label className="label">Category Commission</label>
//                                             <input type="number" required value={form.first_commission} id="fgc" name="first_commission" onChange={(e) => { handlechange(e) }} /><button className="per-btn-dis fix-btn-dis" disabled>{form.commission_type}</button>

//                                         </>
//                                     ) : ""}
//                                     {form.commission_type == "% + Fixed" || form.commission_type == "Fixed + %" ? (
// <>
//     <label className="label">Category Commission</label>
//     <input type="number" required value={form.first_commission} name="first_commission" onChange={(e) => { handlechange(e) }} id="fgc" /><button className="per-btn-dis" disabled>%</button>

//     <label className="label">Second Category Commission</label>
//     <input type="number" id="fgc" required value={form.second_commission} name="second_commission" onChange={(e) => { handlechange(e) }} /><button className="fix-btn-dis" disabled>FIXED</button>

// </>
//                                     ) : ""}
//                                     <p className="upd-titl">UPDATE EARLIER PRODUCT PRICE</p>
//                                     <div className="form-check form-switch">
//                                         <input
//                                             name="update_old_values"
//                                             checked={form1.update_old_values}
//                                             onChange={handlechange1}
//                                             className="form-check-input"
//                                             type="checkbox"
//                                             role="switch"
//                                             id="flexSwitchCheckDefault"
//                                         />                                        <br></br>
//                                         <p className="switch-des">If you enable this option , all the prices of exisiting products will change according to the given commission value</p>
//                                         <Link to="allcommission" role="button">
//                                                 <button type="submit" className="create-acc-btn-1">Save Changes</button>
//                                             </Link>
//                                     </div>
//                                 </div>
//                                </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Toaster />
//         </>
//     )
// }
// export default CategoryCommission

import React from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";

function CategoryCommission() {
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
                            <h2>Category Commission</h2>
                            <p className="mt-2">Here are the setting for Category Commission</p>
                        </Card.Header>
                        <Card.Body>
                            <Row className="g-3">
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            Category Commission Type
                                        </Form.Label>
                                        <Form.Select
                                            // value={form.commission_type}
                                            required name="commission_type"
                                            // onChange={(e) => { handlechange(e) }}
                                            className="">
                                            <option value="">Choose Category Commission type</option>
                                            <option value="%">%</option>
                                            <option value="Fixed">Fixed</option>
                                            <option value="% + Fixed">% + Fixed</option>
                                            <option value="Fixed + %">Fixed + %</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            Select Category
                                        </Form.Label>
                                        <Form.Select
                                            // value={form.commission_type}
                                            required name="commission_type"
                                            // onChange={(e) => { handlechange(e) }}
                                            className="">
                                            <option value="">Select</option>
                                            <option value="">Product</option>
                                            <option value="">Services</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Category Commission</Form.Label>
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
                                <Form.Label>Second Category Commission</Form.Label>
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
export default CategoryCommission