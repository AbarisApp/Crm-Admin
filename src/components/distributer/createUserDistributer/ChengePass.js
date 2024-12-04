import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PackageSelector.css';
import './Package.css';
import { toast, ToastContainer } from 'react-toastify';
import { updatePassword } from '../../../api/login/Login';
import { useParams } from 'react-router-dom';
const ChengePass = ({ retailerInfo, data }) => {
  console.log(data);
const parems = useParams()
  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const toastSuccessMessage = (message) => {
    toast.success(`${message}`, {
      position: "top-right",
    });
  };
  const toastSuccessMessageer = (message) => {
    toast.error(`${message}`, {
      position: "top-right",
    });
  };
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const { password, confirmPassword } = passwords;

    if (password !== confirmPassword) {
      setErrorMessage('New password and confirm password do not match.');
      return;
    }

    const res = await updatePassword(parems.id ,passwords);
    if (res?.statusCode == "200") {
      toastSuccessMessage("Password Upate Successfully");

    } else {
      toastSuccessMessageer("Password Not Upate Successfully")
    }
    // Add logic to update the password here, such as an API call
    // setSuccessMessage('Password updated successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container" style={{ maxWidth: '500px', marginTop: '20px' }}>
      <ToastContainer />
      <h2 className="mb-4">Change Password</h2>
      <form onSubmit={handlePasswordChange}>
        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input
            type="text"
            name="password"
            value={passwords.password}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm New Password</label>
          <input
            type="text"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        {successMessage && <p className="text-success">{successMessage}</p>}
        <button type="submit" className="btn btn-primary w-100" style={{ margin: "0" }}>
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChengePass;
