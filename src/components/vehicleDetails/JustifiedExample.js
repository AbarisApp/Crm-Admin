import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { NavLink } from "react-router-dom";

function JustifiedExample() {
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      >
        <Tab eventKey="home" title="Basic Info">
          <>
            <table className="table table-sm table-bordered">
              <tbody>
                <tr>
                  <td className="w-50">Registration No</td>
                  <td className="w-50">rahulbd</td>
                </tr>
                <tr>
                  <td className="w-50">Name</td>
                  <td className="w-50">asdk</td>
                </tr>
                <tr>
                  <td className="w-50">Model</td>
                  <td className="w-50">kj;</td>
                </tr>
              </tbody>
            </table>
            <div className="col-sm-3">
              <a href="#">
                <button
                  type="button"
                  className="btn btn-block btn-success btn-sm"
                >
                  Edit Info
                </button>
              </a>
            </div>
          </>
        </Tab>
        <Tab eventKey="profile" title="Bookings">
          <div className="mt-5 mb-5">
            <div className="d-flex align-items-center justify-content-end mb-5">
              <label className="me-3">Search:</label>
              <input
                type="email"
                className="form-control w-25"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Search"
              />
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="">#</th>
                  <th className="">Driver</th>
                  <th className="">Customer</th>
                  <th className="">From & To </th>
                  <th className="">Booking Value</th>
                  <th className="">Trip Status</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Cirebon</td>
                  <td>L300 - Mitsibishi</td>
                  <td>Mini Van</td>
                  <td>Sdfgd</td>
                  <td>S</td>
                  <td>
                    <NavLink to="/vehicle-details" className="showBtn">
                      <i className="fa-regular fa-eye text-primary"></i>
                    </NavLink>
                    <NavLink className="showBtn">
                      <i className="fa-solid fa-pen-to-square text-primary"></i>
                    </NavLink>
                    <button className="showBtn">
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4">
              <ul className="d-flex justify-content-end">
                <li>
                  <a href="#" className="border p-3">
                    Previous
                  </a>
                </li>
                <li>
                  <a href="#" className="border p-3">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Tab>
        <Tab eventKey="longer-tab" title="Geofence">
          <div className="mt-5 mb-5">
            <div className="d-flex align-items-center justify-content-end mb-5">
              <label className="me-3">Search:</label>
              <input
                type="email"
                className="form-control w-25"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Search"
              />
            </div>
            <table
              className="table table-hover w-100"
              style={{ tableLayout: "fixed" }}
            >
              <thead>
                <tr>
                  <th className="col">#</th>
                  <th className="col">Name</th>
                  <th className="col">Description</th>
                  <th className="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Cirebon</td>
                  <td>S</td>
                  <td>
                    <NavLink to="/vehicle-details" className="showBtn">
                      <i className="fa-regular fa-eye text-primary"></i>
                    </NavLink>
                    <NavLink className="showBtn">
                      <i className="fa-solid fa-pen-to-square text-primary"></i>
                    </NavLink>
                    <button className="showBtn">
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-5">
              <ul className="d-flex justify-content-end">
                <li>
                  <a href="#" className="border p-3">
                    Previous
                  </a>
                </li>
                <li>
                  <a href="#" className="border p-3">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Tab>
        <Tab eventKey="contact" title="Income &amp; Expense">
          <div className="mt-5 mb-5">
            <div className="d-flex align-items-center justify-content-end mb-5">
              <label className="me-3">Search:</label>
              <input
                type="email"
                className="form-control w-25"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Search"
              />
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="">#</th>
                  <th className="">Date</th>
                  <th className="">Customer</th>
                  <th className="">Amount</th>
                  <th className="">Type</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Cirebon</td>
                  <td>L300 - Mitsibishi</td>
                  <td>Mini Van</td>
                  <td>Sdfgd</td>
                  <td>
                    <NavLink to="/vehicle-details" className="showBtn">
                      <i className="fa-regular fa-eye text-primary"></i>
                    </NavLink>
                    <NavLink className="showBtn">
                      <i className="fa-solid fa-pen-to-square text-primary"></i>
                    </NavLink>
                    <button className="showBtn">
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-5">
              <ul className="d-flex justify-content-end">
                <li>
                  <a href="#" className="border p-3">
                    Previous
                  </a>
                </li>
                <li>
                  <a href="#" className="border p-3">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default JustifiedExample;
