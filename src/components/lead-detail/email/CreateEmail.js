import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select'; // for multi-select
import JoditEditor from 'jodit-react';

function CreateEmail(props) {
    const [accountType, setAccountType] = useState('Gmail');
    const [syncFrom, setSyncFrom] = useState('Now');
    const [senderName, setSenderName] = useState('');
    const [selectedEmails, setSelectedEmails] = useState([]); // To hold multiple selected emails
    const [subject, setSubject] = useState('');
    const [emailBody, setEmailBody] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Account Type:', accountType);
        console.log('Sync Emails From:', syncFrom);
        console.log('Sender Name:', senderName);
        console.log('Selected Emails:', selectedEmails);
        console.log('Subject:', subject);
        console.log('Email Body:', emailBody);
    };

    const handleReset = () => {
        setAccountType('Gmail');
        setSyncFrom('Now');
        setSenderName('');
        setSelectedEmails([]);
        setSubject('');
        setEmailBody('');
    };

    // Options for the multi-select (can be dynamic based on your logic)
    const emailOptions = [
        { value: 'example1@gmail.com', label: 'example1@gmail.com' },
        { value: 'example2@gmail.com', label: 'example2@gmail.com' },
        { value: 'example3@gmail.com', label: 'example3@gmail.com' }
    ];

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Send Email
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                   
                    {/* Gmail Sender UI */}
                    <div className="mb-3">
                        <label htmlFor="senderName" className="form-label">
                            Sender Name <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="senderName"
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="senderEmail" className="form-label">
                            Sender Emails <span className="text-danger">*</span>
                        </label>
                        <Select
                            isMulti
                            name="senderEmails"
                            options={emailOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={selectedEmails}
                            onChange={setSelectedEmails}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">
                            Subject
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="emailBody" className="form-label">
                            Email Body
                        </label>
                        <JoditEditor
                            value={emailBody}
                            onChange={(newContent) => setEmailBody(newContent)}
                        />
                    </div>

                    <div className="d-flex justify-content-start">
                        <button type="reset" className="btn btn-outline-secondary me-2" onClick={handleReset}>
                            Reset
                        </button>
                        <button type="submit" className="btn btn-warning">
                            Connect & Send Email
                        </button>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default CreateEmail;
