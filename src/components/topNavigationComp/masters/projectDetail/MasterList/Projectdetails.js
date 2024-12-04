import { Tab, Tabs } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ProjectDetail from "../projectdetail/ProjectDetail";
import RecceMain from "../Recce/RecceMain";
import Quatation from "../boq/Quatation";
import BoqMain from "../boq/BoqMain";
import OrderMain from "../order/OrderMain";
import ProgressMain from "../workprog/ProgressMain";
import Snagmain from "../snag/SnagMain";
import DesignMain from "../design/DesignMain";
import { countryList, getAccAddProjectById, getAccProjectBusinessCategoryByPage, getAllAssign, getcityUpdate, getListprojectScope, getTaxtype, getVentureByUser, listUserType } from "../../../../../api/login/Login";
import { useParams } from "react-router-dom";
import Loadar from "../../../../../common/loader/Loader";

function Projectdetails() {
    const [formData, setFormData] = useState({
        project_name: '',
        client: '',
        business_category: '',
        prj_address_line1: '',
        prj_address_line2: '',
        country: '',
        state: '',
        city: '',
        zip_code: '',
        currency: '',
        tax_type: '',
        time_zone: '',
        prj_scope: '',
        prj_estimate: '',
        prj_area_in_sqft: '',
        client_poc_name: '',
        client_poc_nmber: '',
        recce_due_date: null,
        expected_start_date: null,
        executation_due_date_assign_prj_user: null,
        assign_prj_user: [{ user: '', user_role: '' }]
    });
    
    const [masterStore, setMasterStore] = useState({
        business_category: [],
        client: [],
        country: [],
        state: [],
        city: [],
        zip_code: [],
        currency: [],
        tax_type: [],
        prj_scope: [],
        role: [],
        user: [],
    })

    const [loader ,setLoad] = useState(false)
    const getAllMaster = async () => {
        setLoad(true)
        const businescat = await getAccProjectBusinessCategoryByPage(0, 100)
        const clients = await getAllAssign(0, 100)
        const countrys = await countryList(0, 100)
        const currenc = await getcityUpdate(0, 100)
        const taxtype = await getTaxtype()
        const scope = await getListprojectScope()
        const roles = await listUserType()
        const user = await getVentureByUser()
        const obj = {
            ...masterStore,
            business_category: businescat.data,
            client: clients.data,
            country: countrys.data,
            currency: currenc.data,
            tax_type: taxtype.data,
            prj_scope: scope.data,
            user: user.data,
            role: roles.data,
        }
        setMasterStore(obj);
        fetchData();
        setLoad(false)
    };
    useEffect(() => {
        getAllMaster();
    }, []);
    const params= useParams()
    const fetchData = async () => {
        try {
            if (params?.id) {
                const response = await getAccAddProjectById(params.id);
                setFormData(response?.data);
            } else {
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
        {loader && <Loadar/>}
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="d-flex">

                            <h5> Abaris Office Interior Work / JOB ID : {formData.job_id}</h5>
                            <h5 style={{margin:"0 10px"}}> Client : Abaris Softech</h5>

                        </div>
                        <div className="card">
                            <div className="card-body p-0">

                                <Tabs
                                    defaultActiveKey="Project Detail"
                                    id="uncontrolled-tab-example"
                                    className="mb-3 res-tab cusnav"
                                    style={{padding:"5px"}}

                                >
                                    <Tab eventKey="Project Detail" title="Project Detail">
                                        <ProjectDetail formData={formData} masterStore={masterStore}/>
                                    </Tab>
                                    <Tab eventKey="Recce" title="Recce">
                                        <RecceMain/>
                                    </Tab>
                                    <Tab eventKey="Design" title="Design">
                                        <DesignMain/>
                                    </Tab>
                                    <Tab eventKey="BOQ" title="BOQ">
                                        <BoqMain/>
                                    </Tab>
                                    <Tab eventKey="Order" title="Order">
                                        <OrderMain/>
                                    </Tab>
                                    <Tab eventKey="Work Progress" title="Work Progress">
                                       <ProgressMain/>
                                    </Tab>
                                    <Tab eventKey="Snag" title="Snag">
                                        <Snagmain/>
                                    </Tab>
                                    


                                </Tabs>
                                <div className="table-responsive active-projects style-1" style={{ overflowX: 'auto' }}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className="text-center" />
        </>
    );
}

export default Projectdetails;
