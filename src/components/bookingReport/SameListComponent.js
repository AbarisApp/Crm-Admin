import React, { useState } from "react";
import { Pagination } from "antd";
import ExportPdf from "../../common/exportPdf/ExportPdf";
import { ToastContainer, toast } from "react-toastify";
import { DownloadExcel } from "../../common/downloadExcel/DownLoadExcel";

function SameListComponent({ onChangeVal, aepsData, title }) {
  return (
    <>
      <section className="ListDistributer exppdf">
        <div className="row m-4">
          <div className="col-xl-12">
            <div className="card">
            <div className="row mb-5 mt-3">
                <div className="col-xl-6">
                  <button type="button" className="btn btn-primary">Copy</button>
                  <button type="button" className="btn btn-secondary">Excel</button>
                  <button type="button" className="btn btn-success">CSV</button>
                  <button type="button" className="btn btn-danger">PDF</button>
                </div>
                <div className="col-xl-6">
                  <div className="d-flex align-items-center">
                    <label className="me-3">Search:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search" />
                  </div>
                  
                </div>
            </div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th className="">S.No</th>
                    <th className="">Customer</th>
                    <th className="">Vechicle</th>
                    <th className="">Type</th>
                    <th className="">Driver</th>
                    <th className="w-25">From To</th>
                    <th className="">Distance</th>
                    <th className="">Amount</th>
                    <th className="">Trip Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Siva</td>
                    <td>Siva</td>
                    <td>Siva</td>
                    <td>Siva</td>
                    <td>Siva</td>
                    <td>Siva</td>
                    <td>Siva</td>
                    <td>Siva</td>
                    <td>Siva</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SameListComponent;
