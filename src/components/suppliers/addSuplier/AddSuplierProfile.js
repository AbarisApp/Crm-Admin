import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";



export const AddSuplierProfile = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Suppliers",
        title_2: 'Add Supplier Profile',
        path_2: ""
    };
    return (
        <>

            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"> Add/Update Supplier Profile</h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Supplier Name:</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Supplier Name"
                                                />

                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Company Name :</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Company Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Phone Number :</label>
                                                <input
                                                    type="number"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Email :</label>
                                                <input
                                                    type="email"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Profile Image  :</label>
                                                <input
                                                    type="file"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                // placeholder="Enter file"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Address  :</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Address "
                                                />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <button type="button" className="btn btn-success mt-4">Submit</button>
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
