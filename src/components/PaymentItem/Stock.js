import { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Stock({ show, handleClose }) {

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Required Store Action</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="">
                                <div className="card-body p-0">
                                    <div className="table-responsive active-projects style-1">
                                        <div className="tbl-caption">
                                            <h4 className="heading mb-0"><i class="fa-solid fa-table-cells-large"></i> </h4>
                                            <div className="d-flex aling-items-center gap-2 px-2">
                                                <input className="form-control" type="search" placeholder='search' />
                                                <button type="botton" className="fs-5 btn p-0 m-0 text-black btn text-white btn-primary"><i class="fa-solid fa-download"></i></button>
                                            </div>
                                        </div>
                                        <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div>
                                            <table id="table-to-xlsx" className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                            Item Name
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                            Sales in last 30 days
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                            Req for last 30 days
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                            Current Stock
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                            Short/ excess
                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" className="odd" >
                                                        <td>
                                                            2tb Internal hdd Wd Av
                                                        </td>
                                                        <td>
                                                            10
                                                        </td>
                                                        <td>
                                                            10
                                                        </td>
                                                        <td>
                                                           30
                                                        </td>
                                                        <td>
                                                            0
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                                {/* Total {totalCount} entries */}
                                            </div>
                                            <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                                <Pagination
                                                    // showSizeChanger
                                                    // onShowSizeChange={''}
                                                    defaultCurrent={1}
                                                    onChange=""
                                                    total=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Stock;