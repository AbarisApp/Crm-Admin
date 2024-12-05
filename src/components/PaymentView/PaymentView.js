import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardCheck from "./CardCheck";
import { PaymentViewList } from "./PaymentReportList";
import PaymentFilter from "./PaymentFilter";
import { BsShadows } from "react-icons/bs";

export default function PaymentView() {
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className="m-2">
            <PaymentFilter show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow}/>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">PaymentView</h4>
                    <div className="d-flex">
                        <div className="bg-white m-1 d-flex p-1 rounded-1">
                            <input className="border-0 bg-none" type="text" placeholder="Globel Search" />
                            <button type="botton" className="fs-5 btn p-0 m-0 text-black btn btn-outline-black"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <button className="btn btn-primary btn-sm" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-arrows-rotate"></i></button>
                    </div>
                </div>
            </div>
            <div className="m-4">

            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Payment ReportS</h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/setreminder" role="button" aria-controls="offcanvasExample">Auto Set Reminder</Link>
                                    <input type="search" className="rounded-1 p-1" placeholder="search"/>
                                    <button onClick={handleShow} className="btn btn-primary btn-sm m-0" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-filter"></i></button>
                                    <button className="btn btn-primary btn-sm m-0" role="button" aria-controls="offcanvasExample"><i class="fa-regular fa-file-lines"></i></button>
                                    <button className="btn btn-primary btn-sm m-0" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-download"></i></button>
                                </div>
                            </div>
                            <div className="d-flex gap-2 w-100 overflow-auto my-2">
                                <div className="col-2">
                                    <CardCheck title={"Receivables"} rate={"57,43,36,924"} subrate={"22,40,945"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"payables"} rate={"57,43,36,524"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"0-45"} rate={"57,43,36,524"} subrate={"1,25,15,033"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"46-90"} rate={"57,43,36,524"} subrate={"1,25,15,033"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"91-180"} rate={"57,43,36,524"} subrate={"1,25,15,033"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={">180"} rate={"57,43,36,524"} subrate={"1,25,15,033"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"Other"} rate={"57,43,36,524"} subrate={"1,25,15,033"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PaymentViewList />
            </div>
        </div>
    )
}