import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import CustomInputField from "../../common/CustomInputField";
import { getCreProperty, getPropertyStageId, postNewpropertyStage} from "../../api/login/Login";
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from "react-router-dom";
import PropertyStagePlane from "../PropartyStageplan";

export default function PropertyStage(){
    const [property, setProperty] = useState (null)
    const params = useParams
    const [store, SetStore] = useState({
        name:"",
        code:"",
        property:"",
        payment_percentage:"",
    }) 
    
    const storeData = async()=>{
        try{
            const res = await getCreProperty (0 , 100)
            setProperty(res.data?.property)
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
                    const response = await getPropertyStageId(params.id);
                    const currencyData = response.data;
                    SetStore(currencyData);
                } else {
                    SetStore({
                        name:"",
                        code:"",
                        property:"",
                        payment_percentage:"",
                        is_active: true
                    });
                }
            } catch (error) {

            }
        }
        fetchCurrency()
    }, [params.id])

    const handleChange = (e)=>{
        const {name ,  value} = e.target
        const clone = {...store}
        clone[name] = value
        SetStore(clone)
    }
    const submit = async()=>{
        // try{
        //     const res = await postNewpropertyStage(store)
        //     if (res?.statusCode == 200) {
        //         toastSuccessMessage("success")
        //     }
        //     else {
        //             toasterrorMessage("Fai0-l")
        //         }
        // }catch(error){
        //     console.log(error.massage)
        // }
        if(!params){
            try{
                const res = await postNewpropertyStage(store)
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
            const pt = await PropertyStagePlane(params.id, store)
            if(pt?.statusCode == 200){
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
    return(
        <div className="mt-3">
            <ToastContainer />
            <form>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="my-1 d-block">Name</label>
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
                                <label className="my-1 d-block">Code</label>
                                <div className="w-100">
                                    <CustomInputField type={"number"} 
                                    value={store.code}
                                    name="code"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Property</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" name="city">
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
                                <label className="my-1 d-block">Payment Percentage </label>
                                <div className="w-100">
                                    <CustomInputField type={"number"} 
                                        value={store.payment_percentage}
                                        name="payment_percentage"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <button className="btn m-0 btn-primary" type="button" onClick={submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}