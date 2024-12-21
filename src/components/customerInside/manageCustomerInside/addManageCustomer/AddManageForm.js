import React, { useState } from "react";

const AddManageForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="row mt-3">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Firm Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              select
            </label>
            <select className="form-select" id="country">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Lat
            </label>
            <input
              type="text"
              placeholder="Lat"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Long
            </label>
            <input
              type="text"
              placeholder="Long"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Country
            </label>
            <input
              type="text"
              placeholder="Country"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              At/City
            </label>
            <input
              type="text"
              placeholder="input destination Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Pincod
            </label>
            <input
              type="number"
              placeholder="Long"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Addi
            </label>
            <select className="form-select" id="country">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Cust.Group
            </label>
            <select className="form-select" id="country">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Aadhar
            </label>
            <input
              type="Number"
              placeholder="Aadhar Card No"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              PAN No.
            </label>
            <input
              type="Number"
              placeholder="PAN No."
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Contact No
            </label>
            <input
              type="Number"
              placeholder="Contact No"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Contact No2
            </label>
            <input
              type="Number"
              placeholder="Contact No2"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Office No
            </label>
            <input
              type="Number"
              placeholder="Office No"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Depot (Godown) Name
            </label>
            <input
              type="text"
              placeholder="Input Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Select Beat
            </label>
            <select className="form-select" id="country">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Transport
            </label>
            <input
              type="text"
              placeholder="Prefered Transport"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Destination
            </label>
            <input
              type="text"
              placeholder="Delivery Destination"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Transport Name
            </label>
            <input
              type="text"
              placeholder="Transport Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Destination 2
            </label>
            <input
              type="text"
              placeholder="Destination 2"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              placeholder="Address "
              id="floatingTextarea"
            ></textarea>
          </div>
        </div>

        <div className="col-12 col-sm-6">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Security Cheque
            </label>
            <textarea
              className="form-control"
              placeholder="Security Cheque "
              id="floatingTextarea"
            ></textarea>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Marketting Group
            </label>
            <input
              type="text"
              placeholder="Marketting Group"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
      </div>
      {/* ....................................................................................... */}
      <div className="row mt-3">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Customer Type
            </label>
            <select className="form-select" id="country">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Person(Key Person)
            </label>
            <input
              type="checkedbox"
              placeholder="Authorised Person Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Distance From HQ
            </label>
            <input
              type="text"
              placeholder="Distance From HQ"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              District
            </label>
            <input
              type="text"
              placeholder="District"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Area
            </label>
            <input
              type="text"
              placeholder="Taluka Area"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Mobile No
            </label>
            <input
              type="number"
              placeholder="Mobile No"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Password
            </label>
            <input
              type="number"
              placeholder="Password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Profit Center
            </label>
            <select className="form-select" id="country">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Currency
            </label>
            <select className="form-select" id="country">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              GST No
            </label>
            <input
              type="Number"
              placeholder="Aadhar Card No"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Resident No
            </label>
            <input
              type="Number"
              placeholder="Resident No."
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Email
            </label>
            <input
              type="Email"
              placeholder="Contact No"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Reporting To(Employee)
            </label>
            <input
              type="Number"
              placeholder="Reporting To(Employee)"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              DOB
            </label>
            <input
              type="Number"
              placeholder="Date Of Birth"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              DOA
            </label>
            <input
              type="text"
              placeholder="Date Of Anniversary"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Turn Over
            </label>
            <input
              type="text"
              placeholder="Turn Over"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="dropdown">
          <label htmlFor="fromDate" className="form-label">
          Economy Zone
            </label>
            <button
              className="btn p-2 btn-light m-0 border dropdown-toggle w-100 text-start"
              type="button"
              onClick={toggleDropdown}
              aria-expanded={isOpen}
            >
              <em>Economy Zone</em>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <ul className="dropdown-menu w-100 show">
                <li className="dropdown-item">
                  <input type="checkbox" className="form-check-input me-2" />
                  <label className="form-check-label">SEZ</label>
                </li>
                <li className="dropdown-item">
                  <input type="checkbox" className="form-check-input me-2" />
                  <label className="form-check-label">SSI</label>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
            Available Marketing Groups
            </label>
            <input
              type="file"
              placeholder="Choose file"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddManageForm;
