import React, { useState } from "react";
import { CiSignpostDuo1 } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import CustomInputField from "../../../../common/CustomInputField";
import SelectOption from "../../../../common/selectOption";
import BoostSearch from "../../boostSearch/BoostSearch";

const ButNow = () => {
  // Sample data with unique ids
  const [categryData, setCategryData] = useState([
    {
      id: 1,
      but: "But Not",
      icon: <CiSignpostDuo1 />,
    },
    {
      id: 2,
      but: "Have Not",
      icon: <FaRegQuestionCircle />,
    },
    {
      id: 3,
      but: "Drop Off",
      icon: <FaRegQuestionCircle />,
    },
    {
      id: 4,
      but: "Movement",
      icon: <FaRegQuestionCircle />,
    },
  ]);

  let options = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
  ];
  return (
    <>
    <div className="card p-4 shadow-sm">
      {/* <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-wrap">
          {categryData.map((item) => (
            <button
              key={item.id}
              type="button"
              className="btn btn-primary d-flex gap-2 align-items-center px-4 py-2 rounded-3 fw-semibold"
            >
              {item.icon}
              <span>{item.but}</span>
            </button>
          ))}
        </div>
        <button className="p-2 border border-light rounded-3 shadow-sm square-border d-flex justify-content-center align-items-center bg-primary">
          <FaArrowsRotate size={24} className="text-white" />
        </button>
      </div> */}
      <div className="row mt-3">
        <div className="col-3">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              date
            </label>
            <CustomInputField type={"date"} />
          </div>
        </div>
        <div className="col-3">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Show Field
            </label>
            <SelectOption options={options} combo="Show Field" />
          </div>
        </div>
        <div className="col-3">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Selcet
            </label>
            <SelectOption options={options} combo="Show Field" />
          </div>
        </div>
        <div className="col-3">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Select
            </label>
            <SelectOption options={options} combo="Show Field" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column ">
          <span>List Of Customers Who Have Billed Hdd</span>
          <span>But Have Not Billed Cpu</span>
        </div>
        <div className="d-flex align-items-center">
          <button type="button" class="btn btn-secondary d-flex align-items-center gap-2">
          <FaArrowRightArrowLeft />
            Reverse
          </button>
          <button type="button" class="btn btn-primary d-flex align-items-center gap-2">
          <FaSearch />
            Reverse
          </button>
        </div>
      </div>
    </div>

    <BoostSearch />
    </>
  );
};

export default ButNow;
