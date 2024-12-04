import React, { useState } from 'react';
import './member.css';
import img from '../../assets/images/logo/airtel.png';

function MoveMemb() {
    const [loading, setLoading] = useState(false);

    return (
        <div className='card p-4'>
            <form className='cusforms'>
                <div className="form-group">
                    <label htmlFor="memberCode">Member Code</label>
                    <input
                        type="text"
                        className="form-control"
                        id="memberCode"
                        name="memberCode"
                        placeholder="Enter Member Code"
                        required
                    />
                </div>

                <div className="form-group">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div className="card p-3">
                                <h6>Member Info</h6>
                                <div className='d-flex'>
                                    <img src={img} alt="Dilip Kumawat" className="img-fluid mr-2" />
                                    <div>
                                        <h5>Dilip Kumawat (SH124197)</h5>
                                        <p>MO.: 9890054659</p>
                                    </div>
                                </div>
                                <div className="state-head">State Head</div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div className="card p-3">
                                <h6>Parent Info</h6>
                                <div className='d-flex'>
                                    <img src={img} alt="Dilip Kumawat" className="img-fluid mr-2" />
                                    <div>
                                        <h5>Dilip Kumawat (SH124197)</h5>
                                        <p>MO.: 9890054659</p>
                                    </div>
                                </div>
                                <div className="state-head">State Head</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="parentMemberCode">New Parent Member Code</label>
                    <input
                        type="text"
                        className="form-control"
                        id="parentMemberCode"
                        name="parentMemberCode"
                        placeholder="Enter New Parent Member Code"
                        required
                    />
                </div>

                <div className="form-group">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div className="card p-3">
                                <h6>New Parent Info</h6>
                                <div className='d-flex'>
                                    <img src={img} alt="Dilip Kumawat" className="img-fluid mr-2" />
                                    <div>
                                        <h5>Dilip Kumawat (SH124197)</h5>
                                        <p>MO.: 9890054659</p>
                                    </div>
                                </div>
                                <div className="state-head">State Head</div>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Change Parent Member Code</button>
            </form>
        </div>
    );
}

export default MoveMemb;
