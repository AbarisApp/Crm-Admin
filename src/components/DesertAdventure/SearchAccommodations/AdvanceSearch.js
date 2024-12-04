import React from "react";

export default function AdvanceSearch({Advance, setAdvance}) {
    return (
        <div className="mt-4 ">
            <div className="row">
                <div className="col-6">
                    <div className="mt-2">
                        <label className="form-label">Region</label>
                        <input className="form-control" placeholder="search and select a rgion" type="search" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="mt-2">
                        <label className="form-label">Resort Type</label>
                        <input className="form-control" placeholder="search and select a resort" type="search" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="mt-2">
                        <label className="form-label">Board Basis</label>
                        <input className="form-control" placeholder="search and select multiple bord basis" type="search" />
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <button type="button" className="btn m-0 btn-outline-primary" onClick={()=>setAdvance(false)}>General Search <i class="fa-solid fa-caret-down"></i></button>
                </div>
            </div>
        </div>
    )
}