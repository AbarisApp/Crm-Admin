import React from 'react'
import { Modal } from 'react-bootstrap'
import CustomInputField from '../../../../../../common/CustomInputField'

function GenerateNewForm({ show, setShow, handleSubmit }) {
    const handleChange = () => {

    }
    return (
        <>
            <Modal show={show} onHide={() => setShow(!show)} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modle-dilogee">
                <Modal.Header closeButton className=' bg-secondary'>
                    <Modal.Title className='text-light text-uppercase'>GENERATE FORM
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row m-4">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                                        <div className="row">


                                            <div className="col-xl-12 mb-3">
                                                <small>Type*</small>
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Select One </option>
                                                    <option value={1}>B2B</option>
                                                    <option value={3}>B2C</option>
                                                </select>

                                            </div>

                                            <div className="col-xl-12 mb-3">
                                                <small>Is Required*</small>
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Select One  </option>
                                                    <option value={1}>Required</option>
                                                    <option value={3}>Optional</option>
                                                </select>
                                            </div>


                                            <div className="col-xl-12 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Label"
                                                    name="value"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="value"
                                                />
                                            </div>
                                            <div className="col-xl-12 mb-3">
                                                <small>Width*</small>
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Select One</option>
                                                    <option value={1}>100%</option>
                                                    <option value={3}>50%</option>
                                                    <option value={3}>33%</option>
                                                </select>

                                            </div>
                                            <div className="col-xl-12 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Value"
                                                    name="value"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="value"
                                                />
                                            </div>


                                            <div className="col-xl-12 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Select Status</option>
                                                    <option value={1}>Active</option>
                                                    <option value={3}>In Active</option>
                                                </select>

                                            </div>
                                            <div className="col-lg-12">
                                                <div className='d-flex justify-content-end'>
                                                    <button className="btn btn-warning" type="button" >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default GenerateNewForm
