import { Formik, FieldArray } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { getPrizeDistributionById, postPrizeDistribution, updatePrizeDistributionById } from '../../../../../api/login/Login';

function PriceDistribution() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Create Price Distribution",
    };

    const [initialValues, setInitialValues] = useState({
        title: "",
        rankingRewards: [{ minRank: "", maxRank: "", reward: "" }],
    });

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.title) {
            errors.title = "Title is required";
        }
        return errors;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                const res = await postPrizeDistribution(values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Price Distribution added successfully");
                    setTimeout(() => {
                        navigate(`/list-prize-distribution`);
                    }, 1000);
                }
            } else {
                const res = await updatePrizeDistributionById(params.id, values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Price Distribution updated successfully");
                    setTimeout(() => {
                        navigate(`/list-prize-distribution`);
                    }, 1000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (params?.id) {
                const response = await getPrizeDistributionById(params.id);
                setInitialValues({
                    title: response?.data?.title || "",
                    rankingRewards: response?.data?.rankingRewards || [{ minRank: "", maxRank: "", reward: "" }],
                });
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
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Price Distribution
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {({ values, handleChange, handleSubmit, errors, touched, handleBlur }) => (
                                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-xl-4 mb-3">
                                                <h6>Title</h6>
                                                <CustomInputField
                                                    type="text"
                                                    value={values.title}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="title"
                                                />
                                                {touched.title && errors.title && (
                                                    <div className="text-danger">{errors.title}</div>
                                                )}
                                            </div>
                                            <div className="col-xl-12 mb-3">
                                                <h6>Ranking Rewards</h6>
                                                <FieldArray name="rankingRewards">
                                                    {({ insert, remove, push }) => (
                                                        <>
                                                            {values.rankingRewards.map((reward, index) => (
                                                                <div key={index} className="row mb-3">
                                                                    <div className="col-xl-3">
                                                                        <CustomInputField
                                                                            type="number"
                                                                            value={reward.minRank}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            name={`rankingRewards.${index}.minRank`}
                                                                            placeholder="Min Rank"
                                                                        />
                                                                    </div>
                                                                    <div className="col-xl-3">
                                                                        <CustomInputField
                                                                            type="number"
                                                                            value={reward.maxRank}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            name={`rankingRewards.${index}.maxRank`}
                                                                            placeholder="Max Rank"
                                                                        />
                                                                    </div>
                                                                    <div className="col-xl-3">
                                                                        <CustomInputField
                                                                            type="number"
                                                                            value={reward.reward}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            name={`rankingRewards.${index}.reward`}
                                                                            placeholder="Reward"
                                                                        />
                                                                    </div>
                                                                    <div className="col-xl-3">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-danger"
                                                                            onClick={() => remove(index)}
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={() => push({ minRank: "", maxRank: "", reward: "" })}
                                                            >
                                                                Add More
                                                            </button>
                                                        </>
                                                    )}
                                                </FieldArray>
                                            </div>
                                            <div className="col-xl-12" style={{ marginTop: "16px" }}>
                                                <button type="submit" className="btn btn-primary">
                                                    {params?.id ? "Update" : "Add"} Price Distribution
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PriceDistribution;