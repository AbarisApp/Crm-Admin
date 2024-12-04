
import { useEffect, useState } from "react";
import AddFeedback from "./AddFeedback";
import FeedBackTable from "./FeedBackTable";
import { getFeedBackList } from "../../api/login/Login";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFeedBack } from "../../slice/auth";

function FeedBack() {


    const [feedbacklist , setFeedbacklists] = useState()
    const parems =useParams()
    const dispatch = useDispatch()
    const getFloorMasters = async () => {
        
        try {
            const res = await getFeedBackList(parems?.id)
            setFeedbacklists(res.data)
            dispatch(setFeedBack(res.data.length));
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

                                Add FeedBack  <i className="fa fa-plus hide-responsive" />

                            </span>
                            <AddFeedback show={modalShow}
                                onHide={() => setModalShow(false)} getFloorMasters={getFloorMasters}/>
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
                            <FeedBackTable feedbacklist={feedbacklist?.length ? feedbacklist : []}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default FeedBack;