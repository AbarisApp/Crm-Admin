

import React, { useState } from "react";
import { Formik } from "formik";
import CustomInputField from "../../common/CustomInputField";

function SameCompFilter({ submitForm, initialValues }) {
  const [operate] = useState([
    { _id: "volvo-123", name: "Volvo" },
    { _id: "option", name: "Option" },
  ]);

  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body p-0">
            <div className="table-responsive active-projects style-1">
              <Formik
                initialValues={initialValues}
                onSubmit={submitForm}
                validate={(values) => {
                  const errors = {};
                  if (!values.formData) {
                    errors.formData = "Required";
                  }
                  if (!values.toData) {
                    errors.toData = "Required";
                  }
                  if (!values.selectOption) {
                    errors.selectOption = "Required";
                  }
                  return errors;
                }}
              >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xl-2 mb-3">
                        <CustomInputField
                          type="date"
                          placeholder="From Date"
                          name="formData"
                          value={values.formData}
                          hasError={errors.formData && touched.formData}
                          onChange={handleChange}
                          errorMsg={errors.formData}
                        />
                      </div>
                      <div className="col-xl-2 mb-3">
                        <CustomInputField
                          type="date"
                          placeholder="To Date"
                          name="toData"
                          value={values.toData}
                          hasError={errors.toData && touched.toData}
                          onChange={handleChange}
                          errorMsg={errors.toData}
                        />
                      </div>
                      <div className="col-xl-6 mb-3">
                        <select
                          className="form-select"
                          name="selectOption"
                          value={values.selectOption}
                          onChange={handleChange}
                        >
                          <option value="">Select Operator</option>
                          {operate.map((item) => (
                            <option key={item._id}>{item.name}</option>
                          ))}
                        </select>
                        {errors.selectOption && touched.selectOption && (
                          <div className="text-danger">
                            {errors.selectOption}
                          </div>
                        )}
                      </div>
                      <div className="col-xl-2 mb-3">
                        <button type="submit" className="btn btn-primary">
                          Load
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.230705880199!2d77.27960487613542!3d28.56283418724118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce351945f45eb%3A0xf96252dd41babf89!2sJamia%20Millia%20Islamia!5e0!3m2!1sen!2sin!4v1727264981712!5m2!1sen!2sin"
          width={'100%'}
          height={'450px'}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default SameCompFilter;
