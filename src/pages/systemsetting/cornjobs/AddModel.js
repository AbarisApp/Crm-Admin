import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import JoditEditor from 'jodit-react';

function AddModel(props) {
    const [formData, setFormData] = useState({
        name: '',
        nextRun: '',
        schedule: 'Daily', // Default selected schedule option
        url: '',
        content: '' // For storing Jodit editor content
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleContentChange = (newContent) => {
        setFormData({
            ...formData,
            content: newContent
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Perform form submission logic here (e.g., API call)
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
                    Add Cron Job
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="nextRun">Next Run Date & Time</label>
                        <input
                            type="datetime-local"
                            className="form-control"
                            id="nextRun"
                            name="nextRun"
                            value={formData.nextRun}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="schedule">Schedule</label>
                        <select
                            className="form-control"
                            id="schedule"
                            name="schedule"
                            value={formData.schedule}
                            onChange={handleChange}
                            required
                        >
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="url">URL</label>
                        <input
                            type="url"
                            className="form-control"
                            id="url"
                            name="url"
                            value={formData.url}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* <div className="form-group mb-3">
                        <label htmlFor="content">Content</label>
                        <JoditEditor
                            value={formData.content}
                            onChange={handleContentChange}
                        />
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddModel;
