import { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PaymentRemarks({ show, setShow, handleClose, handleShow }) {


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Remarks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                        <table id="table-to-xlsx" className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                            <thead>
                                <tr role="row">
                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                        Remark data 
                                    </th>
                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                        Remark
                                    </th>
                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                        Remark  by
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr role="row" className="odd" >
                                    <td>
                                        17-Feb-24
                                    </td>
                                    <td>
                                        next monday
                                    </td>
                                    <td>
                                        Gaurav Sharma
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
                    <div className='mt-2'>
                        <textarea className='form-control' placeholder='Type your remark here'/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Add Remarks
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PaymentRemarks;