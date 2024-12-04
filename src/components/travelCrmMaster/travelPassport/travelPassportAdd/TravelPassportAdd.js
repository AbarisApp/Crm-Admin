import { toast, ToastContainer } from "react-toastify";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { useEffect, useState } from "react";
import { addTRCRM_passport, countryList, getByTRCRM_passport, updateTRCRM_passport } from "../../../../api/login/Login";
import { useNavigate, useParams } from "react-router-dom";



const TravelPassportAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Master",
        title_2: 'Travel Passport',
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
        date: '',
        current_passport_number: '',
        place_of_apply: '',
        no_of_person: '',
        category: 'New Passport',
        current_expiry_date: '',
        urgent: false,
        remark: ''
    })

    const changeHandle = (e) => {
        const clone = { ...formData }
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        const name = e.target.name
        clone[name] = value
        setFormData(clone)
    }
    const [country, setCountry] = useState([])
    const countryGet = async () => {
        try {
            const res = await countryList()
            setCountry(res?.data)
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
                const res = await addTRCRM_passport(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-passport`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        } else {
            try {
                const res = await updateTRCRM_passport(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-passport`)
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
                const res = await getByTRCRM_passport(params?.id)
                setFormData(res?.data)
            } catch (error) {

            }
        }
        detbyIdData()
    }, [params?.id])

    useEffect(() => {
        getCurrentDate()
        countryGet()
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">{params?.id ? 'Update' : 'Add'} Travel Passport </h4>
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
                                            {country && country?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Date <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Enter Room Type Name"
                                            name="date"
                                            value={formData?.date}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Current Passport Number <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Room Type Name"
                                            name="current_passport_number"
                                            value={formData?.current_passport_number}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Place of Apply <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Room Type Name"
                                            name="place_of_apply"
                                            value={formData?.place_of_apply}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">No. Of Person <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Room Type Name"
                                            name="no_of_person"
                                            value={formData?.no_of_person}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Category <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example"
                                            name="category"
                                            value={formData?.category}
                                            onChange={changeHandle}
                                        >
                                            <option value={'New Passport'} >New Passport</option>
                                            <option value={'Renew Passport'} >Renew Passport</option>
                                        </select>
                                    </div>
                                    {formData?.category === 'Renew Passport' && (
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                Current Expiry Date <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Enter Expiry Date"
                                                name="current_expiry_date"
                                                value={formData?.current_expiry_date}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                    )}
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label me-3">Urgent </label>
                                        <input className="form-check-input" type="checkbox" id="flexCheckDefault"
                                            name="urgent"
                                            checked={formData?.urgent}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            Remark
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Remark"
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

export default TravelPassportAdd