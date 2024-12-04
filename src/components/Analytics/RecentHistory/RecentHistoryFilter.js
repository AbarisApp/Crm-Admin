



export const RecentHistoryFilter = () => {
    return (
        <>
            <section className="ListDistributer exppdf">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Tool Name</label>
                                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Tool Name" />
                                                </div>

                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User Name" />
                                                </div>

                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">User IP</label>
                                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User IP" />
                                                </div>

                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">User Country</label>
                                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User Country" />
                                                </div>

                                            </div>
                                            <div className="col-lg-6">
                                                <button type="button" className="btn btn-primary">Search</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
