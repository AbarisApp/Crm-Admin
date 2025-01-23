import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addTRCRMaccomodation, clodinaryImage, getIdTRCRMaccomodation, getprice_category, getRoom_category, getTPackage, updateTRCRMaccomodation } from "../../../../api/login/Login";

import { Select } from 'antd';
import { baseUrlImage } from "../../../../baseUrl";
const { Option } = Select;
const data = [
    { id: 'Adult', name: 'Adult' },
    { id: 'Infant_with_bed', name: 'Infant With Bed' },
    { id: 'Infant_without_bed', name: 'Infant Without Bed' }
]
const AccomodationMasterAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Master",
        title_2: 'Travel Accomodation Master Add',
        path_2: ``
    };

    const params = useParams()
    // console.log(params);

    const navigate = useNavigate()

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [formData, setFormData] = useState({
        package_id: '',
        price_category: '',
        passenger_type: [],
        rating: '',
        description: [
            { title: '', images: [] }
        ],
        room_category: '',
        base_price: '',
        tax: '',
        total: '',
        tcs: ''
    })

    const changeHandle = (e) => {
        const { name, value } = e.target;
        const updatedData = {
            ...formData,
            [name]: value,
        };

        if (name === "base_price" || name === "tax") {
            const basePrice = parseFloat(updatedData.base_price) || 0;
            const tax = parseFloat(updatedData.tax) || 0;
            updatedData.total = (basePrice + tax).toFixed(2);
        }

        setFormData(updatedData);
    };

    const handleMultiSelectChange = (value, name) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const [image, setImage] = useState()
    const handleChangeImage = async (e, index) => {
        const files = Array.from(e.target.files);
        // console.log(files);
        const imageUrls = [];
        for (const file of files) {
            const imageForm = new FormData();
            imageForm.append("image", file);
            try {
                const res = await clodinaryImage(imageForm);
                const imageUrl = res.data?.data?.url;
                if (imageUrl) imageUrls.push(imageUrl);
            } catch (error) {
                console.error("Image upload failed:", error);
            }
        }

        setFormData((prev) => {
            const updatedDescriptions = [...prev.description];
            console.log(updatedDescriptions, imageUrls);
            const existingImages = updatedDescriptions[index].images;
            const newImages = imageUrls.filter(url => !existingImages.includes(url));

            updatedDescriptions[index].images = [
                ...existingImages,
                ...newImages
            ];

            return { ...prev, description: updatedDescriptions };
        });
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;

        setFormData((prev) => {
            const updatedDescriptions = [...prev.description];
            updatedDescriptions[index][name] = value;
            return { ...prev, description: updatedDescriptions };
        });
    };

    const addDescription = () => {
        setFormData((prev) => ({
            ...prev,
            description: [...prev.description, { title: '', images: [] }]
        }));
    };

    const removeDescription = (index) => {
        if (index === 0) return; // Prevent removal of the first description

        setFormData((prev) => {
            const updatedDescriptions = prev.description.filter((_, i) => i !== index);
            return { ...prev, description: updatedDescriptions };
        });
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${'Success'}`, {
            position: "top-right",
        });
    };

    const [packagee, setPaackagee] = useState(null)
    const [roomCategory, setRoomCategory] = useState(null)
    const [priceCategory, setPriceCategory] = useState(null)

    const apigetMaster = async () => {
        try {
            const res1 = await getTPackage()
            setPaackagee(res1?.data)
            const res2 = await getprice_category()
            setPriceCategory(res2?.data)
            const res3 = await getRoom_category()
            setRoomCategory(res3?.data)
        } catch (error) {

        }
    }

    const disabled = !formData?.tag_name
    const submitData = async () => {
        const clone = { ...formData }
        console.log(clone);
        if (!params?.id) {
            try {
                console.log(formData);
                const res = await addTRCRMaccomodation(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-accomodation`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        } else {
            try {
                const res = await updateTRCRMaccomodation(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-accomodation`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        }

    }

    useEffect(() => {
        const detbyIdData = async () => {
            try {
                const res = await getIdTRCRMaccomodation(params?.id)
                setFormData(res?.data)
            } catch (error) {

            }
        }
        if (params?.id) {
            detbyIdData()
        }
    }, [params?.id])

    useEffect(() => {
        getCurrentDate()
        apigetMaster()
    }, [])
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Filter ACCOMODATION Class</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Package</label>
                                    <select className="form-control" aria-label="Default select example"
                                        name="package_id"
                                        value={formData?.package_id}
                                        onChange={changeHandle}
                                    >
                                        <option selected>Open this select Package</option>
                                        {packagee && packagee?.map((item) => {
                                            return <option value={item?._id} key={item?._id}>{item?.package}</option>
                                        })}
                                    </select>

                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Room Category</label>
                                    <select className="form-control" aria-label="Default select example"
                                        name="room_category"
                                        value={formData?.room_category}
                                        onChange={changeHandle}
                                    >
                                        <option selected>Open this select Room Category</option>
                                        {roomCategory && roomCategory?.map((item) => {
                                            return <option value={item?._id} key={item?._id}>{item?.category_name}</option>
                                        })}

                                    </select>
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Price Category</label>
                                    <select className="form-control" aria-label="Default select example"
                                        name="price_category"
                                        value={formData?.price_category}
                                        onChange={changeHandle}
                                    >
                                        <option selected>Open this select Price Category</option>
                                        {priceCategory && priceCategory?.map((item) => {
                                            return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Passenger type</label>
                                    <select className="form-control" aria-label="Default select example"
                                        name="passenger_type"
                                        value={formData?.passenger_type}
                                        onChange={changeHandle}
                                    >
                                        <option selected>Open this select Passenger type</option>
                                        <option value={'Adult'}>Adult</option>
                                        <option value={'Infant_with_bed'}>Infant With Bed</option>
                                        <option value={'Infant_without_bed'}>Infant Without Bed</option>
                                    </select>
                                    {/* <Select
                                        showSearch
                                        mode="multiple"
                                        style={{ width: "100%", height: '40px' }}
                                        placeholder="Select Travel Category "
                                        optionFilterProp="children"
                                        className=""

                                        value={formData?.passenger_type}
                                        onChange={(value) => handleMultiSelectChange(value, "passenger_type")}
                                        getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                    >
                                        {data?.map((loc, i) => (
                                            <Option key={i} value={loc.id}>
                                                {loc.name}
                                            </Option>
                                        ))}
                                    </Select> */}
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Rating</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Rating"
                                        name="rating"
                                        value={formData?.rating}
                                        onChange={changeHandle}
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Base Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Base Price"
                                        name="base_price"
                                        value={formData?.base_price}
                                        onChange={changeHandle}
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Tax</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Tax"
                                        name="tax"
                                        value={formData?.tax}
                                        onChange={changeHandle}
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Total</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Total"
                                        name="total"
                                        value={formData?.total}
                                        onChange={changeHandle}
                                        readOnly
                                    />
                                </div>
                                {/* <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">TCS</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter TCS"
                                        name="tcs"
                                        value={formData?.tcs}
                                        onChange={changeHandle}
                                    />
                                </div> */}
                                <div className="col-lg-12">
                                    <h3>Description</h3>
                                    {formData.description.map((desc, index) => (
                                        <div className="row" key={index}>
                                            <div className="col-xl-4 mb-3">
                                                <label className="form-label">Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Title"
                                                    name="title"
                                                    value={desc.title}
                                                    onChange={(e) => handleInputChange(e, index)}
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <label className="form-label">Images</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    multiple
                                                    onChange={(e) => handleChangeImage(e, index)}
                                                />
                                                <div className="mt-2">
                                                    {desc.images.map((img, imgIndex) => (
                                                        <img
                                                            key={imgIndex}
                                                            src={`${baseUrlImage}${img}`}

                                                            alt={`Uploaded ${imgIndex}`}
                                                            style={{ width: "50px", height: "50px", marginRight: "5px" }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-xl-2 mb-3 d-flex align-items-end">
                                                {index !== 0 && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={() => removeDescription(index)}
                                                    >
                                                        Remove
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="mb-3">
                                        <button className="btn btn-primary" type="button" onClick={addDescription}>
                                            Add Description
                                        </button>
                                    </div>
                                </div>

                                <div className="col-xl-4 text-center mt-4">
                                    <button type="button" className="btn btn-primary mt-3" onClick={submitData}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AccomodationMasterAdd