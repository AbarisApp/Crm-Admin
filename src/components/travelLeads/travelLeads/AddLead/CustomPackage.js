// import React, { useState } from "react";
// import { Select } from "antd";
// const { Option } = Select;
// export default function CoustumPackage({ countryData, locations, preference, services, starRatting }) {
//     const [rows, setRows] = useState([
//         {
//             country: [],
//             option: "",
//             stayCityFields: [], // Array for dynamically added Stay and City fields
//             services: "",
//             hotel_rating: "",
//             travel_date: "",
//             no_of_nights: "",
//             flexibility: "",
//             no_of_rooms: "",
//             preference: "",
//             budget: "",
//             description: "",
//         },
//     ]);

//     console.log('customise', rows);


//     // Add a new row
//     const AddRow = () => {
//         setRows((prevRows) => [
//             ...prevRows,
//             {
//                 country: [],
//                 option: "",
//                 stayCityFields: [],
//                 services: "",
//                 hotel_rating: "",
//                 travel_date: "",
//                 no_of_nights: "",
//                 flexibility: "",
//                 no_of_rooms: "",
//                 preference: "",
//                 budget: "",
//                 description: "",
//             },
//         ]);
//     };

//     // Handle input changes
//     const handleInputChangeGroupCustomisePackage = (index, field, value) => {
//         const updatedRows = [...rows];
//         updatedRows[index][field] = value;
//         setRows(updatedRows);
//     };

//     // Add Stay and City field for a specific row
//     const addStayCityField = (rowIndex) => {
//         const updatedRows = [...rows];
//         updatedRows[rowIndex].stayCityFields.push({ stay: "", city: "" });
//         setRows(updatedRows);
//     };

//     // Remove Stay and City field for a specific row
//     const removeStayCityField = (rowIndex, fieldIndex) => {
//         const updatedRows = [...rows];
//         updatedRows[rowIndex].stayCityFields = updatedRows[rowIndex].stayCityFields.filter(
//             (_, i) => i !== fieldIndex
//         );
//         setRows(updatedRows);
//     };

//     // Handle Stay and City field changes
//     const handleStayCityChange = (rowIndex, fieldIndex, field, value) => {
//         const updatedRows = [...rows];
//         updatedRows[rowIndex].stayCityFields[fieldIndex][field] = value;
//         setRows(updatedRows);
//     };

//     // Remove a row
//     const removeRow = (index) => {
//         setRows((prevRows) => prevRows.filter((_, i) => i !== index));
//     };
//     return (
//         <div>
//             <div className="table-responsive active-projects style-1">
//                 <div className="tbl-caption">
//                     <h4 className="heading mb-0">Custom Package</h4>
//                 </div>
//             </div>
//             {rows.map((row, index) =>
//                 <div className="row" key={index}>
//                     <div className="col-6">
//                         <div className="mt-2">
//                             <label className="form-label">Country  <span className="text-danger fs-5">*</span></label>
//                             <Select
//                                 mode="multiple"
//                                 showSearch
//                                 style={{ width: "100%", height: '40px' }}
//                                 placeholder="Select Departure"
//                                 optionFilterProp="children"
//                                 className=""
//                                 value={row.country}
//                                 onChange={(value) => handleInputChangeGroupCustomisePackage(index, "country", value)}
//                             >
//                                 {countryData?.map((loc) => (
//                                     <Option key={loc._id} value={loc._id}>
//                                         {loc.name}
//                                     </Option>
//                                 ))}
//                             </Select>
//                         </div>
//                     </div>
//                     <div className="col-3">
//                         <div className="mt-2">
//                             <label className="form-label">Choose Option</label>
//                             <div className="d-flex gap-4">
//                                 <select className="form-select shadow"
//                                     name="option"
//                                     value={row.option}
//                                     onChange={(value) => handleInputChangeGroupCustomisePackage(index, "option", value)}
//                                 >
//                                     <option selected>select Option</option>
//                                     <option value={'Only Countries'}>Only Countries</option>
//                                     <option value={'Countries & Cities'}>Countries & Cities</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     {row.option === "Countries & Cities" && (
//                         <>
//                             {row.stayCityFields.map((field, fieldIndex) => (
//                                 <React.Fragment key={fieldIndex}>
//                                     <div className="col-3">
//                                         <div className="mt-2">
//                                             <label className="form-label">
//                                                 Stay <span className="text-danger fs-5">*</span>
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 value={field.stay}
//                                                 onChange={(e) =>
//                                                     handleStayCityChange(
//                                                         index,
//                                                         fieldIndex,
//                                                         "stay",
//                                                         e.target.value
//                                                     )
//                                                 }
//                                             />
//                                         </div>
//                                     </div>

