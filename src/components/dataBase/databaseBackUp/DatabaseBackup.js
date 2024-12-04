import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import CustomInputField from "../../../common/CustomInputField";
import JoditEditor from "jodit-react";
import { Pagination } from "antd";

function DataBaseBackup() {
    const breadCrumbsTitle = {
        title_1: "Data base",
        title_1: "Data Base Backup",
    }
    const navigate = useNavigate();
    const [emailEngine, setEmailEngine] = useState("sendEmail");
    const [initialValues, setInitialValues] = useState({
        api: "",
        id: "",
    });
    const params = useParams();

    const validate = (values) => {
        let errors = {};
        if (!values.smtpPassword) {
            errors.smtpPassword = "SMTP Password is required";
        }
        if (!values.smtpServer) {
            errors.smtpServer = "SMTP Server is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} New API Successfully.`, {
            position: "top-center",
        });
    };

    const currencyIdGet = async () => {
        try {
            // Placeholder for API call to get currency IDs or other data
            // const data = await getCurrency();
            // setCombo(data?.data);
        } catch (error) {
            alert(error.message);
        }
    };

    const submitForm = async (values) => {
        console.log(values);

        try {
            if (!params?.id) {
                try {
                    /* const res = await ApiTransactionAdd(values);
                       if (res?.statusCode === "200") {
                         toastSuccessMessage();
                         setTimeout(() => {
                           navigate('/api-master');
                         }, 4000);
                       } */
                } catch (error) {
                    console.error("Add Error:", error);
                }
            } else {
                try {
                    // const res = await apiMasterUpdate(params.id, values);
                    // if (res?.statusCode === "200") {
                    //   toastSuccessMessage();
                    // }
                } catch (error) {
                    console.error("Update Error:", error);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        currencyIdGet();
    }, []);

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    // const response = await getApiMasterById(params.id);
                    // setInitialValues(response.data);
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submitForm}
                enableReinitialize
                className="tbl-captionn"
            >
                {(formik) => {
                    const {
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty,
                    } = formik;
                    return (
                        <section>
                            <div className="row m-4">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive active-projects style-1">
                                                <div className="tbl-caption tbl-caption-2">
                                                    <h4 className="heading mb-0">Data Basebackup</h4>
                                                </div>
                                                <form className="tbl-captionn" onSubmit={handleSubmit}>

                                                    <div className="col-xl-6 mb-3">
                                                        <div className="d-flex align-items-center">
                                                            <input
                                                                type="checkbox"
                                                                id="gzip"
                                                                style={{ transform: 'scale(2)', marginRight: '10px' }}
                                                            />
                                                            <label htmlFor="gzip">
                                                                <small> Compress database backup file using Gzip</small>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <div className="d-flex align-items-center">
                                                            <input
                                                                type="checkbox"
                                                                id="Job"
                                                                checked={true}
                                                                style={{ transform: 'scale(2)', marginRight: '10px', borderRadius: "0" }}
                                                            />
                                                            <label htmlFor="Job">
                                                                <small> Automatically rebuild sitemap using Cron Job
                                                                </small>
                                                            </label>
                                                        </div>
                                                    </div>


                                                    <div className="col-xl-6 mb-3">
                                                        <label className="m-2">
                                                            <b>Custom Email</b>
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            onChange={handleChange}
                                                            value={emailEngine}
                                                            name="emailEngine"
                                                            disabled={true}
                                                        >
                                                            <option disabled>Select Your Option</option>
                                                            <option value="sendEmail">Backup Daily</option>
                                                            <option value="sendEmail">Backup Weekly</option>
                                                            <option value="sendEmail">Backup Monthly</option>
                                                        </select>
                                                    </div>


                                                    <div>
                                                        <button class="btn btn-primary btn-sm">
                                                            <i class="fas fa-save"></i> Save Setting
                                                        </button>
                                                        <button class="btn btn-danger btn-sm">
                                                            <i class="fas fa-file-archive"></i> Backup Now
                                                        </button>
                                                        <button class="btn btn-warning btn-sm">
                                                            <i class="fas fa-download"></i> Backup & Download
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-4">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive active-projects style-1">
                                                <div className="tbl-caption">
                                                    <h4 className="heading mb-0"><b>DB Backup List
                                                    </b></h4>
                                                    <div>
                                                        {/* <ExportPdf /> */}
                                                        {/* {curdmtexcelTtxn ? (<CSVLink className="btn btn-warning" data={curdmtexcelTtxn} >Export Excel <CiSaveDown1 className='fs-4 fw-bold text-white' />
                                        </CSVLink>) : ""} */}
                                                    </div>
                                                </div>
                                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                                    <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                                        <thead>

                                                            <tr role='row'>
                                                                {/*  <th>
                                                                    <p className="m-0"><small style={{ fontSize: "0.8em" }}>Select All</small></p>
                                                                    <div className="form-check">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            id="selectAll"
                                                                            checked={"selectAll"}
                                                                        // onChange={handleSelectAll}
                                                                        />
                                                                    </div></th> */}
                                                                <th> Filename	</th>
                                                                <th>Backup Date			</th>
                                                                <th >Download			</th>
                                                                <th >Delete</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {/*  {apesData?.map((template, index) => {
                                                                const isChecked = selectedUsers.some(user => user?._id === template?._id);
                                                                return (
                                                                    <tr key={template._id}>
                                                                        <td>
                                                                            <div className="form-check">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    checked={isChecked}
                                                                                    onChange={(e) => handleCheckboxChange(e, template)}
                                                                                />
                                                                            </div>
                                                                        </td>
                                                                        <td>{template.phoneNumber}</td>
                                                                        <td>{template.createdAt}</td>

                                                                        <td className="text-start">
                                                                            <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                                                                            <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-trash"></i></button>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })} */}

                                                            {/* <tr>
                                                                <td>
                                                                     <div className="form-check">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            checked={""}
                                                                        />
                                                                    </div> 
                                                                </td>
                                                                <td>
                                                                    Saudi Arabia
                                                                </td>
                                                                <td>
                                                                    Tourist Visa 14 Days
                                                                </td>
                                                                <td>
                                                                    <span className='badge badge-primary text-light border-0'>Active</span>
                                                                </td>
                                                                <td>
                                                                    26 Jul 2024 / 2:28 PM
                                                                </td>
                                                                <td>
                                                                    30 Jul 2024 / 12:19 PM
                                                                </td>
                                                                <td>
                                                                    <button className='btn btn-primary px-2 py-1 '><i class="fa-solid fa-pen"></i></button>
                                                                </td>
                                                            </tr> */}

                                                        </tbody>
                                                    </table>

                                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                                        Total {""} entries
                                                    </div>
                                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                                        <Pagination
                                                        /* showSizeChanger
                                                        onShowSizeChange={''} */

                                                        // defaultCurrent={1}
                                                        // onChange={onChangeVal}
                                                        // total={aepsData?.totalCount}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </section>
                    );
                }}
            </Formik>
            <ToastContainer />
        </>
    )
}

export default DataBaseBackup
