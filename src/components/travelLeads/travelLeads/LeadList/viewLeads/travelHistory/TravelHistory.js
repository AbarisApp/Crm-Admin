

const TravelHistory = () => {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0"> History</h4>
                            </div>
                            <table class="table table-striped table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Details</th>
                                        <th>Date/Time</th>
                                        <th>By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span class="badge badge-warning">Reminder</span></td>
                                        <td>dffffff</td>
                                        <td>5/12/2024 05:07 PM</td>
                                        <td>Abdul Quadir (Admin)</td>
                                    </tr>
                                    <tr>
                                        <td><span class="badge badge-dark">Lead</span></td>
                                        <td>Lead status has been changed to "Proposal Sent"</td>
                                        <td>5/12/2024 02:00 PM</td>
                                        <td>Abdul Quadir (Admin)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelHistory