import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { RiDeleteBin6Line } from "react-icons/ri";

function ProductPricingModal({ show, handleClose }) {
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Pricing Detail (ABC)
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer ">
                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                            <thead>
                                <tr role="row">
                                    <th style={{ textAlign: 'center', width: "150px" }}>#</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>#</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Country</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>MRP</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Purchase Rate</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Landing Cost</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Tax %</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Tax Type</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Sale Rate</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Wholesale Price</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Retail Price</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Showroom Mall Price</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Discount</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Discount Type</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>SKU</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>HSN Code</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Sale Reward Point</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Share Reward Point</th>
                                    <th style={{ textAlign: 'center', width: "150px" }}>Total QTY Available</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr role="row" className="odd">
                                    <td className="sorting_1" style={{ textAlign: 'center', width: "150px" }}>
                                        <button className='btn btn-danger' type='button'>
                                            <RiDeleteBin6Line />
                                        </button>
                                    </td>
                                    <td className="sorting_1" style={{ textAlign: 'center', width: "150px" }}>
                                        <div>
                                            <div className="form-check">
                                                <input style={{ border: '1px solid black' }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            </div>
                                        </div>

                                    </td>
                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            disabled
                                            type="text"
                                            className="form-control"
                                            placeholder='Country Name'
                                            id="fromDate"
                                        />
                                    </td>
                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="number"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>

                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="number"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>

                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="number"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>

                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="number"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>

                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <select className="form-select" style={{ boxShadow: 'none', width: '150px' }} aria-label="Default select example">
                                            <option value={"Inclusive"}>Inclusive</option>
                                            <option value={"Exclusive"}>Exclusive</option>
                                        </select>
                                    </td>

                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="number"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>

                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="number"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>

                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="number"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>

                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="number"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>

                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="number"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>

                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <select className="form-select" style={{ boxShadow: 'none', width: '150px' }} aria-label="Default select example"
                                        >
                                            <option value={"Amount"}>Amount</option>
                                            <option value={"Percent"}>Percent</option>
                                        </select>
                                    </td>
                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="text"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>
                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="text"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>
                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="number"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>
                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="number"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>
                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                        <input
                                            style={{ boxShadow: 'none', width: '150px' }}
                                            type="number"
                                            className="form-control boxShadowNone"
                                            placeholder=''
                                            id="fromDate"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='row mt-3 mb-5 ps-0'>
                            <div className='col-6'>
                                <buton className="btn btn-primary">Copy Price To All</buton>
                            </div>
                            <div className='col-6'>
                                <buton className="btn btn-primary">Copy Price To All Variations</buton>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductPricingModal