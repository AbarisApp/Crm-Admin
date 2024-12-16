import { useParams } from "react-router-dom";
import AllLeadS from "./AllLeads/AllLeads"
import { LeadFilter } from "./LeadFilter/LeadFilter"
import { LeadList } from "./LeadList/LeadList"
import { useEffect, useState } from "react";
import { deleteTRCRM_tr_lead, getTRCRM_tr_lead } from "../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";
import Loadar from "../../../common/loader/Loader";



const TravelLeads = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Master",
        title_2: 'Travel Trip Type Master',
        path_2: ``
    };
    const params = useParams()
    // console.log(params);

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    // console.log(page);
    const [totalCount, setTotalCount] = useState(null)
    const [data, setData] = useState(null)
    const [allData, setAllData] = useState(null)
    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        end_date: getCurrentDate(),
        start_date: getCurrentDate(),
        lead_priority: '',
        lead_status: '',
        assigned_to: '',
        lead_number: '',
        first_name: '',
        last_name: '',
        email_id: '',
        tag: '',
        mobile_number: '',
        createdBy: '',
        // sortType: '',
        // sortType: ''
    })

    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const getTransitionReport = async (input) => {
        // console.log('iojijip');
        setLoading(true)
        const clone = { ...filterInitial, count: count, page: input, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await getTRCRM_tr_lead(clone)
            setTotalCount(res?.totalCount)
            setData(res?.data || [])
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        // console.log(e - 1);

        setPage(e - 1)
        getTransitionReport(e - 1)
    };

    const toastSuccessMessage = (message) => {
        toast.success(`Delete Success`, {
            position: "top-right",
        });
    };

    const confirm = (id) => {
        // console.log('setMental');
        deleteData(id)
    }

    const deleteData = async (id) => {
        try {
            const res = await deleteTRCRM_tr_lead(id)
            // console.log(res);
            if (res?.error == false) {
                toastSuccessMessage()
                getTransitionReport(0)
            } else {
                alert(res?.message)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        getTransitionReport(0)
    }, [])

    return (
        <>
            {loading && <Loadar />}
            <AllLeadS />
            <LeadFilter filterInitial={filterInitial} handleChange={handleChange} getTransitionReport={getTransitionReport} />
            <LeadList data={data} totalCount={totalCount} onChangeVal={onChangeVal} confirm={confirm} />
            <ToastContainer />
        </>
    )
}

export default TravelLeads