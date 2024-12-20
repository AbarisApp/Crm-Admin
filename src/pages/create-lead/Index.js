import { useParams } from "react-router-dom"
import LeadInformations from "../../components/CreateLead/LeadInformations"
import OptInForm from "../../components/CreateLead/OptinPermission"
import RequirementDetails from "../../components/CreateLead/RequirementDetails"
import SystematicInformation from "../../components/CreateLead/SystematicInformation"
import { useState } from "react"
import { postLead } from "../../api/login/Login"
import Loadar from "../../common/loader/Loader"
import { toast, ToastContainer } from "react-toastify"

function CreateLead() {
    const params = useParams()
    const [formData, setFormData] = useState({
        nameTitle: 'Mr.',
        name: '',
        assignedTo: '',
        mobilePhone: '',
        alternativePhone: '',
        email: '',
        secondaryMail: '',
        leadSource: '',
        leadMedium: '',
        leadStatus: '',
        leadSubStatus: '',
        followUpOn: '',
        reEngagement: '',
        address: '',
        password: '',
        cpName: '',
        whatsapp: false,
        sms: false,
        emailB: false,
        course: '',
        streamType: '',
        budget: '',
        location: '',
        entityId: '',
        callId: '',
        feedback: '',
        live: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    const [load, setLoad] = useState(false)
    const toastSuccessMessage = (message) => {
        toast.success(message, { position: "top-right" });
    };

    const submitData = async () => {
        setLoad(true)
        const obj = {
            name_title: formData?.nameTitle, // Title (e.g., Mr., Ms., Dr.)
            name: formData.name, // Full Name
            email: formData.email, // Full Name
            mobile : formData.mobilePhone, // Primary Mobile Number
            alternate_phoneno: formData.alternativePhone, // Alternate Phone Number
            password: formData.password, // Password
            secondary_email: formData.secondaryMail, // Secondary Email Address
            presentAddr: formData.address, // Present Address
            state: formData.state, // State
            country: formData.country, // Country
            city: formData.city, // City
            lead_status: formData.leadStatus, // Lead Status
            lead_sub_status: formData.leadSubStatus, // Lead Sub-Status
            lead_source: formData.leadSource, // Source of Lead
            lead_medium: formData.leadMedium, // Medium of Lead Acquisition
            assignTo: formData.assignedTo, // Assigned To
            entity_id: formData.entityId, // Entity ID
            call_id: formData.callId, // Call ID
            follow_up_on: formData.followUpOn, // Follow-Up Date
            re_engagement: formData.reEngagement, // Re-Engagement Plan
            live: formData.live, // Live Status (boolean)
            course_id: formData.course, // Course ID
            stream_id: formData.streamType, // Stream ID
            location: formData.location, // Preferred Location
            budget: formData.budget, // Budget
            option_permission: {
                email: formData.emailB, // Opt-in for Email
                sms: formData.sms, // Opt-in for SMS
                whatsapp: formData.whatsapp, // Opt-in for WhatsApp
            },
        };
        try {
            const res = await postLead(obj)
            if (res?.statusCode == "200") {
                toastSuccessMessage("Lead Add successfully");
            }
        } catch (error) {

        }
        setLoad(false)

    }

    return <div className="row m-4">
        {load && <Loadar />}
         <ToastContainer />
        <div className="col-xl-12">
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">{params?.id ? "Edit Lead" : "Create Lead"}</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="card col-12">
                                    <h3>Lead Informations</h3>
                                    <hr></hr>
                                    <LeadInformations formData={formData} handleChange={handleChange} />
                                </div>
                                <div className="card col-12">
                                    <h3>Optin Permission</h3>
                                    <hr></hr>
                                    <OptInForm optIns={formData} handleChange={handleChange} />
                                </div>
                                <div className="card col-12">
                                    <h3>Requirement Details</h3>
                                    <hr></hr>
                                    <RequirementDetails formData={formData} handleChange={handleChange} />
                                </div>
                                <div className="card col-12">
                                    <h3>Systematic Information</h3>
                                    <hr></hr>
                                    <SystematicInformation formData={formData} handleChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-primary me-1" type="button" onClick={submitData}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default CreateLead