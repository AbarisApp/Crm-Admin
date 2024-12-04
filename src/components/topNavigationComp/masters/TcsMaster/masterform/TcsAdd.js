import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { getAccTcsMasterById, postAccTcsMaster, updateAccTcsMasterById } from '../../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';

function TcsAdd() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "TCS Master",
    };

    const [formValues, setFormValues] = useState({
        type_name: "",
        tcs_limit: "",
        tcs_percent: "",
    });

    const params = useParams();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (params?.id) {
                const res = await updateAccTcsMasterById(params.id, formValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Updated successfully");
                    navigate(`/TCS-Master`);
                }
            } else {
                const res = await postAccTcsMaster(formValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Added successfully");
                    navigate(`/TCS-Master`);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, { position: "top-right" });
    };


    
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (params?.id) {
                    const response = await getAccTcsMasterById(params.id);
                    setFormValues(response?.data);
                } else {
                    // blankBtn();
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [params?.id]);
    return (
        <>
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">{params?.id ? "UPDATE" : "ADD"} TCS Master</h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formValues.type_name}
                                            onChange={(e) => setFormValues({ ...formValues, type_name: e.target.value })}
                                            placeholder="Type Name"
                                            required
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={formValues.tcs_limit}
                                            onChange={(e) => setFormValues({ ...formValues, tcs_limit: e.target.value })}
                                            placeholder="TCS Limit"
                                            required
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={formValues.tcs_percent}
                                            onChange={(e) => setFormValues({ ...formValues, tcs_percent: e.target.value })}
                                            placeholder="TCS %"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-2 mb-3">
                                        <button className="btn btn-primary me-1" type="submit">
                                            {params?.id ? "Update" : "Add"}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TcsAdd;
