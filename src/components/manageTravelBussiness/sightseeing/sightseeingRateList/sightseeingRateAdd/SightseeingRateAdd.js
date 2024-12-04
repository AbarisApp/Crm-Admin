import { FaGlobe, FaMapMarkerAlt } from "react-icons/fa"
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addTRCRM_sight_seeing_rate_master, currencyList, getByIdRCRM_sight_seeing_master, getByIdTRCRM_sight_seeing_rate_master, updateRCRM_sight_seeing_rate_master } from "../../../../../api/login/Login";


const SightseeingRateAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: " Manage Travel Business",
        title_2: 'Add Sightseeing Rate',
        path_2: ``
    };

    const params = useParams()
    console.log(params);

    const navigate = useNavigate()

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [formData, setData] = useState({
        site_id: '',
        from_date_time: getCurrentDate(),
        to_date_time: getCurrentDate(),
        currency: '',
        adult_rate: '',
        child_rate: '',
    })

    const changeHandle = (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setData(clone)
    }
    // const [image, setImage] = useState()
    // const handleChangeImage = async (e) => {
    //     const image = new FormData()
    //     image.append('image', e.target.files[0])
    //     try {
    //         const res = await clodinaryImage(image)
    //         setTimeout(() => {
    //             setImage(res.data?.data?.url)
    //         }, 1000);
    //     } catch (error) {

    //     }
    // }

    const [currencyData, setCurrencyData] = useState([])
    const [namefillData, setNameFillData] = useState(null)
    // console.log(currencyData);


    const currencyGet = async () => {
        try {
            const res = await currencyList()
            setCurrencyData(res?.data);
            const res2 = await getByIdRCRM_sight_seeing_master(params?.id)
            console.log(res2);
            setNameFillData(res2?.data)


        } catch (error) {

        }
    }



    const toastSuccessMessage = (message) => {
        toast.success(`${params?._id ? "Update" : "Add"} ${'Success'}`, {
            position: "top-right",
        });
    };

    const disabled = !formData?.from_date_time || !formData?.to_date_time || !formData?.adult_rate || !formData?.child_rate || !formData?.currency
    const submitData = async () => {
        const clone = { ...formData, site_id: params?.id }
        // console.log(clone);

        if (!params?._id) {
            try {
                // console.log(formData);
                const res = await addTRCRM_sight_seeing_rate_master(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/sightseeing-ratelist/${params?.id}`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }

            } catch (error) {

            }
        } else {
            try {
                const res = await updateRCRM_sight_seeing_rate_master(params._id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/sightseeing-ratelist/${params?.id}`)
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
                const res = await getByIdTRCRM_sight_seeing_rate_master(params?._id)
                setData(res?.data)
            } catch (error) {

            }
        }
        detbyIdData()
    }, [params?.id])

    useEffect(() => {
        currencyGet()
        getCurrentDate()
    }, [])

    // useEffect(() => {
    //     if (formData.state) {
    //         citygetData();
    //     }
    // }, [formData.state]);
    return (
        <>

            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Add Sightseeing Rate</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-md-3">
                                        <p><FaGlobe color="red" /> <strong>Title</strong></p>
                                        <p>{namefillData?.description}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaMapMarkerAlt color="red" /> <strong>City</strong></p>
                                        <p>{namefillData?.city}</p>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-3"></div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Form Date <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="from_date_time"
                                            value={formData?.from_date_time}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">To Date <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="to_date_time"
                                            value={formData?.to_date_time}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Currency</label>
                                        <select className="form-control" aria-label="Default select example" name="currency"
                                            value={formData?.currency}
                                            onChange={changeHandle}>
                                            <option selected>Open this select Currency</option>
                                            {currencyData && currencyData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.currency_name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Adult Rate</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="adult_rate"
                                            value={formData?.adult_rate}
                                            onChange={changeHandle}
                                            placeholder="Enter Adult Rate"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Child Rate</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="child_rate"
                                            value={formData?.child_rate}
                                            onChange={changeHandle}
                                            placeholder="Enter Child Rate"
                                        />
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary" disabled={disabled} onClick={submitData}>
                                            {params?._id ? 'Update' : 'Save'}
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

export default SightseeingRateAdd