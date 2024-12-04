import JoditEditor from "jodit-react"

export const ProgressUpdate = () => {
    return <div>
        <div>
            <div className="container">
                <div className="row m-2">
                    <div className="col-xl-12">
                      

                        {/* Table */}
                        <div className="table-responsive active-projects style-1">

                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">

                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr>
                                            <th>Sl.No</th>
                                            <th>Order No.</th>
                                            <th>Order Type</th>
                                            <th>Order To</th>
                                            <th>Issued By</th>
                                            <th>Issue Date</th>
                                            <th>Due Date</th>
                                            <th>Progress Update</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {/* Empty Table Body (can add rows dynamically here) */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}