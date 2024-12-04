// import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Pagination, Popconfirm } from "antd";
// import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdUpload } from "react-icons/md";
// import { Button } from "react-bootstrap";
// import { MdUpload } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import { RiPencilFill } from "react-icons/ri";
import Print from "../../../../../common/print/Print";
import EditBankReceiptForm from "./EditBankReceiptForm";

function EditBankReceipt() {
  const [show, setShow] = useState(false);
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
                      <RiPencilFill className="me-1" />
                      Edit Bank Receipt
                    </h4>
                    <div
                      className="d-flex"
                      style={{ alignItems: "center", justifyContent: "end" }}
                    >
                      <Link
                        className="btn btn-primary btn-sm"
                        to="bill-to-bill"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        Bill To Bill
                      </Link>

                      <Link
                        className="btn btn-primary btn-sm"
                        to="userLog"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        Log
                      </Link>

                      <Link
                        className="btn btn-primary btn-sm"
                        to="/kng-receiptregister"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        <GoArrowLeft className="fs-4 mb-1" /> Back
                      </Link>

                      <Print />

                      {/* <Button
                        className="btn btn-primary btn-sm bg-primary"
                        type="button"
                        role="button"
                        aria-controls="offcanvasExample"
                        onClick={() => setShow(true)}
                      >
                        <FaFileAlt className="mb-1 me-1" />
                        Batch Payments
                      </Button> */}
                    </div>
                  </div>
                  <div>
                    <EditBankReceiptForm />
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

export default EditBankReceipt;
