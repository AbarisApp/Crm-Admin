import React, { useState } from 'react'
import ParnerDetails from './ParnerDetails';
import LicenseDetails from './LicenseDetails';
import SalesSegment from './SalesSegment';
import SalesTurnover from './SalesTurnover';
import CommunnicationBankDetails from './CommunnicationBankDetails';
import DocumentDetails from './DocumentDetails';
import UploadSignatures from './UploadSignatures';

const AddManageTabs = () => {
    const tabsData = [
        { id: 1, title: "Parner Details", content: <ParnerDetails /> },
        { id: 2, title: "License Details", content: <LicenseDetails /> },
        { id: 3, title: "Sales Turnover-Segment Wise", content: <SalesSegment /> },
        { id: 4, title: "Sales Turnover", content: <SalesTurnover /> },
        { id: 5, title: "Communnication/Bank Details", content: <CommunnicationBankDetails /> },
        { id: 6, title: "Infrastructure/Document Details", content: <DocumentDetails />}, 
        { id: 7, title: "Upload Signatures", content: <UploadSignatures />},
      ];
    
      const [activeTab, setActiveTab] = useState(tabsData[0].id);
    
      const handleTabClick = (id) => {
        setActiveTab(id);
      };
  return (
    <div className="    ">
    <div className="tabs">
      <ul className="nav nav-tabs">
        {tabsData.map((tab) => (
          <li
            key={tab.id}
            className={`nav-item ${activeTab === tab.id ? "active" : ""}`}
          >
            <button
              className="nav-link"
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content mt-3">
        {tabsData.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="tab-pane fade show active " >
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
    <div className="col-12 text-center">
        <button type="button" className="btn btn-primary ">
          Submit
        </button>
        <button type="button" className="btn btn-danger">
          Reset
        </button>
      </div>
  </div>
  )
}

export default AddManageTabs