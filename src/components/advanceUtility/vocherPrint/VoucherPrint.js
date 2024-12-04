import React from 'react'
import { Button } from 'react-bootstrap'

function VoucherPrint() {
    return (
        <>
            <section>
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0">Voucher Print</h4>
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

                                            <div className="form-group col-xl-6 mt-2">
                                                <select className="form-select">
                                                    <option>
                                                        Vou. Type
                                                    </option>
                                                    <option>
                                                        Yes
                                                    </option>
                                                    <option>
                                                        No
                                                    </option>

                                                </select>
                                            </div>
                                            <div className="form-group col-xl-6 mt-2">
                                                <select className="form-select">
                                                    <option>
                                                        Book  Code
                                                    </option>
                                                    <option>
                                                        Payment Bank
                                                    </option>
                                                    <option>
                                                        Bank Reciept
                                                    </option>

                                                </select>
                                            </div>
                                            <div className="form-group col-xl-6 mt-2">
                                                <select className="form-select">
                                                    <option>
                                                        Delete Source
                                                    </option>
                                                    <option>
                                                        Yes
                                                    </option>
                                                    <option>
                                                        No
                                                    </option>

                                                </select>
                                            </div>
                                                <div className="form-group col-xl-12 mt-2">
                                                    <span>Account</span>
                                                    <Button>All</Button>
                                                </div>
                                                



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
                                            <div className="form-group col-xl-6 mt-2">
                                                <div className="form-group col-xl-6 mt-2">
                                                    <Button>All</Button>
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
        </>
    )
}

export default VoucherPrint