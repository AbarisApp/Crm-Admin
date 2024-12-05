
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ChooseColumns({ show, handleClose, data, setData }) {
    // This handles the column status toggle (active or not)
    const handleColumnStatusChange = (status, name) => {
        console.log("status", status)
        console.log("name", name)
        const updatedData = data.map((item) => {
            if (item.name === name) {
                return { ...item, isActive: status };
            }
            return item;
        });
        setData(updatedData); // Update the parent state with new data
    };

    // This function handles applying the changes
    const handleApply = () => {
        handleClose(); // Close the modal after applying
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="xl"
        >
            <Modal.Header closeButton>
                <Modal.Title>Choose Columns</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row p-1">
                    <div className='col-2 p-1'>
                    <h2 className="text-center fs-6 text-primary border-bottom">Fixed left columns</h2>
                    {['Customer'].map((label, index) => (
                            <div key={index} className="border align-items-center mb-1 px-2 d-flex gap-2 px-1">
                                <i className="fa-solid fa-lock"></i>
                                <label className="m-0">{label}</label>
                            </div>
                        ))}
                    </div>
                    <div className="col-8 p-1">
                        <h2 className="text-center fs-6 text-primary border-bottom">Available columns</h2>
                        <div className="row">
                            {data?.map((item, i) => (
                                <div key={i} className="col-3">
                                    <div className="border mb-1 p-1 rounded-2">
                                        <div className="form-check form-switch">
                                            <input
                                                onClick={() => handleColumnStatusChange(!item.isActive, item.name)}
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.isActive}
                                                role="switch"
                                                id={`flexSwitchCheckDefault${i}`}
                                            />
                                            <label
                                                className="form-check-label m-0"
                                                htmlFor={`flexSwitchCheckDefault${i}`}
                                            >
                                                {item.name}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-2 p-1">
                        <h2 className="text-center fs-6 text-primary border-bottom">Fixed right columns</h2>
                        {['Qty', 'Taxless', 'Texpaid'].map((label, index) => (
                            <div key={index} className="border align-items-center mb-1 px-2 d-flex gap-2 px-1">
                                <i className="fa-solid fa-lock"></i>
                                <label className="m-0">{label}</label>
                            </div>
                        ))}
                    </div>

                    <div className="border p-2 rounded-2">
                        <p className="text-primary">Move the cards below to change the sequence on the table:</p>
                        <div className="mt-1 bg-secondary p-2 rounded-2 d-flex gap-1">
                            {data?.map((item) =>
                                item.isActive ? (
                                    <button
                                        key={item.name}
                                        className="btn btn-outline-info m-0"
                                        onClick={() => handleColumnStatusChange(!item.isActive, item.name)}
                                    >
                                        {item.name}
                                        <i className="fa-solid fa-delete-left text-danger"></i>
                                    </button>
                                ) : null
                            )}
                        </div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={handleApply}>
                    Apply
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ChooseColumns;

