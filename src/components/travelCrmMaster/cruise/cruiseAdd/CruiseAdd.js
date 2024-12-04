import { toast, ToastContainer } from "react-toastify";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addTRCRM_cruise, cityAddCollageSelectList, countryList, getIdTRCRM_cruise, getStateMaster, updateTRCRM_cruise } from "../../../../api/login/Login";


const CruiseAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Master",
        title_2: 'Travel Cruise Master Add',
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
        country: '',
        city: '',
        state: '',
        days: '',
        cruise_name: '',
        type: '',
        departure: '',
        return: '',
        room_preference: '',
        remark: ''
    })

    const changeHandle = (e) => {
        const clone = { ...formData }
        const value = e.target.value;
        const name = e.target.name
        if (name === 'state') {
            clone.city = '';
        }
        clone[name] = value
        setFormData(clone)
    }
    const [countryData, setCountryData] = useState([])
    const [cityData, setCiyData] = useState([])
    const [sateData, setSateData] = useState([])

    const countrygetData = async () => {
        try {
            const res = await countryList()
            setCountryData(res?.data);
            const resState = await getStateMaster()
            // console.log(resState);
            setSateData(resState?.data);

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

    const disabled = !formData?.tag_name
    const submitData = async () => {
        const clone = { ...formData }
        // console.log(clone);
        if (!params?.id) {
            try {
                // console.log(formData);
                const res = await addTRCRM_cruise(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-cruise`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        } else {
            try {
                const res = await updateTRCRM_cruise(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-cruise`)
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
                const res = await getIdTRCRM_cruise(params?.id)
                setFormData(res?.data)
            } catch (error) {

            }
        }
        detbyIdData()
    }, [params?.id])

    useEffect(() => {
        getCurrentDate()
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
                                <h4 className="heading mb-0 p-2">{params?.id ? 'Update' : 'Add'} Travel Cruise Master</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Country <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example"
                                            name="country"
                                            value={formData?.country}
                                            onChange={changeHandle}
                                        >
                                            <option selected>Open this select Country</option>
                                            {countryData && countryData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">State <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example"
                                            name="state"
                                            value={formData?.state}
                                            onChange={changeHandle}
                                        >
                                            <option selected>Open this select State</option>
                                            {sateData && sateData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">City <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example"
                                            name="city"
                                            value={formData?.city}
                                            onChange={changeHandle}
                                        >
                                            <option selected>Open this select City</option>
                                            {cityData && cityData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Days <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Days"
                                            name="days"
                                            value={formData?.days}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Sub Category <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Cruise Name"
                                            name="cruise_name"
                                            value={formData?.cruise_name}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Type <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter type"
                                            name="type"
                                            value={formData?.type}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Departure  Date<span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="departure"
                                            value={formData?.departure}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Return  Date<span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="return"
                                            value={formData?.return}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Room Preference <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example"
                                            name="room_preference"
                                            value={formData?.room_preference}
                                            onChange={changeHandle}
                                        >
                                            <option selected>Open this select Room Preference</option>
                                            <option value={'No data'}>No data</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Remark<span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="remark"
                                            value={formData?.remark}
                                            onChange={changeHandle}
                                        />
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

export default CruiseAdd