import React, { useState } from 'react'
import CustomInputField from '../../../../common/CustomInputField';
function HotelBasicInformation({ handleChange }) {
    const options = [
        { value: '1', label: 'TBO For' },
        { value: '2', label: 'Other Supplier' },
        // Add more options as needed
    ];
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChanges = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(`Selected:`, selectedOption);
    };
    return (
        <>

            <div className="table-responsive active-projects bg-primary text-uppercase mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Hotel Voucher Upload
                    </b></h4>
                </div>
            </div>
            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Basic Information </b></h4>
                </div>
            </div>

            <div className='card'>
                <div className='row'>
                    
                    <div className="col-xl-4 mb-3">
                        <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                            value={""}
                            onChange={handleChange}
                            placeholder = "Business Type"
                        >
                            
                            <option >Select Business Type</option>
                            <option value={true}>B2B</option>
                            <option value={false}>B2C</option>
                        </select>

                    </div>
                    
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Agency Name"
                            name="traveloperatorPNR"
                            value={""}
                            onChange={handleChange}
                            id="traveloperatorPNR"
                        />
                    </div>
                    <div className="col-xl-4 mb-3">
                    <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                            value={""}
                            onChange={handleChange}
                            placeholder = "Business Type"
                        >
                            
                            <option >Select Issue Supplier</option>
                            <option value={true}>TBO</option>
                            <option value={false}>Trip Jack</option>
                        </select>
                    </div>



                </div>
            </div>


        </>
    )
}

export default HotelBasicInformation
