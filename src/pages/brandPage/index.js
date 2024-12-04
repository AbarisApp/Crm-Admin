import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import AddBrand from '../../components/brandComp/AddBrand'
import ListBrand from '../../components/brandComp/ListBrand'
import { message } from 'antd'
import { deleteBrandById, getBrandByPage } from '../../api/login/Login'
import Loadar from '../../common/loader/Loader'

function BrandPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Brand",
        title_2: '',
    }
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const getData = async (page) => {
        setLoading(true)
        try {
            const res = await getBrandByPage()
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
            await deleteBrandById(id)
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
            <AddBrand getData={getData}/>
            <ListBrand data={data} confirm={confirm} cancel={cancel} />
        </>
    )
}

export default BrandPage