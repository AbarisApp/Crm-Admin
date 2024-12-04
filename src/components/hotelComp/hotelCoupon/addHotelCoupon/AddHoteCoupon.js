import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CustomInputField from '../../../../common/CustomInputField'
import Select from 'react-select';
import CustomTextArea from '../../../../common/CustomTextArea';
function AddHotelCoupon({ show, setShow, handleSubmit }) {
    const countries = [
        { value: 'US', label: 'United States' },
        { value: 'IN', label: 'India' },
        { value: 'UK', label: 'United Kingdom' },
        { value: 'CN', label: 'China' },
        { value: 'AU', label: 'Australia' },
        { value: 'All', label: 'All Country List' },
        // Add more countries as needed
    ];
    const handleChange = () => {

    }
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        console.log(`Selected country:`, selectedOption);
    };
    return (
        <>
            <Modal show={show} onHide={() => setShow(!show)} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modle-dilogee">
                <Modal.Header closeButton className=' bg-secondary'>
                    <Modal.Title className='text-light text-uppercase'>Add Hotel Coupon
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row m-4">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                                        <div className="row">


                                            {/* <div className="col-xl-4 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Markup For </option>
                                                    <option value={1}>B2B</option>
                                                    <option value={3}>B2C</option>
                                                </select>

                                            </div> */}
                                            <div className="col-xl-4 mb-3">
                                                <Select
                                                    value={selectedCountry}
                                                    onChange={handleCountryChange}
                                                    options={countries}
                                                    placeholder="Region Type*"
                                                    isSearchable
                                                    classNamePrefix="react-select"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <Select
                                                    value={selectedCountry}
                                                    onChange={handleCountryChange}
                                                    options={countries}
                                                    placeholder="Star Rating*"
                                                    isSearchable
                                                    classNamePrefix="react-select"
                                                />
                                            </div>



                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Coupon Code"
                                                    name="value"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="value"
                                                />
                                            </div>

                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Cheakin Date"
                                                    name="extraDiscount"
                                                    extraDiscount={""}
                                                    onChange={handleChange}
                                                    id="value"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Cheackout Date"
                                                    name="max-limit"
                                                    extraDiscount={""}
                                                    onChange={handleChange}
                                                    id="max-limit"
                                                />
                                            </div>


                                            <div className="col-xl-4 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Select Coupon Type</option>
                                                    <option value={1}>Fixed</option>
                                                    <option value={3}>Percent</option>
                                                </select>

                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Value"
                                                    name="max-limit"
                                                    extraDiscount={""}
                                                    onChange={handleChange}
                                                    id="max-limit"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Show On List*</option>
                                                    <option value={true}>Active</option>
                                                    <option value={false}>Inactive</option>
                                                </select>

                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Coupon Max Limit "
                                                    name="max-limit"
                                                    extraDiscount={""}
                                                    onChange={handleChange}
                                                    id="max-limit"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Coupon Use Limit"
                                                    name="max-limit"
                                                    extraDiscount={""}
                                                    onChange={handleChange}
                                                    id="max-limit"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Select Status</option>
                                                    <option value={true}>Active</option>
                                                    <option value={false}>Inactive</option>
                                                </select>

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Valid From Date "
                                                    name="max-limit"
                                                    extraDiscount={""}
                                                    onChange={handleChange}
                                                    id="max-limit"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Valid To Date  "
                                                    name="max-limit"
                                                    extraDiscount={""}
                                                    onChange={handleChange}
                                                    id="max-limit"
                                                />
                                            </div>
                                            <div className="col-xl-12 mb-3">
                                                <CustomTextArea
                                                    type="text"
                                                    placeholder="Coupon Text"
                                                    name="max-limit"
                                                    extraDiscount={""}
                                                    onChange={handleChange}
                                                    id="max-limit"
                                                />
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

export default AddHotelCoupon