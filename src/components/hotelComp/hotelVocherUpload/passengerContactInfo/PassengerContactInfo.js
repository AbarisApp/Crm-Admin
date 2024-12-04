import React from 'react'
import CustomInputField from '../../../../common/CustomInputField'

function PassengerContactInfo({handleChange}) {
    return (
        <>
            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Passenger  Contact Information</b></h4>
                </div>
            </div>
            <div className='card'>
                <div className='row'>
                    <div className="col-xl-4 mb-3">
                        <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                            value={""}
                            onChange={handleChange}
                            placeholder="Business Type"
                        >

                            <option >India (+91)</option>

                        </select>
                    </div>

                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="number"
                            placeholder="Contact No"
                            value={""} onChange={(e) => handleChange(e, 'hotelName')}
                        />
                    </div>

                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="E-mail ID"
                            value={""} onChange={(e) => handleChange(e, 'email_id')}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PassengerContactInfo
