

const DocumentsAuditTrailFilter = () => {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2 py-2">
                                <h4 className="heading mb-0"><b> DOCUMENT CATEGORIES SEARCH
                                </b></h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Search By Name </label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search By Name " />
                                    </div>

                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Select Category</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Category</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Select User</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select User</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-4 mt-3">
                                        <div className='d-flex justify-content-start'>
                                            <button className="btn btn-primary pd-x-20 color2" type="submit">
                                                <i className="fas fa-search"></i> Search
                                            </button>
                                            <button className="btn btn-primary pd-x-20 color2" type="button">
                                                <i className="fas fa-refresh"></i> Reset
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocumentsAuditTrailFilter