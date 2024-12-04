import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Comments(props) {
    const [comments, setComments] = useState([
        { date: '2024-10-01', addedBy: 'John Doe', text: 'Initial release' },
        { date: '2024-10-15', addedBy: 'Jane Smith', text: 'Updated some features' },
        { date: '2024-11-01', addedBy: 'Alice Johnson', text: 'Bug fixes and improvements' },
    ]);
    const [newComment, setNewComment] = useState('');

    const handleSendComment = () => {
        if (newComment.trim() !== '') {
            const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
            const addedBy = 'Current User'; // Replace with actual user info if available
            setComments([...comments, { date: currentDate, addedBy, text: newComment }]);
            setNewComment('');
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
                    Comments
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul className="list-unstyled">
                    {comments.map((comment, index) => (
                        <li key={index} className="mb-3">
                            <strong>{comment.addedBy}</strong> <em>({comment.date})</em>
                            <p>{comment.text}</p>
                        </li>
                    ))}
                </ul>
                <Form.Group className="mb-3" controlId="newComment">
                    <Form.Control
                        type="text"
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSendComment}>
                    Send
                </Button>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Comments;
