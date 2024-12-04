import { useEffect, useState } from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { AddTRCRM_sight_seeing_master, cityAddCollageSelectList, cityGetData, cityListbyPagination, cityMainGet, clodinaryImage, countryList, getByIdRCRM_sight_seeing_master, getStateMaster, updateTRCRM_sight_seeing_master } from "../../../../api/login/Login";
import { baseUrlImage } from "../../../../baseUrl";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";


const Addsightseeing = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Reports",
        title_2: 'All Sightseeings',
        title_3: 'Add Sightseeing',
        path_2: ``
    };

    const params = useParams()
    const navigate = useNavigate()

    const [formData, setData] = useState({
        country: '',
        city: '',
        state: '',
        sightsseing_activity: '',
        description: '',
        inclusion: '',
        exclusion: '',
        duration: '',
        close_day: '',
        timing_open_close: '',
        transport: 'SIC',
        start_time: '',
        remark: '',
        internal_remark1: '',
        internal_remark2: '',
        upload_images: ''
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

    const countrygetData = async () => {
        try {
            const res = await countryList()
            setCountryData(res?.data);
            const resState = await getStateMaster()
            console.log(resState);
            setSateData(resState?.data);

        } catch (error) {

        }
    }

    const citygetData = async () => {
        try {
            const resCity = await cityAddCollageSelectList(formData?.state)
            console.log(resCity);
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
                // console.log(formData);
                const res = await AddTRCRM_sight_seeing_master(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate('/sightseen-list')
                    }, 2000)
                } else {
                    alert(res?.message)
                }

            } catch (error) {

            }
        } else {
            try {
                const res = await updateTRCRM_sight_seeing_master(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate('/sightseen-list')
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
                const res = await getByIdRCRM_sight_seeing_master(params?.id)
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
                                <h4 className="heading mb-0 p-2">Add Sightseeing</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Country <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example" name="country" value={formData?.country} onChange={changeHandle}>
                                            <option selected>Open this select Country</option>
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
                                        <label for="exampleFormControlInput1" class="form-label" >Sightseeing Activity <span style={{ color: 'red' }}>*</span></label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Enter Sightseeing Activity" name="sightsseing_activity" value={formData?.sightsseing_activity} onChange={changeHandle}></textarea>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label" >Description </label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Enter Description" name="description" value={formData?.description} onChange={changeHandle}> </textarea>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label" >Inclusion </label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Enter Inclusion" name="inclusion" value={formData?.inclusion} onChange={changeHandle}></textarea>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label" >Exclusion </label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Enter Exclusion" name="exclusion" value={formData?.exclusion} onChange={changeHandle}></textarea>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label" >Duration </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="duration" value={formData?.duration} onChange={changeHandle}
                                            placeholder='Enter Duration'
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label" >Close Day </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="close_day" value={formData?.close_day} onChange={changeHandle}
                                            placeholder='Enter Close Day'
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label" >Timings(Open - Close) </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="timing_open_close" value={formData?.timing_open_close} onChange={changeHandle}
                                            placeholder='Enter Timings(Open - Close)'
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Transport </label>
                                        <select className="form-control" aria-label="Default select example" name="transport" value={formData?.transport} onChange={changeHandle}>
                                            <option selected disabled>Open this select Transport</option>
                                            <option value={'SIC'}>SIC</option>
                                            <option value={'PVT'}>PVT</option>
                                            <option value={'Other'}>Other</option>
                                        </select>

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Start Time </label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            name="start_time" value={formData?.start_time} onChange={changeHandle}
                                            placeholder='Enter Start Time'
                                        />

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label" >Remark </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="remark" value={formData?.remark} onChange={changeHandle}
                                            placeholder='Enter Remark'
                                        />

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Internal Remark 1 </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="internal_remark1" value={formData?.internal_remark1} onChange={changeHandle}
                                            placeholder='Enter Remark 1'
                                        />
                                        <label for="exampleFormControlInput1" class="form-label">It will be displayed with sighseeing name while building the itinerary. It will not print. </label>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Internal Remark 2 </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="internal_remark2" value={formData?.internal_remark2} onChange={changeHandle}
                                            placeholder='Enter Remark 2'
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Upload Image </label>
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
                                            {params?.id ? 'Update' : 'Add'}
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

export default Addsightseeing