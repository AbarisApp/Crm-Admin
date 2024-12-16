import { useEffect, useMemo, useRef, useState } from "react";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import JoditEditor from "jodit-react";
import { useNavigate, useParams } from "react-router-dom";
import { addhotelVoucher, addTravelRoomType, cityMainGet, cityMainGet2, cityMainGett, getAirlLine, getByIdhotelVoucher, getByIdTRCRM_tr_lead, getrcrm_hotel_master, getTravelAllCountry, getTRCRM_hotel_type_master, thotelVoucherUpdate, TTRCRM_tr_travellerGet } from "../../../../../api/login/Login";
import { Select } from "antd";
import { toast, ToastContainer } from "react-toastify";
const { Option } = Select;


const AddHotelVoucher = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel Leads",
        title_2: 'Create Hotel Voucher',
        path_2: ``
    };

    const params = useParams()
    console.log(params);


    const navigate = useNavigate()

    const editor = useRef(null);
    const [content, setContent] = useState('');

    const [initialData, setInitialData] = useState({
        lead_id: '',
        traveller_name: '',
        country: '',
        city: '',
        hotel: '',
        co_passanger: [],
        room_type: '',
        voucher_number: '',
        no_of_rooms: '',
        adult: '',
        child: '',
        infant: '',
        checkin_date: '',
        checkin_time: '',
        checkout_date: '',
        checkout_time: '',
        hotel_confirmation: '',
        internal_confirmation: '',
        child_with_bed: '',
        child_without_bed: '',
        below_five_child: '',
        extra_bed: '',
        booking_date: '',
        breakfast: false,
        lunch: false,
        dinner: false,
        payment_description: '',
        remark: '',
        inclusion: '',
        exclusion: '',
        terms_condition: '',
        others: '',
    })

    const changeHandle = (e) => {
        const { name, value, type, checked } = e.target;
        setInitialData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    const handleSelectChange = (value, field) => {
        setInitialData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleEditorChange = (field, value) => {
        setInitialData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const [leadIdData, setLeadIdData] = useState(null)
    // console.log(leadIdData);
    const leadIdGet = async () => {
        try {
            const res = await getByIdTRCRM_tr_lead(params?.id)
            // console.log(res);
            setLeadIdData(res?.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        leadIdGet()
    }, [params?.id])

    const [countryData, setCountryData] = useState([])
    const [coPassanger, setCoPassanger] = useState([])
    const [roomType, setroomType] = useState([])
    const [hotelData, setHotelData] = useState([])
    // console.log(coPassanger);

    const getAllCountryListData = async () => {
        try {
            const res = await getTravelAllCountry();
            setCountryData(res?.data)
            const res2 = await TTRCRM_tr_travellerGet()
            setCoPassanger(res2?.data)
            const res3 = await addTravelRoomType()
            setroomType(res3?.data)
            const res4 = await getrcrm_hotel_master()
            setHotelData(res4?.data)
        } catch (error) {

        }
    };
    const [locations, setLocations] = useState([]);
    const searchAirlLine = async () => {
        try {
            const res = await cityMainGett()
            setLocations(res?.data);
        } catch (error) {

        }
    }


    // const config = useMemo(() => ({
    //     readonly: false, // All settings to be defined here
    //     placeholder: 'Start typing...'
    // }), []);

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? `${message}` : `${message}`}`, {
            position: "top-right",
        });
    };

    const toastErroeMessage = (message) => {
        toast.error(`${message}`, {
            position: "top-right",
        });
    };


    const submitData = async () => {
        const clone = { ...initialData, lead_id: params?.id }
        // console.log(clone);
        try {
            if (!params?.updateId) {
                const res = await addhotelVoucher(clone)
                // console.log(res);
                if (res?.error == false) {
                    toastSuccessMessage(res?.message)
                    // setLoader(false)
                    setTimeout(() => {
                        navigate(`/travel-Vouchers-list/${params?.id}`)
                    }, 2000)
                } else {
                    toastErroeMessage(res?.message)
                }
            } else {
                const res = await thotelVoucherUpdate(params?.updateId, clone)
                console.log(res);
                if (res?.error == false) {
                    toastSuccessMessage(res?.message)
                    // setLoader(false)
                    setTimeout(() => {
                        navigate(`/travel-Vouchers-list/${params?.id}`)
                    }, 2000)
                } else {
                    toastErroeMessage(res?.message)
                }
            }


        } catch (error) {

        }
    }


    useEffect(() => {
        const getIdData = async () => {
            try {
                const res = await getByIdhotelVoucher(params.updateId)
                // console.log(res);
                setInitialData(res?.data)

            } catch (error) {

            }
        }
        if (params?.updateId) {
            getIdData();
        }
    }, [params?.updateId])

    useEffect(() => {
        getAllCountryListData()
        searchAirlLine()
    }, [])

    useEffect(() => {
        if (leadIdData) {
            const fullName = [leadIdData.first_name, leadIdData.last_name]
                .filter(Boolean)
                .join(' ');
            setInitialData((prevData) => ({
                ...prevData,
                traveller_name: fullName,
            }));
        }
    }, [leadIdData]);

    // console.log(params);

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">{params?.updateId ? 'Update' : 'Create'} Hotel Voucher</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                                        <p>{leadIdData?.first_name} {leadIdData?.last_name}</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                                        <p>{leadIdData?.mobile_number}</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Assigned User</label>
                                        <p>{leadIdData?.assigned_to?.name}</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Present User</label>
                                        <p>{leadIdData?.first_name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Traveller Name</label>
                                        <input type="text" className="form-control" disabled value={initialData.traveller_name} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Country</label>
                                        <select className="form-control" aria-label="Default select example" name="country" value={initialData?.country} onChange={changeHandle}>
                                            <option selected>Open this select Country</option>
                                            {countryData && countryData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">City</label>
                                        <Select
                                            showSearch
                                            style={{ width: "100%" }}
                                            placeholder="Select City"
                                            optionFilterProp="city"
                                            value={initialData.city}
                                            onChange={(value) => handleSelectChange(value, 'city')}
                                        >
                                            {locations?.map((loc) => (
                                                <Option key={loc._id} value={loc._id}>
                                                    {loc.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Hotels</label>
                                        <select className="form-control" aria-label="Default select example" name="hotel" value={initialData?.hotel} onChange={changeHandle}>
                                            <option selected>Open this select Hotels</option>
                                            {hotelData && hotelData?.map((item) => {
                                                return <option value={item?._id}>{item?.hotel_name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Co Passanger</label>
                                        <Select
                                            mode="multiple"
                                            showSearch
                                            style={{ width: "100%" }}
                                            placeholder="Select Co Passanger"
                                            optionFilterProp="co_passanger"
                                            value={initialData.co_passanger}
                                            onChange={(value) => handleSelectChange(value, 'co_passanger')}
                                        >
                                            {coPassanger?.map((loc) => (
                                                <Option key={loc._id} value={loc._id}>
                                                    {loc.given_name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Room Type</label>
                                        <select className="form-control" aria-label="Default select example" name="room_type" value={initialData?.room_type} onChange={changeHandle}>
                                            <option selected>Open this select Hotels</option>
                                            {roomType && roomType?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Voucher Number</label>
                                        <input type="text" className="form-control" placeholder="Enter Voucher Number" name="voucher_number" value={initialData?.voucher_number} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Number Of Room</label>
                                        <input type="number" className="form-control" placeholder="Enter Number Of Room" name="no_of_rooms" value={initialData?.no_of_rooms} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Adult</label>
                                        <input type="number" className="form-control" placeholder="Enter Adult" name="adult" value={initialData?.adult} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Child</label>
                                        <input type="number" className="form-control" placeholder="Enter Child" name="child" value={initialData?.child} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Infact</label>
                                        <input type="number" className="form-control" placeholder="Enter Infact" name="infant" value={initialData?.infant} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Checking Date</label>
                                        <input type="date" className="form-control" placeholder="Enter Co Passanger" name="checkin_date" value={initialData?.checkin_date} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Checking Time</label>
                                        <input type="time" className="form-control" placeholder="Enter Co Passanger" name="checkin_time" value={initialData?.checkin_time} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Checkout Date</label>
                                        <input type="date" className="form-control" placeholder="Enter Co Passanger" name="checkout_date" value={initialData?.checkout_date} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Checkout Time</label>
                                        <input type="time" className="form-control" placeholder="Enter Co Passanger" name="checkout_time" value={initialData?.checkout_time} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Hotal Confirmation</label>
                                        <input type="text" className="form-control" placeholder="Enter Hotal Confirmation" name="hotel_confirmation" value={initialData?.hotel_confirmation} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Internal Confirmation</label>
                                        <input type="text" className="form-control" placeholder="Enter Internal Confirmation" name="internal_confirmation" value={initialData?.internal_confirmation} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Child With Bed</label>
                                        <input type="text" className="form-control" placeholder="Enter Child With Bed" name="child_with_bed" value={initialData?.child_with_bed} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Child With Out Bed</label>
                                        <input type="text" className="form-control" placeholder="Enter Child With Bed" name="child_without_bed" value={initialData?.child_without_bed} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Below 5 years Child</label>
                                        <input type="text" className="form-control" placeholder="Enter Below 5 years Child" name="below_five_child" value={initialData?.below_five_child} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Extra Bed</label>
                                        <input type="text" className="form-control" placeholder="Enter Extra Bed" name="extra_bed" value={initialData?.extra_bed} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Booking Date</label>
                                        <input type="date" className="form-control" placeholder="Enter Extra Bed" name="booking_date" value={initialData?.booking_date} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Include</label>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className="form-check me-3">
                                                <input className="form-check-input" type="checkbox" id="breakfast" name="breakfast"
                                                    checked={initialData.breakfast}
                                                    onChange={changeHandle} />
                                                <label className="form-check-label" htmlFor="breakfast">
                                                    BreakFast
                                                </label>
                                            </div>
                                            <div className="form-check me-3">
                                                <input className="form-check-input" type="checkbox" id="lunch" name="lunch"
                                                    checked={initialData.lunch}
                                                    onChange={changeHandle} />
                                                <label className="form-check-label" htmlFor="lunch">
                                                    Lunch
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="dinner" name="dinner"
                                                    checked={initialData.dinner}
                                                    onChange={changeHandle} />
                                                <label className="form-check-label" htmlFor="dinner">
                                                    Dinner
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Payment Description</label>
                                        <input type="text" className="form-control" placeholder="Enter Extra Bed" name="payment_description" value={initialData?.payment_description} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Remarks</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" name="remark" value={initialData?.remark} onChange={changeHandle} ></textarea>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Inclusions</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={initialData.inclusion}
                                            config={{ readonly: false }}
                                            tabIndex={1}
                                            onBlur={(newContent) => handleEditorChange('inclusion', newContent)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Exclusions</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={initialData.exclusion}
                                            config={{ readonly: false }}
                                            tabIndex={1}
                                            onBlur={(newContent) => handleEditorChange('exclusion', newContent)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Terms And Condition</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={initialData.terms_condition}
                                            config={{ readonly: false }}
                                            tabIndex={1}
                                            onBlur={(newContent) => handleEditorChange('terms_condition', newContent)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Other</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={initialData.others}
                                            config={{ readonly: false }}
                                            tabIndex={1}
                                            onBlur={(newContent) => handleEditorChange('others', newContent)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary" onClick={submitData}>
                                            {params?.updateId ? 'Update' : 'Add'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
            <ToastContainer />
        </>
    )
}

export default AddHotelVoucher