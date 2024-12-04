import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TagsInput from 'react-tagsinput';
import { baseUrl } from '../../baseUrl';
import { addTravelPackage, getTravelAllCity, getTravelAllCountry, getTravelAllMealType, getTravelAllOthers, getTravelAllState, getTravelAllTags, getTravelPackageById, updateTravelPackage } from '../../api/login/Login';
import { ToastContainer, toast } from "react-toastify";

import { useNavigate, useParams } from 'react-router-dom';

function TravelPackageAddComp() {
    const [loading, setLoading] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [itineraryVal, setItineraryVal] = useState(false);
    const [mealtypeVal, setmealtypeVal] = useState("");
    const [selectedOthers, setSelectedOthers] = useState([]);
    // const [othersCheckedValues, setOthersCheckedValues] = useState([{ other_facilities: '', value: null }]);
    const [inclusionVal, setInclusionVal] = useState('');
    const [exclusionVal, setExclusionVal] = useState('');
    const [extraOneVal, setExtraOneVal] = useState('');
    const [extraTwoVal, setExtraTwoVal] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const [allCountriesD, setAllCountriesD] = useState([]);
    const [allStatesD, setAllStatesD] = useState([]);
    const [allCitiesD, setAllCitiesD] = useState([]);
    const [allTagsD, setAllTagsD] = useState([]);
    const [allOthersD, setAllOthersD] = useState([]);
    const [allMealTypesD, setAllMealTypesD] = useState([]);
    const [rows, setRows] = useState([{ country: "", state: "", city: "", stay: "" }]);
    const [inpVal, setInpVal] = useState({
        package: '',
        overview: '',
    });
    const handleAllChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        const clonedObj = { ...inpVal };
        clonedObj[inputName] = inputValue;
        setInpVal(clonedObj)
    };

    const params = useParams();

    const addRow = () => {
        setRows([...rows, { country: "", state: "", city: "", stay: "" }]);
    };
    const removeRow = (index) => {
        const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
        setRows(updatedRows);
    };
    const handleInputChange = async (index, field, value) => {
        if (field == 'country') {
            try {
                const res = await getTravelAllState(value);
                setAllStatesD(res?.data);
            } catch (error) {

            }
        };
        if (field == 'state') {
            try {
                const res = await getTravelAllCity(value);
                setAllCitiesD(res?.data);
            } catch (error) {

            }
        };
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    // const allCountries = [
    //     { ref: 'Country 1', type: 1 },
    //     { ref: 'Country 2', type: 2 },
    //     { ref: 'Country 3', type: 3 },
    //     { ref: 'Country 4', type: 4 },
    //     { ref: 'Country 5', type: 5 },
    //     { ref: 'Country 6', type: 6 },
    // ];
    // const allTags = [
    //     { ref: 'Tag 1', type: 1 },
    //     { ref: 'Tag 2', type: 2 },
    //     { ref: 'Tag 3', type: 3 },
    //     { ref: 'Tag 4', type: 4 },
    //     { ref: 'Tag 5', type: 5 },
    //     { ref: 'Tag 6', type: 6 },
    // ];
    // const onSelectCountry = (selectedList, selectedItem) => {
    //     setSelectedCountry(selectedList);
    // };
    // const onRemoveCountry = (selectedList, removedItem) => {
    //     setSelectedCountry(selectedList);
    // };
    const onSelectTag = (selectedList, selectedItem) => {
        setSelectedTags(selectedList);
    };
    const onRemoveTag = (selectedList, removedItem) => {
        setSelectedTags(selectedList);
    };

    const handleItineraryCheckboxChange = (e) => {
        setItineraryVal(e.target.checked);
    };
    const handleRadioChange = (e) => {
        setmealtypeVal(e.target.value);
    };

    const handleCheckboxChange = (e, item) => {
        const { checked, value } = e.target;

        setSelectedOthers((prev) => {
            const existingIndex = prev.findIndex(
                (entry) => entry.other_facilities === item._id
            );

            if (checked) {
                // Add new entry if not already present
                if (existingIndex === -1) {
                    return [
                        ...prev,
                        {
                            other_facilities: item._id,
                            value: true,
                        },
                    ];
                }
            } else {
                // Remove entry if unchecked
                return prev.filter((entry) => entry.other_facilities !== item._id);
            }

            return prev; // No change
        });
    };

    const toastSuccessMessage = () => {
        toast.success("Package Added", {
            position: "top-center",
        });
    };
    const toastErrorMessage = () => {
        toast.error('Package Not Added', {
            position: "top-center",
        });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files); // Convert FileList to array
        const fileNames = files.map((file) => file.name); // Store file names or URLs
        setSelectedImages((prev) => [...prev, ...fileNames]); // Append new files to existing
    };
    const handleRemoveImage = (imageName) => {
        setSelectedImages((prev) => prev.filter((image) => image !== imageName));
    };

    const getAllCountryListData = async () => {
        try {
            const res = await getTravelAllCountry();
            setAllCountriesD(res?.data)
        } catch (error) {

        }
    };
    const getAllTagsListData = async () => {
        try {
            const res = await getTravelAllTags();
            setAllTagsD(res?.data);
        } catch (error) {

        }
    };
    const getAllOthersListData = async () => {
        try {
            const res = await getTravelAllOthers();
            console.log('othersD----', res?.data);
            setAllOthersD(res?.data);
        } catch (error) {

        }
    };
    const getAllMealTypeListData = async () => {
        try {
            const res = await getTravelAllMealType();
            console.log('MealTypeD----', res?.data);
            setAllMealTypesD(res?.data);
        } catch (error) {

        }
    };

    const navigate = useNavigate();

    const handleSubmitData = async () => {
        const payloadObj = { ...inpVal, country: selectedCountry, cities: rows, tags: selectedTags, meal_type: mealtypeVal, other: selectedOthers, itinerary: itineraryVal, inclusions: inclusionVal, exclusions: exclusionVal, extra1: extraOneVal, extra2: extraTwoVal, upload_images: selectedImages };
        setLoading(true);

        if (params?.id) {
            try {
                const res = await updateTravelPackage(params?.id, payloadObj);
                if (res?.error === false) {
                    toastSuccessMessage('Package Updated');
                    setTimeout(() => {
                        navigate('../../travel-package')
                    }, 3000);
                } else if (res?.error === true) {
                    toastErrorMessage('Package Not Updated');
                }
            } catch (error) {
                toastErrorMessage('Package Not Updated')
            } finally {
                setLoading(false);
            }
        } else {
            try {
                const res = await addTravelPackage(payloadObj);
                if (res?.error === false) {
                    toastSuccessMessage('Package Added');
                    setTimeout(() => {
                        navigate('../../travel-package')
                    }, 3000);
                } else if (res?.error === true) {
                    toastErrorMessage('Package Not Added');
                }
            } catch (error) {
                toastErrorMessage('Package Not Added')
            } finally {
                setLoading(false);
            }
        }
    };

    const getByIdData = async () => {
        try {
            const res = await getTravelPackageById(params?.id);
            console.log('byIDData----', res?.data);
            setInpVal(res?.data);
            setInclusionVal(res?.data?.inclusions);
            setExclusionVal(res?.data?.exclusions);
            setRows(res?.data?.cities);
            setExtraOneVal(res?.data?.extra1);
            setExtraTwoVal(res?.data?.extra2);
            setSelectedTags(res?.data?.tags);
            setSelectedOthers(res?.data?.other);
            setmealtypeVal(res?.data?.meal_type);
            setItineraryVal(res?.data?.itinerary);
            setSelectedImages(res?.data?.upload_images);
        } catch (error) {

        }
    };
    useEffect(() => {
        getAllCountryListData();
        getAllTagsListData();
        getAllOthersListData();
        getAllMealTypeListData();
    }, []);
    useEffect(() => {
        if (params?.id) {
            getByIdData();
        }
    }, [params?.id])

    return (
        <>
            {loading && (
                <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <section className="ListDistributer mx-4 expdf ">
                <ToastContainer />
                <div className="row m-4">
                    <div className="col-xl-12" style={{ padding: "0" }}>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0"><b>{params?.id ? "Update" : "Add"} New Package</b></h4>
                                    </div>
                                    <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                                        <h4 className='mt-3' style={{ color: 'red' }}>Package Information</h4>
                                        <div className="form-group col-6 mt-2">
                                            <label htmlFor="fromDate">Package Name</label>
                                            <input
                                                type="text"
                                                name='package'
                                                value={inpVal?.package}
                                                onChange={handleAllChange}
                                                className="form-control"
                                                placeholder='Enter Package Name'
                                                id="fromDate"
                                            />
                                        </div>

                                        <h4 className='mt-3' style={{ color: 'red' }}>Cities</h4>
                                        <div className='mt-2'>
                                            <button className='btn btn-success float-end' type='button' onClick={addRow}>+ Add Stay</button>
                                        </div>
                                        {rows && rows?.map((row, index) => (
                                            <div className="row" key={index}>
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
                                                            return <option key={i} value={item?.id}>{item?.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="form-group col-3">
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
                                                </div>
                                                <div className="form-group col-3">
                                                    <label htmlFor={`city-${index}`}>City</label>
                                                    <select
                                                        className="form-select form-control"
                                                        aria-label="Default select example"
                                                        value={row.city}
                                                        onChange={(e) => handleInputChange(index, "city", e.target.value)}
                                                    >
                                                        <option value="">Select City</option>
                                                        {allCitiesD && allCitiesD?.map((cityItem, i) => {
                                                            return <option key={i} value={cityItem?._id}>{cityItem?.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="form-group col-2">
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
                                        <h4 className='mt-3' style={{ color: 'red' }}>Tags</h4>
                                        <div className="form-group col-12 mt-2">
                                            <label htmlFor="fromDate">Select Tags</label>
                                            <Multiselect
                                                options={allTagsD}
                                                selectedValues={selectedTags}
                                                onSelect={onSelectTag}
                                                onRemove={onRemoveTag}
                                                displayValue="_id"
                                                placeholder="Select options"
                                                style={{
                                                    chips: { BiFontSize: '12px' },
                                                    searchBox: { padding: '1px 8px' }
                                                }}
                                            />
                                            {/* <TagsInput value={tags} onChange={handleTagsChange} /> */}
                                        </div>

                                        <h4 className='mt-3' style={{ color: 'red' }}>Overview</h4>
                                        <div className="form-group col-12">
                                            <label htmlFor="fromDate">Overview</label>
                                            <textarea class="form-control" name='overview' value={inpVal?.overview} onChange={handleAllChange} placeholder='Enter Overview' id="exampleFormControlTextarea1" rows="3">
                                            </textarea>
                                        </div>

                                        <h4 className='mt-3' style={{ color: 'red' }}>Meal Type</h4>
                                        <div className="row">
                                            <div className="form-group col-2">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        style={{ border: "1px solid black" }}
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault1"
                                                        value="AP(Full Board)"
                                                        onChange={handleRadioChange} // Listen for changes
                                                    />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        AP(Full Board)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-2">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        style={{ border: "1px solid black" }}
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault2"
                                                        value="MAP(Half Board)"
                                                        onChange={handleRadioChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        MAP(Half Board)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-2">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        style={{ border: "1px solid black" }}
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault3"
                                                        value="CP(Only Breakfast)"
                                                        onChange={handleRadioChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                        CP(Only Breakfast)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-2">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        style={{ border: "1px solid black" }}
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault4"
                                                        value="EP(No Meals)"
                                                        onChange={handleRadioChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                        EP(No Meals)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-3">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        style={{ border: "1px solid black" }}
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault5"
                                                        value="Any (Any Types Of Meals)"
                                                        onChange={handleRadioChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault5">
                                                        Any (Any Types Of Meals)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-2">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        style={{ border: "1px solid black" }}
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault6"
                                                        value="AI (All Inclusive)"
                                                        onChange={handleRadioChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault6">
                                                        AI (All Inclusive)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className='row'>
                                            <div className="form-group col-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        AP(Full Board)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        MAP(Half Board)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        CP(Only Breakfast)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        EP(No Meals)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Any (Any Types Of Meals)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        AI (All Inclusive)
                                                    </label>
                                                </div>
                                            </div>
                                        </div> */}

                                        <h4 className='mt-3' style={{ color: 'red' }}>Others</h4>
                                        <div className="row">

                                            {allOthersD &&
                                                allOthersD.map((item, i) => (
                                                    <div className="col-3" key={i}>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                style={{ border: "1px solid black" }}
                                                                type="checkbox"
                                                                id={`checkbox-${item._id}`}
                                                                value={item._id}
                                                                onChange={(e) => handleCheckboxChange(e, item)}
                                                            />
                                                            <label
                                                                className="form-check-label mb-0 mt-0"
                                                                htmlFor={`checkbox-${item._id}`}
                                                            >
                                                                {item.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                ))}


                                            {/* {allOthersD && allOthersD?.map((item, i) => {
                                                return <div className="col-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            style={{ border: "1px solid black" }}
                                                            type="checkbox"
                                                            id="wifi"
                                                            value={item?._id}
                                                            onChange={(e) => handleCheckboxChange(e, item)}
                                                        />
                                                        <label className="form-check-label mb-0 mt-0" htmlFor="wifi">
                                                            {item?.name}
                                                        </label>
                                                    </div>
                                                </div>
                                            })} */}




                                            {/* <div className="col-2">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        style={{ border: "1px solid black" }}
                                                        type="checkbox"
                                                        id="wifi"
                                                        value="Free Wi-fi"
                                                        onChange={handleCheckboxChange}
                                                    />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="wifi">
                                                        Free Wi-fi
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Airport Transfers-Private"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Airport Transfers-Private
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Airport Transfers-SIC"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Airport Transfers-SIC
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Travel Insurance"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Travel Insurance
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Visa"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Visa
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Inter Hotel Transfer-Private"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Inter Hotel Transfer-Private
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Sightseeing Transfers-Private"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Sightseeing Transfers-Private
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Sightseeing Transfers-SIC"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Sightseeing Transfers-SIC
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-5'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Airport transfers-Speed Boat/Sea Plane"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Airport transfers-Speed Boat/Sea Plane
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Inter Hotel Transfer-SIC"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Inter Hotel Transfer-SIC
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Candlelight Dinner"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Candlelight Dinner
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Bed Decorations"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Bed Decorations
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Honeymoon Cake"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Honeymoon Cake
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Private Ferry"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Private Ferry
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Private Cruise"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Private Cruise
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Scuba Diving"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Scuba Diving
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Parasailing"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Parasailing
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Sea Walk"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Sea Walk
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Photoshoot For Couple"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Photoshoot For Couple
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Candle Light Dinner With Wine"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Candle Light Dinner With Wine
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Jet Ski"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Jet Ski
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Candle Dinner Without Wine"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Candle Dinner Without Wine
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" id="flexCheckChecked" value="Snorkeling"
                                                        onChange={handleCheckboxChange} />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Snorkeling
                                                    </label>
                                                </div>
                                            </div> */}
                                        </div>

                                        {/* <div className='row'>
                                            <div className='col-2'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Free Wi-fi
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Airport Transfers-Private
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Airport Transfers-SIC
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Travel Insurance
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Visa
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Inter Hotel Transfer- Private
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Sightseeing Transfers - Private
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Sightseeing Transfers - SIC
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-5'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Airport transfers - Speed Boat/Sea Plane
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Inter Hotel Transfer- SIC
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Candlelight Dinner
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Bed Decorations
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Honeymoon Cake
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Private Ferry
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Private Cruise
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Scuba Diving
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Parasailing
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Sea Walk
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Photoshoot For Couple
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Candle Light Dinner With Wine
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Jet Ski
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Candle Dinner Without Wine
                                                    </label>
                                                </div>
                                            </div>

                                            <div className='col-2'>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Snorkeling
                                                    </label>
                                                </div>
                                            </div>
                                        </div> */}

                                        <h4 className='mt-3' style={{ color: 'red' }}>Itinerary</h4>
                                        <div className='col-12'>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    style={{ border: '1px solid black' }}
                                                    type="checkbox"
                                                    id="flexCheckChecked"
                                                    checked={itineraryVal}
                                                    onChange={handleItineraryCheckboxChange}
                                                />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Do You Want to Create Itinerary?
                                                </label>
                                            </div>
                                            <small>It will be created on next page</small>
                                        </div>

                                        <h4 className='mt-3' style={{ color: 'red' }}>Upload Images</h4>
                                        <div className="form-group col-6">
                                            <label htmlFor="uploadImages">Upload Images</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="uploadImages"
                                                multiple // Allows multiple file selection
                                                onChange={handleImageChange}
                                            />
                                        </div>

                                        <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Inclusions</h4>
                                        <div className='row'>
                                            <div className="form-group col-12">
                                                <ReactQuill
                                                    theme="snow"
                                                    value={inclusionVal}
                                                    onChange={setInclusionVal}
                                                />
                                            </div>
                                        </div>

                                        <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Exclusions</h4>
                                        <div className='row'>
                                            <div className="form-group col-12">
                                                <ReactQuill
                                                    theme="snow"
                                                    value={exclusionVal}
                                                    onChange={setExclusionVal}
                                                />
                                            </div>
                                        </div>

                                        <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Extra 1</h4>
                                        <div className='row'>
                                            <div className="form-group col-6">
                                                <label htmlFor="fromDate">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder='Enter Label'
                                                    id="fromDate"
                                                />
                                            </div>
                                            <div className="form-group col-12">
                                                <ReactQuill
                                                    theme="snow"
                                                    value={extraOneVal}
                                                    onChange={setExtraOneVal}
                                                />
                                            </div>
                                        </div>
                                        <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Extra 2</h4>
                                        <div className='row'>
                                            <div className="form-group col-6">
                                                <label htmlFor="fromDate">Label</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder='Enter Label'
                                                    id="fromDate"
                                                />
                                            </div>
                                            <div className="form-group col-12">
                                                <ReactQuill
                                                    theme="snow"
                                                    value={extraTwoVal}
                                                    onChange={setExtraTwoVal}
                                                />
                                            </div>
                                        </div>



                                        <div className="form-group col-12 mt-3">
                                            <button type="button" className="btn btn-warning float-end">
                                                RESET
                                            </button>
                                            <button type="button" onClick={handleSubmitData} className="btn btn-primary float-end">
                                                {params?.id ? "Update" : "Save"}
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>


    )
}

export default TravelPackageAddComp