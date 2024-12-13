import React, { useState } from 'react';

const AllReportMain = () => {
  // Combine all the report sections into one array
  const reportSections = [
    {
      id: 1,
      title: "Order",
      orderPage: [
        { id: 11, name: "Order Summary", link: "#" },
        { id: 22, name: "Party Pending Order", link: "#" },
        { id: 33, name: "Party Order Summary", link: "#" },
        { id: 44, name: "Party Pending Order", link: "#" },
        { id: 55, name: "Party Dispatched Order", link: "#" },
        { id: 66, name: "Product Order Summary", link: "#" },
        { id: 77, name: "Pending Order Summary", link: "#" },
        { id: 88, name: "Dispatch Order Summary", link: "#" },
        { id: 99, name: "Order Register", link: "#" },
      ]
    },
    {
      id: 2,
      title: "Employee Desk",
      orderPage: [
        { id: 11, name: "Employee List", link: "#" },
        { id: 22, name: "Full Work Summery", link: "#" },
        { id: 33, name: "Business Summary", link: "#" },
        { id: 33, name: "Daily Work Summery", link: "#" },
        { id: 33, name: "Month Summery", link: "#" },
        { id: 33, name: "Day Summery", link: "#" },
        { id: 33, name: "Work Summery", link: "#" },
        { id: 33, name: "Salary Summary", link: "#" },
        { id: 33, name: "Expense Bill", link: "#" },
        { id: 33, name: "Leave Summary", link: "#" },
        { id: 33, name: "Leave Status Summery", link: "#" },
        { id: 33, name: "Tour Planning", link: "#" },
        { id: 33, name: "Activity Summery", link: "#" },
        { id: 33, name: "Product Demo", link: "#" },
        { id: 33, name: "Meeting Summery", link: "#" },
        { id: 33, name: "Birth/Anniversary Day", link: "#" },
        { id: 33, name: "HR Profile", link: "#" },
        { id: 33, name: "Attendance with location", link: "#" },
      ]
    },
    {
      id: 3,
      title: "HRMS",
      orderPage: [
        { id: 11, name: "Travel Policy", link: "#" },
        { id: 22, name: "Annual Leave Report", link: "#" },
        { id: 33, name: "Portal Usage Report", link: "#" },
      ]
    },
    {
      id: 4,
      title: "Monthly Plan",
      orderPage: [
        { id: 11, name: "Sales(Product) Planning", link: "#" },
        { id: 22, name: "Team Sales(Product) Planning", link: "#" },
        { id: 33, name: "Sales(Product) Target & Achivement", link: "#" },
        { id: 44, name: "Collection Planning", link: "#" },
        { id: 55, name: "Team Collection Planning", link: "#" },
      ]
    },
    {
      id: 5,
      title: "Annual Achievement",
      orderPage: [
        { id: 11, name: "Sales(Product)", link: "#" },
        { id: 22, name: "Cumulative Achievement", link: "#" },
        { id: 33, name: "Monthly Sales & Collection(Employee Wise)", link: "#" },
        { id: 11, name: "Yearly Sales & Collection(Employee Wise))", link: "#" },
        { id: 11, name: "Yearly Sales & Collection(Month Wise)", link: "#" },
        { id: 11, name: "Business Summary", link: "#" },
        { id: 11, name: "MTD/YTD", link: "#" },
        { id: 11, name: "Account Summary", link: "#" },
        { id: 11, name: "Product Summary", link: "#" },
      ]
    },
    {
      id: 6,
      title: "Account",
      orderPage: [
        { id: 11, name: "Party Business Summery", link: "#" },
        { id: 22, name: "Party Aging Summery", link: "#" },
        { id: 33, name: "Monthly Product Achivement", link: "#" },
        { id: 44, name: "Yearly Product Achivement", link: "#" },
        { id: 55, name: "Party Aging Summery (Above 90 Days)", link: "#" },
        { id: 66, name: "Party Product Sales Analysis", link: "#" },
        { id: 77, name: "Monthly Forecast Report", link: "#" },
      ]
    },
    {
        id: 7,
        title: "AccountProduct Summery",
        orderPage: [
          { id: 11, name: "Depot Product Stock ", link: "#" },
          { id: 22, name: "Dealer Product Stock ", link: "#" },
          { id: 33, name: "Demo Achivement ", link: "#" },
          { id: 44, name: "Demo Material Summery ", link: "#" },
          { id: 55, name: "No Sale Products ", link: "#" },
          { id: 66, name: "Product Pricelist(State) ", link: "#" },
          { id: 77, name: "Product List ", link: "#" },
        ]
      },
      {
        id: 8,
        title: "Party/Dealer",
        orderPage: [
          { id: 11, name: "Existing Party Visit ", link: "#" },
          { id: 22, name: "New Party Visit ", link: "#" },
          { id: 33, name: "New Party Visit Summery ", link: "#" },
          { id: 44, name: "Party/Dealer List ", link: "#" },
          { id: 55, name: "Party/Dealer Site ", link: "#" },
          { id: 66, name: "Party/Dealer Detail ", link: "#" },
          { id: 77, name: "Collection Summery ", link: "#" },
          { id: 88, name: "Day wise visit ", link: "#" },
          { id: 99, name: "Employee wise visit ", link: "#" },
          { id: 10, name: "Party Business Analytics ", link: "#" },
        ]
      },
      {
        id: 9,
        title: " Crop Productions",
        orderPage: [
          { id: 11, name: "Customer Directory ", link: "#" },
          { id: 22, name: "Crop Information", link: "#" },
          { id: 33, name: "Agronomy Practices ", link: "#" },
          { id: 44, name: "Picking & Drying", link: "#" },
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
                    <a
                      href={page.link}
                      className="text-dark text-decoration-none border-bottom pb-2 d-block"
                      style={{ transition: 'color 0.3s ease', }}
                    >
                      {page.name}
                    </a>
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
