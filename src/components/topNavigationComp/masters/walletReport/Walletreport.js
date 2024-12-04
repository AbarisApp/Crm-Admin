
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import React, { useEffect, useState } from 'react'
import { deleteNatureById, deleteTaskRelatedToById, getNature, getreportPayment, getTaskRelatedTo } from '../../../../api/login/Login'
import { message } from 'antd'
import MasterList from './masterList/MasterList'
import Loadar from '../../../../common/loader/Loader'
function Walletreport() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Contest Payment Report",
    }
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()
    const [startDate, setstartDate] = useState()
    const [endtDate, setendtDate] = useState()
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0]; // Get today's date in yyyy-mm-dd format
        setstartDate(today);
        setendtDate(today);
    }, []);

    // ----------list Api----------
    const getFloorMasters = async (page) => {
        setLoading(true)
        const today = new Date().toISOString().split('T')[0];
        try {
            const res = await getreportPayment(page, count, today, today)
            setTotalCount(res?.totalCount)
            setData(res?.data)
            setPage(page)
        } catch (error) {

        }
        setLoading(false)
    }
    const getFloorMastersFilter = async (page) => {
        setLoading(true)
        try {
            const res = await getreportPayment(page ?page :0, count, startDate, endtDate)
            setTotalCount(res?.totalCount)
            setData(res?.data)
            setPage(page)
        } catch (error) {

        }
        setLoading(false)
    }
    // add Area




    const onChangeVal = (e) => {
        // console.log(e);
        getFloorMasters(e - 1)

    };
    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deleteNatureById(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getFloorMasters(backList)
        } catch (error) {
            // toastSuccessMessage(error.message)
        }
        setLoading(false)
    }

    const confirm = (id) => {
        console.log(id);
        deleteBlockAdd(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };



    useEffect(() => {
        getFloorMasters(0)
    }, [])
    return (
        <>
            {loading && <Loadar />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <MasterList totalCount={totalCount} page={page} startDate={startDate} setstartDate={setstartDate} endtDate={endtDate} setendtDate={setendtDate} onChangeVal={onChangeVal} data={data} count={count} confirm={confirm} cancel={cancel} loading={loading} getFloorMastersFilter={getFloorMastersFilter}/>
        </>
    )
}

export default Walletreport
