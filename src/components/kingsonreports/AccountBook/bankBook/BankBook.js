import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Empty, Pagination } from "antd";
import ExportPdf from "../../../../common/exportPdf/ExportPdf";
import { DownloadExcel } from "../../../../common/downloadExcel/DownLoadExcel";
import { Button } from "react-bootstrap";
import { downloadJSON } from "../../../../common/exportJson/exportJson";
import BankBookPdf from "./bankBookPdf/BankBookPdf";
import { PDFViewer } from "@react-pdf/renderer";

function BankBook({ title, data, page, count, handleSelectAll, handlePageChange, handleCheckboxChange, selectedItems, selectAll }) {
  const [pdf, setPdf] = useState(false)

  const pdfGenerateDefault = () => {
    setPdf(!pdf)
  }

  return (
    <>
      <div>
        <div className="row m-4">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>{title} Book</b></h4>
                    <div>
                      <ExportPdf />
                      <button className='btn-sm py-1 px-2 bg-primary me-2' onClick={pdfGenerateDefault}>
                        Print
                      </button>
                      <button className='btn-sm py-1 px-2 bg-primary' onClick={DownloadExcel}>
                        <span><i className="fa-sharp fa-solid fa-file-excel"></i></span> &nbsp;Export Excel
                      </button>
                      <button className="btn-sm py-1 px-2 bg-secondary ms-2" onClick={() => downloadJSON(data, title)}>
                        <span><i className="fa-solid fa-file-code"></i></span> &nbsp;Export JSON
                      </button>
                    </div>
                  </div>
                  <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                    <table id="table-to-xls" className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                      <thead>
                        <tr role="row">
                          <th style={{ width: "50px" }}>
                            <small>Select All</small>
                            &nbsp;
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAll}
                            />
                          </th>
                          <th style={{ width: "150px", textAlign: "center" }}>Vch Date</th>
                          <th style={{ width: "150px", textAlign: "center" }}>Vch No</th>
                          <th style={{ width: "150px", textAlign: "center" }}>Account Ledger Name</th>
                          <th style={{ width: "150px", textAlign: "center" }}>Cr Amount</th>
                          <th style={{ width: "150px", textAlign: "center" }}>Dr Amount</th>
                          <th style={{ width: "150px", textAlign: "center" }}>Narration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.voucher?.length === 0 ? (
                          <tr>
                            <td colSpan={7} className="text-center">
                              <Empty />
                            </td>
                          </tr>
                        ) : (
                          data?.voucher?.map((item, i) => (
                            <tr role="row" key={i}>
                              <td>
                                <input
                                  type="checkbox"
                                  checked={selectedItems.includes(item?.AccLedgerName)}
                                  onChange={() => handleCheckboxChange(item)}
                                />
                              </td>
                              <td>{new Date(item?.createdAt).toLocaleDateString("en-GB")}</td>
                              <td className="px-2">{item?.voucherNo}</td>
                              <td className="px-2 text-start">{item?.accLedgerId?.name}</td>
                              <td className="text-end p-0">
                                {item?.crAmt ? `${item?.crAmt}/-` : "0 /-"}
                              </td>
                              <td className="text-end px-2">
                                {item?.drAmt ? `${item?.drAmt}/-` : "0 /-"}
                              </td>
                              <td className="text-start px-2">{"Narration "}</td>
                            </tr>
                          ))
                        )}

                      </tbody>
                    </table>
                    <div className="dataTables_info" role="status" aria-live="polite">
                      Total {data?.totalCount} entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers">
                      <Pagination
                        current={page}
                        pageSize={count}
                        total={data?.totalCount}
                        onChange={handlePageChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="text-center" />
      {pdf && <div className="pdfcs">
        <div className="loader-overlay">
          <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <BankBookPdf />
          </PDFViewer>
        </div>

      </div>}
    </>
  );
}

export default BankBook;
