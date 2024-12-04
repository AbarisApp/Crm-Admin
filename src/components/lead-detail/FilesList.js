import { useEffect, useState } from "react";
import CallTable from "./CallTable";
import { getCallList } from "../../api/login/Login";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import FilesListCreatModel from "./FilesListCreatModel";
import FIlesTable from "./FIlesTable";
function FilesList() {
    const [callList , setcallList] = useState()
    const parems =useParams()
    const dispatch = useDispatch()
    const getFloorMasters = async () => {
        
        try {
            const res = await getCallList(parems?.id)
            console.log(res.data);
            
            // setcallList(res.data)
            // dispatch(setCalls(res.data.length));
        } catch (error) {

        }
    }

    useEffect(()=>{
        // getFloorMasters()
    },[])


    const [modalShow, setModalShow] = useState(false);
    return <div className="container mt-4">
        <div className="row">
            <div className="col-12">
                <div className="card p-3">
                    <div className="row">
                        <div className="col-12 mb-2 d-flex justify-content-between">
                            <span className="pull-left" style={{alignItems:"center" , display:"flex"}} onClick={() => setModalShow(true)}>

                                Create Document  <i className="fa fa-plus hide-responsive" aria-hidden="true"></i>

                            </span>
                            {modalShow && <FilesListCreatModel show={modalShow}
                                onHide={() => setModalShow(false)} />}
                            
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
                            <FIlesTable documentsList={callList}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default FilesList;