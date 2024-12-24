import { Pagination, Popconfirm } from "antd"
import { useEffect, useState } from "react"
import { CiMail } from "react-icons/ci"
import { TiDownload, TiTick } from "react-icons/ti"
import { Link, useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { deletesflightVoucher, getByIdflightVoucher, getflightVoucher } from "../../../../api/login/Login"
import VoucherFlightPdf from "./voucherFlightPdf/VoucherFlightPdf"
import { pdf } from "@react-pdf/renderer"
import { FaRegFilePdf } from "react-icons/fa"



const VoucherFlightList = () => {
    const params = useParams()
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
    const [allData, setAllData] = useState(null)
    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
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
        const clone = { ...filterInitial, count: count, page: input, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await getflightVoucher(clone)
            if (res?.error == false) {
                setTotalCount(res?.totalCount)
                setData(res?.data)
            }
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        // console.log(e - 1);

        setPage(e - 1)
        getTransitionReport(e - 1)
    };

    const toastSuccessMessage = (message) => {
        toast.success(`Delete Success`, {
            position: "top-right",
        });
    };

    const confirm = (id) => {
        // console.log('setMental');
        deleteData(id)
    }

    const deleteData = async (id) => {
        try {
            const res = await deletesflightVoucher(id)
            // console.log(res);
            if (res?.error == false) {
                toastSuccessMessage()
                getTransitionReport(0)
            } else {
                alert(res?.message)
            }
        } catch (error) {

        }
    }

    const getByIdData = async (id) => {
        try {
            const res = await getByIdflightVoucher(id);
            if (res?.data) {
                // setPdfData(res.data);
                openPdfInNewTab(res.data);
            }
        } catch (error) {
            console.error("Error fetching invoice data:", error);
        }
    };

    const openPdfInNewTab = async (data) => {
        const blob = await pdf(<VoucherFlightPdf pdfData={data} />).toBlob();
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
    };

    const pdfGenerateDefault = (item) => {
        if (item?._id) {
            getByIdData(item._id);
        }
    };

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        getTransitionReport(0)
    }, [])
    return (
        <>
            <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                <div className="dt-buttons">
                    <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="banner-tblwrapper" type="button">
                        <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                    </button>
                </div>
                <table id="banner-tblwrapper" className="table dataTable no-footer exppdf" role="grid" aria-describedby="banner-tblwrapper_info">
                    <thead>
                        <tr role="row">
                            <th style={{ width: '50px' }}>S.No</th>
                            <th style={{ width: '150px' }}>Customer Name</th>
                            <th style={{ width: '150px' }}>Booking Date</th>
                            <th style={{ width: '150px' }}>Number of Passenger</th>
                            <th style={{ width: '150px' }}>Total Fare</th>
                            <th style={{ width: '150px' }}>Create Date</th>
                            <th style={{ width: '150px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data?.map((item, i) => {
                            return <tr role="row" >
                                <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                <td className="text-center">{item?.firstname} {item?.lastname}</td>
                                <td className="text-center">{item?.booking_date}</td>
                                <td className="text-center">{item?.no_of_passenger}</td>
                                <td className="text-center">{item?.total_fare}</td>
                                <td className="text-center">{item?.createdAt}</td>
                                <td>
                                    <div className="d-flex">
                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                            <TiTick style={{ marginBottom: '8px' }} />
                                        </Link>
                                        {/* <button type="button" className="btn btn-primary shadow btn-xs sharp me-1">
                                        <CiMail style={{ marginBottom: '8px' }} />
                                    </button> */}
                                        <button type="button" className="btn-sm py-1 px-2 bg-primary" onClick={() => pdfGenerateDefault(item)}>
                                            <FaRegFilePdf />
                                        </button>
                                        <Link to={`/travel-flight-Add/${params?.id}/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                            <i className="fa fa-pencil" />
                                        </Link>
                                        <Popconfirm
                                            title="Delete cow Flight Voucher!"
                                            description="Are you sure to delete?"
                                            onConfirm={() => confirm(item?._id)}
                                            // onCancel={cancel}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                <i className="fa fa-trash" />
                                            </Link>
                                        </Popconfirm>
                                    </div>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>

                <div className="dataTables_info" role="status" aria-live="polite">
                    Total {totalCount} entries
                </div>
                <div className="dataTables_paginate paging_simple_numbers">
                    <Pagination
                        defaultCurrent={1}
                        onChange={onChangeVal}
                        total={totalCount}
                    />
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default VoucherFlightList