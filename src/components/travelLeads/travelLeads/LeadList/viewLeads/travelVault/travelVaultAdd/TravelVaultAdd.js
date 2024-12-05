

const TravelVaultAdd = ({ cancelForm }) => {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0"><b>Vault Entry - </b></h4>
                            </div>
                            <div className="row">
                                <div className='col-lg-4'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Server Address </label>
                                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Server Address " />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Port</label>
                                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Port" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Username </label>
                                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Username " />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Password" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Short Description</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Visibility</label>
                                        <div>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Visible to all staff members who have access to this customer
                                            </label>
                                        </div>
                                        <div>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Visible only to administrators
                                            </label>
                                        </div>
                                        <div>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Visible only to me (administrators are not excluded)
                                            </label>
                                        </div>
                                        <div>
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Share this vault entry in projects with project members
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" style={{ marginTop: '30px' }}>
                                    <button type="button" className="btn btn-success">Save</button>
                                    <button type="button" className="btn btn-danger" onClick={cancelForm}>Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelVaultAdd