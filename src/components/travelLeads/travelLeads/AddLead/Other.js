import JoditEditor from "jodit-react";


export default function Other({ countryData, setOther, rowsOther, handleInputChangeOther }) {
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Other</h4>
                </div>
            </div>
            {rowsOther.map((row, index) => (
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Select Country </label>
                            <select
                                className="form-select shadow"
                                name="country"
                                value={row.country}
                                onChange={(e) => handleInputChangeOther(index, "country", e.target.value)}
                            >
                                <option selected>Open Select Country</option>
                                {countryData && countryData?.map((item) => {
                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="mt-2">
                            <label className="form-label"> Travel Date</label>
                            <input className="form-control" type="date"
                                name="travel_date"
                                value={row.travel_date}
                                onChange={(e) => handleInputChangeOther(index, "travel_date", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="mt-2">
                            <label className="form-label">No. of days</label>
                            <input placeholder="NO.of Days" className="form-control" type="number"
                                name="number_of_days"
                                value={row.number_of_days}
                                onChange={(e) => handleInputChangeOther(index, "number_of_days", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="mt-2">
                            <label className="form-label">Sub Category</label>
                            <input className="form-control" placeholder="Sub Category" type="text"
                                name="sub_category"
                                value={row.sub_category}
                                onChange={(e) => handleInputChangeOther(index, "sub_category", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mt-2">
                            <label className="form-label">Description <span className="text-danger fs-5">*</span></label>
                            <input className="form-control" placeholder="Description" type="text"
                                name="description"
                                value={row.description}
                                onChange={(e) => handleInputChangeOther(index, "description", e.target.value)}
                            />
                            {/* <div className="w-100 shadow">
                            <JoditEditor
                            // ref={editor}
                            // value={content}
                            // onChange={newContent => setContent(newContent)}

                            />
                        </div> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}