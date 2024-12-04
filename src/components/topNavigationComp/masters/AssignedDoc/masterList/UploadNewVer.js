import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function UploadNewVer(props) {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
        }
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
                    Upload New Version File
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        style={{
                            border: '2px dashed #ccc',
                            padding: '20px',
                            textAlign: 'center',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            color: '#888'
                        }}
                    >
                        <input
                            type="file"
                            id="fileUpload"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <label
                            htmlFor="fileUpload"
                            style={{
                                display: 'inline-block',
                                cursor: 'pointer',
                                width: '100%',
                                padding: '10px'
                            }}
                        >
                            {file ? file.name : "Drag and drop a file here or click to select"}
                        </label>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={() => alert(file ? `File ${file.name} uploaded!` : 'No file selected')}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UploadNewVer;
