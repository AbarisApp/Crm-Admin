import React, { useState, useEffect } from "react";
import CustomInputField from "../../common/CustomInputField";
import { getCreProperty, getPropertyStagePlaneId, postNewpropertyStagePlane, propertystageplaneUpdate } from "../../api/login/Login";
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from "react-router-dom";
import { unstable_batchedUpdates } from "react-dom";

export default function StagePlaneForm() {
    const [property, setProperty] = useState([]);
    const params = useParams
    const [rows, setRows] = useState([
        {
            s_no: "",
            pms_stage: "",
            payment_percentage: "",
        }
    ]);
    const [store, setStore] = useState({
        name: "",
        code: "",
        property: "",
        stage_plans: []
    });

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const prv = await getCreProperty(0, 100);
                setProperty(prv.data?.property || []);
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        };
        fetchProperty();
    }, []);

    useEffect(()=>{
        const fetchCurrency = async()=>{
            if(params.id){
                try{
                    const response = await getPropertyStagePlaneId(params.id)
                    const Addresponse = response?.data
                    setStore(Addresponse)
                }catch(error){
                    console.error("error")
                }
            }else{
                setStore({
                    name: "",
                    code: "",
                    property: "",
                    stage_plans: []
                })
            }
        }
        fetchCurrency()
    }, [])

    const handleChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setStore(prevStore => ({
            ...prevStore,
            [name]: value
        }));

    };

    const handleRowChange = (index, e) => {
        const { name, value } = e.target;
        const updatedRows = [...rows];
        updatedRows[index] = {
            ...updatedRows[index],
            [name]: value
        };
        setRows(updatedRows);

    };

    const addRows = () => {
        setRows(prevRows => [
            ...prevRows,
            {
                s_no: "",
                pms_stage: "",
                payment_percentage: "",
            }
        ]);
    };

    const removeRow = (index) => {
        setRows(prevRows => prevRows.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        if(!params.id){
            try {
                const res = await postNewpropertyStagePlane(store)
                const stagePlans = rows.map(row => ({
                    s_no: row.s_no,
                    pms_stage: row.pms_stage,
                }));
    
               
                setStore(prevStore => ({
                    ...prevStore,
                    stage_plans: stagePlans
                }));
    
                setTimeout(() => {
                    console.log("Submitted Store:", store);
                    if(res?.statusCode == 200){
                        toastSuccessMessage("Form submitted successfully!");
                    }else{
                        toasterrorMessage("Submission failed!");
                    }
                }, 0);
            } catch (error) {
                console.error("Error during submission:", error);
            }
        }else{
            const pt = await propertystageplaneUpdate(params.id, store)
            if(pt?.statusCode == 200){
                toastSuccessMessage("Form submitted successfully!");
            }else{
                toasterrorMessage("Submission failed!");
            }
        }
    };


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
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Name</label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type="text"
                                            value={store.name}
                                            name="name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Code</label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type="number"
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
                                        <select
                                            className="py-2 w-100 px-4 border border-light"
                                            name="property"
                                            onChange={handleChange}
                                            value={store.property}
                                        >
                                            <option value="">Select</option>
                                            {property.map((item) => (
                                                <option key={item._id} value={item._id}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="d-block my-1">Stage Plans</label>
                                    <table className="w-100">
                                        <thead>
                                            <tr>
                                                <th className="text-black">s_no</th>
                                                <th className="text-black">PMS Stage</th>
                                                <th className="text-black" colSpan={2}>Payment Percentage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map((row, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <CustomInputField
                                                            type="number"
                                                            name="s_no"
                                                            value={row.s_no}
                                                            onChange={(e) => handleRowChange(index, e)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <CustomInputField
                                                            type="text"
                                                            name="pms_stage"
                                                            value={row.pms_stage}
                                                            onChange={(e) => handleRowChange(index, e)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <CustomInputField
                                                            type="number"
                                                            name="payment_percentage"
                                                            value={row.payment_percentage}
                                                            onChange={(e) => handleRowChange(index, e)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className={`btn btn-danger ${index == 0 ? "d-none" : "block"}`}
                                                            onClick={() => removeRow(index)}
                                                        >
                                                            <i className="fa-solid fa-circle-minus"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td colSpan={4} className="">
                                                    <button
                                                        type="button"
                                                        className="btn mt-2 m-0 btn-success"
                                                        onClick={addRows}
                                                    >
                                                        <i className="fa-solid fa-circle-plus"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <button className="btn m-0 btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
