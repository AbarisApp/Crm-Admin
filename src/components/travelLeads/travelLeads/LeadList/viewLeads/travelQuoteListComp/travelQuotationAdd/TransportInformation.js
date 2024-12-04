import { Select } from 'antd';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
const { Option } = Select;

function TransportInformation({ editData, getTransitionReport, submitData, locations, otherFacilityData, setInitialData, handleQuillChange, changeHandle, initialData, onPrev, data }) {
    const [value, setValue] = useState('');
    const [inclusionVal, setInclusionVal] = useState('');
    const [exclusionVal, setExclusionVal] = useState('');
    const [termsConditionVal, setTermsConditionVal] = useState('');
    const [othersVal, setOthersVal] = useState('');
    const [extraOneVal, setExtraOneVal] = useState('');
    const [extraTwoVal, setExtraTwoVal] = useState('');

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Transport Information</b></h4>
                                </div>

                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                        <p>Lead No. : SOF00001</p>
                                        <p>Customer : LEAD LNAME</p>
                                        <p>Assigned User : ABDUL QUADIR</p>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Transport Information</h4>
                                    <div className='row'>
                                        <div className="form-group col-6">
                                            <label htmlFor="fromDate">Vehicle Type</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="fromDate"
                                                placeholder='Vehicle Type'
                                                name='vehicle_type'
                                                value={initialData?.vehicle_type}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="fromDate">Vehicle Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="fromDate"
                                                placeholder='Vehicle Name'
                                                name='vehicle_name'
                                                value={initialData?.vehicle_name}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Others</h4>
                                    <div className='row'>
                                        <div className="form-group col-6">
                                            {/* <label htmlFor="fromDate">Country</label> */}
                                            <Select
                                                mode="multiple"
                                                showSearch
                                                style={{ width: "100%", height: '40px' }}
                                                placeholder="Select Departure"
                                                optionFilterProp="children"
                                                className=""
                                                value={initialData.other_facilities}
                                                onChange={(value) => {
                                                    setInitialData((prevState) => ({
                                                        ...prevState,
                                                        other_facilities: value,
                                                    }));
                                                }}
                                            >
                                                {otherFacilityData?.map((loc) => (
                                                    <Option key={loc._id} value={loc._id}>
                                                        {loc.name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Overview</h4>
                                    <div className='row'>
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                name="overview"
                                                value={initialData.overview}
                                                onChange={(value) => handleQuillChange('overview', value)}
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Inclusions</h4>
                                    <div className='row'>
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                name="inclusions"
                                                value={initialData.inclusions}
                                                onChange={(value) => handleQuillChange('inclusions', value)}
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Exclusions</h4>
                                    <div className='row'>
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                name="exclusions"
                                                value={initialData.exclusions}
                                                onChange={(value) => handleQuillChange('exclusions', value)}
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Terms and Conditions</h4>
                                    <div className='row'>
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                name="terms_conditions"
                                                value={initialData.terms_conditions}
                                                onChange={(value) => handleQuillChange('terms_conditions', value)}
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Others</h4>
                                    <div className='row'>
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                name="others"
                                                value={initialData.others}
                                                onChange={(value) => handleQuillChange('others', value)}
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Extra 1</h4>
                                    <div className='row'>
                                        {/* <div className="form-group col-6">
                                            <label htmlFor="fromDate">Label</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Label'
                                                id="fromDate"
                                            />
                                        </div> */}
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                name="extra1"
                                                value={initialData.extra1}
                                                onChange={(value) => handleQuillChange('extra1', value)}
                                            />
                                        </div>
                                    </div>
                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Extra 2</h4>
                                    <div className='row'>
                                        {/* <div className="form-group col-6">
                                            <label htmlFor="fromDate">Label</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Label'
                                                id="fromDate"
                                            />
                                        </div> */}
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                name="extra2"
                                                value={initialData.extra2}
                                                onChange={(value) => handleQuillChange('extra2', value)}
                                            />
                                        </div>
                                    </div>


                                    <div className="form-group col-12 mt-3">
                                        <button type='button' className="btn btn-danger float-end" onClick={submitData}>
                                            {editData?._id ? 'Update' : 'Add'}
                                        </button>
                                        <button type='button' className="btn btn-primary float-end" onClick={onPrev}>Back</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransportInformation