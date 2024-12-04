
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import '../../components/distributer/distributer.css'
import DistributerKycStatus from './distributerKycStatus/DistributerKycStatus'
import DistributerList from './distributerList/DistributerList'
import { useEffect, useState } from 'react'
import { getCompanyInfo, getLength, reailerDistIdAgainst, reailerDistIdAgainstFillers, updateDistributerApproval } from '../../api/login/Login'
import { toast } from 'react-toastify'
import DisterbuterFIlter from './distributerKycStatus/DisterbuterFIlter'
function Distributer() {
    const params = useParams()
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false);
    const [totalCount, setTotalCount] = useState()
    const userId = params?.id
    // const [userTypeLength, setUserTypeLength] = useState([]);
    const [page, setPage] = useState(0)
    const count = 10
    const [approval, setApproveVal] = useState(null)
    const [initialValues, setInitialValues] = useState(
        { merchant: "", page: page, count: count, id: params?.id }
    );


    const submitForm = async (values) => {
        setLoading(true)
        try {
            const res = await reailerDistIdAgainstFillers({ ...values, mobile: values.mobile.slice(1), page: 0, count: count, id: params?.id });
            setState(res?.data);
            setLoading(false)
        } catch (error) {

        }
    }
    const getReailerDistIdAgainst = async (page) => {
        setLoading(true)
        try {
            const res = await reailerDistIdAgainst(page, count, userId)
            setTotalCount(res?.data?.totalCount)
            console.log(res?.data);
            
            setState(res?.data)
        } catch (error) {

        }
        setLoading(false)
    }

    const onChangeVal = (e) => {
        getReailerDistIdAgainst(e - 1)
        setPage(e - 1)
    };

    useEffect(() => {
        getReailerDistIdAgainst(page)
    }, [params?.id])
    useEffect(() => {
        getReailerDistIdAgainst(page)
    }, [])

    const [dowm, setDown] = useState(false)

    const dropdownOpen = () => {
        setDown(!dowm)
    };

    const toastSuccessMessage = () => {
        toast.success(`Status Updated Successfully.`, {
            position: "top-center",
        });
    };
    const errorMessage = () => {
        toast.error(`Status Not Updated.`, {
            position: "top-center"
        })
    }


    const handleChange = async (e, id) => {
        const val = e.target.value;
        console.log(val);
        setLoading(true);
        try {
            const res = await updateDistributerApproval({ is_approved: val }, id);
            if (res && res.statusCode === "200") {
                setApproveVal(val);
                toastSuccessMessage();
                getReailerDistIdAgainst(page);
            } else {
                errorMessage();
            }
        } catch (error) {
            console.error(error);
            errorMessage();
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let isMounted = true;

        const handleChange = async (e, id) => {
            const val = e.target.value;
            console.log(val);
            setLoading(true);

            try {
                const res = await updateDistributerApproval({ is_approved: val }, id);
                if (isMounted) {
                    if (res && res.statusCode === "200") {
                        setApproveVal(val);
                        toastSuccessMessage();
                        getReailerDistIdAgainst(page);
                    } else {
                        errorMessage();
                    }
                }
            } catch (error) {
                console.error(error);
                if (isMounted) {
                    errorMessage();
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        return () => {
            isMounted = false;
        };

    }, []);

    const [dynemicFields , setDynemic] = useState()

    useEffect(() => {
      const getData = async ()=>{
        try {
            const res = await getCompanyInfo()
            setDynemic(res.data.companyType)
        } catch (error) {

        }
      }
      getData()
    }, [])

    const breadCrumbsTitle = {
        id: "1",
        title_1: "Members",
        title_2: params?.name,
    }
    const [selectedUsers, setSelectedUsers] = useState([]);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            {/* <DistributerKycStatus submitForm={submitForm} params={params} initialValues={initialValues} /> */}
            <DisterbuterFIlter dynemicFields={dynemicFields} params={params} selectedUsers={selectedUsers} submitForm={submitForm} getReailerDistIdAgainst={getReailerDistIdAgainst} />
            <DistributerList totalCount={totalCount} dynemicFields={dynemicFields} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} loading={loading} params={params} state={state} handleChange={handleChange} onChangeVal={onChangeVal} approval={approval} />
        </>
    )
}
export default Distributer