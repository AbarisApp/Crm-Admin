import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import CustomInputField from '../../../../../common/CustomInputField';
import Select from 'react-select';  // Import react-select
import { postDummyUser } from '../../../../../api/login/Login';

function DummyForm({ selectedItems ,close}) {
    const [formData, setFormData] = useState({
        contestids: [],
        start_prediction: "",
        end_prediction: "",
        no_of_dummy_user: "",
        no_of_participate_each: "",
    });

    const params = useParams();
    const navigate = useNavigate();

    const validate = () => {
        let errors = {};
        if (!formData.contestids || formData.contestids.length === 0) errors.contestids = "Contest ID is required";
        if (!formData.start_prediction) errors.start_prediction = "Start Prediction is required";
        if (!formData.end_prediction) errors.end_prediction = "End Prediction is required";
        if (!formData.no_of_dummy_user) errors.no_of_dummy_user = "Number of Dummy Users is required";
        if (!formData.no_of_participate_each) errors.no_of_participate_each = "Participation count is required";
        return errors;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, { position: "top-right" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            contestids: selectedItems,
            start_prediction: +formData.start_prediction,
            end_prediction: +formData.end_prediction,
            no_of_dummy_user: +formData.no_of_dummy_user,
            no_of_participate_each: +formData.no_of_participate_each,
        };
        console.log(payload);

        try {
            const res = await postDummyUser(payload);
            if (res?.statusCode == "200") {
                toastSuccessMessage("Dummy User Participate Successfully");
                // navigate(`/Dummy-User-Master`);
                setTimeout(() => {
                    close()
                }, 1000);
            }
            else {
                toast.error(`Dummy User Participate Not Added`, { position: "top-right" });
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div style={{ margin: "14px" }}>
            <ToastContainer/>
            <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-xl-6 mb-3">
                                <label htmlFor="start_prediction">Start Prediction</label>
                                <CustomInputField
                                    type="number"
                                    value={formData?.start_prediction}
                                    onChange={handleChange}
                                    id="start_prediction"
                                    name="start_prediction"
                                    placeholder="Start Prediction"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <label htmlFor="end_prediction">End Prediction</label>
                                <CustomInputField
                                    type="number"
                                    value={formData?.end_prediction}
                                    onChange={handleChange}
                                    id="end_prediction"
                                    name="end_prediction"
                                    placeholder="End Prediction"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <label htmlFor="no_of_dummy_user">Number Of Dummy User</label>
                                <CustomInputField
                                    type="number"
                                    value={formData?.no_of_dummy_user}
                                    onChange={handleChange}
                                    id="no_of_dummy_user"
                                    name="no_of_dummy_user"
                                    placeholder="Number of Dummy Users"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <label htmlFor="no_of_participate_each">Number of Participate Each</label>
                                <CustomInputField
                                    type="number"
                                    value={formData?.no_of_participate_each}
                                    onChange={handleChange}
                                    id="no_of_participate_each"
                                    name="no_of_participate_each"
                                    placeholder="Number of Participation per User"
                                />
                            </div>
                            <div className="col-xl-12 mb-3">
                                <button className="btn btn-primary me-1" type="submit">
                                    {params?.id ? "Update" : "Save"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DummyForm;
