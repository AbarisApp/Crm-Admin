import React, { useEffect, useState } from 'react'
import AddAttribute from '../../components/attributesComp/AddAttribute'
import ListAttribute from '../../components/attributesComp/ListAttribute'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { deleteattributeId, deleteBrandById, getattributePage } from '../../api/login/Login'
import { message } from 'antd'
import Loadar from '../../common/loader/Loader'

function AttributesPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Attribute",
        title_2: '',
    }
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const getData = async (page) => {
        setLoading(true)
        try {
            const res = await getattributePage()
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
            await deleteattributeId(id)
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
            <AddAttribute getData={getData} />
            <ListAttribute data={data} confirm={confirm} cancel={cancel} />
        </>
    )
}

export default AttributesPage