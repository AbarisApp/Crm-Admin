
import AddSize from '../../components/sizeComp/AddSize'
import ListSize from '../../components/sizeComp/ListSize'
import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { message } from 'antd'
import {  deletesizeId, getsizePage } from '../../api/login/Login'
import Loadar from '../../common/loader/Loader'

function SizePage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Size",
        title_2: '',
    }
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const getData = async (page) => {
        setLoading(true)
        try {
            // const res = await getsizePage()
            // setData(res.data)
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
            // await deletesizeId(id)
            // getData()
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
            <AddSize getData={getData} />
            <ListSize data={data} confirm={confirm} cancel={cancel} />
        </>
    )
}

export default SizePage