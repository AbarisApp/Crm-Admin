import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllReportMain = () => {
  // Combine all the report sections into one array
  const reportSections = [
    {
      id: 1,
      title: "Order",
      orderPage: [
        { id: 11, name: "Order Summary", link: "/ordersummery" },
        { id: 22, name: "Party Pending Order", link: "/partypending" },
        { id: 33, name: "Party Order Summary", link: "/partyorder" },
        { id: 44, name: "Party Pending Order", link: "/partypendingorder" },
        { id: 55, name: "Party Dispatched Order", link: "/partydispatched" },
        { id: 66, name: "Product Order Summary", link: "/productordersummery" },
        { id: 77, name: "Pending Order Summary", link: "/pendingordersummery" },
        { id: 88, name: "Dispatch Order Summary", link: "/dispatachorder" },
      ]
    },
    {
      id: 2,
      title: "Employee Desk",
      orderPage: [
        { id: 11, name: "Employee List", link: "/employee-list" },
        { id: 22, name: "Full Work Summery", link: "/full-summery" },
        { id: 33, name: "Business Summary", link: "/business-summery" },
        { id: 44, name: "Daily Work Summery", link: "/daily-summery" },
        { id: 55, name: "Month Summery", link: "/month-summery" },
        { id: 66, name: "Day Summery", link: "/day-summery" },
        { id: 77, name: "Work Summery", link: "/work-summery" },
        { id: 88, name: "Salary Summary", link: "/salary-summery" },
        { id: 99, name: "Expense Bill", link: "/expensive-bill" },
        { id: 10, name: "Leave Summary", link: "/leave-summery" },
        { id: 11, name: "Leave Status Summery", link: "/leave-status" },
        { id: 12, name: "Tour Planning", link: "/tour-planning" },
        { id: 13, name: "Activity Summery", link: "active-summery" },
        { id: 14, name: "Product Demo", link: "/product-demo" },
        { id: 15, name: "Meeting Summery", link: "/meeting-summery" },
        { id: 16, name: "Birth/Anniversary Day", link: "/birth-day" },
        { id: 17, name: "HR Profile", link: "/hr-profile" },
        { id: 18, name: "Attendance with location", link: "/with-location" },
      ]
    },
    {
      id: 3,
      title: "HRMS",
      orderPage: [
        { id: 11, name: "Travel Policy", link: "/travelpolicy" },
        { id: 22, name: "Annual Leave Report", link: "aunnalterm" },
        { id: 33, name: "Portal Usage Report", link: "/portalusage" },
      ]
    },
    {
      id: 4,
      title: "Monthly Plan",
      orderPage: [
        { id: 11, name: "Sales(Product) Planning", link: "/saleproducting" },
        { id: 22, name: "Team Sales(Product) Planning", link: "/teamsales" },
        { id: 33, name: "Sales(Product) Target & Achivement", link: "/salestarget" },
        { id: 44, name: "Collection Planning", link: "/collectionplanning" },
        { id: 55, name: "Team Collection Planning", link: "/teamcollectionplanning" },
      ]
    },
    {
      id: 5,
      title: "Annual Achievement",
      orderPage: [
        { id: 11, name: "Sales(Product)", link: "/productsale" },
        { id: 22, name: "Cumulative Achievement", link: "/culumalaive" },
        { id: 33, name: "Monthly Sales & Collection(Employee Wise)", link: "/monthsale" },
        { id: 44, name: "Yearly Sales & Collection(Employee Wise))", link: "/yearsales" },
        { id: 55, name: "Yearly Sales & Collection(Month Wise)", link: "/monthsale" },
        { id: 66, name: "Business Summary", link: "/summary" },
        { id: 77, name: "MTD/YTD", link: "/mtdytd" },
        { id: 88, name: "Account Summary", link: "/accountsummary" },
        { id: 99, name: "Product Summary", link: "/productsummary" },
      ]
    },
    {
      id: 6,
      title: "Account",
      orderPage: [
        { id: 11, name: "Party Business Summery", link: "/customepartyreport" },
        { id: 22, name: "Party Aging Summery", link: "/customepartyreportagingreport" },
        { id: 33, name: "Monthly Product Achivement", link: "/monthlyproductachivement" },
        { id: 44, name: "Yearly Product Achivement", link: "/yearlyproductachivement" },
        { id: 55, name: "Party Aging Summery (Above 90 Days)", link: "/about90days" },
        { id: 66, name: "Party Product Sales Analysis", link: "/saleanalysis" },
        { id: 77, name: "Monthly Forecast Report", link: "/forcestreport" },
      ]
    },
    {
        id: 7,
        title: "AccountProduct Summery",
        orderPage: [
          { id: 11, name: "Depot Product Stock ", link: "/depotproductstock" },
          { id: 22, name: "Dealer Product Stock ", link: "/dealerproductstock" },
          { id: 33, name: "Demo Achivement ", link: "/demoachivement" },
          { id: 44, name: "Demo Material Summery ", link: "/demomaterial" },
          { id: 55, name: "No Sale Products ", link: "/nosaleProducts" },
          { id: 66, name: "Product Pricelist(State) ", link: "/priceliststate" },
          { id: 77, name: "Product List ", link: "/priceproductlist" },
        ]
      },
      {
        id: 8,
        title: "Party/Dealer",
        orderPage: [
          { id: 11, name: "Existing Party Visit ", link: "/existing-party-visit" },
          { id: 22, name: "New Party Visit ", link: "/new-party-visit" },
          { id: 33, name: "New Party Visit Summery ", link: "/new-party-visit-summery" },
          { id: 44, name: "Party/Dealer List ", link: "/party-dealer-list" },
          { id: 55, name: "Party/Dealer Site ", link: "/party-dealer-site" },
          { id: 66, name: "Party/Dealer Detail ", link: "/party-dealer-detail" },
          { id: 77, name: "Collection Summery ", link: "/collection-summery" },
          { id: 88, name: "Day wise visit ", link: "/day-wise-visit" },
          { id: 99, name: "Employee wise visit ", link: "/employee-wise-visit" },
          { id: 10, name: "Party Business Analytics ", link: "/Party-business-analytics" },
        ]
      },
      {
        id: 9,
        title: " Crop Productions",
        orderPage: [
          { id: 11, name: "Customer Directory ", link: "/customer-directory" },
          { id: 22, name: "Crop Information", link: "/crop-information" },
          { id: 33, name: "Agronomy Practices ", link: "/agronomy-practices" },
          { id: 44, name: "Picking & Drying", link: "/picking-drying" },
        ]
      },
  ];

  return (
    <div className="card bg-light">
        <h2 className='bg-black p-2 fs-4 text-light'>All Report</h2>
      <div className="row mt-3">
        {reportSections.map((section) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={section.id}>
            <div className="card" style={{ height: "270px", }}>
              <h3 className="fs-4 border-bottom border-black pb-2 ">{section.title}</h3>
              <ul className="list-unstyled" style={{overflow: "auto"}}>
                {section.orderPage.map((page) => (
                  <li key={page.id} className="mb-2">
                    <Link
                      to={page.link}
                      className="text-dark text-decoration-none border-bottom pb-2 d-block"
                      style={{ transition: 'color 0.3s ease', }}
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReportMain;
