import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreateConnect(props) {
    const [accountType, setAccountType] = useState('Gmail');
    const [syncFrom, setSyncFrom] = useState('Now');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Account Type:', accountType);
        console.log('Sync Emails From:', syncFrom);
    };

    const handleReset = () => {
        setAccountType('Gmail');
        setSyncFrom('Now');
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
                    Connect Account
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="accountType" className="form-label">
                            Account type <span className="text-danger">*</span>
                        </label>
                        <select
                            id="accountType"
                            className="form-select"
                            value={accountType}
                            onChange={(e) => setAccountType(e.target.value)}
                            required
                        >
                            <option value="Gmail">Gmail</option>
                            <option value="Yahoo">Yahoo</option>
                            <option value="Outlook">Outlook</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Sync emails from</label>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="now"
                                value="Now"
                                checked={syncFrom === 'Now'}
                                onChange={(e) => setSyncFrom(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="now">
                                Now
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="oneMonth"
                                value="1 Month Ago"
                                checked={syncFrom === '1 Month Ago'}
                                onChange={(e) => setSyncFrom(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="oneMonth">
                                1 Month Ago
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="threeMonths"
                                value="3 Months Ago"
                                checked={syncFrom === '3 Months Ago'}
                                onChange={(e) => setSyncFrom(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="threeMonths">
                                3 Months Ago
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="sixMonths"
                                value="6 Months Ago"
                                checked={syncFrom === '6 Months Ago'}
                                onChange={(e) => setSyncFrom(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="sixMonths">
                                6 Months Ago
                            </label>
                        </div>
                    </div>

                    <div className="d-flex justify-content-start">
                        <button type="reset" className="btn btn-outline-secondary me-2" onClick={handleReset}>
                            Reset
                        </button>
                        <button type="submit" className="btn btn-warning">
                            Connect Account
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
export default CreateConnect;