import React from "react";
import CustomInputField from "../../../common/CustomInputField";
import SelectOption from "../../../common/selectOption";

const TrendViewSidebar = () => {
  // Corrected options array with value and label properties
  let options = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
  ];

  let items = [
    "Laptop",
    "Laptop",
    "Laptop",
    "Desktop Computer",
    "Desktop Computer",
    "Mobile",
    "Mobile",
    "Mobile",
    "Wireless Mouse",
    "Wireless Mouse",
    "Laptop Bag",
    "Laptop Bag",
    "Headphones",
    "Headphones",
    "Keyboard",
    "Keyboard",
    "External Hard Drive",
    "External Hard Drive",
    "Smart Watch",
    "Smart Watch",
    "Tablet",
    "Tablet",
    "Tablet",
    "Tablet",
    "Tablet",
    "Bluetooth Speaker",
    "Bluetooth Speaker",
    "Bluetooth Speaker",
    "Bluetooth Speaker",
    "Bluetooth Speaker",
    "Monitor",
    "Monitor",
    "Router",
    "Router",
    "USB Drive",
    "USB Drive",
    "Power Bank",
    "Power Bank",
    "Camera",
    "Camera",
    "Camera",
    "Smartphone Case",
    "Smartphone Case",
    "Laptop Stand",
    "Laptop Stand",
    "Wireless Charger",
    "Wireless Charger",
    "Hard Drive Enclosure",
    "Hard Drive Enclosure",
    "Mouse Pad",
    "Mouse Pad",
    "Webcam",
    "Webcam",
  ];

  return (
    <div className="row" style={{ minHeight: "100vh" }}>
      <div className="col-12">
        <div className="card p-3">
          <label htmlFor="currency" className="form-label fw-bold">
            Category
          </label>
          <SelectOption options={options} combo="Selcet Category" />

          {/* Search Input */}
          <div className="mt-3">
          <label htmlFor="currency" className="form-label fw-bold">
            Product
          </label>
            <CustomInputField type={"text"} placeholder={"Search Product"} />
          </div>

          {/* Vertically Scrollable List */}
          <div
            className="mt-4"
            style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}
          >
            {/* Adjust height using calc to account for other elements (like dropdown and search input) */}
            <ul className="list-unstyled">
              {items.map((item, index) => (
                <li
                  key={index}
                  className=" px-4 py-2 bg-light rounded shadow-sm mb-2 cursor"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendViewSidebar;
