import { useState } from "react";
import BankPaymentModal from "./bankPaymentModal"



const BankPaymentForm = ({ heading }) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalHeading, setModalHeading] = useState(heading);
    console.log(modalHeading);


    const modleOpenDynemic = (head) => {
        setModalHeading(head);  // Update modal heading dynamically
        setModalShow(true);
    }

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">{heading}</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Voucher </label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Voucher Name " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Account : </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select Account</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <button type="button" className="btn btn-primary" onClick={() => modleOpenDynemic(heading)}> Import</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BankPaymentModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalHeading={modalHeading}

            />
        </>
    )
}

export default BankPaymentForm