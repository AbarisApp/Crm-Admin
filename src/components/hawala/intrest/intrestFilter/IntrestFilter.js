import React from 'react'
import { FaSearch } from 'react-icons/fa'

function IntrestFilter() {
    return (
        <section>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Intrest Payable/Receiavble</h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row align-item-center">
                                        <div className="form-group col-xl-4 mt-2">
                                            <label htmlFor="fromDate">Select Intrest</label>
                                            <select
                                                className="form-control"
                                            >
                                                <option>
                                                    Intrest Payable/Receiavble
                                                </option>
                                                <option>
                                                    Intrest
                                                </option>
                                            </select>
                                        </div>
                                        <div className="form-group col-xl-4 mt-2">
                                            <label htmlFor="fromDate">From</label>
                                            <input

                                                type="date"
                                                className="form-control"
                                                placeholder='From Date'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-xl-4 mt-2">
                                            <label htmlFor="fromDate">To</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder='To Date'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="col-xl-2 mt-5">
                                            <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                <FaSearch /> Search
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

export default IntrestFilter