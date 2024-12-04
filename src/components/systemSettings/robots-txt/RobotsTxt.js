import JoditEditor from 'jodit-react';
import React, { useState } from 'react';

function RobotsTxt() {
    const [shortDescription, setShortDescription] = useState(''); // Textarea state
    const [description, setDescription] = useState(''); // Jodit editor state

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <>
            <div className="container my-4">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mb-4">Robots TXT</h4>
                                <h5 className="mb-4">Insert Robots txt</h5>
                                <JoditEditor
                                    value={description}
                                    onBlur={newContent => setDescription(newContent)} // Updates description when editor loses focus
                                    onChange={newContent => { }} // Optional if you need live updates
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RobotsTxt