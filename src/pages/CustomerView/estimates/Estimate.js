import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { PDFViewer } from "@react-pdf/renderer";
import PdfBanks from "./pdfBank/PdfBanks";

const Estimate = () => {
  const estimateDetails = {
    estimateNumber: "EST-000001",
    to: "Gothaer Versicherungen in Gothaer",
    address: "Wittener Str. 3, 44149 Dortmund, Germany",
    city: "Dortmund Nordrhein-Westfalen, DE 44149",
    estimateDate: "2024-06-21",
    expiryDate: "2024-06-28",
    saleAgent: "Test Admin",
    items: [
      { id: 1, name: "1111", qty: 1, rate: 1, tax: "0%", amount: 1 },
    ],
    subTotal: 1,
    total: 1,
  };
  const [pdf, setPdf] = useState(false)

  const pdfGenerateDefault = () => {
    setPdf(!pdf)
  }


  return (
    <div className="custom-container">
      <div className="custom-header">
        <h2>{estimateDetails.estimateNumber}</h2>
        <p>To: {estimateDetails.to}</p>
        <p>{estimateDetails.address}<br />{estimateDetails.city}</p>
        <p>
          Estimate Date: {estimateDetails.estimateDate}<br />
          Expiry Date: {estimateDetails.expiryDate}<br />
          Sale Agent: {estimateDetails.saleAgent}
        </p>
      </div>

      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Tax</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {estimateDetails.items.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>${item.rate.toFixed(2)}</td>
              <td>{item.tax}</td>
              <td>${item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="custom-totals">
        <table>
          <tbody>
            <tr>
              <td>Sub Total</td>
              <td>${estimateDetails.subTotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${estimateDetails.total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={pdfGenerateDefault} className="custom-btn">Download PDF</button>
      {pdf && <div className="pdfcs">
        <div className="loader-overlay">
          <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <PdfBanks />
          </PDFViewer>
        </div>

      </div>}
    </div>
  );
};

export default Estimate;
