import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";


const RcmEntryAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'GST',
        title_3: `Add GST RCM Entry`,
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add GST RCM Entry</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="projectName">Voucher Type: </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                        {/* <div className="col-md-3 mb-3">
                                            <label htmlFor="projectName">Voucher Type: </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div> */}
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="projectName">Voucher No : </label>
                                            <input type="number" className="form-control" id="projectName" placeholder=" Enter Voucher No " />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="projectName">Date</label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter Group Name" />

                                        </div>
                                        <div className="col-md-5 mb-3">
                                            <label htmlFor="projectName">Cr A/c : </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                            <p>Balance : <span style={{ color: 'red' }}>43655.1 Db</span> + Cr = <span style={{ color: 'red' }}>43655.1 Db</span></p>
                                        </div>
                                        <div className="col-md-5 mb-5">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount " />

                                        </div>
                                        <div className="col-md-2 mt-3">
                                            <label htmlFor="projectName" className="mt-4">Cr</label>
                                            {/* <input type="number" className="form-control" id="projectName" placeholder="Enter Amount " /> */}

                                        </div>
                                        <div className="col-md-5 mb-3">
                                            <label htmlFor="projectName">Db A/c. : </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                            <p>Balance : <span style={{ color: 'green' }}>43655.1 Db</span> + Cr = <span style={{ color: 'green' }}>43655.1 Db</span></p>
                                        </div>
                                        <div className="col-md-5 mb-3">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount " />
                                        </div>
                                        <div className="col-md-2 mt-3">
                                            <label htmlFor="projectName" className="mt-4">Db</label>
                                            {/* <input type="number" className="form-control" id="projectName" placeholder="Enter Amount " /> */}

                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Chq/DD No  :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Chq/DD No " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Chq/DD Date :</label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter Chq/DD No " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Tax Type : </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                            {/* <p>Balance : <span style={{ color: 'green' }}>43655.1 Db</span> + Cr = <span style={{ color: 'green' }}>43655.1 Db</span></p> */}
                                        </div>
                                        <div className="col-md-6 mb-3"></div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">CGST : </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                            {/* <p>Balance : <span style={{ color: 'green' }}>43655.1 Db</span> + Cr = <span style={{ color: 'green' }}>43655.1 Db</span></p> */}
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">SGST :</label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                            {/* <p>Balance : <span style={{ color: 'green' }}>43655.1 Db</span> + Cr = <span style={{ color: 'green' }}>43655.1 Db</span></p> */}
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Pro. A/C. :</label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                            {/* <p>Balance : <span style={{ color: 'green' }}>43655.1 Db</span> + Cr = <span style={{ color: 'green' }}>43655.1 Db</span></p> */}
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Narration</label>
                                            <textarea name="" id="" cols={90}></textarea>
                                        </div>
                                        <div className="col-md-12 mb-3 text-align-center">
                                            <button type="button" className="btn btn-primary">Save</button>
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

export default RcmEntryAdd