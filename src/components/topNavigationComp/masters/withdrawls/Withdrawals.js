
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import React, { useEffect, useState } from 'react'
import { deleteTaskById, getListWidraw } from '../../../../api/login/Login'
import { message } from 'antd'
import MasterList from './masterList/MasterList'
function Withdrawals({ title, api }) {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: title,
    }
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()
    const [start_date, setStart_date] = useState()
    const [end_date, setEnd_date] = useState()
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0]; // Get today's date in yyyy-mm-dd format
        setStart_date(today);
        setEnd_date(today);
    }, []);

    // ----------list Api----------
    const getFloorMasters = async (page, datestart, dateend) => {
        setLoading(true)
        const clone = { start_date: datestart ? datestart : start_date, end_date: dateend ? dateend : end_date, status: api }
        try {
            const res = await getListWidraw(clone)
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
            await deleteTaskById(id)
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
        setTimeout(() => {
            getFloorMasters(page)
        }, 1000);
    }, [api])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <MasterList getFloorMasters={getFloorMasters} title={title} totalCount={totalCount} page={page} onChangeVal={onChangeVal} data={data} count={count} confirm={confirm} cancel={cancel} loading={loading}  />
        </>
    )
}

export default Withdrawals
