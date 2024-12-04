import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"


function AnimalPregnancy() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Cow Monitor",
        title_2: 'Animal Pregnancy',
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
                                    <h4 className="heading mb-0">Animal Information :</h4>
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
                                    <h4 className="heading mb-0">Animal Pregnancy Details :</h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Pregnancy Type : </label>
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
                                                <label htmlFor="subject">Semen Type : </label>
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
                                                <label htmlFor="subject">Semen Push Date :</label>
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
                                                <label htmlFor="subject">Pregnancy Start Date</label>
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
                                                <label htmlFor="subject">Semen Cost </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Semen Cost"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Other Cost </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Other Cost"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Reports :</label>
                                                <textarea name="" id="" cols={80}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Approximate Delivery Date :</label>
                                                <input type="range" className="form-range" id="customRange1" />
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
export default AnimalPregnancy
