import React from "react";
import CustomInputField from "../../common/CustomInputField";

const CollectionSummery = () => {
  return (
    <div className="card">
      <h2 className="bg-black text-light p-2 fs-4">Collection Summery</h2>
      <div className="row mt-3">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              From Date
            </label>
            <CustomInputField type={"date"} id="fromDate" />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="toDate" className="form-label">
              To Date
            </label>
            <CustomInputField type={"date"} id="toDate" />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country
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
            <label htmlFor="state" className="form-label">
              State
            </label>
            <select className="form-select" id="state">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Employee
            </label>
            <CustomInputField
              type={"text"}
              placeholder={"Search Employee Name / code "}
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="downline" className="form-label">
              Downline
            </label>
            <select className="form-select" id="downline">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 text-center">
          <button type="button" className="btn btn-primary ">
            Search
          </button>
          <button type="button" className="btn btn-primary ">
            Print
          </button>
        </div>
      </div>

      {/* ExistingPartyVisit table */}
      <div className="border mt-4">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <button type="button" className="btn btn-warning ">
              Email
            </button>
            <button type="button" className="btn btn-success ">
              Excel
            </button>
            <button type="button" className="btn btn-danger ">
              CSV
            </button>
            <button type="button" className="btn btn-primary ">
              PDF
            </button>
            <button type="button" className="btn btn-info ">
              Print
            </button>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <label htmlFor="toDate" className="form-label">
                Search
              </label>
              <CustomInputField type={"text"} id="" placeholder={"Search"} />
            </div>
          </div>
        </div>
        <table className="table table-bordered table-striped table-responsive">
          <thead className="table-dark ">
            <tr className="text-light">
              <th className="text-light">#</th>
              <th className="text-light">
                Employee
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
              <th className="text-light">
                Customer(party)
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
              <th className="text-light">
                Entry On
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
              <th className="text-light">
                Payment On
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
              <th className="text-light">
                Mode
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
              <th className="text-light">
                Payment Type
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
              <th className="text-light">
                Bank
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
              <th className="text-light">
                Branch
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
              <th className="text-light">
                Old
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
              <th className="text-light">
                Advance
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
              <th className="text-light">
                Regular
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
              <th className="text-light">
                Amount
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
              <th className="text-light">
                Status
                <CustomInputField type={"text"} placeholder={"Search "} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
          <tfoot>
            <tr role="row">
              <th data-dt-column="0" rowspan="1" colspan="1">
                <span class="dt-column-title"></span>
              </th>
              <th data-dt-column="1" rowspan="1" colspan="1">
                <span class="dt-column-title">Employee</span>
              </th>
              <th data-dt-column="2" rowspan="1" colspan="1">
                <span class="dt-column-title">Customer(Party)</span>
              </th>
              <th data-dt-column="3" rowspan="1" colspan="1">
                <span class="dt-column-title">Entry On</span>
              </th>
              <th data-dt-column="4" rowspan="1" colspan="1">
                <span class="dt-column-title">Payment On</span>
              </th>
              <th data-dt-column="5" rowspan="1" colspan="1">
                <span class="dt-column-title">Mode</span>
              </th>
              <th data-dt-column="6" rowspan="1" colspan="1">
                <span class="dt-column-title">Payment Type</span>
              </th>
              <th data-dt-column="7" rowspan="1" colspan="1">
                <span class="dt-column-title">Bank</span>
              </th>
              <th data-dt-column="8" rowspan="1" colspan="1">
                <span class="dt-column-title">Branch</span>
              </th>
              <th data-dt-column="9" rowspan="1" colspan="1">
                0
              </th>
              <th data-dt-column="10" rowspan="1" colspan="1">
                0
              </th>
              <th data-dt-column="11" rowspan="1" colspan="1">
                0
              </th>
              <th data-dt-column="12" rowspan="1" colspan="1">
                0
              </th>
              <th data-dt-column="13" rowspan="1" colspan="1">
                <span class="dt-column-title">Status</span>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CollectionSummery;
