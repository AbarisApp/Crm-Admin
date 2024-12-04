import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useDropzone } from 'react-dropzone';
import { Button } from "react-bootstrap";

function AddContact(props) {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*,application/pdf", // Accept only images and PDF files
    multiple: true, // Allow multiple file uploads
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle file upload here
    console.log("Files Submitted: ", files);
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
          Upload Files
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div
            {...getRootProps()}
            style={{
              border: "2px dashed #007bff",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here...</p>
            ) : (
              <p>Drag & drop some files here, or click to select files</p>
            )}
          </div>

          <div className="mt-3">
            {files.length > 0 && (
              <ul>
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddContact;
