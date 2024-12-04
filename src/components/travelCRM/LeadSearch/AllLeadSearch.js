import React from "react";
import { Link } from "react-router-dom";

export default function AllLeadSearch() {
    return (
        <div className="m-3">
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">All Leads</h4>
                    <div>
                        <Link className="btn btn-primary btn-sm" to="/add-lead" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-plus"></i>  Add Lead</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}