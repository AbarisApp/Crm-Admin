import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function VehicleGroupPoppup({ show, handleClose }) {
    return (
        <div className='modulGroup'>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><h2>Add New Group</h2></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Group Name"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder='Enter Description'
                            
                        />
                    </Form.Group>
                </Form>
                
            </Modal.Body>
            <Modal.Footer>
            <div className='d-flex justify-content-between'>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save
                </Button>
            </div>
            </Modal.Footer>
        </Modal>
        </div>
    );
}

export default VehicleGroupPoppup;
