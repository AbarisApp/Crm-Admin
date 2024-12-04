import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import CustomInputField from '../../common/CustomInputField';
import { getOperater } from '../../api/login/Login';
import { useParams } from 'react-router-dom';

function AddVehicleForm({ submitForm, title, initialValues, setIntialValues, handleChangeOp, getDmtTxnData, page }) {
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
                      
                    }}
                  >
                    {({ values, handleChange, handleSubmit, errors, touched }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-xl-2 mb-3">
                            <CustomInputField
                              type="text"
                              placeholder="From Date"
                              name="formData"
                              value={values?.formData}
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
                              value={values?.toData}
                              hasError={errors.toData && touched.toData}
                              onChange={handleChange}
                              errorMsg={errors.toData}
                            />
                          </div>
                          <div className="col-xl-6 mb-3">
                            <select
                              className="form-select"
                              name="selectOption"
                              value={values?.selectOption}
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
                            <button type="submit" className="btn btn-primary py-3">
                              Generate Report
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
        </div>
      );
}

export default AddVehicleForm;