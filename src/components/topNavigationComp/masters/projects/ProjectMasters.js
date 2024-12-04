import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import React, { useEffect, useState } from 'react'
import { deleteAccAddProjectById, deleteAddSubjectById, getAccAddProjectByPage } from '../../../../api/login/Login'
import { message } from 'antd'
import CallStatusMasterList from './MasterList/CallStatusMasterList'
import { useParams } from 'react-router-dom'
import Loadar from '../../../../common/loader/Loader'
function ProjectMasters() {
    const breadCrumbsTitle = {
        // title_1: "master",
        title_2: "My Projects",
    }
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()


    // ----------list Api----------
    const param = useParams()
    const getFloorMasters = async (page ,id) => {

        setLoading(true)
        try {
            const res = await getAccAddProjectByPage(page, count ,id)
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
            await deleteAccAddProjectById(id)
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
        // getFloorMasters(0)
    }, [])
    return (
        <>
            {loading && <Loadar />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <CallStatusMasterList getFloorMasters={getFloorMasters} totalCount={totalCount} page={page} onChangeVal={onChangeVal} data={data} count={count} confirm={confirm} cancel={cancel} loading={loading} />
        </>
    )
}

export default ProjectMasters
