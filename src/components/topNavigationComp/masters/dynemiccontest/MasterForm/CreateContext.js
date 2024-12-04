import { Formik, FieldArray } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { getCallConvertStatusById, getMarketTypeByPage, getContestTypeByPage, updateContestById, postContest, getContestById, clodinaryImage } from '../../../../../api/login/Login';
import { baseUrlImage } from '../../../../../baseUrl';
import JoditEditor from 'jodit-react';

function CreateContest() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Contest",
    };

    const [initialValues, setInitialValues] = useState({
        contest_type: "",
        market_type: "",
        reward: 0,
        maxSpots: 0,
        entryFee: 0,
        winnerPercentage: 0,
        isFree: true,
        start_date: "",
        end_date: "",
        rankingRewards: [{ minRank: "", maxRank: "", reward: "" }],
    });

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.contest_type) {
            errors.contest_type = "Contest Type is required";
        }
        if (!values.market_type) {
            errors.market_type = "Market Type is required";
        }
        if (!values.entryFee && !values.isFree) {
            errors.entryFee = "Entry Fee is required for paid contests";
        }
        return errors;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const [image, setImage] = useState()
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                const res = await postContest({ ...values, banner_image: image });
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Contest added successfully");
                    setTimeout(() => {
                        navigate(`/contest`);
                    }, 1000);
                }
            } else {
                const res = await updateContestById(params.id, { ...values, banner_image: image });
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Contest updated successfully");
                    setTimeout(() => {
                        navigate(`/contest`);
                    }, 1000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const [markType, setMarkType] = useState([]);
    const [contectType, setContextType] = useState([]);
    const getDatas = async () => {
        try {
            const res = await getMarketTypeByPage(0, 100);
            const res1 = await getContestTypeByPage(0, 100);
            setMarkType(res.data);
            setContextType(res1.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handleChangeImage = async (e) => {
        const image = new FormData()
        image.append('image', e.target.files[0])
        try {
            const res = await clodinaryImage(image)
            setTimeout(() => {
                setImage(res.data?.data?.url)
            }, 1000);
        } catch (error) {

        }
    }

    useEffect(() => {
        const fetchContestData = async () => {
            if (params?.id) {
                const response = await getContestById(params.id);
                setInitialValues({
                    contest_type: response?.data?.contest_type || "",
                    market_type: response?.data?.market_type || "",
                    reward: response?.data?.reward || 0,
                    maxSpots: response?.data?.maxSpots || 0,
                    entryFee: response?.data?.entryFee || 0,
                    winnerPercentage: response?.data?.winnerPercentage || 0,
                    isFree: response?.data?.isFree || true,
                    start_date: response?.data?.start_date || "",
                    end_date: response?.data?.end_date || "",
                    rankingRewards: response?.data?.rankingRewards || [{ minRank: "", maxRank: "", reward: "" }],
                });
                // setImage('')
            }
        };

        fetchContestData();
        getDatas();
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
                                    {params?.id ? "UPDATE" : "ADD"} Contest
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
                                                <h6>Contest Type</h6>
                                                <select
                                                    className="form-select"
                                                    name="contest_type"
                                                    value={values.contest_type}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                >
                                                    <option value="">Select option</option>
                                                    {contectType.map((item) => (
                                                        <option key={item._id} value={item._id}>{item.title}</option>
                                                    ))}
                                                </select>
                                                {touched.contest_type && errors.contest_type && (
                                                    <div className="text-danger">{errors.contest_type}</div>
                                                )}
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <h6>Market Type</h6>
                                                <select
                                                    className="form-select"
                                                    name="market_type"
                                                    value={values.market_type}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                >
                                                    <option value="">Select option</option>
                                                    {markType.map((item) => (
                                                        <option key={item._id} value={item._id}>{item.name}</option>
                                                    ))}
                                                </select>
                                                {touched.market_type && errors.market_type && (
                                                    <div className="text-danger">{errors.market_type}</div>
                                                )}
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <h6>Entry Fee</h6>
                                                <CustomInputField
                                                    type="number"
                                                    value={values.entryFee}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="entryFee"
                                                />
                                                {touched.entryFee && errors.entryFee && (
                                                    <div className="text-danger">{errors.entryFee}</div>
                                                )}
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <h6>Max Spots</h6>
                                                <CustomInputField
                                                    type="number"
                                                    value={values.maxSpots}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="maxSpots"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <h6>Reward</h6>
                                                <CustomInputField
                                                    type="number"
                                                    value={values.reward}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="reward"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <h6>Winner Percentage</h6>
                                                <CustomInputField
                                                    type="number"
                                                    value={values.winnerPercentage}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="winnerPercentage"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <h6>Is Free</h6>
                                                <select
                                                    className="form-select"
                                                    name="isFree"
                                                    value={values.isFree}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                >
                                                    <option value={true}>Yes</option>
                                                    <option value={false}>No</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <h6>Start Date</h6>
                                                <CustomInputField
                                                    type="date"
                                                    value={values.start_date}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="start_date"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <h6>End Date</h6>
                                                <CustomInputField
                                                    type="date"
                                                    value={values.end_date}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="end_date"
                                                />
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
                                            <div className="col-xl-12 mb-3">
                                            <h6>Description</h6>
                                            <JoditEditor />
                                            </div>
                                            <div className="col-xl-12" style={{ marginTop: "16px" }}>
                                                <button type="submit" className="btn btn-primary">
                                                    {params?.id ? "Update" : "Add"} Contest
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

export default CreateContest;
