import React from 'react';

const CallTable = ({callList}) => {
    const calls = callList

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className=" p-3">
                        <div className="row">

                            <div className="col-12" style={{overflowX: "auto"}}>
                                <div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Created Time</th>
                                                <th>Lead ID</th>
                                                <th>Caller Number</th>
                                                <th>Caller To</th>
                                                <th>Call Direction</th>
                                                <th>Call Status</th>
                                                <th>Assigned To</th>
                                                <th>Request ID</th>
                                                <th>Conversation UUID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {calls?.map((call, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{call.createdAt}</td>
                                                    <td>{call.lead_id}</td>
                                                    <td>{call.call_number}</td>
                                                    <td>{call.callerTo}</td>
                                                    <td>{call.call_direct}</td>
                                                    <td>{call.call_status?.name}</td>
                                                    <td>{call.assignTo[0]?.name}</td>
                                                    <td>{call.request_id}</td>
                                                    <td>{call.conversationUUID}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CallTable;
