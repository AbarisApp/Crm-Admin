import { toast, ToastContainer } from "react-toastify";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { useNavigate, useParams } from "react-router-dom";
import { addTRCRM_adventure, cityAddCollageSelectList, countryList, getIdTRCRM_adventure, getStateMaster, updateTRCRM_adventure } from "../../../../api/login/Login";
import { useEffect, useState } from "react";


const TravelAdventureAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Master",
        title_2: 'Travel Travel Adventure Add',
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
        travel_date: '',
        category_motorbiking: false,
        category_camping: false,
        category_safari: false,
        category_water_sports: false,
        remark: '',
    })

    const changeHandle = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        if (name === "state") {
            setFormData((prev) => ({
                ...prev,
                city: '',
                [name]: value,
            }));
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
                const res = await addTRCRM_adventure(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-adventure`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        } else {
            try {
                const res = await updateTRCRM_adventure(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-adventure`)
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
                const res = await getIdTRCRM_adventure(params?.id)
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
                                <h4 className="heading mb-0 p-2">{params?.id ? 'Update' : 'Add'} Travel Adventure Master </h4>
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
                                        <label for="exampleFormControlInput1" className="form-label">Category <span style={{ color: 'red' }}>*</span></label>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="motorbiking"
                                                name="category_motorbiking"
                                                checked={formData.category_motorbiking}
                                                onChange={changeHandle}
                                            />
                                            <label className="form-check-label" htmlFor="motorbiking">
                                                Category Motorbiking
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="camping"
                                                name="category_camping"
                                                checked={formData.category_camping}
                                                onChange={changeHandle}
                                            />
                                            <label className="form-check-label" htmlFor="camping">
                                                Category Camping
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="safari"
                                                name="category_safari"
                                                checked={formData.category_safari}
                                                onChange={changeHandle}
                                            />
                                            <label className="form-check-label" htmlFor="safari">
                                                Category Safari
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="water_sports"
                                                name="category_water_sports"
                                                checked={formData.category_water_sports}
                                                onChange={changeHandle}
                                            />
                                            <label className="form-check-label" htmlFor="water_sports">
                                                Category Water Sports
                                            </label>
                                        </div>

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

export default TravelAdventureAdd