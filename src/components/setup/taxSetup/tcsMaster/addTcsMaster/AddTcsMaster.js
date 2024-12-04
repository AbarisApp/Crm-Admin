


import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { Pagination } from "react-bootstrap";
import { Popconfirm } from "antd";
import { FaPlus } from "react-icons/fa6";
import AddTcsMasterForm from "./AddTcsMasterForm";

function AddTcsMaster() {
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
                      Add TCS Master
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
                    <AddTcsMasterForm />
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
export default AddTcsMaster;
