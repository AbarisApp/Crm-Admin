import { useEffect, useState } from "react"
import { subModule, subSubModule } from "../../../../api/login/Login"
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"
import ListSubSubModule from "../listSubSubModule/ListSubSubModule"



function MainSubSubModule() {
    const [userData, setUserData] = useState()
    const [dmtTtxn, setDmtTtxn] = useState()
    const [dmtExcelTtxn, setDmtExcelTtxn] = useState()
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [total, setTotal] = useState()
    const token = window.localStorage.getItem('userToken')
    const [loading, setLoadig] = useState(false)
    const submitForm = async (values) => {
        console.log(values);
        setLoadig(true)
        try {
            // const res = await fillterDmtTxnReport(values);
            // setDmtTtxn(res?.data);
            // setLoadig(false)
        } catch (error) {

        }

    }
    const getDmtTxnData = async (page) => {
        setLoadig(true)
        try {
            const res = await subSubModule(page, count);
            // console.log(res?.data);
            setDmtTtxn(res?.data);
            setTotal(res?.totalCount)
            setLoadig(false)
        } catch (error) {

        }
    }
    const onChangeVal = (e) => {
        // setPage(e - 1)
        getDmtTxnData(e - 1)
    };
    useEffect(() => {
        getDmtTxnData(page)
        const fetchUserType = async () => {
            setLoadig(true)
            try {
                // const response = await usersList();
                // setUserData(response?.data);
                // const resExp = await exportExcelDmt_txnList(token);
                // setDmtExcelTtxn(resExp?.data);
                setLoadig(false)
            } catch (error) {
                alert("Error fetching User type:", error);
            }
        };
        fetchUserType();
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={"Sub Module Module List"} />
            <ListSubSubModule onChangeVal={onChangeVal} dmtTtxn={dmtTtxn} loading={loading} dmtExcelTtxn={dmtExcelTtxn} getDmtTxnData={getDmtTxnData} total={total} page={page}/>
        </>
    )
}
export default MainSubSubModule