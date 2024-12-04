import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddUser(props) {
  const [users, setUsers] = useState([{ user: '', role: '' }]);

  const handleAddUser = () => {
    setUsers([...users, { user: '', role: '' }]);
  };

  const handleRemoveUser = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  const handleChange = (index, field, value) => {
    const newUsers = [...users];
    newUsers[index][field] = value;
    setUsers(newUsers);
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
          Assign Project Users
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {users.map((user, index) => (
          <div key={index} className="d-flex align-items-center mb-3">
            <Form.Select
              className="me-2"
              value={user.user}
              onChange={(e) => handleChange(index, 'user', e.target.value)}
            >
              <option>Select user</option>
              <option value="User1">User 1</option>
              <option value="User2">User 2</option>
              {/* Add more users here */}
            </Form.Select>

            <Form.Select
              className="me-2"
              value={user.role}
              onChange={(e) => handleChange(index, 'role', e.target.value)}
            >
              <option>Select user role</option>
              <option value="Role1">Role 1</option>
              <option value="Role2">Role 2</option>
              {/* Add more roles here */}
            </Form.Select>

            {users.length > 1 && (
              <Button
                variant="link"
                onClick={() => handleRemoveUser(index)}
                className="text-danger"
                style={{ textDecoration: 'none' }}
              >
                ×
              </Button>
            )}
          </div>
        ))}
        <button type="button" className="btn btn-success" style={{color:"white"}} onClick={handleAddUser}> + Add more users</button>
     
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger">Create</Button>
        <Button variant="outline-secondary" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddUser;
