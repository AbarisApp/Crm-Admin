import React from "react";
import { Link } from "react-router-dom";

export default function AllLeadS() {
    return (
        <div className="m-4">
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">All Lead</h4>
                    <div>
                        <Link className="btn btn-primary btn-sm" to="/lead-search" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-rocket"></i> Search</Link>
                        <Link className="btn btn-primary btn-sm" to="/lead-list" role="button" aria-controls="offcanvasExample"> Bulk Change Lead User</Link>
                        <Link className="btn btn-primary btn-sm" to="/add-lead" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-plus"></i>  Add Lead</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}