import React from "react";
import { Link } from "react-router-dom";

export default function AddLedaTitle() {
    return (
        <div className="m-4">
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Create Lead</h4>
                    <div>
                        <Link className="btn btn-primary btn-sm" to="/leads" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-check-double"></i> All</Link>
                        <Link className="btn btn-primary btn-sm" to="/" role="button" aria-controls="offcanvasExample"> Add B2B/Corporate Company</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}