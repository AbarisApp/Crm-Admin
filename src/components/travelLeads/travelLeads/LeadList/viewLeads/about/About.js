
import Accordion from 'react-bootstrap/Accordion';
const About = ({ leadIdData }) => {

    return (

        <div className="card">
            <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption tbl-caption-2">
                        <h4 className="heading mb-0 p-2">Lead Information</h4>
                    </div>
                    <form className="tbl-captionn">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                                        <p>{leadIdData?.mobile_number}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                        <p>{leadIdData?.email_id}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                        <p>{leadIdData?.first_name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                        <p>{leadIdData?.last_name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Address</label>
                                        <p>{leadIdData?.last_name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">City</label>
                                        <p>{leadIdData?.city?.name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Alternate Mobile Number</label>
                                        <p>{leadIdData?.alternate_mobile_number}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Alternate Email Id</label>
                                        <p>{leadIdData?.alternate_email_id}</p>

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Customer Types</label>
                                        <p>{leadIdData?.customer_type?.customer_type}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Lead Source</label>
                                        <p>{leadIdData?.lead_source?.name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Referral Name</label>
                                        <p>{leadIdData?.refer_code}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Lead Priority</label>
                                        <p>{leadIdData?.lead_priority?.name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Lead Status</label>
                                        <p>{leadIdData?.lead_status?.name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Trip Type</label>
                                        <p>{leadIdData?.trip_type?.name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Tag</label>
                                        <p>{leadIdData?.tag?.name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">No. of Adults</label>
                                        <p>{leadIdData?.no_of_adults}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">No. of Children</label>
                                        <p>{leadIdData?.no_of_children}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">No. of Infant</label>
                                        <p>{leadIdData?.no_of_infant}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label"> Assigned To</label>
                                        <p>{leadIdData?.assigned_to?.name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label"> Assinged Users</label>
                                        <p>{leadIdData?.createdBy?.name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label"> Branch</label>
                                        <p>Branch</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label"> Created Date</label>
                                        <p>{leadIdData?.createdAt}</p>
                                    </div>
                                    {/* <div className="col-lg-4">
                                        <label for="exampleFormControlInput1" class="form-label">Change Lead Owner Assigned User</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Change Lead Owner Assigned User</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label for="exampleFormControlInput1" class="form-label">Pass To Lead</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Change Assigned User</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label for="exampleFormControlInput1" class="form-label">Tag</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Tag</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label for="exampleFormControlInput1" class="form-label">Lead Priority</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Lead Priority</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div> */}



                                    <div className='row'>
                                        {Array.isArray(leadIdData?.lead_visa) && leadIdData?.lead_visa.length > 0 ? (
                                            <div className='col-lg-12' style={{ border: '1px solid black' }}>
                                                <h3 style={{ marginBottom: '10px' }}>Visa</h3>
                                                <div className='row'>
                                                    {leadIdData.lead_visa.map((item) => (
                                                        <div className='col-lg-12' key={item?._id}>
                                                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <h4>County</h4>
                                                                    <p>{item?.country?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Visa Category</h4>
                                                                    <p>{item?.visa_category?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Visa Type</h4>
                                                                    <p>{item?.visa_category?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Duration</h4>
                                                                    <p>{item?.visa_type?.name}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}

                                        {Array.isArray(leadIdData?.lead_flight) && leadIdData?.lead_flight.length > 0 ? (
                                            <div className='col-lg-12' style={{ border: '1px solid black' }}>
                                                <h3 style={{ marginBottom: '10px' }}>Flight Booking</h3>
                                                <div className='row'>
                                                    {leadIdData.lead_flight.map((item) => (
                                                        <div className='col-lg-12' key={item?._id}>
                                                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <h4>From</h4>
                                                                    <p>{item?.from?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>To</h4>
                                                                    <p>{item?.to?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Departure</h4>
                                                                    <p>{item?.departure}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Return</h4>
                                                                    <p>{item?.return}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Class</h4>
                                                                    <p>{item?.class?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Flexibility</h4>
                                                                    <p>{item?.flexibility}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Preference</h4>
                                                                    <p>{item?.preference?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Category</h4>
                                                                    <p>{item?.category_domestic_flight == true ? 'Domestic Flight' : ''} / {item?.category_international_flight == true ? 'International Flight' : ''}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}
                                        {Array.isArray(leadIdData?.lead_train) && leadIdData?.lead_train.length > 0 ? (
                                            <div className='col-lg-12' style={{ border: '1px solid black' }}>
                                                <h3 style={{ marginBottom: '10px' }}>Train Details</h3>
                                                <div className='row'>
                                                    {leadIdData.lead_train.map((item) => (
                                                        <div className='col-lg-12' key={item?._id}>
                                                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <h4>Country</h4>
                                                                    <p>{item?.country?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>From</h4>
                                                                    <p>{item?.from?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>To</h4>
                                                                    <p>{item?.to?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Departure</h4>
                                                                    <p>{item?.departure}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Return</h4>
                                                                    <p>{item?.return}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Preference</h4>
                                                                    <p>{item?.preference?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>remark</h4>
                                                                    <p>{item?.remark}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}

                                        {Array.isArray(leadIdData?.lead_forex) && leadIdData?.lead_forex.length > 0 ? (
                                            <div className='col-lg-12' style={{ border: '1px solid black' }}>
                                                <h3 style={{ marginBottom: '10px' }}>Forex</h3>
                                                <div className='row'>
                                                    {leadIdData.lead_forex.map((item) => (
                                                        <div className='col-lg-12' key={item?._id}>
                                                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <h4>Country</h4>
                                                                    <p>{item?.country?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Amount</h4>
                                                                    <p>{item?.amount}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}

                                        {Array.isArray(leadIdData?.lead_transport) && leadIdData?.lead_transport.length > 0 ? (
                                            <div className='col-lg-12' style={{ border: '1px solid black' }}>
                                                <h3 style={{ marginBottom: '10px' }}>Transport</h3>
                                                <div className='row'>
                                                    {leadIdData.lead_transport.map((item) => (
                                                        <div className='col-lg-12' key={item?._id}>
                                                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <h4>Country</h4>
                                                                    <p>{item?.country?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>City</h4>
                                                                    <p>{item?.city?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Pick Up Date</h4>
                                                                    <p>{item?.to?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Drop Date</h4>
                                                                    <p>{item?.drop_date}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Preference</h4>
                                                                    <p>{item?.preference?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Transport Type</h4>
                                                                    <p>{item?.transport_type_airport_transfers == true ? 'Airport Transfers' : ''} / {item?.transport_type_sightseeing_transfers == true ? 'Sightseeing Transfers' : ''} / {item?.transport_type_other == true ? 'Transport Type Other' : ''} / {item?.transport_type_other_name}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}

                                        {Array.isArray(leadIdData?.lead_other) && leadIdData?.lead_other.length > 0 ? (
                                            <div className='col-lg-12' style={{ border: '1px solid black' }}>
                                                <h3 style={{ marginBottom: '10px' }}>Other</h3>
                                                <div className='row'>
                                                    {leadIdData.lead_other.map((item) => (
                                                        <div className='col-lg-12' key={item?._id}>
                                                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <h4>Country</h4>
                                                                    <p>{item?.country?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Travel Date</h4>
                                                                    <p>{item?.travel_date}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>No. of Days</h4>
                                                                    <p>{item?.number_of_days}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Sub Category</h4>
                                                                    <p>{item?.sub_category}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Description</h4>
                                                                    <p>{item?.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}

                                        {Array.isArray(leadIdData?.lead_bus) && leadIdData?.lead_bus.length > 0 ? (
                                            <div className='col-lg-12' style={{ border: '1px solid black' }}>
                                                <h3 style={{ marginBottom: '10px' }}>Bus</h3>
                                                <div className='row'>
                                                    {leadIdData.lead_bus.map((item) => (
                                                        <div className='col-lg-12' key={item?._id}>
                                                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <h4>Country</h4>
                                                                    <p>{item?.country?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>From</h4>
                                                                    <p>{item?.from?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>To</h4>
                                                                    <p>{item?.to?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Departure</h4>
                                                                    <p>{item?.departure}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Return</h4>
                                                                    <p>{item?.return}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Preference</h4>
                                                                    <p>{item?.preference?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Remark</h4>
                                                                    <p>{item?.remark}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}

                                        {Array.isArray(leadIdData?.lead_passport) && leadIdData?.lead_passport.length > 0 ? (
                                            <div className='col-lg-12' style={{ border: '1px solid black' }}>
                                                <h3 style={{ marginBottom: '10px' }}>Passport</h3>
                                                <div className='row'>
                                                    {leadIdData.lead_passport.map((item) => (
                                                        <div className='col-lg-12' key={item?._id}>
                                                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <h4>Issusing Country</h4>
                                                                    <p>{item?.issuing_country?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>date</h4>
                                                                    <p>{item?.date}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Category</h4>
                                                                    <p>{item?.category}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Current Passport Number</h4>
                                                                    <p>{item?.current_passport_number}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Place Of Apply</h4>
                                                                    <p>{item?.place_of_apply}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>No Of Person</h4>
                                                                    <p>{item?.no_of_person}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Remark</h4>
                                                                    <p>{item?.remark}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Urgent</h4>
                                                                    <p>{item?.urgent == true ? 'Yes' : 'No'}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}

                                        {Array.isArray(leadIdData?.lead_cruise) && leadIdData?.lead_cruise.length > 0 ? (
                                            <div className='col-lg-12' style={{ border: '1px solid black' }}>
                                                <h3 style={{ marginBottom: '10px' }}>Cruise Details</h3>
                                                <div className='row'>
                                                    {leadIdData.lead_cruise.map((item) => (
                                                        <div className='col-lg-12' key={item?._id}>
                                                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <h4>Issusing Country</h4>
                                                                    <p>{item?.issuing_country?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>City</h4>
                                                                    <p>{item?.city?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Days</h4>
                                                                    <p>{item?.days}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Cruise Name</h4>
                                                                    <p>{item?.cruise_name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Type</h4>
                                                                    <p>{item?.type}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Departure</h4>
                                                                    <p>{item?.departure}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Return</h4>
                                                                    <p>{item?.return}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>remark</h4>
                                                                    <p>{item?.urgent == true ? 'Yes' : 'No'}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}

                                        {Array.isArray(leadIdData?.lead_adventure) && leadIdData?.lead_adventure.length > 0 ? (
                                            <div className='col-lg-12' style={{ border: '1px solid black' }}>
                                                <h3 style={{ marginBottom: '10px' }}>Adventure Details</h3>
                                                <div className='row'>
                                                    {leadIdData.lead_adventure.map((item) => (
                                                        <div className='col-lg-12' key={item?._id}>
                                                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <h4>Country</h4>
                                                                    <p>{item?.country?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>City</h4>
                                                                    <p>{item?.city?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Travel Date</h4>
                                                                    <p>{item?.travel_date}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Category</h4>
                                                                    <p>{item?.category_motorbiking == true ? 'Motorbiking' : ''} / {item?.category_camping == true ? 'Camping' : ''}/{item?.category_safari == true ? 'Safari' : ''} /{item?.category_water_sports == true ? 'Water Sports' : ''}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Remark</h4>
                                                                    <p>{item?.remark}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}

                                        {Array.isArray(leadIdData?.lead_sightseeing) && leadIdData?.lead_sightseeing.length > 0 ? (
                                            <div className='col-lg-12' style={{ border: '1px solid black' }}>
                                                <h3 style={{ marginBottom: '10px' }}>Sightseeing</h3>
                                                <div className='row'>
                                                    {leadIdData.lead_sightseeing.map((item) => (
                                                        <div className='col-lg-12' key={item?._id}>
                                                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <h4>Country</h4>
                                                                    <p>{item?.sightseeing_id?.country?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>City</h4>
                                                                    <p>{item?.city?.name}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Travel Date</h4>
                                                                    <p>{item?.travel_date}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Preference</h4>
                                                                    <p>-</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Sightseeing Options</h4>
                                                                    <p>--</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>



                                    {/* <div className="col-lg-12 mt-3">
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Visa</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='row'>
                                                        <div className='col-lg-3'>
                                                            <div>
                                                                <p>County</p>
                                                                <h6>India</h6>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-3'>
                                                            <div>
                                                                <p>Visa Category</p>
                                                                <h6>Tourist</h6>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-3'>
                                                            <div>
                                                                <p>Visa Type</p>
                                                                <h6>Single</h6>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-3'>
                                                            <div>
                                                                <p>Duration</p>
                                                                <h6>5</h6>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Travel Insurance</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='row'>
                                                        <div className='col-lg-3'>
                                                            <div>
                                                                <p>County</p>
                                                                <h6>India</h6>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-3'>
                                                            <div>
                                                                <p>How long?</p>
                                                                <h6>30 days</h6>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-3'>
                                                            <div>
                                                                <p>Insurance for Visa</p>
                                                                <h6>Yes</h6>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-3'>
                                                            <div>
                                                                <p>Travel Date</p>
                                                                <h6>2024-11-28</h6>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div> */}

                                    {/* <div className="col-xl-12 text-center">
                                <button type="button" className="btn btn-primary">
                                    Search
                                </button>
                            </div> */}
                                </div>
                            </div>

                            {/* <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label for="exampleFormControlInput1" class="form-label">Change Assigned User</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Change Assigned User</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12 text-center mt-2">
                                        <button type="button" className="btn btn-primary">
                                            Save
                                        </button>
                                    </div>
                                    <div className="col-lg-12">
                                        <label for="exampleFormControlInput1" class="form-label">Pass To Lead</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Change Assigned User</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12 text-center mt-2">
                                        <button type="button" className="btn btn-primary">
                                            Save
                                        </button>
                                    </div>
                                    <div className="col-lg-12">
                                        <label for="exampleFormControlInput1" class="form-label">Notes</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                    </div>
                                    <div className="col-xl-12 text-center mt-2">
                                        <button type="button" className="btn btn-primary">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default About