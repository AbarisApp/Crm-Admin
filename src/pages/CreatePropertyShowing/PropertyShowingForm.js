import React, { useEffect, useState } from "react";
import CustomInputField from "../../common/CustomInputField";
import { getCreblock, getCreFloor, getCreOpportunityUnit, getCreProperty, getCreUnit, getCreVenture, getProperyShowingId, postNewpropertyShowing, propertyShowingUpdate, } from "../../api/login/Login";
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from "react-router-dom";

export default function PropertyShowingForm(){
    const [venture , setVentre] = useState(null)
    const [property, setProperty] = useState(null)
    const [block, setBlock] = useState(null)
    const [floor, setFloor] = useState(null)
    const [unit, setUnit] = useState(null)
    const params = useParams
    const [opportunity, setOpportunity] = useState(null)
    const [store, setStore]=useState({
    name: "",
    owner: "",
    account_name: "", 
    date: "",
    mobile_no: "",
    opportunity: "", 
    lead_type: "",
    lead_ref: "",
    venture: "",
    property: "",
    block: "",
    floor: "",
    unit: "",
    })

    const storeData = async()=>{
        try{
            const ven = await getCreVenture(0 , 100)
            const pro = await getCreProperty (0, 100)
            const bls = await getCreblock(0,  100)
            const fld = await getCreFloor(0, 100)
            const unt = await getCreUnit(0, 100)
            const punt = await getCreOpportunityUnit (0, 100)
            setVentre(ven.data?.venture) 
            setProperty(pro.data?.property)
            setBlock(bls.data?.block)
            setFloor(fld.data?.floor)
            setUnit(unt.data?.unit)
            setOpportunity(punt.data?.opportunity)
        }catch(error){

        }
    }
    useEffect(()=>{
        storeData()
    })
    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getProperyShowingId(params.id);
                    const currencyData = response.data;
                    setStore(currencyData);
                } else {
                    setStore({
                        name: "",
                        owner: "",
                        account_name: "", 
                        date: "",
                        mobile_no: "",
                        opportunity: "", 
                        lead_type: "",
                        lead_ref: "",
                        venture: "",
                        property: "",
                        block: "",
                        floor: "",
                        unit: "",
                        });
                }
            } catch (error) {

            }
        }
        fetchCurrency()
    }, [params.id])

    const handleChange = (e)=>{
        const {name , value} = e.target
        const clone = {...store}
        clone[name] = value
        setStore(clone)
    }

    const Submit = async()=>{
        // try{
        //     const res = await postNewpropertyShowing(store)
        //     if (res?.statusCode == 200) {
        //         toastSuccessMessage("success")
        //     }
        //     else {
        //             toasterrorMessage("Fai0-l")
        //         }
        // }catch(error){
        //     console.log(error.massage)
        // }
        if(!params.id){
            try{
                    const res = await postNewpropertyShowing(store)
                    if (res?.statusCode == 200) {
                        toastSuccessMessage("success")
                    }
                    else {
                            toasterrorMessage("Fai0-l")
                        }
                }catch(error){
                    console.log(error.massage)
                }
        }else{
            const pt = await propertyShowingUpdate(params.id, store)
            if(pt.statusCode == 200){
                toastSuccessMessage("success")
            }else{
                toasterrorMessage("error")
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
            <form>
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
                                        name="name"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Owner</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" name="owner">
                                            <option>Select</option>
                                            {/* {city && city?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })} */}

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Account Name</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" name=" account_name">
                                            <option>Select</option>
                                            {/* {city && city?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })} */}

                                        </select>
                                    </div>
                                </div>
                            </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Date</label>
                                <div className="w-100">
                                    <CustomInputField type={"date"}
                                        value={store.date}
                                        name="date"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Mobile number</label>
                                <div className="w-100">
                                    <CustomInputField type={"number"} 
                                        value={store.mobile_no}
                                        name="mobile_no" 
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Opportunity</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" name="opportunity">
                                            <option>Select</option>
                                            {opportunity && opportunity?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Lead Type</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" name="lead_type">
                                            <option>Select</option>
                                            {/* {city && city?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })} */}

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Lead Ref</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" name="lead_ref">
                                            <option>Select</option>
                                            {/* {city && city?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })} */}

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Venture</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" name="venture">
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
                                        <select className="py-2 w-100 px-4 border border-light" name="property">
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
                                        <select className="py-2 w-100 px-4 border border-light" name="block">
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
                                    <label className="d-block my-1">Floor</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" name="floor">
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
                                    <label className="d-block my-1">Unit</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" name="unit">
                                            <option>Select</option>
                                            {unit && unit?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 col-12">
                                <button className="btn m-0 btn-primary" type="button" onClick={Submit}>Submit</button>
                            </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}