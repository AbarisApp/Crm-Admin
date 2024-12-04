import JoditEditor from "jodit-react"
import TopHead from "./TopHead"

export const Invoice = () => {
    return <div>
        <TopHead />
        <div className="table-responsive active-projects style-1">

            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">

                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>Invoice Number
                            </th>
                            <th>Invoice Type</th>
                            <th>Vendor Name</th>
                            <th>Order No.</th>
                            <th>Invoice Date</th>
                            <th>Uploaded by</th>
                            <th>Status</th>
                            <th>Invoice Amount (₹)</th>
                            <th>Credit Note Amount (₹)</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>No Data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}