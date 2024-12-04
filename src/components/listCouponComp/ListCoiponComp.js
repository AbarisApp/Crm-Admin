import React from 'react'
import { Link } from 'react-router-dom';
import ExportPdf from '../../common/exportPdf/ExportPdf';
import { GoPlus } from "react-icons/go";

function ListCouponComp() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12" >
                    <div className="card" >
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">

                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>All Coupons</b></h4>
                                    <div className="d-flex" style={{ alignItems: "center" }}>

                                        <ExportPdf />

                                        <Link
                                            to={"create"}
                                            style={{ textTransform: 'uppercase' }}
                                            className="btn btn-primary btn-sm bg-primary"
                                            role="button"
                                        >
                                            <GoPlus className="me-1" style={{ marginBottom: '2px' }} />
                                            create New Coupon
                                        </Link>
                                    </div>
                                </div>


                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer ">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Download Distributer</span>
                                        </button>
                                    </div>
                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ textAlign: 'center' }}>Sr.No</th>
                                                <th style={{ textAlign: 'center' }}>Code</th>
                                                <th style={{ textAlign: 'center' }}>Category</th>
                                                <th style={{ textAlign: 'center' }}>Discount</th>
                                                <th style={{ textAlign: 'center' }}>Description</th>
                                                <th style={{ textAlign: 'center' }}>Discount Type</th>
                                                <th style={{ textAlign: 'center' }}>Start Date</th>
                                                <th style={{ textAlign: 'center' }}>End Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1">1</td>
                                                <td className="sorting_1">Abc</td>
                                                <td className="sorting_1">Abc</td>
                                                <td className="sorting_1">Abc</td>
                                                <td className="sorting_1">Abc</td>
                                                <td className="sorting_1">Abc</td>
                                                <td className="sorting_1">Abc</td>
                                                <td className="sorting_1">Abc</td>
                                                <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListCouponComp