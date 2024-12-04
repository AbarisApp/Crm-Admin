import React from 'react'

function EmployeeSalaryReportsSearch() {
    return (
        <>

            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"> Search As Per Your Requirement</h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row">
                                        <div className="col-xl-3 mb-3">
                                            <div className={`form-group`}>
                                                <select class="form-control" aria-label="Default select example">
                                                    <option selected>---Select A Month----</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 mb-3">
                                            <div className={`form-group`}>
                                                <select class="form-control" aria-label="Default select example">
                                                    <option selected>---Select A Year----</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 mb-3">
                                            <div className={`form-group`}>
                                                <select class="form-control" aria-label="Default select example">
                                                    <option selected>---Select A Employee----</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <button type="button" className="btn btn-primary m-2 w-100">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeSalaryReportsSearch
