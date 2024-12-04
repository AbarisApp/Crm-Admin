import { Pagination } from "antd"
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import BankPaymentFilter from "./bankPaymentFilter/BankPaymentFilter";
import { useEffect, useState } from "react";
import { getTcs_certificate, getVoucherTypeBank, getVoucherTypeData, vocherAddBankList } from "../../../../api/login/Login";




const BankPayment = ({ heading, apiPass }) => {
    const navigate = useNavigate();
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Bank / Cash',
        title_3: `${heading}`,
        path_2: ``
    };




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
    console.log(data);

    const [allData, setAllData] = useState(null)
    const [filterInitial, setFilterInitial] = useState({
        count: '',
        page: '',
        end_date: getCurrentDate(),
        start_date: getCurrentDate(),

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
        const clone = { ...filterInitial, count: count, page: input, vocherType: apiPass, user_id: window.localStorage.getItem('userIdToken') }
        console.log(clone);

        try {
            const res = await getVoucherTypeBank(clone)
            console.log(res?.data);

            setTotalCount(res?.data?.totalCount)
            setData(res?.data?.voucher)
            // allDataWalletReport()
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        console.log(e - 1);

        setPage(e - 1)
        getTransitionReport(e - 1)
    };


    const ResetData = async () => {
        setLoading(true)
        const obj = {
            count: 10,
            page: 0,
            min_amt: 0,
            max_amt: 0,
            end_date: '',
            start_date: '',
            type: '',
            trans_type: '',
            order_id: '',
            txn_id: '',
            sortType: '',
            sortType: '',
            user_id: window.localStorage.getItem('userIdToken')
        }
        try {
            // const res = await walletsREports(obj)
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.wallet)
            // setFilterInitial({
            //     end_date: '',
            //     start_date: '',
            //     type: '',
            //     trans_type: '',
            //     order_id: '',
            //     txn_id: '',
            // })
        } catch (error) {

        }
        setLoading(false)
    }


    const [sortDirection, setSortDirection] = useState();
    // console.log(sortDirection);

    const [assending, setDecending] = useState(1)

    const sortByColumn = async (key) => {
        if (sortDirection == 'asc') {
            setDecending(1)
        } else {
            setDecending(-1)
        }

        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');

        setLoading(true)

        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, sortType: +assending, sortKey: key, user_id: window.localStorage.getItem('userIdToken') }
        // console.log(clone);
        try {
            // const res = await walletsREports(clone)
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.wallet)

        } catch (error) {

        }
        setLoading(false)
    };

    const allDataWalletReport = async () => {
        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') }
        try {
            // const res = await allDataWallets(clone)
            // setAllData(res?.data?.data?.wallet);
        } catch (error) {

        }
    }

    const openFormOnDoubleClick = (itemId) => {
        navigate(`/bankpayment/update/${heading}/${itemId}`); // Navigate to the form page with the item ID
    };

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        allDataWalletReport()
        getTransitionReport(0)

    }, [apiPass])


    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            {/* <GroupSummaryFilter /> */}
            <BankPaymentFilter filterInitial={filterInitial} handleChange={handleChange} getTransitionReport={getTransitionReport} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    {heading}
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to={`/bankpayment/add/${heading === 'Bank Payment' ? 'Add Bank Payment' : heading === 'Bank Receipt' ? 'Add Bank Receipt' : heading === 'Cash Receipt' ? 'Add Cash Receipt' : heading === 'Cash Payment' ? 'Add Cash Payment' : ''} `} role="button" aria-controls="offcanvasExample">+ Add New</Link>
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                <div className="dt-buttons">
                                    <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                        <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                    </button>
                                </div>
                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '150px' }}>A</th>
                                            <th style={{ width: '150px' }}>Date</th>
                                            <th style={{ width: '150px' }}>No</th>
                                            <th style={{ width: '150px' }}>Opp. A/C</th>
                                            <th style={{ width: '150px' }}>City</th>
                                            <th style={{ width: '150px' }}>Chq / DD No.</th>
                                            <th style={{ width: '150px' }}>Amount</th>
                                            <th style={{ width: '150px' }}>Narration</th>
                                            <th style={{ width: '150px' }}>Created By</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data?.map((item) => {
                                            return <tr role="row" className="odd" key={item?._id} onDoubleClick={() => openFormOnDoubleClick(item._id)}>
                                                <td >
                                                    --
                                                </td>
                                                <td >
                                                    {item?.voucherDate}
                                                </td>
                                                <td >
                                                    {item?.voucherNo
                                                    }
                                                </td>
                                                <td >
                                                    {item?.accLedgerId?.name}
                                                </td>
                                                <td >
                                                    {item?.city}
                                                </td>
                                                <td >
                                                    {item?.cheque_no}
                                                </td>
                                                <td >
                                                    {item?.closing_amount}
                                                </td>
                                                <td >
                                                    {item?.narration}
                                                </td>
                                                <td >
                                                    {item?.createdAt}
                                                </td>
                                                <td>
                                                    <Link to={`/bankpayment/update/${heading}/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                                <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    Total {totalCount} entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        defaultCurrent={1}
                                        onChange={onChangeVal}
                                        total={totalCount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default BankPayment