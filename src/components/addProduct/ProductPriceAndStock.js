import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiPriceTag } from "react-icons/gi";
import { SiPlatformdotsh } from "react-icons/si";
import SetAttributeModal from './SetAttributeModal';
import ProductPricingModal from './ProductPricingModal';

function ProductPriceAndStock() {
    const [lgShow, setLgShow] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const openPricingModal = () => {
        setShow(true);
    };
    const openSetAttributeModal = () => {
        setLgShow(true)
    };

    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                            <h3 style={{ color: '#231f1fa1' }}>Product price & stock</h3>
                            <hr />

                            <div className='col-4'>
                                <div className='row'>
                                    <div className="form-group col-12 mt-4">
                                        <div className="form-check form-switch d-flex align-items-center justify-content-between ps-0">
                                            <label
                                                className="form-check-label me-2" // Add margin to separate label and switch
                                                htmlFor="flexSwitchCheckDefault"
                                            >
                                                Global Attribute
                                            </label>
                                            <input
                                                style={{ marginLeft: '80px', border: '1px solid black' }}
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckDefault"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group col-12 mt-1">
                                        <div className="form-check form-switch d-flex align-items-center justify-content-between ps-0">
                                            <label
                                                className="form-check-label me-2" // Add margin to separate label and switch
                                                htmlFor="flexSwitchCheckDefault"
                                            >
                                                Global Image
                                            </label>
                                            <input
                                                style={{ marginLeft: '80px', border: '1px solid black' }}
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckDefault"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12  mt-5 ps-0 mb-2'>
                                <button className='btn btn-danger' type='button'><RiDeleteBin6Line style={{ marginBottom: '4px' }} /> Delete All Variation</button>
                            </div>

                            <div className='col-12'>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer ">
                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ textAlign: 'center' }}>#</th>
                                                <th style={{ textAlign: 'center' }}>Variant</th>
                                                <th style={{ textAlign: 'center' }}>Unique ID</th>
                                                <th style={{ textAlign: 'center' }}>Pricing</th>
                                                <th style={{ textAlign: 'center' }}>Set Attribute</th>
                                                <th style={{ textAlign: 'center' }}>Gallery Images</th>
                                                <th style={{ textAlign: 'center' }}>Thumbnail Image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                    <button className='btn btn-danger' type='button'>
                                                        <RiDeleteBin6Line />
                                                    </button>
                                                </td>
                                                <td className="sorting_1" style={{ textAlign: 'center' }}>Abc</td>
                                                <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder='Enter Unique ID'
                                                        id="fromDate"
                                                    />
                                                </td>
                                                <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                    <GiPriceTag className='icon-cursor' onClick={openPricingModal} size={30} />
                                                </td>
                                                <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                    <SiPlatformdotsh className='icon-cursor' onClick={openSetAttributeModal} size={25} />
                                                </td>
                                                <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                    />
                                                </td>
                                                <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <ProductPricingModal show={show}  handleClose={handleClose}/>
                <SetAttributeModal lgShow={lgShow} setLgShow={setLgShow} />

            </div >
        </>
    )
}

export default ProductPriceAndStock