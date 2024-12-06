import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ChooseColumn({ show, setShow, handleClose, handleShow }) {

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='xl'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Choose Columns</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row p-1'>
                        <div className='col-2 p-1'>
                            <div>
                                <h1 className='text-center fs-6 text-primary border border-b'>Fixed left columns</h1>
                                <div className='border align-items-center px-2 d-flex gap-2 px-1 border'>
                                    <i class="fa-solid fa-lock"></i>
                                    <label className='m-0'>Customer</label>
                                </div>
                            </div>
                        </div>
                        <div className='col-8 p-1'>
                            <div>
                                <h1 className='text-center fs-6 text-primary border border-b'>Available columns</h1>
                                <div className='row'>
                                    <div className='col-3'>
                                        <div className='border mb-1 p-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Area</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border mb-1 p-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Batch Expiry</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Batch Expiry</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Batch Name</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Cg 1</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Cg 2</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Cg 3</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">City</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">company</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">0 to 45</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Continent</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Custom Group Name</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Custom Type</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">District</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Document type</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">manager</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">State</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Segment</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='border p-1 mb-1 rounded-2'>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label m-0" for="flexSwitchCheckDefault">Voucher type</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 p-1'>
                            <div>
                                <h1 className='text-center fs-6 text-primary border border-b'>Fixed right columns</h1>
                                <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
                                    <i class="fa-solid fa-lock"></i>
                                    <label className='m-0'>Billno</label>
                                </div>
                                <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
                                    <i class="fa-solid fa-lock"></i>
                                    <label className='m-0'>0 t0 45</label>
                                </div>
                                <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
                                    <i class="fa-solid fa-lock"></i>
                                    <label className='m-0'>46 to 90</label>
                                </div>
                                <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
                                    <i class="fa-solid fa-lock"></i>
                                    <label className='m-0'>91 to 180</label>
                                </div>

                                <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
                                    <i class="fa-solid fa-lock"></i>
                                    <label className='m-0'>OutStanding</label>
                                </div>
                                <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
                                    <i class="fa-solid fa-lock"></i>
                                    <label className='m-0'>Other</label>
                                </div>
                                <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
                                    <i class="fa-solid fa-lock"></i>
                                    <label className='m-0'>Interest</label>
                                </div> 
                            </div>
                        </div>
                        <div className='border p-2 rounded-2'>
                            <p className='text-primary'>Move the cards below to change the sequence on the table : </p>
                            <div className='mt-1 bg-secondary p-2 rounded-2 d-flex gap-1'>
                                <button className='btn btn-outline-info m-0'>State <i class="fa-solid fa-delete-left text-danger"></i></button>
                                <button className='btn btn-outline-info m-0'>company<i class="fa-solid fa-delete-left text-danger"></i></button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Save & Apply
                    </Button>
                    <Button variant="primary">Apply</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ChooseColumn;