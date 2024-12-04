import React from "react";
import Select from "react-select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
  { value: "option6", label: "Option 6" },
  // Add as many options as you need
];

const customStyles = {
  menu: (provided) => ({
    ...provided,
    maxHeight: 150, // Set the maximum height for the dropdown menu
    overflowY: "auto", // Enable vertical scrolling
  }),
};

function BatchPayments() {
  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <Select
            options={options}
            styles={customStyles} // Apply custom styles
            placeholder="Filter invoices by customer"
          />
        </div>

        <div className="col-sm-12">
          <div className="custom_modal_table_responsive">
            <table className="table table-bordered mt-5">
              <thead>
                <tr>
                  <th>Invoice Number #</th>

                  <th>Payment Date</th>

                  <th>Payment Mode</th>
                  <th>Transaction Id</th>
                  <th>Amount received</th>
                  <th>Invoice Balance Due</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="" className="text-primary modal_table_l">
                      INV-000009{" "}
                    </a>
                    <br />
                    <a href="">Roob, Reichert and Senger </a>
                  </td>
                  <td>
                    <input type="date" className="form-control" />
                  </td>
                  <td>
                    <Select
                      options={options}
                      styles={customStyles} // Apply custom styles
                      placeholder="-"
                    />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>$615.00</td>
                </tr>

                <tr>
                  <td>
                    <a href="" className="text-primary modal_table_l">
                      INV-000009{" "}
                    </a>
                    <br />
                    <a href="">Roob, Reichert and Senger </a>
                  </td>
                  <td>
                    <input type="date" className="form-control" />
                  </td>
                  <td>
                    <Select
                      options={options}
                      styles={customStyles} // Apply custom styles
                      placeholder="-"
                    />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>$615.00</td>
                </tr>

                <tr>
                  <td>
                    <a href="" className="text-primary modal_table_l">
                      INV-000009{" "}
                    </a>
                    <br />
                    <a href="">Roob, Reichert and Senger </a>
                  </td>
                  <td>
                    <input type="date" className="form-control" />
                  </td>
                  <td>
                    <Select
                      options={options}
                      styles={customStyles} // Apply custom styles
                      placeholder="-"
                    />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>$615.00</td>
                </tr>

                <tr>
                  <td>
                    <a href="" className="text-primary modal_table_l">
                      INV-000009{" "}
                    </a>
                    <br />
                    <a href="">Roob, Reichert and Senger </a>
                  </td>
                  <td>
                    <input type="date" className="form-control" />
                  </td>
                  <td>
                    <Select
                      options={options}
                      styles={customStyles} // Apply custom styles
                      placeholder="-"
                    />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>$615.00</td>
                </tr>

                <tr>
                  <td>
                    <a href="" className="text-primary modal_table_l">
                      INV-000009{" "}
                    </a>
                    <br />
                    <a href="">Roob, Reichert and Senger </a>
                  </td>
                  <td>
                    <input type="date" className="form-control" />
                  </td>
                  <td>
                    <Select
                      options={options}
                      styles={customStyles} // Apply custom styles
                      placeholder="-"
                    />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>$615.00</td>
                </tr>

                <tr>
                  <td>
                    <a href="" className="text-primary modal_table_l">
                      INV-000009{" "}
                    </a>
                    <br />
                    <a href="">Roob, Reichert and Senger </a>
                  </td>
                  <td>
                    <input type="date" className="form-control" />
                  </td>
                  <td>
                    <Select
                      options={options}
                      styles={customStyles} // Apply custom styles
                      placeholder="-"
                    />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>$615.00</td>
                </tr>

                <tr>
                  <td>
                    <a href="" className="text-primary modal_table_l">
                      INV-000009{" "}
                    </a>
                    <br />
                    <a href="">Roob, Reichert and Senger </a>
                  </td>
                  <td>
                    <input type="date" className="form-control" />
                  </td>
                  <td>
                    <Select
                      options={options}
                      styles={customStyles} // Apply custom styles
                      placeholder="-"
                    />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>
                    <input type="text" className="form-control" />
                  </td>

                  <td>$615.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default BatchPayments;
