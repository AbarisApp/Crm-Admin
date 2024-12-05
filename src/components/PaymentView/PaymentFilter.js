import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PaymentFilter({ show, setShow, handleClose, handleShow }) {

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
                    <Modal.Title>Customers Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='mt-2'>
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <label className='form-label'>OutStanding :</label>
                            </div>
                            <div className='col-4'>
                                <select className='form-select shadow'>
                                    <option>less than</option>
                                </select>
                            </div>
                            <div className='col-5'>
                                <input className='form-control' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <label className='form-label'>Comments :</label>
                            </div>
                            <div className='col-9'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label m-0" for="flexRadioDefault1">
                                            All
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label m-0" for="flexRadioDefault2">
                                            Widthout comment
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label class="form-check-label m-0" for="flexRadioDefault2">
                                            Width comment
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2"  />
                                    <label class="form-check-label m-0" for="flexRadioDefault2">
                                        Exclude 0 OutStanding
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Apply</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PaymentFilter;