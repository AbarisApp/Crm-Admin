import React, { useState } from 'react';
import { Modal, Button, Tab, Tabs } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BasicInfoForm from './BasicInfoForm'; // Import Basic Info form
import AddRecipientForm from './AddRecipientForm'; // Import Add Recipient form

function FilesListCreatModel(props) {
    const [key, setKey] = useState('first');  // To manage tab state
   
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ToastContainer />
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Quick Create New File
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="first" title="Basic Info">
                        <BasicInfoForm/>
                    </Tab>
                    <Tab eventKey="second" title="Add Recipient">
                        <AddRecipientForm/>
                    </Tab>
                </Tabs>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FilesListCreatModel;
