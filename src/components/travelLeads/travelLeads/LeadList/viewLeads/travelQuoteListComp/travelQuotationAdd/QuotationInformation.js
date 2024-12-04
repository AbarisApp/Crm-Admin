import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import { getTravelAllState, getTravelAllCity, getTravelAllCountry } from '../../../../../../../api/login/Login';
import { Select } from 'antd';
const { Option } = Select;

function QuotationInformation({ cancelForm, locations, allStatesD, addRow, allCitiesD, removeRow, rows, handleInputChange, allCountriesD, setInitialData, initialData, changeHandle, onNext, data }) {
    const [input, setInput] = useState(data || {});
    const handleSaveAndNext = () => {
        onNext(input);
    };


    const [radioval, setRadioVal] = useState();
    const [isCustomChecked, setIsCustomChecked] = useState(false);
    const [selectorChecked, setSelectorChecked] = useState(true)
    const [selectedCountry, setSelectedCountry] = useState([]);

    const [qoteInfoInpval, setQoteInfoInpval] = useState({
        title: "",
        adult: "",
        child: "",
        infant: "",
        tourStart: "",
    });
    const handleAllInputChange = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...qoteInfoInpval };
        clonedObj[inpName] = inpval;
        setQoteInfoInpval(clonedObj);
    };

    const onSelectCountry = (selectedList, selectedItem) => {
        setSelectedCountry(selectedList);
    };
    const onRemoveCountry = (selectedList, removedItem) => {
        setSelectedCountry(selectedList);
    };

    const handleRadioChange = (event) => {
        const value = event.target.value;
        // setIsCustomChecked(value);
        setRadioVal(value);
        if (value === "custom") {
            setIsCustomChecked(true)
        } else {
            setIsCustomChecked(false)
        }
    };

    // const addRow = () => {
    //     setRows([...rows, { country: "", state: "", city: "", stay: "" }]);
    // };
    // const removeRow = (index) => {
    //     const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    //     setRows(updatedRows);
    // };
    // const handleInputChange = async (index, field, value) => {
    //     if (field == 'country') {
    //         try {
    //             const res = await getTravelAllState(value);
    //             setAllStatesD(res?.data);
    //         } catch (error) {

    //         }
    //     };
    //     if (field == 'state') {
    //         try {
    //             const res = await getTravelAllCity(value);
    //             setAllCitiesD(res?.data);
    //         } catch (error) {

    //         }
    //     };
    //     const updatedRows = [...rows];
    //     updatedRows[index][field] = value;
    //     setRows(updatedRows);
    // };

    // const getAllCountryListData = async () => {
    //     try {
    //         const res = await getTravelAllCountry();
    //         setAllCountriesD(res?.data)
    //     } catch (error) {

    //     }
    // };
    // useEffect(() => {
    //     getAllCountryListData();
    // }, []);

    const navigate = useNavigate();

    const handleSubmitD = () => {
        const qoteInfoInPayload = { ...qoteInfoInpval, cities: rows, radioD: radioval }
        console.log('qoteInfoInPayload---', qoteInfoInPayload)
        setTimeout(() => {
            navigate('../../hotel-information')
        }, 1000);
    };


    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Quotation Information</b></h4>
                                </div>

                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                        <p>Lead No. : SOF00001</p>
                                        <p>Customer : LEAD LNAME</p>
                                        <p>Assigned User : ABDUL QUADIR</p>
                                    </div>

                                    <h4 className='mb-3' style={{ color: 'red' }}>Quotation Information</h4>

                                    <div className='row'>
                                        <div className="form-group col-3">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    style={{ border: "1px solid black" }}
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="fromPackage"
                                                    value="fromPackage"
                                                    onChange={handleRadioChange}
                                                />
                                                <label className="form-check-label" htmlFor="fromPackage">
                                                    From Package
                                                </label>
                                            </div>
                                        </div>

                                        {/* Previous Quotation */}
                                        <div className="form-group col-3">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    style={{ border: "1px solid black" }}
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="previousQuotation"
                                                    value="previousQuotation"
                                                    onChange={handleRadioChange}
                                                />
                                                <label className="form-check-label" htmlFor="previousQuotation">
                                                    Previous Quotation
                                                </label>
                                            </div>
                                        </div>
                                        {/* Custom */}
                                        <div className="form-group col-3">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    style={{ border: "1px solid black" }}
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="custom"
                                                    value="custom"
                                                    onChange={handleRadioChange}
                                                />
                                                <label className="form-check-label" htmlFor="custom">
                                                    Custom
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {selectorChecked && <div className="form-group col-6 mt-2">
                                        <label htmlFor="fromDate">Country</label>
                                        <Multiselect
                                            options={allCountriesD}
                                            selectedValues={selectedCountry}
                                            onSelect={onSelectCountry}
                                            onRemove={onRemoveCountry}
                                            displayValue="name"
                                            placeholder="Select options"
                                            style={{
                                                chips: { BiFontSize: '15px' },
                                                searchBox: { padding: '0 8px' }
                                            }}
                                        />
                                    </div>}




                                    {isCustomChecked && <div>
                                        <div className='row p-0 mt-3'>
                                            <div className="form-group col-6">
                                                <label htmlFor="fromDate">Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder='Enter Title'
                                                    name='title'
                                                    value={initialData?.title}
                                                    onChange={changeHandle}
                                                />
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="fromDate">Country</label>
                                                <Select
                                                    mode="multiple"
                                                    showSearch
                                                    style={{ width: "100%", height: '40px' }}
                                                    placeholder="Select Departure"
                                                    optionFilterProp="children"
                                                    className=""
                                                    value={initialData.city}
                                                    onChange={(value) => {
                                                        setInitialData((prevState) => ({
                                                            ...prevState,
                                                            city: value, // Update only the city array
                                                        }));
                                                    }}
                                                >
                                                    {allCountriesD?.map((loc) => (
                                                        <Option key={loc._id} value={loc._id}>
                                                            {loc.name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="fromDate">Adult</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='Enter Adult'
                                                    name='adult'
                                                    value={initialData?.adult}
                                                    onChange={changeHandle}
                                                />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="fromDate">Child</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='Enter Child'
                                                    name='child'
                                                    value={initialData?.child}
                                                    onChange={changeHandle}
                                                />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="fromDate">Infant</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='Enter Infant'
                                                    name='infant'
                                                    value={initialData?.infant}
                                                    onChange={changeHandle}
                                                />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="fromDate">Tour Start</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    placeholder='Enter Tour Start'
                                                    name='tour_start_date'
                                                    value={initialData?.tour_start_date}
                                                    onChange={changeHandle}
                                                />
                                            </div>
                                        </div>

                                        <div className='mt-2'>
                                            <button className='btn btn-success float-end mb-5' type='button' onClick={addRow}>+ Add More</button>
                                        </div>

                                        {rows?.map((row, index) => (
                                            <div className="row p-0" key={index}>
                                                <div className="form-group col-3">
                                                    <label htmlFor={`country-${index}`}>Country</label>
                                                    <select
                                                        className="form-select form-control"
                                                        aria-label="Default select example"
                                                        value={row.country}
                                                        onChange={(e) => handleInputChange(index, "country", e.target.value)}
                                                    >
                                                        <option value="">Select Country</option>
                                                        {allCountriesD && allCountriesD?.map((item, i) => {
                                                            return <option key={i} value={item._id}>{item?.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                {/* <div className="form-group col-3">
                                                    <label htmlFor={`state-${index}`}>State</label>
                                                    <select
                                                        className="form-select form-control"
                                                        aria-label="Default select example"
                                                        value={row.state}
                                                        onChange={(e) => handleInputChange(index, "state", e.target.value)}
                                                    >
                                                        <option value="">Select State</option>
                                                        {allStatesD && allStatesD?.map((stateItem, i) => {
                                                            return <option key={i} value={stateItem?._id}>{stateItem?.name}</option>
                                                        })}
                                                    </select>
                                                </div> */}
                                                <div className="form-group col-3">
                                                    <label htmlFor={`city-${index}`}>City</label>
                                                    <Select
                                                        showSearch
                                                        style={{ width: "100%", height: '40px' }}
                                                        placeholder="Select Departure"
                                                        optionFilterProp="children"
                                                        className=""
                                                        value={row.city}
                                                        onChange={(value) => handleInputChange(index, "city", value)}
                                                    >
                                                        {locations?.map((loc) => (
                                                            <Option key={loc._id} value={loc._id}>
                                                                {loc.city_name}
                                                            </Option>
                                                        ))}
                                                    </Select>
                                                    {/* <select
                                                        className="form-select form-control"
                                                        aria-label="Default select example"
                                                        value={row.city}
                                                        onChange={(e) => handleInputChange(index, "city", e.target.value)}
                                                    >
                                                        <option value="">Select City</option>
                                                        {allCitiesD && allCitiesD?.map((cityItem, i) => {
                                                            return <option key={i} value={cityItem?._id}>{cityItem?.name}</option>
                                                        })}
                                                    </select> */}
                                                </div>
                                                <div className="form-group col-3">
                                                    <label htmlFor={`stay-${index}`}>Stay Night</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter Stay"
                                                        id={`stay-${index}`}
                                                        value={row.stay}
                                                        onChange={(e) => handleInputChange(index, "stay", e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-1" style={{ marginTop: "35px" }}>
                                                    <button
                                                        className="btn btn-danger"
                                                        type="button"
                                                        onClick={() => removeRow(index)}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </div>
                                        ))}

                                    </div>}

                                    <div className="form-group col-12 mt-3">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <button type='button' className="btn btn-danger float-end" onClick={cancelForm}>Cancel</button>
                                            <button type='button' className="btn btn-danger float-end" onClick={handleSaveAndNext}>Save & Next</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuotationInformation