import { useEffect, useState } from "react"
import { getLead_proposal_status, getsource, gettask_priorityadmin, getTRCRM_trip_type_master_admin, getTRCRMstaff_admin } from "../../../../api/login/Login"




export function LeadFilter({ filterInitial, handleChange, getTransitionReport }) {
    const [customerType, setCustomer] = useState(null)
    const [leadSource, setLeadSource] = useState(null)
    const [leadPriority, setLeadPriority] = useState(null)
    const [leadStatus, setLeadStatus] = useState(null)
    const [tripType, setTripType] = useState(null)
    const [staff, setStaff] = useState(null)
    const [preference, setPreference] = useState(null)
    const [classData, setClassData] = useState(null)
    const [roomType, setroomType] = useState(null)
    const [starRatting, setStarRatting] = useState(null)
    const [countryData, setcountryData] = useState(null)
    const [visaCatData, setVisaCatData] = useState(null)
    const [visaTypeData, setVisaTypeData] = useState(null)
    const [currencyData, setCurrencyData] = useState(null)
    const [sight_seeingData, setSight_seeing] = useState(null)
    const [state, setstate] = useState(null)
    const [services, setServices] = useState(null)

    const comboDataGet = async () => {
        try {
            // const resCustomerType = await getTRCRM_customer_type_master_admin()
            // setCustomer(resCustomerType?.data);
            const resLeadSource = await getsource()
            setLeadSource(resLeadSource?.data);
            const resLeadPriority = await gettask_priorityadmin()
            setLeadPriority(resLeadPriority?.data);
            const resleadStatus = await getLead_proposal_status()
            setLeadStatus(resleadStatus?.data);
            const resTripType = await getTRCRM_trip_type_master_admin()
            setTripType(resTripType?.data);
            const resStaff = await getTRCRMstaff_admin()
            setStaff(resStaff?.data);
            // const resPreference = await getTRCRM_preferenceadmin()
            // setPreference(resPreference?.data);
            // const resClassData = await getTRCRM_flight_classadmin()
            // setClassData(resClassData?.data);
            // const resRoomType = await addTravelRoomType()
            // setroomType(resRoomType?.data);
            // const resStarRating = await getTRCRM_star_rating_master()
            // setStarRatting(resStarRating?.data);
            // const resCountry = await countryList()
            // setcountryData(resCountry?.data);
            // const resvisa_category = await TRCRM_visa_category_masterGet()
            // setVisaCatData(resvisa_category?.data);
            // const resvisa_type = await TTRCRM_visa_type_masterGet()
            // setVisaTypeData(resvisa_type?.data);
            // const resCurrency = await currencyList()
            // setCurrencyData(resCurrency?.data);
            // const resSight_seeing = await getTRCRM_sight_seeing_masteradmin()
            // setSight_seeing(resSight_seeing?.data);
            // const resState = await getStateMaster()
            // setstate(resState?.data)
            // const resService = await getTRCRM_service_masteradmin()
            // setServices(resService?.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        comboDataGet()
    }, [])
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption">
                            <h4 className="heading mb-0">Travel Lead Filter</h4>
                            <div>
                                {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={filterInitial?.start_date}
                                        name="start_date"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">End Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={filterInitial?.end_date}
                                        name="start_date"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Lead Priority</label>
                                    <select className="form-select shadow " name="lead_priority" value={filterInitial?.lead_priority} onChange={handleChange}>
                                        <option selected>Open this Lead Priority</option>
                                        {leadPriority && leadPriority?.map((item) => {
                                            return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Lead Status</label>
                                    <select className="form-select shadow " name="lead_status" value={filterInitial?.lead_status} onChange={handleChange}>
                                        <option selected>Open this Lead Status</option>
                                        {leadStatus && leadStatus?.map((item) => {
                                            return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Assigned To</label>
                                    <select className="form-select shadow " name="assigned_to" value={filterInitial?.assigned_to} onChange={handleChange}>
                                        <option selected>Open this Assigned To</option>
                                        {staff && staff?.map((item) => {
                                            return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Lead Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Lead Number"
                                        value={filterInitial?.lead_number}
                                        name="lead_number"
                                        onChange={handleChange}

                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Firstname</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter First Name"
                                        value={filterInitial?.first_name}
                                        name="first_name"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Lastname</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Last Name"
                                        value={filterInitial?.last_name}
                                        name="last_name"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Mobile Number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Mobile Number"
                                        value={filterInitial?.mobile_number}
                                        name="mobile_number"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Email Id</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Email Id"
                                        value={filterInitial?.email_id}
                                        name="email_id"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Tag</label>
                                    <select className="form-select shadow " name="tag" value={filterInitial?.tag} onChange={handleChange}>
                                        <option selected>Open this Tag</option>
                                        {tripType && tripType?.map((item) => {
                                            return <option value={item?._id} key={item?._id}>{item?.trip_type}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-2" style={{ textAlign: 'center' }}>
                                <button className="btn btn-primary" style={{ width: '300px', textAlign: 'center' }} onClick={() => getTransitionReport(0)}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
} 