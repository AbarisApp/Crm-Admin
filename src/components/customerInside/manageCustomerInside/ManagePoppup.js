import React from "react";
import Modal from 'react-bootstrap/Modal';

const ManagePoppup = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-primary">Cancel</button>
        <button type="button" className="btn btn-primary">Save</button>
      </Modal.Footer>
    </Modal>
  );
};

export default ManagePoppup;
