import React from "react";

import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import pom from '../../Images/product_image.png'
import { Link } from "react-router-dom";
function AiProducts() {
    return (
        <div className="">
           <div className="row">
            <div className="col-2">
                <AiMenu />
            </div>
            <div className="col-10">
            <div className="ai-product-div">
                <div>
                    <AiHeader />
                </div>
                <div>
                    <div className="product-adding-div">
                        <div>
                            <p className="ai-sub-title">product/product list</p>
                            <h4 className="aipro-title">All Products</h4>
                        </div>
                        <div>
                            <button className="more-action">More Action</button>
                            <Link className="add-product-ai" to="aiproductdetails">Add Product</Link>
                        </div>
                    </div>
                    <p className="bulk-actions d-none">Bulk Action :{' '}
                        <select className="select-opt">
                            <option>Select Options</option>
                        </select>
                    </p>
                    <p className="show-list d-none">Show:
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        {' '}
                        List
                    </p>
                    <div className="shadows">
                        <table className="allproducts-table">
                            <tr className="product-heading ">
                                <td id="td" className="rounded-start"><input type='checkbox'  /></td>
                                <td id="td">Product ID</td>
                                <td id="td">Image</td>
                                <td id="td">Name</td>
                                <td id="td">Seller</td>
                                <td id="td">Price</td>
                                <td id="td">Quantity</td>
                                <td id="td">Status</td>
                                <td id="td" className="rounded-end">Option</td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td">£77.00</td>
                                <td id="td">3Pcs.</td>
                                <td id="td"><span className="pro-status-approved">Approved</span></td>
                                <td id="td"><i className="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td">£77.00</td>
                                <td id="td">3Pcs.</td>
                                <td id="td"><span className="pro-status-approval_pending">Approval Pending</span></td>
                                <td id="td"><i className="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td">£77.00</td>
                                <td id="td">3Pcs.</td>
                                <td id="td"><span className="pro-status-disabled">Disabled</span></td>
                                <td id="td"><i className="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td">£77.00</td>
                                <td id="td">3Pcs.</td>
                                <td id="td"><span className="pro-status-approved">Approved</span></td>
                                <td id="td"><i className="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td">£77.00</td>
                                <td id="td">3Pcs.</td>
                                <td id="td"><span className="pro-status-approved">Approved</span></td>
                                <td id="td"><i className="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td">£77.00</td>
                                <td id="td">3Pcs.</td>
                                <td id="td"><span className="pro-status-approved">Approved</span></td>
                                <td id="td"><i className="fa-solid fa-ellipsis"></i></td>
                            </tr>
                        </table>
                        <span className="showing-tag-name">Showing 1-30 List</span>
                        <div className="all-pro-pagination ">
                            <button className="back-btn shadow bg-body rounded"><i className="fa-solid fa-chevron-left"></i></button>
                            <button className="shadow bg-body rounded">1</button>
                            <button className="shadow bg-body rounded">2</button>
                            <button className="shadow bg-body rounded">3</button>
                            <button className="shadow bg-body rounded"><i className="fa-solid fa-ellipsis"></i></button>
                            <button className="shadow bg-body rounded">25</button>
                            <button className="next-btn"><i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           </div>
        </div>
    )
}
export default AiProducts