import React from "react";

export const LinkExpenseWithInvoiceType = () => {
  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <div className="d-flex justify-content-between align-items-center">
            <h3>Link Expense With Invoice Type</h3>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <form>
            <div className="row align-items-center">
              <div className="col-12 col-lg-8">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Select Invoice Type
                  </label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className=" col-12 col-lg-4">
                <button type="button" className="btn btn-primary">
                  Get Expense List
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-5 text-center">
                <span className="text-center">Available Expense List</span>
              </div>
              <div className="col-12 col-lg-2"></div>
              <div className="col-12 col-lg-5 text-center">
                <span>Selected Expense</span>
              </div>
            </div>

            <div className="row mt-4">
              <div
                className="col-12 col-lg-5 border bg-light"
                style={{ height: "270px", overflowY: "auto" }}
              >
                <ul>
                  <li>SGST 14%</li>
                  <li>SGST 15%</li>
                  <li>SGST 16%</li>
                  <li>SGST 18%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                  <li>SGST 10%</li>
                </ul>
              </div>
              <div className="col-12 col-lg-2 d-flex flex-column align-items-center gap-4">
                <button type="button" className="btn btn-primary">
                  Add
                </button>
                <div>
                  <i className="fa-solid fa-arrow-down"></i>
                  <br />
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <button type="button" className="btn btn-primary">
                  Remove
                </button>
                <button type="button" className="btn btn-primary">
                  Remove All
                </button>
                <button type="button" className="btn btn-primary">
                  Edit Col
                </button>
              </div>
              <div
                className="col-12 col-lg-5 border bg-light"
                style={{ height: "270px", overflowY: "auto" }}
              ></div>
            </div>

            <div className="row mt-5 align-items-center">
              <div className="col-12 col-lg-5"></div>
              <div className="col-12 col-lg-2 text-center ">
                <button type="button" className="btn btn-primary ">
                  Add Column
                </button>
              </div>
              <div className="col-12 col-lg-5">
                <span>Selected Expense : 0</span>
              </div>
            </div>

            <div className="text-end">
              <button type="button" className="btn btn-primary">
                Save
              </button>
              <button type="button" className="btn btn-primary">
                Save & Close
              </button>
              <button type="button" className="btn btn-primary">
                Cencel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
