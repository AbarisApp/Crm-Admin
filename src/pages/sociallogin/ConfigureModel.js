import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import JoditEditor from 'jodit-react';

function ConfigureModel(props) {
    const [formData, setFormData] = useState({
        clientId: '',
        clientSecret: '',
        callbackUrl: '',
        description: '' // Jodit editor field for optional content or description
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDescriptionChange = (newContent) => {
        setFormData({
            ...formData,
            description: newContent
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
                    Update Social Login Credential
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="clientId">Client ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientId"
                            name="clientId"
                            value={formData.clientId}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="clientSecret">Client Secret</label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientSecret"
                            name="clientSecret"
                            value={formData.clientSecret}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="callbackUrl">Callback URL</label>
                        <input
                            type="text"
                            className="form-control"
                            id="callbackUrl"
                            name="callbackUrl"
                            value={formData.callbackUrl}
                            onChange={handleChange}
                            required
                        />
                    </div>
                  
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfigureModel;
