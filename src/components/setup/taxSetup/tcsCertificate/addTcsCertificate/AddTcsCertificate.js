import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { Pagination } from "react-bootstrap";
import { Popconfirm } from "antd";
import { FaPlus } from "react-icons/fa6";
import AddTcsCertificateForm from "./AddTcsCertificateForm";
import { useState } from "react";
import { AddTcs_certificate } from "../../../../../api/login/Login";

function AddTcsCertificate() {
  const [initialData, setInitialData] = useState({
    name: '',
    date: '',
    form_no: '',
    cerficate_ref_no: '',
    voucher_type: '',
    account: '',
    tcs_percent: '',
    tcs_limilt: '',
    start_date: '',
    last_date: '',
    upload_document: ''
  })
  const changeHandle = (e) => {
    const clone = { ...initialData }
    const value = e.target.value
    const name = e.target.name
    clone[name] = value
    setInitialData(clone)
  }

  const submitData = async () => {
    // console.log(initialData);
    try {
      const res = await AddTcs_certificate(initialData)
      console.log(res);

    } catch (error) {

    }

  }
  return (
    <>
      <div>
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">
                      <FaPlus className="me-1" />
                      Add TCS Certificate
                    </h4>
                    <div
                      className="d-flex"
                      style={{ alignItems: "center", justifyContent: "end" }}
                    >
                      <Link
                        className="btn btn-primary btn-sm"
                        to="/tcsmaster"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        <GoArrowLeft className="fs-4 mb-1" /> Back
                      </Link>
                    </div>
                  </div>
                  <div>
                    <AddTcsCertificateForm initialData={initialData} changeHandle={changeHandle} submitData={submitData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="text-center" />
    </>
  );
}
export default AddTcsCertificate;
