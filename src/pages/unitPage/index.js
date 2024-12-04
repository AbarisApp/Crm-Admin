
import AddUnit from '../../components/unitComp/AddUnit'
import ListUnit from '../../components/unitComp/ListUnit'
import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { message } from 'antd'
import {  deleteunitId, getunitPage } from '../../api/login/Login'
import Loadar from '../../common/loader/Loader'

function UnitPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Unit",
        title_2: '',
    }
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const getData = async (page) => {
        setLoading(true)
        try {
            const res = await getunitPage()
            setData(res.data)
        } catch (error) {

        }
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])
    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deleteunitId(id)
            getData()
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
    return (
        <>
            {loading && <Loadar />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddUnit getData={getData} />
            <ListUnit data={data} confirm={confirm} cancel={cancel}/>
        </>
    )
}

export default UnitPage