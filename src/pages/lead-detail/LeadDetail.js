import { Accordion } from "react-bootstrap";
import LeadInformation from "../../components/lead-detail/LeadInformation";
import Comments from "../../components/lead-detail/Comments";
import EnquiryTable from "../../components/lead-detail/EnquiryTable";
import PermisionOption from "../../components/lead-detail/PermisionOption";
import RequirementDetail from "../../components/lead-detail/RequirementDetail";
import SystematicInfo from "../../components/lead-detail/SystematicInfo";
import CallsCompo from "../../components/lead-detail/CallsCompo";
import FeedBack from "../../components/lead-detail/FeedBack";
import Updates from "../../components/lead-detail/Updates";
import CostSheetCompo from "../../components/lead-detail/cost-sheet/CostSheetCompo";
import EmailCompo from "../../components/lead-detail/email/EmailCompo";
import ChattingWindow from "../../components/lead-detail/ChattingWindow";
import { useSelector } from "react-redux";
import FilesList from "../../components/lead-detail/FilesList";
import { getLeadDetail } from "../../api/login/Login";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function LeadDetail() {
    const datas = useSelector((state) => {
       return state.auth
    })

    const [data, setData] = useState([])
    const parems = useParams()
    const getData =async () => {
       const res = await getLeadDetail(parems.id)
       setData(res.data)
    }
    useEffect(()=>{
        getData()
    },[])
    
    return (
        <div className="row m-4">
            <div className="col-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Lead Detail</h4>
                            </div>
                            <div className="tbl-caption tbl-caption-2 d-block p-2" style={{ marginTop: "15px" }}>
                                <h5 className="heading">Name : {data?.name}</h5>
                                <h5 className="heading">Mobile  : {data?.mobile}</h5>
                                <h5 className="heading">Email : {data?.email}</h5>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-4 col-md-12 mb-4">
                                <Accordion defaultActiveKey="0" className="acorianDetail">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Lead Information</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <LeadInformation />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Option Permission</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <PermisionOption />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Requirement Detail</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <RequirementDetail />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                   
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Systematic Information</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <SystematicInfo />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    {/* <Accordion.Item eventKey="3">
                                        <Accordion.Header>Description Detail</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            Description Detail
                                        </Accordion.Body>
                                    </Accordion.Item> */}
                                </Accordion>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <Accordion defaultActiveKey="0" className="acorianDetail">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Comments ({datas?.Comments})</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <Comments />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Calls ({datas?.Calls})</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <CallsCompo />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="13">
                                        <Accordion.Header>Files ({datas?.Calls})</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <FilesList />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>Emails (0)</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <EmailCompo />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Feedback ({datas?.FeedBack})</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <FeedBack />
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>Cost Sheet ({datas?.CostSheet})</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <CostSheetCompo />
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Chats ({datas?.Chats})</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <ChattingWindow />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Enquiry (0)</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <EnquiryTable />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                  
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Updates (0)</Accordion.Header>
                                        <Accordion.Body style={{ padding: "0" }}>
                                            <Updates />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeadDetail;
