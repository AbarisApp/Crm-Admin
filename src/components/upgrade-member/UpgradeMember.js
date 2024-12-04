import React, { useState } from 'react';
import './member.css';
import img from '../../assets/images/logo/airtel.png';

function UpgradeMembers() {
    const [loading, setLoading] = useState(false);

    return (
        <div className='card p-4'>
            <form className='cusforms row'>
                <div className="form-group col-lg-6 col-md-12">
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

                <div className="form-group col-12">
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

                <div className="form-group col-lg-7 col-md-8 col-sm-12">
                    <label htmlFor="newMemberType">Select New Member Type</label>
                    <select className="form-select" aria-label="Select New Member Type">
                        <option selected>Select New Member Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="form-group col-lg-7 col-md-8 col-sm-12 my-3">
                    <label htmlFor="newParentType">Select New Parent Type</label>
                    <select className="form-select" aria-label="Select New Parent Type">
                        <option selected>Select New Parent Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="form-group col-lg-7 col-md-8 col-sm-12">
                    <label htmlFor="newParent">Select New Parent</label>
                    <select className="form-select" aria-label="Select New Parent">
                        <option selected>Select New Parent</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="form-group col-lg-8 col-md-12 my-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default UpgradeMembers;
