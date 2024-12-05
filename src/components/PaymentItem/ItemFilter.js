import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ItemFilter({ show, handleClose, handleStockShow }) {

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
                    <Modal.Title>Item Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='mt-2'>
                                    <label className="form-label">Stock Qty</label>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <select className='form-select shadow'>
                                                <option>Select Option</option>
                                            </select>
                                        </div>
                                        <div className='col-6'>
                                            <input type='text' className='form-control' placeholder='Stock Qty' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='mt-2'>
                                    <label className="form-label">Stock Val</label>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <select className='form-select shadow'>
                                                <option>Select Option</option>
                                            </select>
                                        </div>
                                        <div className='col-6'>
                                            <input type='text' className='form-control' placeholder='Stock Val' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='mt-2'>
                                    <label className="form-label">Sales</label>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <select className='form-select shadow'>
                                                <option>Select Option</option>
                                            </select>
                                        </div>
                                        <div className='col-6'>
                                            <input type='text' className='form-control' placeholder='Sales' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='mt-2'>
                                    <label className="form-label">Interest</label>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <select className='form-select shadow'>
                                                <option>Select Option</option>
                                            </select>
                                        </div>
                                        <div className='col-6'>
                                            <input type='text' className='form-control' placeholder='Interest' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 mt-4'>
                                <button className='btn m-0 btn-outline-primary'>Reset</button>
                            </div>
                            </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Apply
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ItemFilter;