import React from 'react'

function TdsFooterCalculation() {
    return (
        <>
            <section>
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">

                                    <form className="tbl-captionn" >
                                        <div className="row align-item-center">
                                            <div className="form-group col-xl-3 mt-2">
                                                <label htmlFor="fromDate">Jrnl Voucher Date :
                                                </label>
                                                <input

                                                    type="date"
                                                    className="form-control"
                                                    placeholder='Jrnl Voucher Date'
                                                    id="fromDate"
                                                />
                                            </div>
                                            <div className="form-group col-xl-3 mt-2">
                                                <label htmlFor="fromDate">Total Amount :
                                                </label>
                                                <input

                                                    type="text"
                                                    className="form-control"
                                                    placeholder='Total Amount'
                                                    id="fromDate"
                                                />
                                            </div>
                                            <div className="form-group col-xl-3 mt-2">
                                                    <label htmlFor="fromDate">Cr/Db:
                                                    </label>
                                                    <select
                                                        className="form-control"
                                                    >
                                                        <option>

                                                        </option>
                                                        <option>
                                                            CR
                                                        </option>
                                                        <option>
                                                            DB
                                                        </option>
                                                    </select>
                                            </div>
                                            <div className="form-group col-xl-3 mt-2">
                                                <label htmlFor="fromDate">Total TDS</label>
                                                <input

                                                    type="text"
                                                    className="form-control"
                                                    placeholder='Total TDS'
                                                    id="fromDate"
                                                />
                                            </div>
                                            <div className="form-group col-xl-12 mt-2">
                                                <label htmlFor="fromDate">Narration :
                                                </label>
                                                <textarea

                                                    type="text"
                                                    className="form-control"
                                                    placeholder='From Date'
                                                    id="Narration"
                                                />
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

export default TdsFooterCalculation