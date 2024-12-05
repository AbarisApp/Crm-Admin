import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PoPreview({show, handleClose, handleStockShow}) {

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='sm'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='mt-2'>
                            <p className='d-flex align-items-center gap-2'>Bestes on Average of <input className='form-control' type='number' style={{width: "40px", height: "30px"}}/> Days</p>
                        </div>
                        <div className='mt-2'>
                        <p className='d-flex align-items-center gap-2'>For next <input className='form-control' type='number' style={{width: "40px", height : "30px"}}/> Days</p>
                        </div>
                        <div className='mt-2'>
                            <input className='form-control' type='search' placeholder='Search'/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleStockShow}>
                        Preview
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PoPreview;