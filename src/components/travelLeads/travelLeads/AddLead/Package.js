import { Select } from "antd";
const { Option } = Select;
export default function Package({ handleSearch, packageData, countryData, packageRow, setpackageRow, addPackageRow, handleInputChangePackage }) {
    const removeRow = (index) => {
        setpackageRow((prevRows) => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">package Details</h4>
                </div>
            </div>
            <h3 className="fs-5 px-4 bg-warning fw-normal">Please select this option only if you have created packeges already in the system.</h3>
            {packageRow.map((row, index) => (
                <div key={index}>
                    <div className="row">
                        <div className="col-4">
                            <div className="mt-2">
                                <label className="form-label">Tour Start Date </label>
                                <input type="date" className="form-control"
                                    name="tour_start_date"
                                    value={row.tour_start_date}
                                    onChange={(e) => handleInputChangePackage(index, "tour_start_date", e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mt-2">
                                <label className="form-label">Budget</label>
                                <input placeholder="Budget" className="form-control" type="text"
                                    name="budget"
                                    value={row.budget}
                                    onChange={(e) => handleInputChangePackage(index, "budget", e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mt-2">
                                <label className="form-label">Extra Details</label>
                                <div className="w-100">
                                    <textarea className="form-control" style={{ height: "100px" }}
                                        name="extra_details"
                                        value={row.extra_details}
                                        onChange={(e) => handleInputChangePackage(index, "extra_details", e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="table-responsive active-projects style-1 mt-4">
                        <div className="tbl-caption">
                            <h4 className="heading mb-0">Select Package
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="form-label">Select Countries to get available package list  <span className="text-danger fs-5">*</span></label>
                                <Select
                                    mode="multiple"
                                    showSearch
                                    style={{ width: "100%", height: '40px' }}
                                    placeholder="Select Departure"
                                    optionFilterProp="children"
                                    className=""
                                    value={row.country}
                                    onChange={(value) => handleInputChangePackage(index, "country", value)}
                                >
                                    {countryData?.map((loc) => (
                                        <Option key={loc._id} value={loc._id}>
                                            {loc.name}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="form-label">Search by Package Name</label>
                                <Select
                                    showSearch
                                    style={{ width: "100%", height: '40px' }}
                                    placeholder="Select Departure"
                                    optionFilterProp="children"
                                    className=""
                                    value={row.package_id}
                                    onSearch={handleSearch}
                                    onChange={(value) => handleInputChangePackage(index, "package_id", value)}
                                >
                                    {packageData?.map((loc) => (
                                        <Option key={loc._id} value={loc._id}>
                                            {loc.package}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button
                            className={`btn btn-outline-danger m-0 ${index === 0 ? "d-none" : "form-label"}`}
                            onClick={() => removeRow(index)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>

            ))}

            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={addPackageRow}>
                    + Add More
                </button>
            </div>
        </div>
    )
}