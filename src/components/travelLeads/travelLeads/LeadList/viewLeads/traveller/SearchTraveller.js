import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SearchList } from './SearchaList';
import CustomInputField from '../../../../../../common/CustomInputField';

function Search({ show, setShow }) {


    return (
        <>
            <Modal
                centered={true}
                size={'lg'}
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="m-4">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Traveller Search</h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                <div className="mt-2">
                                    <label className="d-block my-1">First Name </label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={"text"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="mt-2">
                                    <label className="d-block my-1">Last Name</label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={"text"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="mt-2">
                                    <label className="d-block my-1">Mobile</label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={"number"}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="mt-2">
                                    <label className="d-block my-1">Passport</label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={"number"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="mt-5">
                                    <button className='btn btn-primary'>Search</button>
                                </div>
                            </div>
                        </div>
                        <div className='my-2'>
                            <SearchList />
                        </div>
                    </div >
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Search;