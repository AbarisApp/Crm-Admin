import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import JoditEditor  from 'jodit-react';

function GDPRCookies() {
    const [status, setStatus] = useState('Enabled'); // Radio button state
    const [shortDescription, setShortDescription] = useState(''); // Textarea state
    const [description, setDescription] = useState(''); // Jodit editor state

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ status, shortDescription, description });
    };

    return (
        <>
            <div className="container my-4">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className=" mb-4">GDPR Cookie Settings</h4>
                                
                                <Form onSubmit={handleSubmit}>
                                    {/* Status - Radio Buttons */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Status</Form.Label>
                                        <div>
                                            <Form.Check
                                                type="radio"
                                                label="Enabled"
                                                name="status"
                                                value="Enabled"
                                                checked={status === 'Enabled'}
                                                onChange={(e) => setStatus(e.target.value)}
                                                inline
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Disabled"
                                                name="status"
                                                value="Disabled"
                                                checked={status === 'Disabled'}
                                                onChange={(e) => setStatus(e.target.value)}
                                                inline
                                            />
                                        </div>
                                    </Form.Group>

                                    {/* Short Description - Textarea */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Short Description</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="Enter short description"
                                            value={shortDescription}
                                            onChange={(e) => setShortDescription(e.target.value)}
                                        />
                                    </Form.Group>

                                    {/* Description - Jodit Editor */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Description</Form.Label>
                                        <JoditEditor
                                            value={description}
                                            onBlur={newContent => setDescription(newContent)} // Updates description when editor loses focus
                                            onChange={newContent => {}} // Optional if you need live updates
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Save
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GDPRCookies;
