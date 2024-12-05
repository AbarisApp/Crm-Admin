

const TravelTicketsAdd = () => {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0"><b>Add Tickets - </b></h4>
                            </div>
                            <div className="row">
                                <div className='col-lg-4'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Contact</label>
                                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Contact" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">To</label>
                                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter To" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Status</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select User</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4" style={{ marginTop: '30px' }}>
                                    <button type="button" className="btn btn-success">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelTicketsAdd