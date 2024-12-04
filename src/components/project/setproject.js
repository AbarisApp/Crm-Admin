import React from "react";
export default function Setproject(){
    return(
        <div className="">
            <form className="">
                <div className="row tbl-captionn">
                    <div className="col-12 mb-3">
                        <h6>Send contacts notifications</h6>
                        <select
                            className="form-select">
                            <option value="">To all contacts with notifications for project enabled</option>
                            <option value="">Specific Contacts</option>
                            <option value="">Do not send notifications</option>
                        </select> 
                        <div className="text-danger"></div>
                    </div>
                    <div className="col-12 mb-3">
                        <h6>Visible Tabs</h6>
                        <select
                            className="form-select">
                            <option value="">Tesks</option>
                            <option value="">TimeSheet</option>
                            <option value="">Files</option>
                        </select> 
                        <div className="text-danger"></div>
                    </div> 
                </div>
                <div className="border border-light d-flex gap-2 py-3 px-4  rounded-0">
                    <input type="checkbox"/>
                    <label className="d-inline-block m-0 ml-2">Allow customer to view tasks</label>
                </div>
                <div className="border border-light d-flex gap-2 py-3 px-4  rounded-0">
                    <input type="checkbox"/>
                    <label className="d-inline-block m-0 ml-2">Allow customer to create tasks</label>
                </div>
                <div className="border border-light d-flex gap-2 py-3 px-4  rounded-0">
                    <input type="checkbox"/>
                    <label className="d-inline-block m-0 ml-2">Allow customer to comment on project tasks </label>
                </div>
                <div className="border border-light d-flex gap-2 py-3 px-4  rounded-0">
                    <input type="checkbox"/>
                    <label className="d-inline-block m-0 ml-2">Allow customer to view task comments</label>
                </div>
                <div className="border border-light d-flex gap-2 py-3 px-4  rounded-0">
                    <input type="checkbox"/>
                    <label className="d-inline-block m-0 ml-2">Allow customer to view task attachments </label>
                </div>
            </form>
        </div>
    )
}