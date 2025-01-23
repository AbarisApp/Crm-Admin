import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa"; // Importing the edit icon

import { getBudgetMasterByUser, getCourseTypeForCombo, reailerDistIdAgainstAll, updateLead, updatePermissions } from "../../api/login/Login";
import { useParams } from "react-router-dom";
import { Select } from 'antd';
const { Option } = Select;

function RequirementDetail({ data }) {
  // State to hold form data
  const [formData, setFormData] = useState({
    course_id: [],
    interested_courses: [],
    course_type: [],
    budget: [],
    location: "",
    fb_form_id: "",
    fb_form_name: "",
    fb_page_name: "",
  });

  // State to manage individual edit mode for each field
  const [isEditMode, setIsEditMode] = useState({
    course_id: false,
    interested_courses: false,
    course_type: false,
    budget: false,
    location: false,
    fb_form_id: false,
    fb_form_name: false,
    fb_page_name: false,
  });

  // Handle multi-select change
  // const handleMultiSelectChange = (field, selectedOptions) => {
  //   console.log(field, selectedOptions);

  //   setFormData({ ...formData, [field]: selectedOptions });
  // };

  const handleMultiSelectChange = (value, name) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Toggle edit mode for a specific field
  const toggleEditMode = (field) => {
    setIsEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  // Handle form submission (or other actions)
  const parems = useParams()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data updated:", formData);
    // After submission, disable all fields
    try {
      const res = await updateLead(parems.id, formData);
      if (res?.error == false) {
        alert('Requirement Detail Success')
      } else {
        alert('Server Side Error !')
      }
    } catch (error) {

    }
    setIsEditMode({
      course_id: false,
      interested_courses: false,
      course_type: false,
      budget: false,
      location: false,
      fb_form_id: false,
      fb_form_name: false,
      fb_page_name: false,
    });
  };

  // Options for multi-select
  const [courseOptions, setCourseOptions] = useState([]);


  const [interestedCoursesOptions, setInterestedCoursesOptions] = useState([]);


  const [courseTypeOptions, setCourseTypeOptions] = useState([]);



  const [budgetOptions, setBudgetOptions] = useState([]);
  // console.log(budgetOptions);

  const getAllMaster = async () => {
    try {
      const res1 = await reailerDistIdAgainstAll()
      const res2 = await getCourseTypeForCombo()
      const res3 = await getBudgetMasterByUser(0, 100)
      const maped1 = res1.data.map((item) => ({
        ...item,
        value: item.id,
        label: item.service_name,
      }));
      setCourseOptions(maped1);
      setInterestedCoursesOptions(maped1);

      const maped2 = res2.data.map((item) => ({
        ...item,
        value: item._id,
        label: item.course_type_name,
      }));
      setCourseTypeOptions(maped2);
      const maped3 = res3.data.map((item) => ({
        ...item,
        value: item._id,
        label: item.name,
      }));
      setBudgetOptions(maped3);

    } catch (error) {

    }
  }

  useEffect(() => {
    getAllMaster();
  }, []);


  useEffect(() => {
    setFormData({
      course_id: data?.course_id,
      interested_courses: data?.interested_courses,
      course_type: data?.course_type,
      budget: data?.budget,
      location: data?.location,
      fb_form_id: data?.fb_form_id,
      fb_form_name: data?.fb_form_name,
      fb_page_name: data?.fb_page_name,
    })
  }, [data])

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card p-3">
            <form>
              <div className="row">
                {/* Course */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Course *: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    {/* <Select
                      isMulti
                      name="course_id"
                      value={formData.course_id}
                      options={courseOptions}
                      closeMenuOnSelect={false}
                      onChange={(selectedOptions) =>
                        handleMultiSelectChange("course_id", selectedOptions)
                      }
                      placeholder="Select Course"
                      isDisabled={!isEditMode.course_id}
                      classNamePrefix="react-select"
                    /> */}
                    <Select
                      showSearch
                      mode="multiple"
                      style={{ width: "100%", height: '40px' }}
                      placeholder="Select Agent Class "
                      optionFilterProp="children"
                      className=""
                      value={formData.course_id}
                      onChange={(value) => handleMultiSelectChange(value, "course_id")}
                      getPopupContainer={(triggerNode) => triggerNode.parentNode}
                    >
                      {courseOptions?.map((loc) => (
                        <Option key={loc._id} value={loc._id}>
                          {loc.label}
                        </Option>
                      ))}
                    </Select>
                    <FaPencilAlt
                      onClick={() => toggleEditMode("course_id")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.course_id ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Interested Courses */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Interested Courses: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    {/* <Select
                      isMulti
                      name="interested_courses"
                      value={formData.interested_courses}
                      options={interestedCoursesOptions}
                      closeMenuOnSelect={false}
                      onChange={(selectedOptions) =>
                        handleMultiSelectChange("interested_courses", selectedOptions)
                      }
                      placeholder="Select Interested Courses"
                      isDisabled={!isEditMode.interested_courses}
                      classNamePrefix="react-select"
                    /> */}
                    <Select
                      showSearch
                      mode="multiple"
                      style={{ width: "100%", height: '40px' }}
                      placeholder="Select Agent Class "
                      optionFilterProp="children"
                      className=""
                      value={formData.interested_courses}
                      onChange={(value) => handleMultiSelectChange(value, "interested_courses")}
                      getPopupContainer={(triggerNode) => triggerNode.parentNode}
                    >
                      {interestedCoursesOptions?.map((loc) => (
                        <Option key={loc._id} value={loc._id}>
                          {loc.label}
                        </Option>
                      ))}
                    </Select>
                    <FaPencilAlt
                      onClick={() => toggleEditMode("interested_courses")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.interested_courses ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Course Type */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Course Type: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    {/* <Select
                      isMulti
                      name="course_type"
                      value={formData.course_type}
                      options={courseTypeOptions}
                      closeMenuOnSelect={false}
                      onChange={(selectedOptions) =>
                        handleMultiSelectChange("course_type", selectedOptions)
                      }
                      placeholder="Select Course Type"
                      isDisabled={!isEditMode.course_type}
                      classNamePrefix="react-select"
                    /> */}

                    <Select
                      showSearch
                      mode="multiple"
                      style={{ width: "100%", height: '40px' }}
                      placeholder="Select Course type "
                      optionFilterProp="children"
                      className=""
                      value={formData.course_type}
                      onChange={(value) => handleMultiSelectChange(value, "course_type")}
                      getPopupContainer={(triggerNode) => triggerNode.parentNode}
                    >
                      {courseTypeOptions?.map((loc) => (
                        <Option key={loc._id} value={loc._id}>
                          {loc.course_type_name}
                        </Option>
                      ))}
                    </Select>
                    <FaPencilAlt
                      onClick={() => toggleEditMode("course_type")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.course_type ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Budget */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Budget: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    {/* <Select
                      isMulti
                      name="budget"
                      value={formData.budget}
                      options={budgetOptions}
                      closeMenuOnSelect={false}
                      onChange={(selectedOptions) =>
                        handleMultiSelectChange("budget", selectedOptions)
                      }
                      placeholder="Select Budget"
                      isDisabled={!isEditMode.budget}
                      classNamePrefix="react-select"
                    /> */}
                    <Select
                      showSearch
                      mode="multiple"
                      style={{ width: "100%", height: '40px' }}
                      placeholder="Select Course type "
                      optionFilterProp="children"
                      className=""
                      value={formData.budget}
                      onChange={(value) => handleMultiSelectChange(value, "budget")}
                      getPopupContainer={(triggerNode) => triggerNode.parentNode}
                    >
                      {budgetOptions?.map((loc) => (
                        <Option key={loc._id} value={loc._id}>
                          {loc.name}
                        </Option>
                      ))}
                    </Select>
                    <FaPencilAlt
                      onClick={() => toggleEditMode("budget")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.budget ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>


                {/* Location */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Location: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      disabled={!isEditMode.location}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("location")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.location ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* FB Form ID */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>FB Form ID: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="fb_form_id"
                      value={formData.fb_form_id}
                      onChange={handleInputChange}
                      disabled={!isEditMode.fb_form_id}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("fb_form_id")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.fb_form_id ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* FB Form Name */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>FB Form Name: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="fb_form_name"
                      value={formData.fb_form_name}
                      onChange={handleInputChange}
                      disabled={!isEditMode.fb_form_name}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("fb_form_name")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.fb_form_name ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* FB Page Name */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>FB Page Name: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="fb_page_name"
                      value={formData.fb_page_name}
                      onChange={handleInputChange}
                      disabled={!isEditMode.fb_page_name}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("fb_page_name")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.fb_page_name ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                {Object.values(isEditMode).some((mode) => mode) && (
                  <button type="button" className="btn btn-success mt-3" onClick={handleSubmit}>
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequirementDetail;