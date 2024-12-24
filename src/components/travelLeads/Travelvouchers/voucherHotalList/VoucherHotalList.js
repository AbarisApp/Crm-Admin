import { Pagination, Popconfirm } from "antd"
import { BsTicketPerforatedFill } from "react-icons/bs"
import { CiMail } from "react-icons/ci"
import { FaEye, FaRegFilePdf } from "react-icons/fa"
import { TiDownload, TiTick } from "react-icons/ti"
import { Link, useParams } from "react-router-dom"
import SendMailModal from "./sendMailModal/SendMailModal"
import { useEffect, useState } from "react"
import { PDFDownloadLink } from "@react-pdf/renderer"
import { Button } from "react-bootstrap"
import { VoucherAfterPayment } from "../../../../common/voucherAfterPaymentPdf/voucherAfterPaymentPdf/VoucherAfterPaymentPdf"
import { toast } from "react-toastify"
import { deleteHotelVoucher, getByIdhotelVoucher, getHotelVoucher } from "../../../../api/login/Login"
import VoucherHotalPdf from "./voucherHotalPdf/VoucherHotalPdf"
import { pdf } from "@react-pdf/renderer";


const VoucherHotalList = () => {
    const params = useParams()

    const [modalShow, setModalShow] = useState(false);
    const [modalidData, setModalIddata] = useState(null)
    const modelOpen = (id) => {
        setModalIddata(id)
        setModalShow(true)

    }

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
            const res = await getHotelVoucher(clone)
            setTotalCount(res?.totalCount)
            setData(res?.data)
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
            const res = await deleteHotelVoucher(id)
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

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        getTransitionReport(0)
    }, [])



    const getByIdData = async (id) => {
        try {
            const res = await getByIdhotelVoucher(id);
            if (res?.data) {
                // setPdfData(res.data);
                openPdfInNewTab(res.data);
            }
        } catch (error) {
            console.error("Error fetching invoice data:", error);
        }
    };

    const openPdfInNewTab = async (data) => {
        const blob = await pdf(<VoucherHotalPdf pdfData={data} />).toBlob();
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
    };

    const pdfGenerateDefault = (item) => {
        if (item?._id) {
            getByIdData(item._id);
        }
    };

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
                            <th style={{ width: '150px' }}>City</th>
                            <th style={{ width: '150px' }}>Hotal</th>
                            <th style={{ width: '150px' }}>Checkin</th>
                            <th style={{ width: '150px' }}>Checkin Time</th>
                            <th style={{ width: '150px' }}>Stay (Days)</th>
                            <th style={{ width: '150px' }}>Create Date</th>
                            <th style={{ width: '150px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data?.map((item, i) => {
                            return <tr role="row" >
                                <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                <td className="text-center">
                                    {item?.city?.name}
                                </td>
                                <td className="text-center">
                                    {item?.hotel?.hotel_name}
                                </td>
                                <td className="text-center">
                                    {item?.checkin_date}
                                </td>
                                <td className="text-center">
                                    {item?.checkin_time}
                                </td>
                                <td className="text-center">
                                    ---
                                </td>
                                <td className="text-center">
                                    {item?.createdAt}
                                </td>
                                <td>
                                    <div className="d-flex">
                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                            <TiTick style={{ marginBottom: '8px' }} />
                                        </Link>
                                        <button type="button" className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => modelOpen(item?._id)}>
                                            <CiMail style={{ marginBottom: '8px' }} />
                                        </button>
                                        {/* <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                        <TiDownload style={{ marginBottom: '8px' }} />
                                    </Link> */}
                                        {/* <Button variant="" className="btn-sm py-1 px-2 bg-primary">
                                            <PDFDownloadLink style={{ color: 'white', textDecoration: 'none' }} document={<VoucherAfterPayment abc={'Downloaded pdf'} />} fileName="invoice.pdf">
                                                {({ loading }) => (loading ? 'Loading document...' : 'VOUCHER AFTER PAYMENT')}
                                            </PDFDownloadLink>
                                        </Button> */}

                                        <button type="button" className="btn-sm py-1 px-2 bg-primary" onClick={() => pdfGenerateDefault(item)}>
                                            <FaRegFilePdf />
                                        </button>
                                        <Link to={`/travel-Vouchers-Add/${params?.id}/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                            <i className="fa fa-pencil" />
                                        </Link>
                                        <Popconfirm
                                            title="Delete cow feed!"
                                            description="Are you sure to VOUCHERS HOTEL?"
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

            <SendMailModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalidData={modalidData}
            />
        </>
    )
}

export default VoucherHotalList