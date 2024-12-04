import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PackageSelector.css';
import './Package.css';
import { toast, ToastContainer } from 'react-toastify';
import { updatePin } from '../../../api/login/Login'; // Assume you have an API method named updatePin
import { useParams } from 'react-router-dom';

const ChangePin = ({ retailerInfo, data }) => {
  const params = useParams();
  const [pinData, setPinData] = useState({
    pin: '',
    confirmPin: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const toastSuccessMessage = (message) => {
    toast.success(`${message}`, {
      position: "top-right",
    });
  };

  const toastErrorMessage = (message) => {
    toast.error(`${message}`, {
      position: "top-right",
    });
  };

  const handlePinChange = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const { pin, confirmPin } = pinData;

    if (pin !== confirmPin) {
      setErrorMessage('New PIN and confirm PIN do not match.');
      return;
    }

    const res = await updatePin(params.id, pinData);
    if (res?.statusCode === "200") {
      toastSuccessMessage("PIN updated successfully");
    } else {
      toastErrorMessage("PIN not updated successfully");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) { // Ensure only numeric input
      setPinData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="container" style={{ maxWidth: '500px', marginTop: '20px' }}>
      <ToastContainer />
      <h2 className="mb-4">Change PIN</h2>
      <form onSubmit={handlePinChange}>
        <div className="mb-3">
          <label className="form-label">New PIN</label>
          <input
            type="password"
            name="pin"
            value={pinData.pin}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm New PIN</label>
          <input
            type="password"
            name="confirmPin"
            value={pinData.confirmPin}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        {successMessage && <p className="text-success">{successMessage}</p>}
        <button type="submit" className="btn btn-primary w-100" style={{ margin: "0" }}>
          Update PIN
        </button>
      </form>
    </div>
  );
};

export default ChangePin;
