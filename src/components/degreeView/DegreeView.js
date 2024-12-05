import React from "react";
import { WiDegrees } from "react-icons/wi";
import CustomInputField from "../../common/CustomInputField";
import { useNavigate } from "react-router-dom";

const DegreeView = () => {
  const navigate = useNavigate();
  function handleButtonClick(){
    navigate("/business-view")
  }

  const companyIcon = [
    {
      id: 1,
      icon: <i className="fa-solid fa-arrow-up-right-from-square"></i>,
      name: "Sales",
    },
    {
      id: 2,
      icon: <i className="fa-solid fa-chart-pie"></i>,
      name: "Profitability",
    },
    { id: 3, icon: <i className="fa-solid fa-eye"></i>, name: "Exposure" },
    {
      id: 4,
      icon: <i className="fa-solid fa-file-invoice"></i>,
      name: "Invoices",
    },
    {
      id: 5,
      icon: <i className="fa-solid fa-ruler-horizontal"></i>,
      name: "Width",
    },
    {
      id: 6,
      icon: <i className="fa-solid fa-ruler-vertical"></i>,
      name: "Depth",
    },
  ];

  return (
    <div className="m-3 vh-75 d-flex flex-column">
      <div className="row flex-grow-1">
        {/* Left Section */}
        <div className="col-9 d-flex flex-column">
          <div className="card p-4 shadow-sm border-1 rounded-3 flex-grow-1">
            <div className="mb-4 d-flex flex-column align-items-center ">
              <span className="fs-1 fw-bold text-primary">
                36
                <i className="fa-solid fa-chart-pie text-success fs-2"></i>
                <WiDegrees size={30} className="ms-2" />
              </span>
              <h2 className="d-inline ms-3 text-dark">
                Holistic View Of Your Business
              </h2>
              <p className="ms-3 fw-bold mt-2">
                Type the name to inspect in a 360 view for more insights.
              </p>
            </div>
            <div className="mb-4 w-50 m-auto">
              <CustomInputField
                type={"text"}
                placeholder={"Search any variable"}
                className="form-control p-3 "
              />
            </div>

            {/* Icon List */}
            <div className="mb-4 m-auto pt-5">
              <ul className="row d-flex flex-wrap gap-3 list-unstyled align-items-center">
                {companyIcon.map((item) => (
                  <li
                    key={item.id}
                    className="col-2 shadow-sm border-0 rounded-3 text-center"
                    style={{ width: "100px" }}
                  >
                    <span className="fs-2 text-primary">{item.icon}</span>
                    <span className="mt-2 d-block fs-6">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-3 card p-4 shadow-sm border-1 rounded-3 d-flex justify-content-center align-items-center">
          <div className="w-100">
            <div className="d-flex flex-column gap-3">
              <h4 className="text-primary">Recent Search</h4>
              <button
                type="button"
                className="btn btn-outline-secondary w-100 text-start m-0"
                onClick={handleButtonClick}
              >
                My Business
              </button>
              <button className="d-flex justify-content-between border border-1 p-2 m rounded">
                <span>rahul</span>
                <span className="text-primary">In Salesperson</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DegreeView;
