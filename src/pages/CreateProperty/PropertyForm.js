import React, { useEffect, useState } from "react";
import CustomInputField from "../../common/CustomInputField";
import { clodinaryImage, getCreVenture, getPriorityId, postNewProperty, propertyUpdate } from "../../api/login/Login";
import { baseUrlImage } from "../../baseUrl";
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from "react-router-dom";


export default function PropertyForm() {
    const params = useParams
    const [venture, setVenture] = useState(null)
    const [store, setStore] = useState({
        name: "",
        code: "",
        venture: "",
        construction_status: "",
        construction_start_date: "",
        construction_end_date: "",
        layout_image: "",
    })
    const getData = async () => {
        try {
            const res = await getCreVenture(0, 100)
            setVenture(res.data?.venture)
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])

    useEffect(() =>{
        const fetchCurrency = async()=>{
            if(params.id){
            const respepond = await getPriorityId(params.id)
            const currencyData = respepond.data;
            setStore(currencyData);
            }else{
                setStore({
                    name: "",
                    code: "",
                    venture: "",
                    construction_status: "",
                    construction_start_date: "",
                    construction_end_date: "",
                    layout_image: "",
                })
            }
        }

        fetchCurrency()
    }, [params.id])

    const handleChange = async (e) =>{
        const { name, value, type} = e.target
        
        if(type === "file"){
            const file = new FormData()
            file.append('image', e.target.files[0])
            const res = await clodinaryImage(file)
            const clone = { ...store }
            clone[name] = res.data.data.url
            setTimeout(() => {
                setStore(clone)
            }, 1000);
        }else{
            // setStore(prevStore => ({
        //     ...prevStore,
        //     [name]: value
        // }));
        const clone = { ...store }
        clone[name] = value
        setStore(clone)
        }
    }
    const submitData = async () => {
        // try{
        //     const res = await postNewProperty(store)
        //     console.log(res)
        //     if(res.statusCode == 200){
        //             toastSuccessMessage("success")
        //     }else{
        //             toastErrorMessage("error")
        //     }
        // }catch (error){
        //     console.log(error.massage)
        // }
        if(!params.id){
            try{
                const res = await postNewProperty(store)
                console.log(res)
                if(res.statusCode == 200){
                    toastSuccessMessage("success")
                }else{
                    toastErrorMessage("error")
                }
                }catch (error){
                    console.log(error.massage)
                }
        }else{
            try{
                const pt = await propertyUpdate(params.id, store)
                if(pt.statusCode == 200){
                toastSuccessMessage("success")
            }else{
                toastErrorMessage("error")
            }
            }catch(error){
                console.error("error")
            }
        }
    }

    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: "top-right",
  });
};

const toastErrorMessage = (message) => {
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
                                        value={store?.name}
                                        onChange={handleChange}
                                        name="name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">code</label>
                                <div className="w-100">
                                    <CustomInputField type={"number"}
                                        value={store?.code}
                                        onChange={handleChange}
                                        name="code"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Venture</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" name="city">
                                        <option>Select venture</option>
                                        {venture && venture?.map((item, i) =>
                                            <option kay={i} value={item._id}>{item.name}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1"> Construction Status</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light" name="city">
                                        <option > select</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Construction Start Date</label>
                                <div className="w-100">
                                    <CustomInputField type={"Date"} 
                                        value={store?.construction_start_date}
                                        name="construction_start_date"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Construction End Date</label>
                                <div className="w-100">
                                    <CustomInputField type={"Date"} 
                                        value={store?.construction_end_date}
                                        name="construction_end_date"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Document</label>
                                <div className="">
                                    <input className="form-control rounded-2" type="file" name="layout_image" onChange={handleChange}/>
                                    {store.layout_image && <img src={`${baseUrlImage}${store.layout_image}`} style={{ height: "50px", width: "50px" }} />}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <button className="btn btn-primary m-0" type="button" onClick={submitData}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}