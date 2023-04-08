import React, { useState } from "react";
import { useEffect } from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { createData, getAllData } from "../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import product_image from '../../Images/employee.png'
function AiFreelancer() {

    const [form, setform] = useState([])
    const [selectedItems, setSelectedItems] = useState([]);
    console.log(selectedItems)
    const [freel, setfreel] = useState([])
    console.log(freel)
    const [skill, setskill] = useState([])

    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        setform(myData)
    }
    // const handleChange1 = (e) => {
    //     const myData = { ...form };
    //     myData[e.target.name] = e.target.checked;
    //     setform(myData);
    // }

    const handleChange1 = (e) => {
        const itemId = parseInt(e.target.value);
        const checked = e.target.checked;

        if (checked) {
            setSelectedItems((prevSelected) => [
                ...prevSelected,
                freel.find((item) => item.id === itemId),
            ]);
        } else {
            setSelectedItems((prevSelected) =>
                prevSelected.filter((item) => item.id !== itemId)
            );
        }
    };

    const AddFreelancer = async () => {
        const productdata = {
            name: form.name + " " + form.lastname,
            type: selectedItems,
            skills: [form.skills],
            shop_name: form.shop_name,
            email: form.email,
            store_address: form.store_address,
            city: "hyderabad",
            zipcode: "500001",
            country: "India",
            // city: form.city,
            // country: form.country,
            // zipcode: form.zipcode,
            contact: form.contact,
            tags: form.tags,
            store_description: form.store_description,
            seller_description: form.seller_description,
            policy: form.policy,
            password: form.password,
            confirm_password: form.confirm_password,
            extra_information: {
                company_name: "test option",
                mobile_number: "test value",
                company_address: "test option",
                varification_doc: "test.jpg",
                id_proof: "test.jpg",
                bank_details: "test.jpg",
                others: "test.jpg",
                ternsandconfition: true
            },
            created_by: "1",
        }
        const response = await createData("seller/new", productdata)
        if (response.status === 201) {
            toast.success('Successfully Freelancer Added')
            setform("")
            cleardata()
        } else {
            toast.error('Something went wrong')
        }
        console.log(response)
    }

    const formsubmit = (e) => {
        e.preventDefault()
        AddFreelancer()
    }

    const freelancetype = async () => {
        const response = await getAllData('master/freelance_type');
        setfreel(response.data.master[0].data);
    }

    const Sellerskills = async () => {
        const response = await getAllData('master/skills');
        setskill(response.data.master[0].data);
    }

    const cleardata = () => {
        setform({
            name: "",
            lastname: "",
            dob: "",
            skills: "",
            billing_address: "",
            shop_name: "",
            email: "",
            store_address: "",
            city: "",
            country: "",
            zipcode: "",
            contact: "",
            tags: "",
            store_description: "",
            seller_description: "",
            policy: "",
            password: "",
            confirm_password: ""
        })
    }

    useEffect(() => {
        freelancetype()
        Sellerskills()
    }, [])

    // Skills



    // Skills









    return (
        <>
            <div className="row">
                <div className="col-2">
                    <AiMenu />
                </div>
                <div className="col-10">
                    <div>
                        <AiHeader />
                        <div className="content-div">
                            <div>
                                <p className="ai-title">Freelancer/Add Freelancer</p>
                                <p className="ai-add-title">Add Freelancer</p>
                                <p className="ai-title-desc">Here you can add your freelancer</p>
                                <br></br>
                                <form onSubmit={(e) => { formsubmit(e) }} className="add-seller-form">
                                    <span className="category">First Name</span> <span className="seller-email">Last Name</span>
                                    <br></br>
                                    <input required name="name" value={form.name} onChange={(e) => { handleChange(e) }} id="aipro-category" type='text' />
                                    <input required name="lastname" value={form.lastname} onChange={(e) => { handleChange(e) }} id="aipro-email" type='text' />
                                    <br></br>
                                    <label>Email</label>
                                    <input required name="email" value={form.email} onChange={(e) => { handleChange(e) }} id="aipro-barcode" type='email' />
                                    <br></br>
                                    <span className="category">Phone Number</span> <span className="dob">Date of Birth</span>
                                    <br></br>
                                    <input required name="contact" value={form.contact} onChange={(e) => { handleChange(e) }} id="aipro-category" type='number' />
                                    <input required name="dob" value={form.dob} onChange={(e) => { handleChange(e) }} id="aipro-email" type='date' />
                                    <br></br>
                                    <span className="category">Company Name</span> <span className="dob">Skills</span>
                                    <br></br>
                                    <input required name="shop_name" value={form.shop_name} onChange={(e) => { handleChange(e) }} id="aipro-category" type='text' />
                                    <input required name="skills" value={form.skills} onChange={(e) => { handleChange(e) }} id="aipro-email" type='text' />
                                    <br></br>
                                    <label>Company Address</label>
                                    <textarea required name="store_address" value={form.store_address} onChange={(e) => { handleChange(e) }} id="aipro-description"></textarea>
                                    <label>
                                        Billing Address <input type='checkbox' id="bill-check" />
                                        <span className="billing-add-note">{' '}address and the billing address are same.</span>
                                    </label>
                                    <textarea required name="billing_address" value={form.sbilling_address} onChange={(e) => { handleChange(e) }} id="aipro-description"></textarea>
                                    <label>Description</label>
                                    <textarea required name="store_description" value={form.store_description} onChange={(e) => { handleChange(e) }} id="aipro-description"></textarea>
                                    <br></br>
                                    <span className="category">Password</span> <span className="seller-email">Confirm Password</span>
                                    <br></br>
                                    <input required name="password" value={form.password} onChange={(e) => { handleChange(e) }} id="aipro-category" type='password' />
                                    <input required name="confirm_password" value={form.confirm_password} onChange={(e) => { handleChange(e) }} id="aipro-email" type='text' />
                                    <br></br>
                                    <input id="terms-conditions" type='checkbox' /><span className="agree-note">You agree to the terms and conditions.</span>
                                    <br></br>
                                    <button type="submit" className="create-acc-btn">Create Account</button>
                                    <Link to="allfreelancer" role="button"><button className="cancel-btn">Cancel</button></Link>
                                </form>
                            </div>
                            <div className="row">
                                <div className="freelance-form-div col-10">
                                    <form className="freelance-form">
                                        <h5 className="form-title">Freelancer Type</h5>
                                        <input type='checkbox' id="ff-chbox" /><span>Fabricators</span>
                                        <br></br>
                                        <input type='checkbox' id="ff-chbox" /><span>Kitchen Designer</span>
                                        <br></br>
                                        <input type='checkbox' id="ff-chbox" /><span>Interior Designer</span>
                                        <br></br>
                                        <input type='checkbox' id="ff-chbox" /><span>Stone Seller</span>
                                        <br></br>
                                        <input type='checkbox' id="ff-chbox" /><span>Slink Manufacture</span>
                                        <br></br>
                                        <input type='checkbox' id="ff-chbox" /><span>Tap Seller</span>
                                        <br></br>
                                        <input type='checkbox' id="ff-chbox" /><span>Construction Company</span>
                                    </form>
                                </div>
                                <div className="freelance-form-div col-12">
                                    <form className="freelance-form1">
                                        <h5 className="form-title">Documents</h5>
                                        <br></br>
                                        <select className="frl-proof-sel">
                                            <option>Freelancer Type</option>
                                            <option>Registration Document</option>
                                            <option>VAT Document</option>
                                            <option>Driving License</option>
                                            <option>Passport</option>
                                        </select>
                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" class="upload-doc-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Upload
                                        </button>
                                        <br></br>
                                        <Icon className="file-ico" icon="ic:round-insert-drive-file" color="black" width="40" height="40" />
                                        <span className="fil-doc">File Document</span>
                                        <select className="frl-proof-sel">
                                            <option>Freelancer Type</option>
                                            <option>Registration Document</option>
                                            <option>VAT Document</option>
                                            <option>Driving License</option>
                                            <option>Passport</option>
                                        </select>
                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" class="upload-doc-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Upload
                                        </button>
                                        <br></br>
                                        <Icon className="file-ico" icon="ic:round-insert-drive-file" color="black" width="40" height="40" />
                                        <span className="fil-doc">File Document</span>
                                        <br></br>
                                        <select className="frl-proof-sel">
                                            <option>Freelancer Type</option>
                                            <option>Registration Document</option>
                                            <option>VAT Document</option>
                                            <option>Driving License</option>
                                            <option>Passport</option>
                                        </select>
                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" class="upload-doc-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Upload
                                        </button>
                                        <br></br>
                                        <Icon className="file-ico" icon="ic:round-insert-drive-file" color="black" width="40" height="40" />
                                        <span className="fil-doc">File Document</span>
                                        <br></br>
                                        <select className="frl-proof-sel">
                                            <option>Freelancer Type</option>
                                            <option>Registration Document</option>
                                            <option>VAT Document</option>
                                            <option>Driving License</option>
                                            <option>Passport</option>
                                        </select>
                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" class="upload-doc-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Upload
                                        </button>
                                        <br></br>
                                        <Icon className="file-ico" icon="ic:round-insert-drive-file" color="black" width="40" height="40" />
                                        <span className="fil-doc">File Document</span>
                                        <br></br>
                                        <select className="frl-proof-sel">
                                            <option>Freelancer Type</option>
                                            <option>Registration Document</option>
                                            <option>VAT Document</option>
                                            <option>Driving License</option>
                                            <option>Passport</option>
                                        </select>

                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" class="upload-doc-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Upload
                                        </button>
                                        <br></br>
                                        <Icon className="file-ico" icon="ic:round-insert-drive-file" color="black" width="40" height="40" />
                                        <span className="fil-doc">File Document</span>
                                        {/* <!-- Modal --> */}
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div>
                                                        <p class="modal-title" className="upd-tit" id="exampleModalLabel">Upload Your File</p>
                                                        <p className="proadd-img-desc">to add the product images</p>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div className="upd-attachments">
                                                            <Icon className="upload-file-icon" data-bs-toggle="modal" data-bs-target="#exampleModal1" icon="fluent:folder-arrow-up-20-filled" width="90" height="90" />
                                                            <p className="ig-upldesc">Drag & Drop files here or choose file 50 MB max file size</p>
                                                            <br></br>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Modal -2 */}
                                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div>
                                                        <p class="modal-title" className="upd-tit" id="exampleModalLabel">Upload Your File</p>
                                                        <p className="proadd-img-desc">to add the product images</p>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div className="upd-attachments">
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                </tr>
                                                            </table>

                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    )
}
export default AiFreelancer