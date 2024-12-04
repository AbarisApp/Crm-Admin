import { toast, ToastContainer } from "react-toastify";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { useNavigate, useParams } from "react-router-dom";
import { addTRCRM_travel_insurance, countryList, getByTRCRM_travel_insurance, updateTRCRM_travel_insurance } from "../../../../api/login/Login";
import { useEffect, useState } from "react";


const TravelInsurenceAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Master",
        title_2: 'Travel Insurance Add',
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
        how_long: '',
        travel_date: '',
        insurance_for_visa: false,
    })

    const changeHandle = (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFormData(clone)
    }

    const [CountryData, setCountryData] = useState([])

    const CountryGet = async () => {
        try {
            const res = await countryList()
            setCountryData(res?.data)
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
                const res = await addTRCRM_travel_insurance(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-insurance`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        } else {
            try {
                const res = await updateTRCRM_travel_insurance(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-insurance`)
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
                const res = await getByTRCRM_travel_insurance(params?.id)
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
                                <h4 className="heading mb-0 p-2">{params?.id ? 'Update' : 'Add'} Travel Insurance </h4>
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
                                        <label for="exampleFormControlInput1" className="form-label">How long? <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter How long"
                                            name="how_long"
                                            value={formData?.how_long}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Travel Date <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Enter Travel Date"
                                            name="travel_date"
                                            value={formData?.travel_date}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Insurance for Visa <span style={{ color: 'red' }}>*</span></label>
                                        <select class="form-control" aria-label="Default select example"
                                            name="insurance_for_visa"
                                            value={formData?.insurance_for_visa}
                                            onChange={changeHandle}
                                        >
                                            <option selected>Open this select Insurance for Visa</option>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
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

export default TravelInsurenceAdd