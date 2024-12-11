import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardCheck from "../PaymentView/CardCheck";
import { ItemViewList } from "./ItemViewlist";
import PoPreview from "./POpreview";
import Stock from "./Stock";
import ItemFilter from "./ItemFilter";

export default function Itemview() {
    const [data, setData] =useState(
        [
            { "name": "Ageing", "isActive": false },
            { "name": "Batch Expiry", "isActive": false },
            { "name": "Batch Name", "isActive": false },
            { "name": "Brand", "isActive": false },
            { "name": "Category 1", "isActive": false },
            { "name": "Category Old", "isActive": false },
            { "name": "Company", "isActive": false },
            { "name": "Ig 7", "isActive": false },
            { "name": "Ig 9", "isActive": false },
            { "name": "Im 1", "isActive": false },
            { "name": "Im 3", "isActive": false },
            { "name": "Im 4", "isActive": false },
            { "name": "Item Alias", "isActive": false },
            { "name": "Item Group Name", "isActive": false },
            { "name": "Item Group New", "isActive": false },
            { "name": "Item Name", "isActive": false },
            { "name": "Lbd", "isActive": false },
            { "name": "Part No", "isActive": false },
            { "name": "Sub Brand", "isActive": false },
            { "name": "Subcategory", "isActive": false },
            { "name": "Test", "isActive": false },
            { "name": "Vendor", "isActive": false }
          ]
    )
const [show, setShow] = useState(false);
const [stock, setStock] = useState(false);
const [filter, SetFilter] = useState(false);

  const handleClose = () => {setShow(false); setStock(false)}
  const handleStockClose = () => setStock(false);
  const handleFilterClose = () => SetFilter(false);
  const handleShow = () => setShow(true);
  const handleFilterShow = () => SetFilter(true);
  const handleStockShow = () =>
    { setStock(true); setShow(false)}

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
    return (
        <div className="m-2">
            <PoPreview show={show} handleStockShow={handleStockShow} setShow={setShow} handleClose={handleClose} handleShow={handleShow}/>
            <Stock show={stock} handleClose={handleClose}/>
            <ItemFilter show={filter} handleClose={handleFilterClose}/>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Item View</h4>
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
                                <h4 className="heading mb-0">Ageing Report</h4>
                                <div>
                                    <button onClick={handleShow} className="btn btn-primary btn-sm" role="button" aria-controls="offcanvasExample">Po Assist</button>
                                    <input type="search" className="rounded-1 p-1" placeholder="search"/>
                                    <button className="btn btn-primary btn-sm m-0" onClick={handleFilterShow} role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-filter"></i></button>
                                    <button className="btn btn-primary btn-sm m-0" role="button" aria-controls="offcanvasExample"><i class="fa-regular fa-file-lines"></i></button>
                                    <button className="btn btn-primary btn-sm m-0" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-download"></i></button>
                                </div>
                            </div>
                            <div className="d-flex gap-2 w-100 overflow-auto my-2">
                                <div className="col-2">
                                    <CardCheck title={"All"} rate={"3,43,36,924"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"Non Moving"} rate={"57,43,36,524"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"Paid"} rate={"1,23,34,524"} subrate={"4,15,033"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"Under"} rate={"3,43,36,524"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"Over"} rate={"57,43,36,524"} subrate={"1,25,15,033"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"0-30"} rate={"57,43,36,524"} subrate={"1,25,15,033"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"31-60"} rate={"57,43,36,524"} subrate={"1,25,15,033"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"61-120"} rate={"57,43,36,524"} subrate={"1,25,15,033"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"121-180"} rate={"57,43,36,524"} subrate={"1,25,15,033"}/>
                                </div>
                                <div className="col-2">
                                    <CardCheck title={"Over 180"} rate={"57,43,36,524"} subrate={"1,25,15,033"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ItemViewList data={data} setData={setData} chengeStatus={chengeStatus}/>
            </div>
        </div>
    )
}