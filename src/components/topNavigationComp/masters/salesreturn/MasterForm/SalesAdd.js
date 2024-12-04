import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import Loadar from '../../../../../common/loader/Loader';
import HeaderSection from './HeaderSection';
import SearchSec from './SearchSec';
import TableComp from './TableComp';
import NarowSec from './NarowSec';

function SalesAddRetuen() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Sales Return",
    };
    const params = useParams();

    return (
        <>
            {false && <Loadar />}
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"}  Sales Return
                                </h4>
                            </div>
                            <HeaderSection/>
                            <hr></hr>
                            <SearchSec/>
                            <hr></hr>
                            <TableComp/>
                            <hr></hr>
                            <NarowSec/>
                            <hr></hr>
                           
                        </div>
                        <button className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SalesAddRetuen;
