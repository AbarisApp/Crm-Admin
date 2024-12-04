import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CustomInputField from '../../../../common/CustomInputField';
import WithoutAtricCustomInputField from '../../../../common/withoutAtrricCustomInp/WithoutAtricCustomInputField';
import JoditEditor from 'jodit-react';

function HotelInformation() {
    const handleChange = () => {

    }
    const [content, setContent] = useState('');


    return (
        <>
            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Hotel Information</b></h4>
                </div>
            </div>

            <div className='card'>
                <div className='row' key={""}>
                    <div className="col-xl-3 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Hotel City *"
                            value={""} onChange={(e) => handleChange(e, 'hotelCity')}
                        />
                    </div>

                    <div className="col-xl-3 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Hotel Name *"
                            value={""} onChange={(e) => handleChange(e, 'hotelName')}
                        />
                    </div>

                    <div className="col-xl-3 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Address *"
                            value={""} onChange={(e) => handleChange(e, 'address')}
                        />
                    </div>

                    <div className="col-xl-3 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Country *"
                            value={""} onChange={(e) => handleChange(e, 'country')}
                        />
                    </div>

                    <div className="col-xl-3 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="State *"
                            value={""} onChange={(e) => handleChange(e, 'state')}
                        />
                    </div>

                    <div className="col-xl-3 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Pincode *"
                            value={""} onChange={(e) => handleChange(e, 'pincode')}
                        />
                    </div>

                    <div className="col-xl-3 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Star Rating *"
                            value={""} onChange={(e) => handleChange(e, 'starRating')}
                        />
                    </div>

                    <div className="col-xl-3 mb-3">
                        <WithoutAtricCustomInputField
                            type="date"
                            placeholder="Check-in Date *"
                            value={""} onChange={(e) => handleChange(e, 'checkInDate')}
                        />
                    </div>

                    <div className="col-xl-3 mb-3">
                        <WithoutAtricCustomInputField
                            type="date"
                            placeholder="Check-out Date *"
                            value={""} onChange={(e) => handleChange(e, 'checkOutDate')}
                        />
                    </div>

                    <div className="col-xl-3 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Confirmation Number *"
                            value={""} onChange={(e) => handleChange(e, 'confirmationNumber')}
                        />
                    </div>

                    <div className="col-xl-3 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Hotel Confirmation Number *"
                            value={""} onChange={(e) => handleChange(e, 'hotelConfirmationNumber')}
                        />
                    </div>

                    <div className="col-xl-12 mb-3">
                        <label><small>Hotel Policy *</small></label>
                        <JoditEditor
                            value={""} onChange={(value) => setContent(value)}
                            tabIndex={1}
                            config={{
                                readonly: false,
                                toolbarSticky: false,
                                toolbarAdaptive: false,
                            }}
                        />
                    </div>


                </div>
            </div>


        </>
    );
}

export default HotelInformation;
