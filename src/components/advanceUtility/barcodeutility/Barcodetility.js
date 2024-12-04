import React from 'react'
import { Button } from 'react-bootstrap'

function Barcodetility() {
    return (
        <section>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Barcode</h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row align-item-center">
                                        <div className="form-group col-xl-6 mt-2">
                                            <label htmlFor="fromDate">From</label>
                                            <input

                                                type="date"
                                                className="form-control"
                                                placeholder='From Date'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-xl-6 mt-2">
                                            <label htmlFor="fromDate">To</label>
                                            <input

                                                type="date"
                                                className="form-control"
                                                placeholder='To'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-xl-4 mt-2">
                                            <select className="form-select">
                                                <option>
                                                    Item Selection :
                                                </option>
                                                <option>
                                                    Purchase Bill
                                                </option>
                                                <option>
                                                    Stock
                                                </option>

                                            </select>
                                        </div>
                                        <div className="form-group col-xl-4 mt-2">
                                            <select className="form-select">
                                                <option>
                                                    Label Size
                                                </option>
                                                <option>
                                                    1001
                                                </option>
                                                <option>
                                                    3003
                                                </option>
                                                <option>
                                                    Acid Slury
                                                </option>
                                            </select>
                                        </div>
                                        <div className="form-group col-xl-4 mt-2">
                                            <select className="form-select">
                                                <option>
                                                    Blank Label of Number
                                                </option>

                                            </select>
                                        </div>


                                        <div className="form-group col-xl-6 mt-2">
                                            <div className='d-flex gap-3'>
                                                <label htmlFor="stateRate">State Rate</label>
                                                <input
                                                    type="checkbox"
                                                    id="stateRate"
                                                    className="custom-checkbox"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group col-xl-6 mt-2">
                                            <div className='d-flex gap-3'>
                                                <label htmlFor="barcodeSerial">Get Barcode Sr.No. Wise</label>
                                                <input
                                                    type="checkbox"
                                                    id="barcodeSerial"
                                                    className="custom-checkbox"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group col-xl-12 mt-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span>Product</span>
                                                <Button className='btn btn-outline-primary btn-sm'>All</Button>
                                            </div>
                                        </div>
                                        <div className="form-group col-xl-12 mt-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span>Product Group</span>
                                                <Button className='btn btn-outline-primary btn-sm'>All</Button>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 mt-6">

                                            <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                Print
                                            </button>
                                            <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                Cancel
                                            </button>

                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Barcodetility