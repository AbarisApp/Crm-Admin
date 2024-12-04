import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";

import { useMemo, useRef, useState } from "react";

import JoditEditor from "jodit-react";

const AddFlightVoucher = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel Leads",
        title_2: 'Create Flight Voucher',
        path_2: ``
    };

    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(() => ({
        readonly: false, // All settings to be defined here
        placeholder: 'Start typing...'
    }), []);


    const [flights, setFlights] = useState([
        {
            airline: "",
            flightNumber: "",
            pnrNumber: "",
            connectingFlight: false,
            operatedBy: false,
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
    const handleInputChange = (index, field, value) => {
        const updatedFlights = [...flights];
        updatedFlights[index][field] = value;
        setFlights(updatedFlights);
    };

    const handleNestedChange = (flightIndex, section, nestedIndex, field, value) => {
        const updatedFlights = [...flights];
        updatedFlights[flightIndex][section][nestedIndex][field] = value;
        setFlights(updatedFlights);
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
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Create Flight Voucher</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                                        <p>Mustafa Ashraf</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                                        <p>9787898778</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Assigned User</label>
                                        <p>Junaid</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Present User</label>
                                        <p>Suhaib</p>
                                    </div>


                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Booking Date </label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Booking Date " />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">No. of Passengers</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter No. of Passengers" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Status</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Status</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>




                                    {flights.map((flight, index) => (
                                        <div className="col-xl-12 mb-3">
                                            <div className="inneline">
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Airline </label>
                                                        <select className="form-control" aria-label="Default select example" value={flight.airline}
                                                            onChange={(e) => handleInputChange(index, "airline", e.target.value)}>
                                                            <option selected>Open this select Airline</option >
                                                            <option value={1}>One</option>
                                                            <option value={2}>Two</option>
                                                            <option value={3}>Three</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Flight Number</label>
                                                        <input type="text" className="form-control" name="title" placeholder="Enter Flight Number" value={flight.flightNumber}
                                                            onChange={(e) => handleInputChange(index, "flightNumber", e.target.value)} />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">PNR Number</label>
                                                        <input type="text" className="form-control" name="title" placeholder="Enter PNR Number" value={flight.pnrNumber}
                                                            onChange={(e) => handleInputChange(index, "pnrNumber", e.target.value)} />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Connecting Flight </label>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={(e) =>
                                                                handleInputChange(index, "connectingFlight", e.target.checked)
                                                            } />
                                                            {/* <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Default checkbox
                                            </label> */}
                                                        </div>

                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Operated By </label>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onChange={(e) =>
                                                                handleInputChange(index, "operatedBy", e.target.checked)
                                                            } />
                                                            {/* <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Default checkbox
                                            </label> */}
                                                        </div>

                                                    </div>
                                                    {flight.operatedBy && (
                                                        <div className="col-xl-3 mb-3">
                                                            <label for="exampleFormControlInput1" class="form-label">Description</label>
                                                            <input type="text" className="form-control" name="title" placeholder="Enter Description" />
                                                        </div>
                                                    )}

                                                    <div className="col-xl-6 mb-3">
                                                        <div className="row">
                                                            <div className="col-xl-12 mb-3">
                                                                <h2>Departure</h2>
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">City</label>
                                                                <input type="text" className="form-control" name="title" placeholder="Enter City" />
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Date</label>
                                                                <input type="date" className="form-control" name="title" />
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Hours </label>
                                                                <select className="form-control" aria-label="Default select example">
                                                                    <option selected>Hours</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Minute </label>
                                                                <select className="form-control" aria-label="Default select example">
                                                                    <option selected>Hours</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-xl-4 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Departure Airport</label>
                                                                <input type="text" className="form-control" name="title" placeholder="Enter Departure Airport" />
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
                                                                <input type="text" className="form-control" name="title" placeholder="Enter City" />
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Date</label>
                                                                <input type="date" className="form-control" name="title" />
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Hours </label>
                                                                <select className="form-control" aria-label="Default select example">
                                                                    <option selected>Hours</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-xl-3 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Minute </label>
                                                                <select className="form-control" aria-label="Default select example">
                                                                    <option selected>Hours</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-xl-4 mb-3">
                                                                <label for="exampleFormControlInput1" class="form-label">Arrival Airport</label>
                                                                <input type="text" className="form-control" name="title" placeholder="Enter Arrival Airport" />
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
                                                                                <input type="text" className="form-control" name="title" placeholder="Enter City" />
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Date</label>
                                                                                <input type="date" className="form-control" name="title" />
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Hours </label>
                                                                                <select className="form-control" aria-label="Default select example">
                                                                                    <option selected>Hours</option>
                                                                                    <option value={1}>One</option>
                                                                                    <option value={2}>Two</option>
                                                                                    <option value={3}>Three</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Minute </label>
                                                                                <select className="form-control" aria-label="Default select example">
                                                                                    <option selected>Hours</option>
                                                                                    <option value={1}>One</option>
                                                                                    <option value={2}>Two</option>
                                                                                    <option value={3}>Three</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-xl-4 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Departure Airport</label>
                                                                                <input type="text" className="form-control" name="title" placeholder="Enter Departure Airport" />
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
                                                                                <input type="text" className="form-control" name="title" placeholder="Enter City" />
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Date</label>
                                                                                <input type="date" className="form-control" name="title" />
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Hours </label>
                                                                                <select className="form-control" aria-label="Default select example">
                                                                                    <option selected>Hours</option>
                                                                                    <option value={1}>One</option>
                                                                                    <option value={2}>Two</option>
                                                                                    <option value={3}>Three</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-xl-3 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Minute </label>
                                                                                <select className="form-control" aria-label="Default select example">
                                                                                    <option selected>Hours</option>
                                                                                    <option value={1}>One</option>
                                                                                    <option value={2}>Two</option>
                                                                                    <option value={3}>Three</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-xl-4 mb-3">
                                                                                <label for="exampleFormControlInput1" class="form-label">Arrival Airport</label>
                                                                                <input type="text" className="form-control" name="title" placeholder="Enter Arrival Airport" />
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

                                                    {/* {flight.connectingFlight && (
                                                        <div className="connecting-flight-section">
                                                            <h4>Connecting Flights</h4>

                                                            {flight.connectingFlights.map((cf, cfIndex) => (
                                                                <div key={cfIndex} className="connecting-flight">
                                                                    <h5>Connecting Flight {cfIndex + 1}</h5>

                                                                    <input
                                                                        type="text"
                                                                        placeholder="Flight Number"
                                                                        value={cf.flightNumber}
                                                                        onChange={(e) =>
                                                                            handleNestedChange(
                                                                                index,
                                                                                "connectingFlights",
                                                                                cfIndex,
                                                                                "flightNumber",
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                    />


                                                                    <h6>Departure</h6>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="City"
                                                                        value={cf.departure.city}
                                                                        onChange={(e) =>
                                                                            handleNestedChange(
                                                                                index,
                                                                                "connectingFlights",
                                                                                cfIndex,
                                                                                "departure.city",
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                    />
                                                                    <input
                                                                        type="date"
                                                                        value={cf.departure.date}
                                                                        onChange={(e) =>
                                                                            handleNestedChange(
                                                                                index,
                                                                                "connectingFlights",
                                                                                cfIndex,
                                                                                "departure.date",
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Airport"
                                                                        value={cf.departure.airport}
                                                                        onChange={(e) =>
                                                                            handleNestedChange(
                                                                                index,
                                                                                "connectingFlights",
                                                                                cfIndex,
                                                                                "departure.airport",
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                    />


                                                                    <h6>Arrival</h6>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="City"
                                                                        value={cf.arrival.city}
                                                                        onChange={(e) =>
                                                                            handleNestedChange(
                                                                                index,
                                                                                "connectingFlights",
                                                                                cfIndex,
                                                                                "arrival.city",
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                    />
                                                                    <input
                                                                        type="date"
                                                                        value={cf.arrival.date}
                                                                        onChange={(e) =>
                                                                            handleNestedChange(
                                                                                index,
                                                                                "connectingFlights",
                                                                                cfIndex,
                                                                                "arrival.date",
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Airport"
                                                                        value={cf.arrival.airport}
                                                                        onChange={(e) =>
                                                                            handleNestedChange(
                                                                                index,
                                                                                "connectingFlights",
                                                                                cfIndex,
                                                                                "arrival.airport",
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                    />


                                                                    <button
                                                                        onClick={() => removeConnectingFlight(index, cfIndex)}
                                                                    >
                                                                        Remove Connecting Flight
                                                                    </button>
                                                                </div>
                                                            ))}


                                                            <button onClick={() => addConnectingFlight(index)} type="button">
                                                                Add Connecting Flight
                                                            </button>
                                                        </div>
                                                    )} */}

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
                                        <input type="text" className="form-control" name="title" placeholder="Enter First Name" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Last Name </label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Last Name" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Ticket No </label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Ticket No" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Frequent Flyer </label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Frequent Flyer" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Basic Fare </label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Basic Fare" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Tax and Charges </label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Tax and Charges" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Service Tax </label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Service Tax" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Total Fare </label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Total Fare" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Baggage </label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Baggage" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Meals </label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Meals" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Class </label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Class" />
                                    </div>


                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Terms and Conditions</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1}
                                            onBlur={newContent => setContent(newContent)}
                                            onChange={newContent => { }}
                                            className="form-control"
                                        />
                                    </div>


                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddFlightVoucher