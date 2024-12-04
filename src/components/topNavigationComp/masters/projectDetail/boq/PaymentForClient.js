
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Space, Tabs } from 'antd';
import AllRequest from './request/AllRequest';
import PaymentStatus from './request/TopHead';
import AddPaymentRequest from './AddPaymentRequest';
function PaymentForClient({ totalCount, page, count, onChangeVal, confirm, cancel }) {
    const data = [
        { name: 'All Requests', compo: <AllRequest /> },
        { name: 'Pending Requests', compo: <AllRequest /> },
        { name: 'Approved Requests', compo: <AllRequest /> },
        { name: 'Payment Entries', compo: <AllRequest /> },
    ]
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <PaymentStatus />
                        <AddPaymentRequest
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <div style={{ width: "650px", margin: "10px 0", display: "flex" }}>
                            <h6 style={{ display: "flex", alignItems: "center" }}>Choose Receipt Type : </h6>
                            <select className="form-select" aria-label="Default select example" style={{ width: "300px" }}>
                                <option value={1}>All Receipt</option>
                                <option value={2}>Cash Receipt</option>
                                <option value={3}>Bank Receipt</option>
                            </select>
                            <div className="dropdown">
                                <a
                                    className="btn btn-secondary dropdown-toggle"
                                    href="#"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Create Payment Request
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li onClick={() => setModalShow(true)}>
                                        <a className="dropdown-item" href="#">
                                            PO Advance
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Against Invoice
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Non Order
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <Space
                                        style={{
                                            marginBottom: 24,
                                        }}
                                    >

                                    </Space>
                                    <Tabs
                                        tabPosition={'left'}
                                        items={data.map((str, i) => {
                                            const id = String(i + 1);
                                            return {
                                                label: `${str.name}`,
                                                key: id,
                                                children: str.compo,
                                            };
                                        })}
                                    />

                                </div>
                            </div>


                        </div>
                    </div>
                </div >
            </div>
            <ToastContainer className="text-center" />
        </>
    )
}

export default PaymentForClient
