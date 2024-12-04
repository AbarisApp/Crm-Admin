import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PostWidraw } from '../../../../../api/login/Login';

function StatusModel(props) {
    const today = new Date().toISOString().split('T')[0];
    const [state, setState] = useState({
        transaction_no: "",
        transaction_date: today,
        status: "Pending"
    });

    const submitData = async () => {
        try {
            const res = await PostWidraw(state ,props?.datas._id);
            if (res?.statusCode == 200) {
                alert('success');
                props.getFloorMasters(0);
                setTimeout(() => {
                    props.onHide();
                }, 1000);
            }
        } catch (error) {
            // Handle error
        }
    };

    return (
        <Modal {...props} size='xl' aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    User Withdraw Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row'>
                    <div className='col-xl-5 card'>
                        <div>
                            <label>Date : {props?.datas.createdAt}</label>
                        </div>
                        {/* <div>
                            <label>Trx Number : {props?.datas.createdAt}</label>
                        </div> */}
                        <div>
                            <label>User Name : {props?.datas.user_id?.name}</label>
                        </div>
                        <div>
                            <label>Bank : {props?.datas.bank_name}</label>
                        </div>
                        <div>
                            <label>Amount : {props?.datas.amount}</label>
                        </div>
                        <div>
                            <label>Status  : {props?.datas.status}</label>
                        </div>
                    </div>
                    <div className='col-xl-7 card'>
                        <div>
                            <h5>Account Name</h5>
                            <div>{props?.datas.holder_name}</div>
                        </div>
                        <div>
                            <h5>Account Number</h5>
                            <div>{props?.datas.bank_account_number}</div>
                        </div>
                        <div>
                            <h5>Remark</h5>
                            <div>
                                <input 
                                    className='form-control' 
                                    type='text' 
                                    onChange={e => setState({ ...state, remark: e.target.value })} 
                                />
                            </div>
                        </div>
                        <div>
                            <h5>Transaction No</h5>
                            <div>
                                <input 
                                    className='form-control' 
                                    type='text' 
                                    onChange={e => setState({ ...state, transaction_no: e.target.value })} 
                                />
                            </div>
                        </div>
                        <div style={{ marginTop: '10px', width: "300px" }}>
                            <select 
                                className="form-select" 
                                aria-label="Default select example" 
                                value={state?.status} 
                                onChange={e => setState({ ...state, status: e.target.value })}
                            >
                                <option style={{ backgroundColor: "gray" }} value="Pending">Pending</option>
                                <option style={{ backgroundColor: "green" }} value="Approved">Approve</option>
                                <option style={{ backgroundColor: "red" }} value="Rejected">Reject</option>
                            </select>
                        </div>
                        <div>
                            <button className='btn btn-primary' style={{ marginTop: '10px' }} type='button' onClick={submitData}>Submit</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default StatusModel;
