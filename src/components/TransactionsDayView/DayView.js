import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TransactionSDayList } from "./Daylist";
import DownloadDays from "./DownloadDays";

export default function DayView() {
    const [data, setData] = useState(
        [
        { name: "Area", isActive: false },
        { name: "Batch Expiry", isActive: false },
        { name: "Batch Name", isActive: false },
        { name: "Billdate", isActive: false },
        { name: "Billno", isActive: true },
        { name: "Brand", isActive: false },
        { name: "Category 1", isActive: false },
        { name: "Category Old", isActive: true },
        { name: "Cg 1", isActive: false },
        { name: "Cg 2", isActive: false },
        { name: "Cg 3", isActive: false },
        { name: "City", isActive: false },
        { name: "Company", isActive: false },
        { name: "Continent", isActive: false },
        { name: "Customer Group Name", isActive: false },
        { name: "Customer Name", isActive: false },
        { name: "Customer Type", isActive: false },
        { name: "District", isActive: false },
        { name: "Document Type", isActive: false },
        { name: "Ig 7", isActive: false },
        { name: "Ig 9", isActive: false },
        { name: "Im 1", isActive: false },
        { name: "Im 3", isActive: false },
        { name: "Im 4", isActive: false },
        { name: "Item Alias", isActive: false },
        { name: "Item Group Name", isActive: false },
        { name: "Item Group New", isActive: false },
        { name: "Item Name", isActive: false }
      ]
)
const chengeStatus = (status, name) => {
    const maped = data.map((item) => {
        if (item.name == name) {
            return { ...item, isActive: status }
        } else {
            return item
        }
    })
    setData(maped)
}
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    return (
        <div className="m-2">
            <DownloadDays show={show} setShow={setShow} data={data} handleClose={handleClose} handleShow={handleShow}/>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Days View</h4>
                    <div className="d-flex gap-1">
                        <div className="bg-white m-1 d-flex p-1 rounded-1">
                            <input className="border-0 bg-none" type="text" placeholder="Globel Search" />
                            <button type="botton" className="fs-5 btn p-0 m-0 text-black btn btn-outline-black"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <div className="bg-white m-1 d-fle p-1 rounded-1">
                            <input className="border-0 bg-none" type="date" placeholder="" />
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
                            <Link className="btn btn-primary btn-sm"  role="button" aria-controls="offcanvasExample">Tansactions</Link>
                                <div>
                                    <button className="btn btn-primary btn-sm m-0" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-filter"></i></button>
                                    <button className="btn btn-primary btn-sm m-0" role="button" aria-controls="offcanvasExample"><i class="fa-regular fa-file-lines"></i></button>
                                    <button className="btn btn-primary btn-sm m-0" onClick={setShow} role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-download"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TransactionSDayList setData={setData} data={data} chengeStatus={chengeStatus}/>
            </div>
        </div>
    )
}