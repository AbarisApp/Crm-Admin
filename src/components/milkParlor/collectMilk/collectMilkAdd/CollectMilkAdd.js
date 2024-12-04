import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";



export const CollectMilkAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Milk Parlor",
        title_2: 'Collect Milk Add',
        path_2: ""
    };
    return (
        <>
            {/* {loader && <Loadar />} */}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add Collect Milk</h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Account No</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Account No"
                                                />

                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Account No</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Collected From Name"
                                                />

                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Address :</label>
                                                <textarea name="" id="" placeholder="Enter Address"></textarea>

                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Stall Number :</label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Animal ID :</label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Liter </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Liter "
                                                />

                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Fate (%) : </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Fate (%)"
                                                />

                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Price/Liter : </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Price/Liter"
                                                />

                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Total : </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    disabled
                                                // placeholder="Enter Price/Liter"
                                                />

                                            </div>
                                        </div>



                                    </div>
                                    <div>
                                        <button className="btn btn-primary me-1" type="submit">Submit</button>
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
