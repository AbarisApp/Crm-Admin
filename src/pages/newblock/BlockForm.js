import React, { useEffect, useState } from "react";
import CustomInputField from "../../common/CustomInputField";
import { CiSearch } from "react-icons/ci";
import { blockUpdate, clodinaryImage, getBlockId, getCreVenture, postNewBlock } from "../../api/login/Login";
import { baseUrlImage } from "../../baseUrl";
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from "react-router-dom";



export default function BlockForm(){
    const [venture, setVenture]= useState(null);
    const params = useParams
    const [store, setStore] = useState({
        name: "",
        code: "",
        venture: "",
        property: "",
        rate: "",
        document: "",
        sequence: "",
    })

    const getData = async ()=>{
        try{
            const res = await getCreVenture(0 ,100)
            // const blc = await postNewBlock (0, 100)
            setVenture(res.data?.venture)
        }catch(error){

        }

    }

    useEffect(()=>{
        getData()
    }, [])

    useEffect(()=>{
        const fetchCurrency = async()=>{
            try{
                if(params.id){
                    const response = await getBlockId(params.id)
                const currencyData = response.data;
                setStore(currencyData);
                }else{
                    setStore({
                        name: "",
                        code: "",
                        venture: "",
                        property: "",
                        rate: "",
                        document: "",
                        sequence: "",
                    })
                }
            }catch(error){
                console.error("error")
            }
        }
        fetchCurrency()
    }, [params.id])
    const handleChange = async (e) =>{
        const {name, value, type} = e.target
        if(type == "file"){
            const file = new FormData()
            file.append('image', e.target.files[0])
            const res = await clodinaryImage(file)
            const clone = {...store}
            clone[name] = res.data.data.url
            setTimeout(()=>{
                setStore(clone)
            }, 1000)
        }else{
            const clone = {...store}
            clone[name] = value
            setStore(clone)
        }
        
    }
    const Submit = async () => {
        // try {
        //     const res = await postNewBlock(store)
        //     console.log(res)
        //     if (res?.statusCode == 200) {
        //         toastSuccessMessage("success")
        //     }
        //     else {
        //         toasterrorMessage("Fail")
        //     }
        // }
        // catch (error) {
        //     console.log(error.massage)
        // }
        if(!params){
            try {
                const res = await postNewBlock(store)
                if (res?.statusCode == 200) {
                    toastSuccessMessage("success")
                }
                else {
                    toasterrorMessage("Fail")
                }
            }
            catch (error) {
                console.log(error.massage)
            }
        }else{
            try {
                const pt = await blockUpdate(params.id, store)
                if (pt?.statusCode == 200) {
                    toastSuccessMessage("success")
                }
                else {
                    toasterrorMessage("Fail")
                }
            }
            catch (error) {
                console.log(error.massage)
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
                            <div className="col-12">
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
                        </div>
                        <div className="col-6">
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="d-block my-1">Code</label>
                                    <div className="w-100">
                                        <CustomInputField type={"number"} 
                                            value={store.code}
                                            name="code"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Venture</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light"  name="city">
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
                                        <select className="py-2 w-100 px-4 border border-light"  name="city">
                                            <option>Select</option>
                                            {/* {user && user?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })} */}

                                        </select>
                                    </div>
                                </div>
                            </div>
                        <div className="col-6">
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="d-block my-1">Rate</label>
                                    <div className="w-100">
                                        <CustomInputField type={"number"} 
                                            value={store.rate}
                                            name="rate" 
                                            onChange={handleChange}                                       
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="d-block my-1">Sequence</label>
                                    <div className="w-100">
                                        <CustomInputField type={"text"}
                                            value={store.sequence}
                                            name="sequence"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Document</label>
                                <div className="">
                                    <input className="form-control rounded-2" type="file" name="document" onChange={handleChange}/>
                                    {store.document && <img src={`${baseUrlImage}${store.document}`} style={{ height: "50px", width: "50px" }} />}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <button className="btn btn-primary m-0" type="button" onClick={Submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}