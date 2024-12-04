import { useEffect, useState } from "react";
import CostSheetAdd from "./CostSheetAdd";
import CostSheetTable from "./CostSheetTable";
import { geCostSheet } from "../../../api/login/Login";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCostSheet } from "../../../slice/auth";

function CostSheetCompo() {
    const [costList , setCostList] = useState()
    const parems =useParams()
    const dispatch = useDispatch()
    const getFloorMasters = async () => {
        
        try {
            const res = await geCostSheet(parems?.id)
            setCostList(res.data)
            dispatch(setCostSheet(res.data.length));
        } catch (error) {

        }
    }

    useEffect(()=>{
        getFloorMasters()
    },[])
    const [modalShow, setModalShow] = useState(false);
    return <div className="container mt-4">
        <div className="row">
            <div className="col-12">
                <div className="card p-3">
                    <div className="row">
                        <div className="col-12 mb-2 d-flex justify-content-between">
                            <span className="pull-left" style={{alignItems:"center" , display:"flex"}} onClick={() => setModalShow(true)}>

                                Create Cost Sheet  <i className="fa fa-plus hide-responsive" />

                            </span>
                            <CostSheetAdd show={modalShow}
                            getFloorMasters={getFloorMasters}
                                onHide={() => setModalShow(false)} />
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Prev
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>

                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>


                        </div>
                        <div className="col-12" style={{ overflowX: "auto" }}>
                            <CostSheetTable costList={costList?.length ? costList : []}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default CostSheetCompo;