import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Select from 'react-select';

function AddPaymentRequest(props) {
  const options1 = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    // Add more options as needed
  ];

  const options2 = [
    { value: 'item1', label: 'Item 1' },
    { value: 'item2', label: 'Item 2' },
    { value: 'item3', label: 'Item 3' },
    // Add more options as needed
  ];

  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleSelectChange1 = (option) => {
    setSelectedOption1(option);
  };

  const handleSelectChange2 = (option) => {
    setSelectedOption2(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Option 1:', selectedOption1);
    console.log('Selected Option 2:', selectedOption2);
    // Process form submission as needed
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Payment Request
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Request Type *</label>
            <Select
              value={selectedOption1}
              onChange={handleSelectChange1}
              options={options1}
              isSearchable
              placeholder="open to select."
            />
          </div>

          <div>
            <label>PO Number *</label>
            <Select
              value={selectedOption2}
              onChange={handleSelectChange2}
              options={options2}
              isSearchable
              placeholder="open to select."
            />
          </div>

          <div className='row redCol'>
            <div className='col-4' style={{ margin: "6px 0", borderRight: "1px solid #f9bcbe" }}>
              <h6>PO Amount</h6>
              {/* <br /> */}
              <p>₹0</p>
              {/* <br /> */}
              <h6>0 + 0 GST</h6>
            </div>
            <div className='col-4' style={{ margin: "6px 0", borderRight: "1px solid #f9bcbe" }}>
              <h6>Already Requested:</h6>
              {/* <br /> */}
              <p>₹0</p>
              {/* <br /> */}
              <h6>0 + 0 GST</h6>
            </div>
            <div className='col-4' style={{ margin: "6px 0" }}>
              <h6>Paid Amount:</h6>
              {/* <br /> */}
              <p>₹0</p>
            </div>
            <div>
              <h6>Request Amount *</h6>
            </div>
          </div>


        </form>
      </Modal.Body>
      <Modal.Footer>
        <button type="submit">Submit</button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddPaymentRequest