import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ItemColumnView({ show, setShow, handleClose, handleShow , data, chengeStatus, setData }) {

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
                        <div className='col-9 p-1'>
                            <div>
                                <h1 className='text-center fs-6 text-primary border border-b'>Available columns</h1>
                                <div className='row'>
                                    {data && data?.map((item, i) => {
                                        return <div className='col-3'>
                                            <div className='border mb-1 p-1 rounded-2'>
                                                <div className="form-check form-switch" >
                                                    <input onClick={() => { chengeStatus(!item.isActive, item.name) }} className="form-check-input" type="checkbox" checked={item?.isActive} role="switch" id={`flexSwitchCheckDefault${i}`} />
                                                    <label className="form-check-label m-0" for={`flexSwitchCheckDefault${i}`} >{item.name}</label>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='col-3 p-1'>
                            <div>
                                <h1 className='text-center fs-6 text-primary border border-b'>Fixed right columns</h1>
                                <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
                                    <i class="fa-solid fa-lock"></i>
                                    <label className='m-0'>Stock Qty</label>
                                </div>
                                <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
                                    <i class="fa-solid fa-lock"></i>
                                    <label className='m-0'>Stock Val</label>
                                </div>
                                <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
                                    <i class="fa-solid fa-lock"></i>
                                    <label className='m-0'>Avg</label>
                                </div>
                                <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
                                    <i class="fa-solid fa-lock"></i>
                                    <label className='m-0'>Sales
                                    </label>
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
                                {data && data?.map((item)=>{
                                    if (item.isActive) {
                                        return(
                                            <button className='btn btn-outline-info m-0'>{item.name} <i class="fa-solid fa-delete-left text-danger" onClick={() => { chengeStatus(!item.isActive, item.name) }}></i></button>
                                        )
                                    }
                                })}
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

export default ItemColumnView;