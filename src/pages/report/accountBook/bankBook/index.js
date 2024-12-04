import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import BankBook from "../../../../components/kingsonreports/AccountBook/bankBook/BankBook";
import { getVoucherTypeData } from "../../../../api/login/Login";
import { useParams } from "react-router-dom";
import BankBookFilter from "../../../../components/kingsonreports/AccountBook/bankBook/BankBookFilter";

function BankBookPage() {
  const params = useParams();
  const breadCrumbsTitle = {
    title_1: "Account Report",
    title_2: "Account Book",
    title_3: `${params.name}  Book`
  };
  const [data, setData] = useState();
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [start_date, setFromDate] = useState('');
  const [end_date, setToDate] = useState('');

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  useEffect(() => {
    if (!start_date) setFromDate(getCurrentDate());
    if (!end_date) setToDate(getCurrentDate());
  }, [start_date, end_date]);

  const getVocherListDatas = async (name, start, end) => {
    const res = await getVoucherTypeData(name, count, page, start, end);
    setData(res?.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getVocherListDatas(params?.name, start_date, end_date);
  };

  useEffect(() => {
    getVocherListDatas(params?.name, start_date, end_date);
  }, [params.name, start_date, end_date]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data?.voucher.map((item) => item.AccLedgerName));
    }
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item.AccLedgerName)) {
      setSelectedItems(selectedItems.filter((name) => name !== item.AccLedgerName));
    } else {
      setSelectedItems([...selectedItems, item.AccLedgerName]);
    }
  };

  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <BankBookFilter
        title={params?.name}
        fromDate={start_date}
        setFromDate={setFromDate}
        end_date={end_date}
        setend_date={setToDate}
        handleSubmit={handleSubmit}
      />
      <BankBook
        title={params?.name}
        data={data}
        count={count}
        page={page}
        handlePageChange={handlePageChange}
        handleSelectAll={handleSelectAll}
        handleCheckboxChange={handleCheckboxChange}
        selectAll={selectAll}
        selectedItems={selectedItems}
      />
    </>
  );
}

export default BankBookPage;
