
import { FaPlus } from "react-icons/fa";
import GroupSummaryModal from "../groupSummaryModal/GroupSummaryModal";
import { useState } from "react";
const GroupSummaryFilter = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Filter</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">From Date </label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter Transfer to Warehouse " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">To Date </label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter Transfer to Warehouse " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Branch Name </label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter Branch Name  " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Group Name </label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Group Name" />
                                            <FaPlus onClick={() => setModalShow(true)} />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <button type="button" className="btn btn-primary">Search</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GroupSummaryModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default GroupSummaryFilter