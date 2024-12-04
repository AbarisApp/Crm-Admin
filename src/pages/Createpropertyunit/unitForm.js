import { toast, ToastContainer } from "react-toastify";
import { baseUrlImage } from "../../baseUrl";
import CustomInputField from "../../common/CustomInputField";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {clodinaryImage, getCreblock, getCreFloor, getCreProperty, getCreVenture, getVentureByUser, getVentureId, postNewPropertyunit, postNewVenture, propertyUnitUpdate, ventureUpdate } from "../../api/login/Login";

export default function UnitForm() {
    const params = useParams()

    const [venture, setVenture] = useState(null)
    const [property, setproperty] = useState(null)
    const [block, setblock] = useState(null)
    const [floor, setFloor] = useState(null)
    const [store, setStore] = useState({
        name: "",
        code: "",
        venture: "",
        property: "",
        block: "",
        floors: "",
        no_of_bedrooms: "",
        price: "",
        facing: "",
        area: "",
        layout_image: "",
        corner_plot: "",
        sequence: "",
        unit_type: "",
        unit_status: "",
        pms_stage: "",
    })
    const getData = async () => {
        try {
            const pro = await getCreProperty(0, 100)
            const ven = await getCreVenture(0, 100)
            const blc = await getCreblock(0 , 100)
            const flr = await getCreFloor(0 , 100)
            setVenture(ven.data?.vanture)
            setproperty(pro.data?.property)
            setblock(blc.data?.block)
            setFloor(flr.data?.floor)
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])



    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getVentureId(params.id);
                    const currencyData = response.data;
                    setStore(currencyData);
                } else {
                    setStore({
                        name: "",
                        code: "",
                        venture: "",
                        property: "",
                        block: "",
                        floors: "",
                        no_of_bedrooms: "",
                        price: "",
                        facing: "",
                        area: "",
                        layout_image: "",
                        corner_plot: "",
                        sequence: "",
                        unit_type: "",
                        unit_status: "",
                        pms_stage: "",
                        is_active: true
                    });
                }
            } catch (error) {

            }
        }
        fetchCurrency()
    }, [params.id])

    const handleChange = async (e) => {
        const { name, value, type } = e.target
        if (type == 'file') {
            const file = new FormData()
            file.append('image', e.target.files[0])
            const res = await clodinaryImage(file)
            const clone = { ...store }
            clone[name] = res.data.data.url
            setTimeout(() => {
                setStore(clone)
            }, 1000);
        } else {
            const clone = { ...store }
            clone[name] = value
            setStore(clone)
        }

    }
    const submitData = async () => {
        if (!params.id) {
            try {
                const res = await postNewPropertyunit(store)
                console.log(res)
                if (res?.statusCode == 200) {
                    toastSuccessMessage("success")
                }
                else {
                    toasterrorMessage("Fai0-l")
                }
            }
            catch (error) {
                console.log(error.massage)
            }
        } else {
            try {
                const pt = await propertyUnitUpdate(params.id, store)
                if (pt?.statusCode == 200) {
                    toastSuccessMessage("success")
                }
                else {
                    toasterrorMessage("Fai0-l")
                }
            } catch (error) {

            }
        }

    }

    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: "top-right",
        });
    };
    const toasterrorMessage = (message) => {
        toast.error(message, {
            position: "top-right",
        });
    };
    return (
        <div className="mt-3">
            <ToastContainer />
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Name</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"}
                                        value={store.name}
                                        name="Name"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Code</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"} 
                                        value={store.code}
                                        name="Code"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Venture </label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" value={store.venture} >
                                        <option>Select</option>
                                        {venture && venture?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Property</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" value={store.property}>
                                        <option>Select</option>
                                        {property && property?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Block</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" value={store.block}>
                                        <option>Select</option>
                                        {block && block?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Floors</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" >
                                        <option>Select</option>
                                        {floor && floor?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1"> No of Bedrooms:</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"} 
                                    value={store.no_of_bedrooms}
                                    name="No_of_bedrooms"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Price</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"} 
                                    value={store.price}
                                    name="Price"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Facing</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"} 
                                    value={store.facing}
                                    name="Facing"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Area</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"} 
                                    value={store.area}
                                    onChange={handleChange}
                                    name="Area"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Corner Plot</label>
                                <div className="w-100">
                                    <CustomInputField type={"boolean"} 
                                    value={store.corner_plot}
                                    name="Corner_Plot"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Sequence</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"} 
                                    value={store.sequence}
                                    name="Sequence"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Unit Type</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"} 
                                    value={store.unit_status}
                                    name="Unit_Type"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Unit Status</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"} 
                                        value={store.unit_status} 
                                        name="unit_State" 
                                        onChange={handleChange}                                   
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">PMS Stage</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"} 
                                    value={store.pms_stage}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">layout Image</label>
                                <div className="">
                                    <input className="rounded-2 form-control" type="file" name="layout_image" value={store.layout_image} onChange={handleChange} />
                                    {store.layout_image && <img src={`${baseUrlImage}${store.layout_image}`} style={{ height: "50px", width: "50px" }} />}
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <button className="btn m-0 btn-primary" type="button" onClick={submitData}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}