import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../common/CustomInputField";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { getAcc_email_setup, UpdateAcc_email_setup } from "../../../api/login/Login";

function MailSeting() {
    const navigate = useNavigate();

    const breadCrumbsTitle = {
        id: "1",
        title_1: "Mail Settings",
        title_2: 'Email Setup',
        path_2: ``
    };

    const [emailEngine, setEmailEngine] = useState("sendEmail");
    const [initialValues, setInitialValues] = useState({
        email: "",
        password: "",
        port_no: '',
        service: '',
        host: ''
    });
    const params = useParams();

    const changeHandle = (e) => {
        const clone = { ...initialValues }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialValues(clone)
    }



    const toastSuccessMessage = () => {
        toast.success(`Email Setup Update Successfully`, {
            position: "top-center",
        });
    };

    const GetEmailSetup = async () => {
        try {
            const res = await getAcc_email_setup()
            // console.log(res);
            setInitialValues(res?.data)

        } catch (error) {

        }
    }


    const updateEmailSetup = async () => {
        try {
            const res = await UpdateAcc_email_setup(initialValues)
            // console.log(res);
            if (res?.error == false) {
                toastSuccessMessage()
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        GetEmailSetup()
    }, [])



    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Email Setup</h4>
                            </div>

                            <div className="row">
                                <div className="col-xl-6 mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" value={initialValues?.email} placeholder="Enter Email" onChange={changeHandle} />
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <label for="exampleFormControlInput1" className="form-label"  >Password</label>
                                    <input type="password" className="form-control" name="password" value={initialValues?.password} placeholder="Enter Password" onChange={changeHandle} />
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Port No</label>
                                    <input type="number" className="form-control" name="port_no" value={initialValues?.port_no} placeholder="Enter Port No" onChange={changeHandle} />
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Sevice</label>
                                    <input type="text" className="form-control" name="service" value={initialValues?.service} placeholder="Enter Service" onChange={changeHandle} />
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Host</label>
                                    <input type="text" className="form-control" name="host" value={initialValues?.host} placeholder="Enter Host" onChange={changeHandle} />
                                </div>

                                <div className="col-x-12-4 mb-3">
                                    <button className="btn btn-primary" onClick={updateEmailSetup}>Update</button>
                                </div>

                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MailSeting;
