import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"


export const AddVaccineMonitor = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Cow Vaccine Monitor",
        title_2: 'vaccine-monitor/create',
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
                                    <h4 className="heading mb-0">Basic Information :</h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Stall Number :</label>
                                                <select class="form-control" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Animal ID :</label>
                                                <select class="form-control" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>

                                            </div>
                                        </div>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Vaccine Date & Note : :</h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Animal Updated Weight (KG)</label>
                                                <input
                                                    type="date"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Account No"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Reports :</label>
                                                <textarea name="" id="" cols={80}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div>
                                        <button className="btn btn-primary me-1" type="submit">Submit</button>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">MVaccines List :</h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Vaccine Name</th>
                                                        <th>Dose</th>
                                                        <th>Repeat</th>
                                                        <th>Remarks</th>
                                                        <th>Given Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                    Anthrax - ( 120 Days )
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Annually in endemic areas 2021</td>
                                                        <td>X</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="subject"
                                                                name="subject"
                                                                value={''}
                                                                onChange={''}
                                                                className="form-control"
                                                            // placeholder="Enter Collected From Name"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="subject"
                                                                name="subject"
                                                                value={''}
                                                                onChange={''}
                                                                className="form-control"
                                                            // placeholder="Enter Collected From Name"
                                                            />
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
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
