import { toast, ToastContainer } from "react-toastify";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addTRCRM_bus, cityAddCollageSelectList, countryList, getIdTRCRM_bus, updateTRCRM_bus } from "../../../../api/login/Login";
import { Select } from "antd";
const { Option } = Select;


const BusMasterAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Master",
        title_2: 'Travel Travel Adventure Add',
        path_2: ``
    };
    const [locations, setLocations] = useState([]);
    const fetchLocationData = () => {
        setLocations([
            { id: "1", name: "New York" },
            { id: "2", name: "Los Angeles" },
            { id: "3", name: "Chicago" },
        ]);
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
        from: '',
        to: '',
        departure: '',
        return: '',
        preference: '',
        remark: '',
    })

    const changeHandle = (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFormData(clone)
    }

    const handleChange2 = (name, value) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const [countryData, setCountryData] = useState([])

    const countrygetData = async () => {
        try {
            const res = await countryList()
            setCountryData(res?.data);
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
                const res = await addTRCRM_bus(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-bus-master`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        } else {
            try {
                const res = await updateTRCRM_bus(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/travel-bus-master`)
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
                const res = await getIdTRCRM_bus(params?.id)
                setFormData(res?.data)
            } catch (error) {

            }
        }
        detbyIdData()
    }, [params?.id])

    useEffect(() => {
        getCurrentDate()
        countrygetData()
        fetchLocationData()
    }, [])
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
                                        <label className="form-label">
                                            From <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <Select
                                            showSearch
                                            style={{ width: "100%", height: '40px' }}
                                            placeholder="Select Departure"
                                            value={formData.from}
                                            onChange={(value) => handleChange2("from", value)}
                                            optionFilterProp="children"
                                            className=""
                                        >
                                            {locations.map((loc) => (
                                                <Option key={loc.id} value={loc.name}>
                                                    {loc.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">
                                            To <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <Select
                                            showSearch
                                            style={{ width: "100%", height: '40px' }}
                                            placeholder="Select Destination"
                                            value={formData.to}
                                            onChange={(value) => handleChange2("to", value)}
                                            optionFilterProp="children"
                                            className=""
                                        >
                                            {locations.map((loc) => (
                                                <Option key={loc.id} value={loc.name}>
                                                    {loc.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Departure Date<span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="departure"
                                            value={formData?.departure}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Return Date<span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="return"
                                            value={formData?.return}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Preference<span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="return"
                                            value={formData?.return}
                                            onChange={changeHandle}
                                        />
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

export default BusMasterAdd