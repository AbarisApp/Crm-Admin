import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import InvoiceForm from './invoiceForm/InvoiceForm'
import InvoiceList from './invoiceList/InvoiceList'
import InvoiceSearch from './invoiceSearch/InvoiceSearch'
import InvoiceSearchList from './invoiceSearch/invoceSearchList/InvoiceSearchList'
import { deleteaccount_invoice, deletetravelInvoice, getaccount_invoice, gettravelInvoice } from '../../api/login/Login'
import { message } from 'antd'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

function InvoiceTab() {
  const breadCrumbsTitle = {
    title_1: "Billings",
    title_2: "Invoice",
  }
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
  // console.log(data);
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
    const clone = { ...filterInitial, count: count, paramsid: params?.id, page: input, user_id: window.localStorage.getItem('userIdToken') }
    try {
      const res = await getaccount_invoice(clone)
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
      const res = await deleteaccount_invoice(id)
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

  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <section className='m-4'>
        <InvoiceSearch params={params} filterInitial={filterInitial} handleChange={handleChange} getTransitionReport={getTransitionReport} />
        <InvoiceSearchList params={params} totalCount={totalCount} page={page} onChangeVal={onChangeVal} data={data} count={count} confirm={confirm} loading={loading} />
        <ToastContainer />
      </section>
    </>
  )
}

export default InvoiceTab
