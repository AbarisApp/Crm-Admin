import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";

import { useEffect, useMemo, useRef, useState } from "react";

import JoditEditor from "jodit-react";
import { addflightVoucher, cityMainGett, flightVoucherUpdate, getByIdflightVoucher, getByIdTRCRM_tr_lead } from "../../../../../api/login/Login";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const { Option } = Select;

const AddFlightVoucher = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel Leads",
        title_2: 'Create Flight Voucher',
        path_2: ``
    };

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const params = useParams()
    const navigate = useNavigate()

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typing...'
    }), []);

    const [initialData, setInitialData] = useState({
        lead_id: '',
        booking_date: '',
        no_of_passenger: '',
        subVouchers: [
            {
                // airline: "",
                flightNumber: "",
                pnrNumber: "",
                connectingFlight: false,
                operatedBy: false,
                discription: '',
                departure: {
                    city: "",
                    date: "",
                    hours: "",
                    minutes: "",
                    // airport: "",
                },
                arrival: {
                    city: "",
                    date: "",
                    hours: "",
                    minutes: "",
                    // airport: "",
                },
                connectingFlights: [
                    {
                        flightNumber: "",
                        departure: {
                            city: "", date: "", hours: "", minutes: "",
                            // airport: ""
                        },
                        arrival: {
                            city: "", date: "", hours: "", minutes: "",
                            // airport: ""
                        },
                    }
                ],
            },],
        initials: '',
        firstname: '',
        lastname: '',
        ticket_no: '',
        frequent_flyer: '',
        basic_fare: '',
        tax_and_charges: '',
        service_tax: '',
        total_fare: '',
        baggage: '',
        meals: '',
        class: '',
        terms_condition: '',
    })


    const [flights, setFlights] = useState([
        {
            airline: "",
            flightNumber: "",
            pnrNumber: "",
            connectingFlight: false,
            operatedBy: false,
            discription: '',
            departure: {
                city: "",
                date: "",
                hours: "",
                minutes: "",
                airport: "",
            },
            arrival: {
                city: "",
                date: "",
                hours: "",
                minutes: "",
                airport: "",
            },
            connectingFlights: [
                {
                    flightNumber: "",
                    departure: { city: "", date: "", hours: "", minutes: "", airport: "" },
                    arrival: { city: "", date: "", hours: "", minutes: "", airport: "" },
                }
            ],
        },
    ]);

    console.log(flights);


    // Add a new flight with default values
    const addFlight = () => {
        setFlights([
            ...flights,
            {
                airline: "",
                flightNumber: "",
                pnrNumber: "",
                connectingFlight: false,
                operatedBy: false,
                discription: '',
                departure: {
                    city: "",
                    date: "",
                    hours: "",
                    minutes: "",
                    airport: "",
                },
                arrival: {
                    city: "",
                    date: "",
                    hours: "",
                    minutes: "",
                    airport: "",
                },
                connectingFlights: [
                    {
                        flightNumber: "",
                        departure: { city: "", date: "", hours: "", minutes: "", airport: "" },
                        arrival: { city: "", date: "", hours: "", minutes: "", airport: "" },
                    }
                ],
            },
        ]);
    };

    // Remove a flight by index
    const removeFlight = (index) => {
        setFlights(flights.filter((_, i) => i !== index));
    };

    // Handle input changes
    const handleInputChange = (index, field, subField, value) => {
        const updatedFlights = [...initialData.subVouchers];
        if (subField) {

            updatedFlights[index][field][subField] = value;
        } else {

            updatedFlights[index][field] = value;
        }
        setFlights(updatedFlights);

        setInitialData({ ...initialData, subVouchers: updatedFlights });
        // const updatedFlights = [...flights];
        // if (parentField && subField) {
        //     updatedFlights[index][parentField][subField] = value;
        // } else {
        //     updatedFlights[index][parentField] = value;
        // }
        // setFlights(updatedFlights);
    };

    const handleNestedChange = (flightIndex, section, nestedIndex, field, value) => {
        const updatedFlights = [...initialData.subVouchers];
        updatedFlights[flightIndex][section][nestedIndex][field] = value;
        setFlights(updatedFlights);
        setInitialData({ ...initialData, subVouchers: updatedFlights });
    };


    const addConnectingFlight = (index) => {
        const updatedFlights = [...flights];
        updatedFlights[index].connectingFlights.push({
            flightNumber: "",
            departure: { city: "", date: "", hours: "", minutes: "", airport: "" },
            arrival: { city: "", date: "", hours: "", minutes: "", airport: "" },
        });
        setFlights(updatedFlights);
    };

    // Remove a connecting flight
    const removeConnectingFlight = (flightIndex, connectingIndex) => {
        const updatedFlights = [...flights];
        updatedFlights[flightIndex].connectingFlights = updatedFlights[flightIndex].connectingFlights.filter(
            (_, i) => i !== connectingIndex
        );
        setFlights(updatedFlights);
    };


    const [locations, setLocations] = useState([]);
    const searchAirlLine = async () => {
        try {
            const res = await cityMainGett()
            setLocations(res?.data);
        } catch (error) {

        }
    }

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


    const chnageHandle = (e) => {
        const clone = { ...initialData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialData(clone)
    }

    const handleEditorChange = (field, value) => {
        setInitialData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };


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
        // console.log(initialData);
        const clone = { ...initialData, lead_id: params?.id }
        // console.log(clone);

        try {
            if (!params?.updateId) {
                const res = await addflightVoucher(clone)
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
                const res = await flightVoucherUpdate(params?.updateId, clone)
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
            }


        } catch (error) {

        }
    }


    useEffect(() => {
        const getIdData = async () => {
            try {
                const res = await getByIdflightVoucher(params.updateId)
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


    useEffect(() => {
        searchAirlLine()
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">{params?.updateId ? 'Update' : 'Create'} Flight Voucher</h4>
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

                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Booking Date</label>
                                        <input type="date" className="form-control" name="booking_date" value={initialData?.booking_date} onChange={chnageHandle} />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">No. of Passengers</label>
                                        <input type="text" className="form-control" placeholder="Enter No. of Passengers" name="no_of_passenger" value={initialData?.no_of_passenger} onChange={chnageHandle} />
                                    </div>
                                    {/* <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Status</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Status</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div> */}

                                    {flights.map((flight, index) => (
                                        <div className="col-xl-12 mb-3">
                                            <div className="inneline">
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Airline </label>
                                                        <select className="form-control" disabled aria-label="Default select example" value={flight.airline}
                                                            onChange={(e) => handleInputChange(index, "airline", null, e.target.value)}>
                                                            <option selected>Open this select Airline</option >
                                                            <option value={1}>Filght1</option>
                                                            <option value={2}>Filght2</option>
                                                            <option value={3}>Filght3</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Flight Number</label>
                                                        <input type="text" className="form-control" name="flightNumber" placeholder="Enter Flight Number"
                                                            value={flight.flightNumber}
                                                            onChange={(e) => handleInputChange(index, "flightNumber", null, e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">PNR Number</label>
                                                        <input type="text" className="form-control" name="pnrNumber" placeholder="Enter PNR Number" value={flight.pnrNumber}
                                                            onChange={(e) => handleInputChange(index, "pnrNumber", null, e.target.value)} />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Connecting Flight </label>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" checked={flight.connectingFlight} onChange={(e) => handleInputChange(index, "connectingFlight", null, e.target.checked)} />
                                                            {/* <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Default checkbox
                                            </label> */}
                                                        </div>

                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Operated By </label>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" checked={flight.operatedBy} onChange={(e) => handleInputChange(index, "operatedBy", null, e.target.checked)} />
                                                            {/* <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Default checkbox
                                            </label> */}
                                                        </div>

                                                    </div>
                                                    {flight.operatedBy && (
                                                        <div className="col-xl-3 mb-3">
                                                            <label for="exampleFormControlInput1" class="form-label">Description</label>
                                                            <input type="text" className="form-control" name="discription" placeholder="Enter Description" value={flight.discription}
                                                                onChange={(e) => handleInputChange(index, "discription", null, e.target.value)} />
                                                        </div>
                                                    )}

                                                    <div className="col-xl-6 mb-3">
                                                        <div className="row">
                                                            <div className="col-xl-12 mb-3">
                                                                <h2>Departure</h2>
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">City</label>
                                                                <Select
                                                                    showSearch
                                                                    style={{ width: "100%" }}
                                                                    placeholder="Select City"
                                                                    optionFilterProp="city"
                                                                    value={flight.departure?.city}
                                                                    // onChange={(value) => handleSelectChange(value, 'city')}
                                                                    onChange={(value) => handleInputChange(index, "departure", "city", value)}
                                                                >
                                                                    {locations?.map((loc) => (
                                                                        <Option key={loc._id} value={loc._id}>
                                                                            {loc.name}
                                                                        </Option>
                                                                    ))}
                                                                </Select>
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Date</label>
                                                                <input type="date" className="form-control" value={flight.departure?.date}
                                                                    onChange={(e) => handleInputChange(index, "departure", "date", e.target.value)} />
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Hours </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    min="0"
                                                                    max="23"
                                                                    placeholder="Hours"
                                                                    value={flight.departure.hours}
                                                                    onChange={(e) => handleInputChange(index, "departure", "hours", e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Minute </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    min="0"
                                                                    max="23"
                                                                    placeholder="Minute"
                                                                    value={flight.departure.minutes}
                                                                    onChange={(e) => handleInputChange(index, "departure", "minutes", e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="col-xl-4 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Departure Airport</label>
                                                                <input type="text" className="form-control" disabled placeholder="Enter Departure Airport"
                                                                    value={flight.departure.airport}
                                                                    onChange={(e) => handleInputChange(index, "departure", "airport", e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6 mb-3">
                                                        <div className="row">
                                                            <div className="col-xl-12 mb-3">
                                                                <h2>Arrival</h2>
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">City</label>
                                                                <Select
                                                                    showSearch
                                                                    style={{ width: "100%" }}
                                                                    placeholder="Select City"
                                                                    optionFilterProp="city"
                                                                    value={flight.arrival?.city}
                                                                    // onChange={(value) => handleSelectChange(value, 'city')}
                                                                    onChange={(value) => handleInputChange(index, "arrival", "city", value)}
                                                                >
                                                                    {locations?.map((loc) => (
                                                                        <Option key={loc._id} value={loc._id}>
                                                                            {loc.name}
                                                                        </Option>
                                                                    ))}
                                                                </Select>
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Date</label>
                                                                <input type="date" className="form-control"
                                                                    value={flight.arrival.date}
                                                                    onChange={(e) => handleInputChange(index, "arrival", "date", e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Hours </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    min="0"
                                                                    max="23"
                                                                    placeholder="Hours"
                                                                    value={flight.arrival.hours}
                                                                    onChange={(e) => handleInputChange(index, "arrival", "hours", e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Minute </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    min="0"
                                                                    max="23"
                                                                    placeholder="Hours"
                                                                    value={flight.arrival.minutes}
                                                                    onChange={(e) => handleInputChange(index, "arrival", "minutes", e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="col-xl-4 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Arrival Airport</label>
                                                                <input type="text" className="form-control" disabled name="title" placeholder="Enter Arrival Airport"
                                                                    value={flight.arrival.airport}
                                                                    onChange={(e) => handleInputChange(index, "arrival", "airport", e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {flight.connectingFlight && (
                                                        <div className="col-lg-12">
                                                            <h2>Connecting Flight Information</h2>
                                                            {flight.connectingFlights.map((cf, cfIndex) => (
                                                                <div className="row" key={cfIndex}>
                                                                    <div className="col-lg-12">
                                                                        <div className="Connectingflight">
                                                                            <label for="exampleFormControlInput1" class="form-label">Flight Number</label>
                                                                            <input type="text" className="form-control" name="title" placeholder="Enter Flight Number" value={cf.flightNumber}
                                                                                onChange={(e) =>
                                                                                    handleNestedChange(index, "connectingFlights", cfIndex, "flightNumber", e.target.value)
                                                                                } />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 mb-3">
                                                                        <div className="row">
                                                                            <div className="col-xl-12 mb-3">
                                                                                <h2>Departure</h2>
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">City</label>
                                                                                <Select
                                                                                    showSearch
                                                                                    style={{ width: "100%" }}
                                                                                    placeholder="Select City"
                                                                                    optionFilterProp="city"
                                                                                    value={cf.departure?.city}
                                                                                    onChange={(value) =>
                                                                                        handleNestedChange(index, "connectingFlights", cfIndex, "departure", {
                                                                                            ...cf.departure,
                                                                                            city: value,
                                                                                        })
                                                                                    }
                                                                                >
                                                                                    {locations?.map((loc) => (
                                                                                        <Option key={loc._id} value={loc._id}>
                                                                                            {loc.name}
                                                                                        </Option>
                                                                                    ))}
                                                                                </Select>
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Date</label>
                                                                                <input type="date" className="form-control"
                                                                                    value={cf.departure.date}
                                                                                    onChange={(e) =>
                                                                                        handleNestedChange(index, "connectingFlights", cfIndex, "departure", { ...cf.departure, date: e.target.value })
                                                                                    }
                                                                                />
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Hours </label>
                                                                                <input
                                                                                    type="number"
                                                                                    className="form-control"
                                                                                    min="0"
                                                                                    max="23"
                                                                                    placeholder="Hours"
                                                                                    value={cf.departure.hours}
                                                                                    onChange={(e) =>
                                                                                        handleNestedChange(index, "connectingFlights", cfIndex, "departure", { ...cf.departure, hours: e.target.value })
                                                                                    }
                                                                                />
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Minute </label>
                                                                                <input
                                                                                    type="number"
                                                                                    className="form-control"
                                                                                    min="0"
                                                                                    max="59"
                                                                                    placeholder="Minutes"
                                                                                    value={cf.departure.minutes}
                                                                                    onChange={(e) =>
                                                                                        handleNestedChange(index, "connectingFlights", cfIndex, "departure", { ...cf.departure, minutes: e.target.value })
                                                                                    }
                                                                                />
                                                                            </div>
                                                                            <div className="col-xl-4 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Departure Airport</label>
                                                                                <input type="text" className="form-control" disabled placeholder="Enter Departure Airport"
                                                                                    value={cf.departure.airport}
                                                                                    onChange={(e) =>
                                                                                        handleNestedChange(index, "connectingFlights", cfIndex, "departure", { ...cf.departure, airport: e.target.value })
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 mb-3">
                                                                        <div className="row">
                                                                            <div className="col-xl-12 mb-3">
                                                                                <h2>Arrival</h2>
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">City</label>
                                                                                <Select
                                                                                    showSearch
                                                                                    style={{ width: "100%" }}
                                                                                    placeholder="Select City"
                                                                                    optionFilterProp="city"
                                                                                    value={cf.arrival?.city}
                                                                                    onChange={(value) =>
                                                                                        handleNestedChange(index, "connectingFlights", cfIndex, "arrival", {
                                                                                            ...cf.arrival,
                                                                                            city: value,
                                                                                        })
                                                                                    }
                                                                                >
                                                                                    {locations?.map((loc) => (
                                                                                        <Option key={loc._id} value={loc._id}>
                                                                                            {loc.name}
                                                                                        </Option>
                                                                                    ))}
                                                                                </Select>
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Date</label>
                                                                                <input type="date" className="form-control" value={cf.arrival.date}
                                                                                    onChange={(e) =>
                                                                                        handleNestedChange(index, "connectingFlights", cfIndex, "arrival", { ...cf.arrival, date: e.target.value })
                                                                                    } />
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Hours </label>
                                                                                <input
                                                                                    type="number"
                                                                                    className="form-control"
                                                                                    min="0"
                                                                                    max="23"
                                                                                    placeholder="Hours"
                                                                                    value={cf.arrival.hours}
                                                                                    onChange={(e) =>
                                                                                        handleNestedChange(index, "connectingFlights", cfIndex, "arrival", { ...cf.arrival, hours: e.target.value })
                                                                                    }
                                                                                />
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Minute </label>
                                                                                <input
                                                                                    type="number"
                                                                                    className="form-control"
                                                                                    min="0"
                                                                                    max="59"
                                                                                    placeholder="Minutes"
                                                                                    value={cf.arrival.minutes}
                                                                                    onChange={(e) =>
                                                                                        handleNestedChange(index, "connectingFlights", cfIndex, "arrival", { ...cf.arrival, minutes: e.target.value })
                                                                                    }
                                                                                />
                                                                            </div>
                                                                            <div className="col-xl-4 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Arrival Airport</label>
                                                                                <input type="text" className="form-control" disabled placeholder="Enter Arrival Airport" value={cf.arrival.airport}
                                                                                    onChange={(e) =>
                                                                                        handleNestedChange(index, "connectingFlights", cfIndex, "arrival", { ...cf.arrival, airport: e.target.value })
                                                                                    } />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button
                                                                        onClick={() => removeConnectingFlight(index, cfIndex)}
                                                                        type="button"
                                                                        className="btn btn-danger"
                                                                        style={{ width: '200px' }}
                                                                    >
                                                                        Remove Connecting Flight
                                                                    </button>
                                                                </div>
                                                            ))}
                                                            <button type="button" style={{ width: '200px' }} onClick={() => addConnectingFlight(index)}>
                                                                Add Connecting Flight
                                                            </button>
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                            {flights.length > 1 && (
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => removeFlight(index)}
                                                >
                                                    Remove Flight
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <div className="col-xl-12 mb-3">
                                        <button className="btn btn-primary" type="button" onClick={addFlight}>Add More Flight</button>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Initials </label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Select Initials</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">First Name </label>
                                        <input type="text" className="form-control" placeholder="Enter First Name" name="firstname" value={initialData?.firstname} onChange={chnageHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Last Name </label>
                                        <input type="text" className="form-control" placeholder="Enter Last Name" name="lastname" value={initialData?.lastname} onChange={chnageHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Ticket No </label>
                                        <input type="text" className="form-control" placeholder="Enter Ticket No" name="ticket_no" value={initialData?.ticket_no} onChange={chnageHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Frequent Flyer </label>
                                        <input type="text" className="form-control" placeholder="Enter Frequent Flyer" name="frequent_flyer" value={initialData?.frequent_flyer} onChange={chnageHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Basic Fare </label>
                                        <input type="text" className="form-control" placeholder="Enter Basic Fare" name="basic_fare" value={initialData?.basic_fare} onChange={chnageHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Tax and Charges </label>
                                        <input type="text" className="form-control" placeholder="Enter Tax and Charges" name="tax_and_charges" value={initialData?.tax_and_charges} onChange={chnageHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Service Tax </label>
                                        <input type="text" className="form-control" placeholder="Enter Service Tax" name="service_tax" value={initialData?.service_tax} onChange={chnageHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Total Fare </label>
                                        <input type="text" className="form-control" placeholder="Enter Total Fare" name="total_fare" value={initialData?.total_fare} onChange={chnageHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Baggage </label>
                                        <input type="text" className="form-control" placeholder="Enter Baggage" name="baggage" value={initialData?.baggage} onChange={chnageHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Meals </label>
                                        <input type="text" className="form-control" placeholder="Enter Meals" name="meals" value={initialData?.meals} onChange={chnageHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Class </label>
                                        <input type="text" className="form-control" placeholder="Enter Class" name="class" value={initialData?.class} onChange={chnageHandle} />
                                    </div>

                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Terms and Conditions</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={initialData.terms_condition}
                                            config={{ readonly: false }}
                                            tabIndex={1}
                                            onBlur={(newContent) => handleEditorChange('terms_condition', newContent)}
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
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default AddFlightVoucher