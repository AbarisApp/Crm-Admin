import { toast, ToastContainer } from "react-toastify";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addTRCRM_forex, countryList, currencyList, getIdTRCRM_forex, updateTRCRM_forex } from "../../../../api/login/Login";

const TravelForexAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Master",
        title_2: 'Travel Other Master Add',
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
        currency: '',
        amount: '',
    })

    const changeHandle = (e) => {
        const clone = { ...formData }
        const value = e.target.value;
        const name = e.target.name
        clone[name] = value
        setFormData(clone)
    }
    const [country, setCountry] = useState([])
    const [currency, setcurrencyy] = useState([])
    const countryGet = async () => {
        try {
            const res = await countryList()
            setCountry(res?.data)
            const resCurrency = await currencyList()
            setcurrencyy(resCurrency?.data)
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
                const res = await addTRCRM_forex(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-forex`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        } else {
            try {
                const res = await updateTRCRM_forex(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-forex`)
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
                const res = await getIdTRCRM_forex(params?.id)
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
                                <h4 className="heading mb-0 p-2">{params?.id ? 'Update' : 'Add'} Travel Other Master </h4>
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
                                        <label for="exampleFormControlInput1" className="form-label">Currency <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example"
                                            name="currency"
                                            value={formData?.currency}
                                            onChange={changeHandle}
                                        >
                                            <option selected>Open this select Currency</option>
                                            {currency && currency?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.currency_name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Amount<span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Amount"
                                            name="amount"
                                            value={formData?.amount}
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

export default TravelForexAdd