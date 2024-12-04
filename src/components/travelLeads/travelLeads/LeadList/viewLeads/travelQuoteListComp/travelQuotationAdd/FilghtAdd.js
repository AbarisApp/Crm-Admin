import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import { baseUrlImage } from '../../../../../../../baseUrl';

function FilghtAdd({ initialData, handleQuillChange, handleChangeImage, image, onNext, onPrev, data }) {
    const [input, setInput] = useState(data || {});
    const handleSaveAndNext = () => {
        onNext(input);
    };
    const [value, setValue] = useState('');

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Flight</b></h4>
                                </div>

                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                        <p>Lead No. : SOF00001</p>
                                        <p>Customer : LEAD LNAME</p>
                                        <p>Assigned User : ABDUL QUADIR</p>
                                    </div>

                                    <h4 className='mb-3' style={{ color: 'red' }}>Flight</h4>

                                    <div className='row'>
                                        <div className="form-group col-12">
                                            <label htmlFor="fromDate">Other Details</label>
                                            <ReactQuill
                                                theme="snow"
                                                name="flight"
                                                value={initialData.flight}
                                                onChange={(value) => handleQuillChange('flight', value)}
                                            />
                                        </div>
                                        <div className="form-group col-6 mt-2">
                                            <label htmlFor="fromDate">Attach File</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="fromDate"
                                                onChange={handleChangeImage}
                                            />
                                            {image && <img src={`${baseUrlImage}${image}`} />}
                                        </div>
                                    </div>
                                    <div className="form-group col-12 mt-3">
                                        <button className="btn btn-danger float-end" onClick={handleSaveAndNext}>Save & Next</button>
                                        <button className="btn btn-primary float-end" onClick={onPrev}>Back</button>
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

export default FilghtAdd