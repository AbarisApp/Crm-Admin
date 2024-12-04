import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { updateAccGroupById, postAccGroup, getMarketTypeById, getAccGroupByPage, getAccGroupById } from '../../../../../api/login/Login';

function GroupForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Group",
    };

    const [initialValues, setInitialValues] = useState({
        name: '',
        alias: '',
        under: '', // Select field for "Under"
        nature: '', // Select field for "Nature"
        group_behave: false, // Checkbox for "Group Behave like a sub-ledger"
        balance_for_reporting: false, // Checkbox for "Net Debit/Credit Balance for Reporting"
        used_for_calculation: false, // Checkbox for "Used For Calculation"
        parent_id: null, // To store selected parent ID
        is_editable: true
    });

    const params = useParams();
    const navigate = useNavigate();

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            if (!params?.id) {
                const res = await postAccGroup(initialValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Group added successfully");
                    setTimeout(() => {
                        navigate(`/list-group`);
                    }, 1000);
                }
            } else {
                const res = await updateAccGroupById(params.id, initialValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Group updated successfully");
                    setTimeout(() => {
                        navigate(`/list-group`);
                    }, 1000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const [datas, setDatas] = useState(null)
    const fetchMarketTypeData = async () => {

        const response = await getAccGroupByPage(0, 100);
        setDatas(response?.data);

    };
    useEffect(() => {
        fetchMarketTypeData();
    }, []);
    useEffect(() => {
        const fetchMarketTypeData = async () => {
            if (params?.id) {
                const response = await getAccGroupById(params.id);
                if (response?.data) {
                    setInitialValues(response.data);
                }
            }
        };

        fetchMarketTypeData();
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
                                    {params?.id ? "UPDATE" : "ADD"} Group
                                </h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={submitForm}>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <h6>Name</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={initialValues.name}
                                            onChange={(e) => setInitialValues({ ...initialValues, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Alias</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="alias"
                                            value={initialValues.alias}
                                            onChange={(e) => setInitialValues({ ...initialValues, alias: e.target.value })}
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Parent Group</h6>
                                        <select
                                            className="form-select"
                                            name="under"
                                            value={initialValues.parent_id}
                                            onChange={(e) => setInitialValues({ ...initialValues, parent_id: e.target.value })}
                                        >
                                            <option value="">Select Parent</option>
                                            {datas && datas?.map((item)=>{
                                                return(
                                                    <option value={item?._id}>{item?.name}</option>
                                                )
                                            })}
                                           
                                        </select>
                                    </div>


                                    <div className="col-xl-4 mb-3">
                                        <h6>Under</h6>
                                        <select
                                            className="form-select"
                                            name="under"
                                            value={initialValues.under}
                                            onChange={(e) => setInitialValues({ ...initialValues, under: e.target.value })}
                                        >
                                            <option value="">Select Under</option>
                                            <option value="capital">Capital</option>
                                            <option value="revenue">Revenue</option>
                                            <option value="expenses">Expenses</option>
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Nature</h6>
                                        <select
                                            className="form-select"
                                            name="nature"
                                            value={initialValues.nature}
                                            onChange={(e) => setInitialValues({ ...initialValues, nature: e.target.value })}
                                        >
                                            <option value="">Select Nature</option>
                                            <option value="Assets">Assets</option>
                                            <option value="Liabilities">Liabilities</option>
                                            <option value="Income">Income</option>
                                            <option value="Expenses">Expenses</option>
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Group Behave like a sub-ledger</h6>
                                        <select
                                            className="form-select"
                                            name="group_behave"
                                            value={initialValues.group_behave ? "Yes" : "No"}
                                            onChange={(e) => setInitialValues({ ...initialValues, group_behave: e.target.value === "Yes" })}
                                        >
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Net Debit/Credit Balance for Reporting</h6>
                                        <select
                                            className="form-select"
                                            name="balance_for_reporting"
                                            value={initialValues.balance_for_reporting ? "Yes" : "No"}
                                            onChange={(e) => setInitialValues({ ...initialValues, balance_for_reporting: e.target.value === "Yes" })}
                                        >
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Used For Calculation</h6>
                                        <select
                                            className="form-select"
                                            name="used_for_calculation"
                                            value={initialValues.used_for_calculation ? "Yes" : "No"}
                                            onChange={(e) => setInitialValues({ ...initialValues, used_for_calculation: e.target.value === "Yes" })}
                                        >
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
                                    </div>


                                    <div className="col-xl-12 mb-3">
                                        <Link to="#" className="btn btn-danger light ms-1">
                                            Cancel
                                        </Link>
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

export default GroupForm;
