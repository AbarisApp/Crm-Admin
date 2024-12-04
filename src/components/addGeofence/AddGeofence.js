import React from "react";

export const AddGeofence = () => {
  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card geofence">
          <div className="row mt-3 mb-4">
            <div className="col-xl-4">
              <div className="d-flex align-items-center">
                <label className="me-3">Search:</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="col-xl-3">
              <button type="button" className="btn btn-danger w-100">
                Delete Selected Geofence
              </button>
            </div>
            <div className="col-xl-3">
              <button type="button" className="btn btn-success w-100">
                Save Geofence
              </button>
            </div>
            
          </div>
        </div>
        {/* map ifrem */}
        <div className="row">
            <div className="co-xl-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.1244195092822!2d77.28046939999999!3d28.56228955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38c9ea28f03%3A0xcf085976f2110601!2sJamia%20Millia%20Islamia%2C%20Jamia%20Nagar%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1727333879138!5m2!1sen!2sin" width="100%" height="500px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
      </div>
    </div>
  );
};
