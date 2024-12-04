import { toast, ToastContainer } from "react-toastify";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { addTRCRM_visa_master, countryList, getByTRCRM_visa_master, TRCRM_visa_category_masterGet, TTRCRM_visa_type_masterGet, updateTRCRM_visa_master } from "../../../../api/login/Login";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const TravelVisaMasterAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Master",
        title_2: 'Travel Visa Type Add',
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
        visa_category: '',
        visa_type: '',
        duration: '',
        travel_date: '',
        job_profile: '',
        age: '',
        qualification: '',
        description: ''
    })

    const changeHandle = (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFormData(clone)
    }

    const [CountryData, setCountryData] = useState([])
    const [visaCategoryData, setVisaCategoryData] = useState([])
    const [visaTypeData, setvisaTypeData] = useState([])

    const CountryGet = async () => {
        try {
            const res = await countryList()
            setCountryData(res?.data)
            const resVisa = await TRCRM_visa_category_masterGet()
            setVisaCategoryData(resVisa?.data)
            const resVisaType = await TTRCRM_visa_type_masterGet()
            setvisaTypeData(resVisaType?.data)
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
                const res = await addTRCRM_visa_master(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/visa-master`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        } else {
            try {
                const res = await updateTRCRM_visa_master(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/visa-master`)
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
                const res = await getByTRCRM_visa_master(params?.id)
                setFormData(res?.data)
            } catch (error) {

            }
        }
        detbyIdData()
    }, [params?.id])

    useEffect(() => {
        getCurrentDate()
        CountryGet()
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">{params?.id ? 'Update' : 'Add'} Visa Master </h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Country <span style={{ color: 'red' }}>*</span></label>
                                        <select class="form-control" aria-label="Default select example"
                                            name="country"
                                            value={formData?.country}
                                            onChange={changeHandle}
                                        >
                                            <option selected>Open this select Country</option>
                                            {CountryData && CountryData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Visa Category <span style={{ color: 'red' }}>*</span></label>
                                        <select class="form-control" aria-label="Default select example"
                                            name="visa_category"
                                            value={formData?.visa_category}
                                            onChange={changeHandle}
                                        >
                                            <option selected>Open this select Visa Category</option>
                                            {visaCategoryData && visaCategoryData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Visa type <span style={{ color: 'red' }}>*</span></label>
                                        <select class="form-control" aria-label="Default select example"
                                            name="visa_type"
                                            value={formData?.visa_type}
                                            onChange={changeHandle}
                                        >
                                            <option selected>Open this select Visa type</option>
                                            {visaTypeData && visaTypeData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Duration <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Duration"
                                            name="duration"
                                            value={formData?.duration}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Travel date <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Enter Travel date"
                                            name="travel_date"
                                            value={formData?.travel_date}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Job profile <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Job profile"
                                            name="job_profile"
                                            value={formData?.job_profile}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Age <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Age"
                                            name="age"
                                            value={formData?.age}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Qualification <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Qualification"
                                            name="qualification"
                                            value={formData?.qualification}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Description <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Description"
                                            name="description"
                                            value={formData?.description}
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

export default TravelVisaMasterAdd