//                                     <div className="col-6">
//                                         <div className="mt-2">
//                                             <label className="form-label">City</label>
//                                             <Select
//                                                 showSearch
//                                                 style={{ width: "100%", height: "40px" }}
//                                                 placeholder="Select City"
//                                                 value={field.city}
//                                                 onChange={(value) =>
//                                                     handleStayCityChange(
//                                                         index,
//                                                         fieldIndex,
//                                                         "city",
//                                                         value
//                                                     )
//                                                 }
//                                             >
//                                                 {locations?.map((loc) => (
//                                                     <Option key={loc._id} value={loc._id}>
//                                                         {loc.city_name}
//                                                     </Option>
//                                                 ))}
//                                             </Select>
//                                         </div>
//                                     </div>

//                                     <div className="col-3 d-flex align-items-center">
//                                         <button
//                                             className="btn btn-outline-danger mt-4"
//                                             onClick={() => removeStayCityField(index, fieldIndex)}
//                                         >
//                                             Remove
//                                         </button>
//                                     </div>
//                                 </React.Fragment>
//                             ))}

//                             <div className="col-12">
//                                 <button
//                                     className="btn btn-outline-primary mt-3"
//                                     onClick={() => addStayCityField(index)}
//                                 >
//                                     + Add More Stay and City
//                                 </button>
//                             </div>
//                         </>
//                     )}
//                     <div className="col-6">
//                         <div className="mt-2">
//                             <label className="form-label">Services  <span className="text-danger fs-5">*</span></label>
//                             <select className="form-select shadow"
//                                 name="services"
//                                 value={row.services}
//                                 onChange={(value) => handleInputChangeGroupCustomisePackage(index, "services", value)}
//                             >
//                                 <option selected>select Services</option>
//                                 {services && services?.map((item) => {
//                                     return <option value={item?._id} key={item?._id}>{item?.name}</option>
//                                 })}
//                             </select>
//                         </div>
//                     </div>
//                     <div className="col-6">
//                         <div className="mt-2">
//                             <label className="form-label">Hotel rating  <span className="text-danger fs-5">*</span></label>
//                             <select className="form-select shadow"
//                                 name="hotel_rating"
//                                 value={row.hotel_rating}
//                                 onChange={(value) => handleInputChangeGroupCustomisePackage(index, "hotel_rating", value)}
//                             >
//                                 <option selected>select Services</option>
//                                 {starRatting && starRatting?.map((item) => {
//                                     return <option value={item?._id} key={item?._id}>{item?.name}</option>
//                                 })}
//                             </select>
//                         </div>
//                     </div>
//                     <div className="col-3">
//                         <div className="mt-2">
//                             <label className="form-label">Traveling Date  <span className="text-danger fs-5">*</span></label>
//                             <input type="date" className="form-control"
//                                 name="travel_date"
//                                 value={row.travel_date}
//                                 onChange={(value) => handleInputChangeGroupCustomisePackage(index, "travel_date", value)}
//                             />
//                         </div>
//                     </div>
//                     <div className="col-3">
//                         <div className="mt-2">
//                             <label className="form-label">No.of Night <span className="text-danger fs-5">*</span></label>
//                             <input type="number" className="form-control" placeholder="No.of Night"
//                                 name="no_of_nights"
//                                 value={row.no_of_nights}
//                                 onChange={(value) => handleInputChangeGroupCustomisePackage(index, "no_of_nights", value)}
//                             />
//                         </div>
//                     </div>
//                     <div className="col-3">
//                         <div className="mt-2">
//                             <label className="form-label">Flexibility</label>
//                             <select className="form-select shadow"
//                                 name="flexibility"
//                                 value={row.flexibility}
//                                 onChange={(e) => handleInputChangeGroupCustomisePackage(index, "flexibility", e.target.value)}
//                             >
//                                 <option selected>Open Select Flexibility</option>
//                                 <option value="+/- 0 Days">+/- 0 Days</option>
//                                 <option value="+/- 3 Days">+/- 3 Days</option>
//                                 <option value="+/- 6 Days">+/- 6 Days</option>
//                                 <option value="+/- 1 Week">+/- 1 Week</option>
//                                 <option value="+/- 3 Week">+/- 3 Week</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="col-3">
//                         <div className="mt-2">
//                             <label className="form-label">No.of Room</label>
//                             <input className="form-control" type="number" placeholder="No.of Room"
//                                 name="no_of_rooms"
//                                 value={row.no_of_rooms}
//                                 onChange={(e) => handleInputChangeGroupCustomisePackage(index, "no_of_rooms", e.target.value)}
//                             />
//                         </div>
//                     </div>
//                     <div className="col-3">
//                         <div className="mt-2">
//                             <label className="form-label">Preference</label>
//                             <select className="form-select shadow"
//                                 name="preference"
//                                 value={row.preference}
//                                 onChange={(value) => handleInputChangeGroupCustomisePackage(index, "preference", value)}
//                             >
//                                 <option selected>select Preference</option>
//                                 {preference && preference?.map((item) => {
//                                     return <option value={item?._id} key={item?._id}>{item?.name}</option>
//                                 })}
//                             </select>
//                         </div>
//                     </div>
//                     <div className="col-3">
//                         <div className="mt-2">
//                             <label className="form-label">Budget</label>
//                             <input placeholder="Budget" className="form-control" type="number"
//                                 name="budget"
//                                 value={row.budget}
//                                 onChange={(value) => handleInputChangeGroupCustomisePackage(index, "budget", value)}
//                             />
//                         </div>
//                     </div>
//                     <div className="col-12">
//                         <div className="mt-2">
//                             <label className="form-label">Description  <span className="text-danger fs-5">*</span></label>
//                             <div className="w-100">
//                                 <textarea className="form-control" placeholder="Description" style={{ height: " 100px" }}
//                                     name="description"
//                                     value={row.description}
//                                     onChange={(value) => handleInputChangeGroupCustomisePackage(index, "description", value)}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-12 my-2 d-flex justify-content-end">
//                         <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
//                     </div>
//                 </div>
//             )}
//             <div className="my-4">
//                 <button className="btn m-0 btn-outline-primary" onClick={AddRow}> + Add more</button>
//             </div>
//         </div>
//     )
// }



