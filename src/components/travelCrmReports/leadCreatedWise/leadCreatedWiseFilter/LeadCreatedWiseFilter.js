import { useEffect, useState } from "react"
import { getTRCRMstaff_admin } from "../../../../api/login/Login"


const LeadCreatedWiseFilter = ({ filterInitial, handleChange, getTransitionReport }) => {
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
            // const resLeadSource = await getsource()
            // setLeadSource(resLeadSource?.data);
            // const resLeadPriority = await gettask_priorityadmin()
            // setLeadPriority(resLeadPriority?.data);
            // const resleadStatus = await getLead_proposal_status()
            // setLeadStatus(resleadStatus?.data);
            // const resTripType = await getTRCRM_trip_type_master_admin()
            // setTripType(resTripType?.data);
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
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Filter Lead Created Wise Report</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Form Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={filterInitial?.start_date}
                                        name="start_date"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">to Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={filterInitial?.end_date}
                                        name="start_date"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Sales Person</label>
                                    <select className="form-select shadow " name="createdBy" value={filterInitial?.createdBy} onChange={handleChange}>
                                        <option selected>Open this Sales Person</option>
                                        {staff && staff?.map((item) => {
                                            return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-xl-12 text-center">
                                    <button type="button" className="btn btn-primary" onClick={() => getTransitionReport(0)}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeadCreatedWiseFilter