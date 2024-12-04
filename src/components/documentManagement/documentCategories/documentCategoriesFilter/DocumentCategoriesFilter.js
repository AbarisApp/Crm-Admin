

const DocumentCategoriesFilter = ({ parentId, filterInitial, handleChange, getTransitionReport }) => {
    return (
        <>
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
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Start Date</label>
                                            <input type="date" className="form-control" id="exampleFormControlInput1" name="start_date" value={filterInitial?.start_date} onChange={handleChange} />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">End Date</label>
                                            <input type="date" className="form-control" id="exampleFormControlInput1" name="end_date" value={filterInitial?.end_date} onChange={handleChange} />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Is Archieveis</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Archieveis" name="is_archieve" value={filterInitial?.is_archieve} onChange={handleChange} />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Search </label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Search" name="search" value={filterInitial?.search} onChange={handleChange} />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Parent</label>
                                            <select className="form-control" aria-label="Default select example" name="parent_id" onChange={handleChange}>
                                                <option selected>Open this select Parent</option>
                                                {parentId && parentId?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-lg-4 col-md-4 mt-3">
                                            <div className='d-flex justify-content-start'>
                                                <button className="btn btn-primary pd-x-20 color2" type="button" onClick={() => getTransitionReport(0)}>
                                                    <i className="fas fa-search"></i> Search
                                                </button>
                                                {/* <button className="btn btn-primary pd-x-20 color2" type="button">
                                                    <i className="fas fa-refresh"></i> Reset
                                                </button> */}
                                            </div>
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

export default DocumentCategoriesFilter