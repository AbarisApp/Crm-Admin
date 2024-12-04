import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { addTRCRM_hotel_master, cityAddCollageSelectList, clodinaryImage, countryList, getByTRCRM_hotel_master, getStateMaster, getTRCRM_hotel_type_master, getTRCRM_star_rating_master, updateRCRM_hotel_master } from "../../../../api/login/Login";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { baseUrlImage } from "../../../../baseUrl";


const HotelAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: " Manage Travel Business",
        title_2: 'Create Hotel',
        path_2: ``
    };
    const params = useParams()
    const navigate = useNavigate()

    const [formData, setData] = useState({
        country: '',
        city: '',
        state: '',
        hotel_name: '',
        address: '',
        contact: '',
        email_id: '',
        hotel_type: '',
        child_free_age: '',
        child_without_bed_age: '',
        amentities_wifi_parking_laundry: '',
        service_doctor_foreign_exchange: '',
        description: '',
        upload_images: '',
        image_name: '',
    })

    const changeHandle = (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        if (name === 'state') {
            clone.city = '';
        }
        clone[name] = value
        setData(clone)
    }
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

    const [countryData, setCountryData] = useState([])
    const [cityData, setCiyData] = useState([])
    const [sateData, setSateData] = useState([])
    const [ratingData, setRatingData] = useState([])
    const [hotalTypeData, setHotalType] = useState([])

    const countrygetData = async () => {
        try {
            const res = await countryList()
            setCountryData(res?.data);
            const resState = await getStateMaster()
            // console.log(resState);
            setSateData(resState?.data);
            const ratingRes = await getTRCRM_star_rating_master()
            setRatingData(ratingRes?.data)
            const hotelTypeRes = await getTRCRM_hotel_type_master()
            setHotalType(hotelTypeRes?.data)

        } catch (error) {

        }
    }

    const citygetData = async () => {
        try {
            const resCity = await cityAddCollageSelectList(formData?.state)
            // console.log(resCity);
            setCiyData(resCity?.data);
        } catch (error) {

        }
    }

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${'Success'}`, {
            position: "top-right",
        });
    };
    const submitData = async () => {
        const clone = { ...formData, upload_images: image }
        if (!params?.id) {
            try {
                console.log(formData);
                const res = await addTRCRM_hotel_master(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate('/hotel-list')
                    }, 2000)
                } else {
                    alert(res?.message)
                }

            } catch (error) {

            }
        } else {
            try {
                const res = await updateRCRM_hotel_master(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate('/hotel-list')
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
                const res = await getByTRCRM_hotel_master(params?.id)
                // console.log(res);
                setData(res?.data)
                setImage(res?.data?.upload_images)
            } catch (error) {

            }
        }
        detbyIdData()
    }, [params?.id])

    useEffect(() => {
        countrygetData()
    }, [])

    useEffect(() => {
        if (formData.state) {
            citygetData();
        }
    }, [formData.state]);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2"> {params?.id ? "Upate" : 'Create'} Hotel</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Hotel Name <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Hotel Name"
                                            name="hotel_name"
                                            value={formData?.hotel_name}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Country  <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example" name="country" value={formData?.country} onChange={changeHandle}>
                                            <option selected>Open this select Country </option>
                                            {countryData && countryData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">State Name <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example" name="state" value={formData?.state} onChange={changeHandle}>
                                            <option selected>Open this select State</option>
                                            {sateData && sateData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label" >City Name <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example" name="city" value={formData?.city} onChange={changeHandle}>
                                            <option selected>Open this select City</option>
                                            {cityData && cityData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Address </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Address"
                                            name="address" value={formData?.address} onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Contact </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Contact"
                                            name="contact" value={formData?.contact} onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Email Id </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter Email Id"
                                            name="email_id" value={formData?.email_id} onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Rating  <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example" name="rating" value={formData?.rating} onChange={changeHandle}>
                                            <option selected>Open this select Rating </option>
                                            {ratingData && ratingData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Hotel Type  <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example" name="hotel_type" value={formData?.hotel_type} onChange={changeHandle}>
                                            <option selected>Open this select Hotel Type </option>
                                            {hotalTypeData && hotalTypeData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.hotel_type}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Child Free Age - No charges till this age </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Child Free Age"
                                            name="child_free_age" value={formData?.child_free_age} onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Child Without Bed Age - Without bed charges till this age </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Child Without Bed Age"
                                            name="child_without_bed_age" value={formData?.child_without_bed_age} onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Amenities </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Amenities"
                                            name="amentities_wifi_parking_laundry" value={formData?.amentities_wifi_parking_laundry} onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Description </label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" name="description" value={formData?.description} onChange={changeHandle}></textarea>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Upload Images </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={handleChangeImage}
                                            placeholder='Enter Remark 2'
                                        />
                                        {image && <img src={`${baseUrlImage}${image}`} />}
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary" onClick={submitData}>
                                            {params?.id ? "Upate" : 'Save'}
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

export default HotelAdd