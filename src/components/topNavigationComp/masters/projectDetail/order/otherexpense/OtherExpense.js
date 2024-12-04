import React, { useState } from 'react';
import AddCreditNoteModal from './AddCreditNoteModal';
import TopHead from './TopHead';

function OtherExpense() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="container-fluid">
            {/* Header section */}
            <TopHead />
            <div className="row p-3 border-bottom align-items-center">
                <div className="col">
                    <h6 className="mb-0">Other Expense Request</h6>
                    <small>0 request, 0 pending request</small>
                </div>
                <div className="col text-end">
                    <button
                        type="button"
                        className="btn btn-link text-danger"
                        onClick={() => setModalShow(true)}
                        style={{ fontWeight: 'bold', textDecoration: 'none' }}
                    >
                        + New Expense Request
                    </button>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="row" style={{ height: '80vh' }}>
                {/* Left Sidebar */}
                <div className="col-4 p-4 border-end">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-secondary" type="button">
                            <i className="bi bi-funnel"></i> {/* Bootstrap icon for filter */}
                        </button>
                    </div>
                    <p className="text-muted mt-3">No Other Expense Found</p>
                </div>

                {/* Right Content Area */}
                <div className="col-8 d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <i
                            className="bi bi-bag-x"
                            style={{ fontSize: '4rem', color: '#e0e0e0' }}
                        ></i>
                        <p className="text-muted mt-2">No Other Expense Selected</p>
                    </div>
                </div>
            </div>

            {/* Modal for Adding New Expense */}
            <AddCreditNoteModal show={modalShow} onHide={() => setModalShow(false)} />

            {/* TopHead Component (if needed) */}
            
        </div>
    );
}

export default OtherExpense;