import React, { useState } from "react";
import { Select } from "antd";
const { Option } = Select;

export default function CustomPackage({ countryData, locations, preference, services, starRatting, rowsCustomisePackage, setRowsCustomisePackage, AddRowCustomisePackage, handleInputChangeGroupCustomisePackage, addStayCityField, handleStayCityChange }) {
    // const [rows, setRows] = useState([
    //     {
    //         country: [],
    //         option: "",
    //         stayCityFields: [],
    //         services: "",
    //         hotel_rating: "",
    //         travel_date: "",
    //         no_of_nights: "",
    //         flexibility: "",
    //         no_of_rooms: "",
    //         preference: "",
    //         budget: "",
    //         description: "",
    //     },
    // ]);

    // // Add a new row

    // console.log(rows);

    // const AddRow = () => {
    //     setRows((prevRows) => [
    //         ...prevRows,
    //         {
    //             country: [],
    //             option: "",
    //             stayCityFields: [],
    //             services: "",
    //             hotel_rating: "",
    //             travel_date: "",
    //             no_of_nights: "",
    //             flexibility: "",
    //             no_of_rooms: "",
    //             preference: "",
    //             budget: "",
    //             description: "",
    //         },
    //     ]);
    // };

    // // Handle input changes
    // const handleInputChangeGroupCustomisePackage = (index, field, value) => {
    //     const updatedRows = [...rows];
    //     updatedRows[index][field] = value;
    //     setRows(updatedRows);
    // };

    // // Add Stay and City field for a specific row
    // const addStayCityField = (rowIndex) => {
    //     const updatedRows = [...rows];
    //     updatedRows[rowIndex].stayCityFields.push({ stay: "", city: "" });
    //     setRows(updatedRows);
    // };

    // Remove Stay and City field for a specific row
    const removeStayCityField = (rowIndex, fieldIndex) => {
        const updatedRows = [...rowsCustomisePackage];
        updatedRows[rowIndex].stayCityFields = updatedRows[rowIndex].stayCityFields.filter(
            (_, i) => i !== fieldIndex
        );
        setRowsCustomisePackage(updatedRows);
    };

    // Handle Stay and City field changes
    // const handleStayCityChange = (rowIndex, fieldIndex, field, value) => {
    //     const updatedRows = [...rows];
    //     updatedRows[rowIndex].stayCityFields[fieldIndex][field] = value;
    //     setRows(updatedRows);
    // };

    // Remove a row
    const removeRow = (index) => {
        setRowsCustomisePackage((prevRows) => prevRows.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Custom Package</h4>
                </div>
            </div>
            {rowsCustomisePackage.map((row, index) => (
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">
                                Country <span className="text-danger fs-5">*</span>
                            </label>
                            <Select
                                mode="multiple"
                                showSearch
                                style={{ width: "100%" }}
                                placeholder="Select Departure"
                                optionFilterProp="children"
                                value={row.country}
                                onChange={(value) => handleInputChangeGroupCustomisePackage(index, "country", value)}
                            >
                                {countryData?.map((loc) => (
                                    <Option key={loc._id} value={loc._id}>
                                        {loc.name}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Choose Option</label>
                            <select
                                className="form-select shadow"
                                name="option"
                                value={row.option}
                                onChange={(e) => handleInputChangeGroupCustomisePackage(index, "option", e.target.value)}
                            >
                                <option value="" disabled>
                                    Select Option
                                </option>
                                <option value="Only Countries">Only Countries</option>
                                <option value="Countries & Cities">Countries & Cities</option>
                            </select>
                        </div>
                    </div>
                    {row.option === "Countries & Cities" && (
                        <>
                            {row.stayCityFields.map((field, fieldIndex) => (
                                <React.Fragment key={fieldIndex}>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">
                                                Stay <span className="text-danger fs-5">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={field.stay}
                                                onChange={(e) =>
                                                    handleStayCityChange(index, fieldIndex, "stay", e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label">City</label>
                                            <Select
                                                showSearch
                                                style={{ width: "100%" }}
                                                placeholder="Select City"
                                                value={field.city}
                                                onChange={(value) =>
                                                    handleStayCityChange(index, fieldIndex, "city", value)
                                                }
                                            >
                                                {locations?.map((loc) => (
                                                    <Option key={loc._id} value={loc._id}>
                                                        {loc.city_name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="col-3 d-flex align-items-center">
                                        <button
                                            className="btn btn-outline-danger mt-4"
                                            onClick={() => removeStayCityField(index, fieldIndex)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </React.Fragment>
                            ))}

                            <div className="col-12">
                                <button
                                    className="btn btn-outline-primary mt-3"
                                    onClick={() => addStayCityField(index)}
                                >
                                    + Add More Stay and City
                                </button>
                            </div>
                        </>
                    )}

                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">
                                Services <span className="text-danger fs-5">*</span>
                            </label>
                            <select
                                className="form-select shadow"
                                name="services"
                                value={row.services}
                                onChange={(e) =>
                                    handleInputChangeGroupCustomisePackage(index, "services", e.target.value)
                                }
                            >
                                <option value="" disabled>
                                    Select Services
                                </option>
                                {services &&
                                    services.map((item) => (
                                        <option value={item?._id} key={item?._id}>
                                            {item?.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">
                                Hotel Rating <span className="text-danger fs-5">*</span>
                            </label>
                            <select
                                className="form-select shadow"
                                name="hotel_rating"
                                value={row.hotel_rating}
                                onChange={(e) =>
                                    handleInputChangeGroupCustomisePackage(index, "hotel_rating", e.target.value)
                                }
                            >
                                <option value="" disabled>
                                    Select Rating
                                </option>
                                {starRatting &&
                                    starRatting.map((item) => (
                                        <option value={item?._id} key={item?._id}>
                                            {item?.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">
                                Traveling Date <span className="text-danger fs-5">*</span>
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                name="travel_date"
                                value={row.travel_date}
                                onChange={(e) =>
                                    handleInputChangeGroupCustomisePackage(index, "travel_date", e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">
                                No. of Nights <span className="text-danger fs-5">*</span>
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="No. of Nights"
                                name="no_of_nights"
                                value={row.no_of_nights}
                                onChange={(e) =>
                                    handleInputChangeGroupCustomisePackage(index, "no_of_nights", e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Flexibility</label>
                            <select className="form-select shadow"
                                name="flexibility"
                                value={row.flexibility}
                                onChange={(e) =>
                                    handleInputChangeGroupCustomisePackage(index, "flexibility", e.target.value)
                                }
                            >
                                <option selected>Open Select Flexibility</option>
                                <option value="+/- 0 Days">+/- 0 Days</option>
                                <option value="+/- 3 Days">+/- 3 Days</option>
                                <option value="+/- 6 Days">+/- 6 Days</option>
                                <option value="+/- 1 Week">+/- 1 Week</option>
                                <option value="+/- 3 Week">+/- 3 Week</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">No.of Room</label>
                            <input className="form-control" type="number" placeholder="No.of Room"
                                name="no_of_rooms"
                                value={row.no_of_rooms}
                                onChange={(e) =>
                                    handleInputChangeGroupCustomisePackage(index, "no_of_rooms", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Preference</label>
                            <select className="form-select shadow"
                                name="preference"
                                value={row.preference}
                                onChange={(e) =>
                                    handleInputChangeGroupCustomisePackage(index, "preference", e.target.value)
                                }
                            >
                                <option selected>select Preference</option>
                                {preference && preference?.map((item) => {
                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Budget</label>
                            <input placeholder="Budget" className="form-control" type="number"
                                name="budget"
                                value={row.budget}
                                onChange={(e) =>
                                    handleInputChangeGroupCustomisePackage(index, "budget", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mt-2">
                            <label className="form-label">Description  <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <textarea className="form-control" placeholder="Description" style={{ height: " 100px" }}
                                    name="description"
                                    value={row.description}
                                    onChange={(e) =>
                                        handleInputChangeGroupCustomisePackage(index, "description", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>



                    {/* More fields... */}

                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button
                            className={`btn btn-outline-danger m-0 ${index === 0 ? "d-none" : "d-block"}`}
                            onClick={() => removeRow(index)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>



            ))}
            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={AddRowCustomisePackage}>
                    + Add more
                </button>
            </div>
        </div>
    );
}
