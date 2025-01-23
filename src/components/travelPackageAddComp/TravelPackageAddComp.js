import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TagsInput from 'react-tagsinput';
import { baseUrl } from '../../baseUrl';
import { addTravelPackage, cityMainGett, clodinaryImage, getBrandByPage, getcategoryAdmin, getindustryAdmin, getTravelAllCity, getTravelAllCountry, getTravelAllMealType, getTravelAllOthers, getTravelAllState, getTravelAllTags, getTravelPackageById, getTRCRM_sight_seeing_masteradmin, updateTravelPackage } from '../../api/login/Login';
import { ToastContainer, toast } from "react-toastify";

import { useNavigate, useParams } from 'react-router-dom';
import { Select } from 'antd';

const data = [
    { id: 'Breakfast', name: 'Breakfast' },
    { id: 'Lunch', name: 'Lunch' },
    { id: 'Dinner', name: 'Dinner' }
]
const { Option } = Select;

function TravelPackageAddComp() {
    const [loading, setLoading] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [itineraryVal, setItineraryVal] = useState(false);
    const [purchage, setPurchage] = useState(false);

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
        product_category: [],
        product_industry: [],
        theme: [],
        tags: [],
        meal_type: '',
        other: [],
        thumnail_image: '',
        gallery_image: [],
        itinerary_sight: [
            {
                day: 1,
                sightseeing_id: '',
                city_id: '',
                options: [],
                title: '',
                details: '',
                images: ''
            },
        ],
        overview: [
            {
                day: '',
                events: [
                    {
                        title: '',
                        description: '',
                    },
                ],
            },
        ],
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
        setRows([...rows, { country: "", state: "", city: "", stay: "", title: "", desc: "" }]);
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

    // const handleChange = async (id, field, value) => {
    //     setInpVal((prev) => ({
    //         ...prev,
    //         itinerary_sight: prev.itinerary_sight.map((row) =>
    //             row.id === id ? { ...row, [field]: value } : row
    //         ),
    //     }));
    //     const image = new FormData()
    //     image.append('image', e.target.files[0])
    //     try {
    //         const res = await clodinaryImage(image)
    //         setTimeout(() => {
    //             setImage(res.data?.data?.url)
    //         }, 1000);
    //     } catch (error) {

    //     }
    // };

    const handleChange = async (id, field, value, e = null) => {
        if (field === 'images' && e?.target?.files?.[0]) {
            const image = new FormData();
            image.append('image', e.target.files[0]);

            try {
                const res = await clodinaryImage(image);
                const imageUrl = res.data?.data?.url;

                if (imageUrl) {
                    setInpVal((prev) => ({
                        ...prev,
                        itinerary_sight: prev.itinerary_sight.map((row) =>
                            row.id === id ? { ...row, images: imageUrl } : row
                        ),
                    }));
                }
            } catch (error) {
                console.error('Image upload failed:', error);
            }
        } else {
            setInpVal((prev) => ({
                ...prev,
                itinerary_sight: prev.itinerary_sight.map((row) =>
                    row.id === id ? { ...row, [field]: value } : row
                ),
            }));
        }
    };

    // Add new itinerary row
    const addRowItinerary = () => {
        setInpVal((prev) => ({
            ...prev,
            itinerary_sight: [
                ...prev.itinerary_sight,
                {
                    id: prev.itinerary_sight.length + 1,
                    day: prev.itinerary_sight.length + 1,
                    sightseeing_id: '',
                    city_id: '',
                    options: [],
                    title: '',
                    details: '',
                    images: ''
                },
            ],
        }));
    };

    // Delete itinerary row
    const deleteRow = (id) => {
        setInpVal((prev) => ({
            ...prev,
            itinerary_sight: prev.itinerary_sight.filter((row) => row.id !== id),
        }));
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
    const handlePurchageCheckboxChange = (e) => {
        setPurchage(e.target.checked);
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

    const toastSuccessMessage = (str) => {
        toast.success(`${str}`, {
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
            // console.log('othersD----', res?.data);
            setAllOthersD(res?.data);
        } catch (error) {

        }
    };
    const [categoryAdmin, setCategoryAdmin] = useState(null)
    // console.log(categoryAdmin);
    const [industryAdmin, setIndustryAdmin] = useState(null)
    const [productAdmin, setProductAdmin] = useState(null)
    const [seeingAdmin, setSeeingAdmin] = useState(null)
    const [CityAdmin, setCityAdmin] = useState(null)

    // console.log(categoryAdmin);

    const getAllMealTypeListData = async () => {
        try {
            const res = await getTravelAllMealType();
            // console.log('MealTypeD----', res?.data);
            setAllMealTypesD(res?.data);
            const res2 = await getcategoryAdmin()
            setCategoryAdmin(res2?.data)
            const res3 = await getindustryAdmin()
            setIndustryAdmin(res3?.data)
            const resBrand = await getBrandByPage()
            setProductAdmin(resBrand?.data)
            const resSeeing = await getTRCRM_sight_seeing_masteradmin()
            setSeeingAdmin(resSeeing?.data);
            const resCity = await cityMainGett()
            setCityAdmin(resCity?.data);

        } catch (error) {

        }
    };

    const navigate = useNavigate();

    const handleMultiSelectChange = (value, name) => {
        setInpVal((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    // overView
    const handleOverviewChange = (dayIndex, eventIndex, field, value) => {
        setInpVal((prev) => {
            const updatedOverview = [...prev.overview];
            if (field === "day") {
                updatedOverview[dayIndex].day = value;
            } else if (field === "title" || field === "description") {
                updatedOverview[dayIndex].events[eventIndex][field] = value;
            }
            return { ...prev, overview: updatedOverview };
        });
    };

    const addDay = () => {
        setInpVal((prev) => ({
            ...prev,
            overview: [
                ...prev.overview,
                {
                    day: '',
                    events: [
                        {
                            title: '',
                            description: '',
                        },
                    ],
                },
            ],
        }));
    };

    const addEvent = (dayIndex) => {
        setInpVal((prev) => {
            const updatedOverview = [...prev.overview];
            updatedOverview[dayIndex].events.push({ title: '', description: '' });
            return { ...prev, overview: updatedOverview };
        });
    };

    const deleteEvent = (dayIndex, eventIndex) => {
        setInpVal((prev) => {
            const updatedOverview = [...prev.overview];
            updatedOverview[dayIndex].events = updatedOverview[dayIndex].events.filter(
                (_, index) => index !== eventIndex
            );
            return { ...prev, overview: updatedOverview };
        });
    };

    const removeFirstIndex = () => {
        setInpVal((prev) => ({
            ...prev,
            overview: prev.overview.slice(1),
        }));
    };
    const [image, setImage] = useState()
    const handleChangeImage = async (e) => {
        const image = new FormData()
        image.append('image', e.target.files[0])
        try {
            const res = await clodinaryImage(image)
            setTimeout(() => {
                setImage(res.data?.data?.url)
            }, 1000);
        } catch (error) {

        }
    }


    const handleSubmitData = async () => {
        const payloadObj = { ...inpVal, country: selectedCountry, cities: rows, is_purchase: purchage, itinerary: itineraryVal, inclusions: inclusionVal, exclusions: exclusionVal, extra1: extraOneVal, extra2: extraTwoVal, upload_images: selectedImages, thumnail_image: image };
        setLoading(true);
        console.log(payloadObj);
        if (params?.id) {
            try {
                const res = await updateTravelPackage(params?.id, payloadObj);
                if (res?.error === false) {
                    toastSuccessMessage('Package Updated');
                    setTimeout(() => {
                        navigate('/travel-package-list')
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
                        navigate('/travel-package-list')
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
            // setRows(res?.data?.cities);
            setExtraOneVal(res?.data?.extra1);
            setExtraTwoVal(res?.data?.extra2);
            setSelectedTags(res?.data?.tags);
            setSelectedOthers(res?.data?.other);
            setmealtypeVal(res?.data?.meal_type);
            setItineraryVal(res?.data?.itinerary);
            setSelectedImages(res?.data?.upload_images);
            setPurchage(res?.data?.is_purchase)
            setImage(res?.data?.thumnail_image)

            const data = res?.data;
            if (data) {
                console.log("Fetched Data by ID:", data);
                setRows(data.cities || [{ country: "", state: "", city: "", stay: "" }]);
                if (data.cities && data.cities.length) {
                    for (const [index, cityRow] of data.cities.entries()) {
                        if (cityRow.country) {
                            const resStates = await getTravelAllState(cityRow.country);
                            setAllStatesD(resStates?.data || []);
                        }
                        if (cityRow.state) {
                            const resCities = await getTravelAllCity(cityRow.state);
                            setAllCitiesD(resCities?.data || []);
                        }
                    }
                }
            }

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
                                        <div className="form-group col-3 mt-2">
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
                                        <div className="form-group col-3 mt-2">
                                            <label htmlFor="fromDate">Travel Category</label>
                                            <Select
                                                showSearch
                                                mode="multiple"
                                                style={{ width: "100%", height: '40px' }}
                                                placeholder="Select Travel Category "
                                                optionFilterProp="children"
                                                className=""

                                                value={inpVal.product_category}
                                                onChange={(value) => handleMultiSelectChange(value, "product_category")}
                                                getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                            >
                                                {categoryAdmin?.map((loc) => (
                                                    <Option key={loc._id} value={loc._id}>
                                                        {loc.name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </div>
                                        <div className="form-group col-3 mt-2">
                                            <label htmlFor="fromDate">Travel Type</label>
                                            <Select
                                                showSearch
                                                mode="multiple"
                                                style={{ width: "100%", height: '40px' }}
                                                placeholder="Select Agent Class "
                                                optionFilterProp="children"
                                                className=""
                                                value={inpVal.product_industry}
                                                onChange={(value) => handleMultiSelectChange(value, "product_industry")}
                                                getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                            >
                                                {industryAdmin?.map((loc) => (
                                                    <Option key={loc._id} value={loc._id}>
                                                        {loc.name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </div>
                                        <div className="form-group col-3 mt-2">
                                            <label htmlFor="fromDate">Theame Brand</label>
                                            <Select
                                                showSearch
                                                mode="multiple"
                                                style={{ width: "100%", height: '40px' }}
                                                placeholder="Select Agent Class "
                                                optionFilterProp="children"
                                                className=""
                                                value={inpVal.theme}
                                                onChange={(value) => handleMultiSelectChange(value, "theme")}
                                                getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                            >
                                                {productAdmin?.map((loc) => (
                                                    <Option key={loc._id} value={loc._id}>
                                                        {loc.name}
                                                    </Option>
                                                ))}
                                            </Select>
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
                                                <div className="form-group col-2">
                                                    <label htmlFor={`title-${index}`}>Title</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Title"
                                                        id={`title-${index}`}
                                                        value={row.title}
                                                        onChange={(e) => handleInputChange(index, "title", e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-2">
                                                    <label htmlFor={`desc-${index}`}>Description</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Description"
                                                        id={`desc-${index}`}
                                                        value={row.desc}
                                                        onChange={(e) => handleInputChange(index, "desc", e.target.value)}
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
                                            {/* <Multiselect
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
                                            /> */}
                                            <Select
                                                showSearch
                                                mode="multiple"
                                                style={{ width: "100%", height: '40px' }}
                                                placeholder="Select Agent Class "
                                                optionFilterProp="children"
                                                className=""
                                                value={inpVal.tags}
                                                onChange={(value) => handleMultiSelectChange(value, "tags")}
                                                getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                            >
                                                {allTagsD?.map((loc) => (
                                                    <Option key={loc._id} value={loc._id}>
                                                        {loc.tag_name}
                                                    </Option>
                                                ))}
                                            </Select>
                                            {/* <TagsInput value={tags} onChange={handleTagsChange} /> */}
                                        </div>

                                        <h4 className="mt-3" style={{ color: 'red' }}>Overview</h4>
                                        {inpVal.overview.map((day, dayIndex) => (
                                            <div className="form-group col-12" key={dayIndex}>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label>Day</label>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                placeholder="Enter Day"
                                                                value={day.day}
                                                                onChange={(e) =>
                                                                    handleOverviewChange(dayIndex, null, "day", e.target.value)
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h2>Events</h2>
                                                        {day.events.map((event, eventIndex) => (
                                                            <div className="row" key={eventIndex}>
                                                                <div className="col-lg-5">
                                                                    <div className="form-group">
                                                                        <label>Title</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Enter Title"
                                                                            value={event.title}
                                                                            onChange={(e) =>
                                                                                handleOverviewChange(dayIndex, eventIndex, "title", e.target.value)
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-5">
                                                                    <div className="form-group">
                                                                        <label>Description</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Enter Description"
                                                                            value={event.description}
                                                                            onChange={(e) =>
                                                                                handleOverviewChange(dayIndex, eventIndex, "description", e.target.value)
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-danger mt-4"
                                                                        onClick={() => deleteEvent(dayIndex, eventIndex)}
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary mt-2"
                                                            onClick={() => addEvent(dayIndex)}
                                                        >
                                                            Add Event
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <button type="button" className="btn btn-success mt-3" onClick={addDay}>
                                            Add Day
                                        </button>
                                        <button type="button" className="btn btn-danger mt-3" onClick={removeFirstIndex}>
                                            Remove First Index
                                        </button>

                                        <h4 className='mt-3' style={{ color: 'red' }}>Meal Type</h4>
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <select class="form-select" aria-label="Default select example" name='meal_type' value={inpVal?.meal_type} onChange={handleAllChange}>
                                                    <option selected>Open this select Meal Type</option>
                                                    {allMealTypesD && allMealTypesD?.map((item) => {
                                                        return <option value={item?._id} key={item?._id}>{item?.meal_name}</option>
                                                    })}
                                                </select>
                                            </div>

                                        </div>



                                        <h4 className='mt-3' style={{ color: 'red' }}>Others</h4>
                                        <div className="row">
                                            <div className="col-12">
                                                <Select
                                                    showSearch
                                                    mode="multiple"
                                                    style={{ width: "100%", height: '40px' }}
                                                    placeholder="Select Agent Class "
                                                    optionFilterProp="children"
                                                    className=""
                                                    value={inpVal.other}
                                                    onChange={(value) => handleMultiSelectChange(value, "other")}
                                                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                >
                                                    {allOthersD?.map((loc) => (
                                                        <Option key={loc._id} value={loc._id}>
                                                            {loc.name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </div>
                                            {/* {allOthersD &&
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
                                                ))} */}


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





                                        </div>



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

                                        <div className='col-12'>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    style={{ border: '1px solid black' }}
                                                    type="checkbox"
                                                    id="flexCheckChecked"
                                                    checked={purchage}
                                                    onChange={handlePurchageCheckboxChange}
                                                />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Purchase?
                                                </label>
                                            </div>
                                            {/* <small>It will be created on next page</small> */}
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
                                        <div className="form-group col-6">
                                            <label htmlFor="uploadImages">Thumnail Images</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="uploadImages"
                                                // multiple // Allows multiple file selection
                                                onChange={handleChangeImage}
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
                                        {itineraryVal == true &&
                                            <div>
                                                <h4 className="mb-2 mt-3" style={{ color: 'red' }}>
                                                    Day Wise Itinerary
                                                </h4>
                                                {inpVal?.itinerary_sight?.map((row, index) => (
                                                    <div className="row mb-3" key={row.id}>
                                                        <h5>Day {row.day}</h5>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sightseeing">Select Sightseeing</label>
                                                            <Select
                                                                showSearch
                                                                style={{ width: '100%', height: '40px' }}
                                                                placeholder="Select Sightseeing"
                                                                value={row.sightseeing_id}
                                                                onChange={(value) => handleChange(row.id, 'sightseeing_id', value)}
                                                                optionFilterProp="children"
                                                                getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                            >
                                                                {seeingAdmin?.map((loc) => (
                                                                    <Option key={loc._id} value={loc._id}>
                                                                        {loc.sightsseing_activity}
                                                                    </Option>
                                                                ))}
                                                            </Select>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="city">City</label>
                                                            <Select
                                                                showSearch
                                                                style={{ width: '100%', height: '40px' }}
                                                                placeholder="Select City"
                                                                value={row.city_id}
                                                                onChange={(value) => handleChange(row.id, 'city_id', value)}
                                                                optionFilterProp="children"
                                                                getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                            >
                                                                {CityAdmin?.map((loc) => (
                                                                    <Option key={loc._id} value={loc._id}>
                                                                        {loc.name}
                                                                    </Option>
                                                                ))}
                                                            </Select>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="options">Choose Option</label>
                                                            <Select
                                                                showSearch
                                                                mode="multiple"
                                                                style={{ width: '100%', height: '40px' }}
                                                                placeholder="Select Choose Option"
                                                                value={row.options}
                                                                onChange={(value) => handleChange(row.id, 'options', value)}
                                                                optionFilterProp="children"
                                                                getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                            >
                                                                {data?.map((loc, i) => (
                                                                    <Option key={i} value={loc.id}>
                                                                        {loc.name}
                                                                    </Option>
                                                                ))}
                                                            </Select>
                                                        </div>
                                                        <div className="form-group col-lg-4 mt-2">
                                                            <label htmlFor="title">Title</label>
                                                            <input
                                                                type="text"
                                                                name="title"
                                                                className="form-control"
                                                                placeholder="Enter Title"
                                                                value={row.title}
                                                                onChange={(e) => handleChange(row.id, 'title', e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group col-lg-4 mt-2">
                                                            <label htmlFor="details">Other Details</label>
                                                            <input
                                                                type="text"
                                                                name="details"
                                                                className="form-control"
                                                                placeholder="Enter Other Details"
                                                                value={row.details}
                                                                onChange={(e) => handleChange(row.id, 'details', e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="form-group col-lg-4 mt-2">
                                                            <label htmlFor="details">Image</label>
                                                            <input
                                                                type="file"
                                                                className="form-control"
                                                                placeholder="Enter Other Details"
                                                                onChange={(e) => handleChange(row.id, 'images', '', e)}
                                                            />
                                                        </div>

                                                        <div className="col-lg-4 mt-4">
                                                            {index > 0 && (
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger"
                                                                    onClick={() => deleteRow(row.id)}
                                                                >
                                                                    Delete
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                                <button type="button" className="btn btn-primary" onClick={addRowItinerary}>
                                                    Add More
                                                </button>
                                            </div>
                                        }
                                        <div className="form-group col-12 mt-3">
                                            {/* <button type="button" className="btn btn-warning float-end">
                                                RESET
                                            </button> */}
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