import React, { useState } from "react";

function HotelViewVoucherSearch() {
  const today = new Date().toISOString().split("T")[0];
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(today);
  const [isLoading, setIsLoading] = useState(false);

  const handleView = () => {
    if (!fromDate || !toDate) {
      alert("Please select both From and To dates.");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Fetching data from ${fromDate} to ${toDate}`);
    }, 1500);
  };

  return (
    <div className="card mt-4">
      {/* Filters Section */}
      <div className="row g-3 align-items-center mb-3">
        <div className="col-xl-2 col-md-3 col-sm-6">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="bookingType"
              id="hotelCruise"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="hotelCruise">
              Hotel/Cruise
            </label>
          </div>
        </div>
        <div className="col-xl-2 col-md-3 col-sm-6">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="bookingType"
              id="taxi"
            />
            <label className="form-check-label" htmlFor="taxi">
              Taxi
            </label>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <label className="me-2">From:</label>
            <input
              type="date"
              className="form-control"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12">
          <div className="d-flex align-items-center">
            <label className="me-2">To:</label>
            <input
              type="date"
              className="form-control"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
        <div className="col-xl-1 col-md-3 col-sm-6">
          <button
            className="btn btn-outline-primary w-100"
            onClick={handleView}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              "View"
            )}
          </button>
        </div>
        <div className="col-xl-1 col-md-3 col-sm-6">
          <button className="btn btn-primary w-100">New</button>
        </div>
      </div>
    </div>
  );
}

export default HotelViewVoucherSearch;
