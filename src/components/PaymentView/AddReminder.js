import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddReminder({show, setShow, handleClose, handleShow}) {
 
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className='row'>
                    <div className='col-12'>
                        <div className='mt-2'>
                            <label className='form-label'>Rule:</label>
                            <input className='form-control' placeholder='Enter role' type='text'/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='mt-2'>
                            <label className='form-label'>Filter by Customer</label>
                            <input className='form-control' placeholder='' type='text'/>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='mt-2'>
                            <label className='form-label'>Send Reminder</label>
                            <input className='form-control' placeholder='' type='date'/>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='mt-2'>
                            <label className='form-label'>Days</label>
                            <input className='form-control' placeholder='' type='date'/>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='mt-2'>
                            <label className='form-label'>Send Reminder Between</label>
                            <select className='form-select shadow'>
                                <option> </option>
                            </select>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='mt-2'>
                        <label className='form-label'>Mark copy To Yourself</label>
                            <select className='form-select shadow'>
                                <option>no</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='mt-2'>
                            <p>Wait for <input className='form-control text-center d-inline' style={{width: "100px"}} type='number' value={"1"}/> days Before Sending Next Reminder</p>
                        </div>
                    </div>
                    <div className='col-12'>
                    <div className='mt-2'>
                        <label className='form-label'>Don't Send Reminder on</label>
                            <select className='form-select shadow'>
                                <option>Sunday</option>
                                <option>Monday</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Preview
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddReminder;