import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa"; // Importing the edit icon
import Select from 'react-select';
import { getBudgetMasterByUser, getCourseTypeForCombo, reailerDistIdAgainstAll } from "../../api/login/Login";

function RequirementDetail() {
  // State to hold form data
  const [formData, setFormData] = useState({
    course: [],
    interestedCourses: [],
    courseType: [],
    budget: [],
    location: "",
    fbFormId: "",
    fbFormName: "",
    fbPageName: "",
  });

  // State to manage individual edit mode for each field
  const [isEditMode, setIsEditMode] = useState({
    course: false,
    interestedCourses: false,
    courseType: false,
    budget: false,
    location: false,
    fbFormId: false,
    fbFormName: false,
    fbPageName: false,
  });

  // Handle multi-select change
  const handleMultiSelectChange = (field, selectedOptions) => {
    setFormData({ ...formData, [field]: selectedOptions });
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data updated:", formData);
    // After submission, disable all fields
    setIsEditMode({
      course: false,
      interestedCourses: false,
      courseType: false,
      budget: false,
      location: false,
      fbFormId: false,
      fbFormName: false,
      fbPageName: false,
    });
  };

  // Options for multi-select
  const [courseOptions , setCourseOptions] = useState([]);

  const [interestedCoursesOptions , setInterestedCoursesOptions] = useState([]);

  const [courseTypeOptions , setCourseTypeOptions] = useState([]);

  const [budgetOptions , setBudgetOptions] = useState([]);

  const getAllMaster = async () => {
    try {
      const res1 = await reailerDistIdAgainstAll()
      const res2 = await getCourseTypeForCombo()
      const res3 = await getBudgetMasterByUser(0,100)
      const maped1 = res1.data.map((item) => ({
        ...item ,
        value: item.id,
        label: item.service_name,
      }));
      setCourseOptions(maped1);
      setInterestedCoursesOptions(maped1);

      const maped2 = res2.data.map((item) => ({
        ...item ,
        value: item._id,
        label: item.course_type_name,
      }));
      setCourseTypeOptions(maped2);
      const maped3 = res3.data.map((item) => ({
        ...item ,
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

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card p-3">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Course */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Course *: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <Select
                      isMulti
                      name="course"
                      value={formData.course}
                      options={courseOptions}
                      closeMenuOnSelect={false}
                      onChange={(selectedOptions) =>
                        handleMultiSelectChange("course", selectedOptions)
                      }
                      placeholder="Select Course"
                      isDisabled={!isEditMode.course}
                      classNamePrefix="react-select"
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("course")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.course ? "#28a745" : "#6c757d",
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
                    <Select
                      isMulti
                      name="interestedCourses"
                      value={formData.interestedCourses}
                      options={interestedCoursesOptions}
                      closeMenuOnSelect={false}
                      onChange={(selectedOptions) =>
                        handleMultiSelectChange("interestedCourses", selectedOptions)
                      }
                      placeholder="Select Interested Courses"
                      isDisabled={!isEditMode.interestedCourses}
                      classNamePrefix="react-select"
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("interestedCourses")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.interestedCourses ? "#28a745" : "#6c757d",
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
                    <Select
                      isMulti
                      name="courseType"
                      value={formData.courseType}
                      options={courseTypeOptions}
                      closeMenuOnSelect={false}
                      onChange={(selectedOptions) =>
                        handleMultiSelectChange("courseType", selectedOptions)
                      }
                      placeholder="Select Course Type"
                      isDisabled={!isEditMode.courseType}
                      classNamePrefix="react-select"
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("courseType")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.courseType ? "#28a745" : "#6c757d",
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
                    <Select
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
                    />
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
                      name="fbFormId"
                      value={formData.fbFormId}
                      onChange={handleInputChange}
                      disabled={!isEditMode.fbFormId}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("fbFormId")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.fbFormId ? "#28a745" : "#6c757d",
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
                      name="fbFormName"
                      value={formData.fbFormName}
                      onChange={handleInputChange}
                      disabled={!isEditMode.fbFormName}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("fbFormName")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.fbFormName ? "#28a745" : "#6c757d",
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
                      name="fbPageName"
                      value={formData.fbPageName}
                      onChange={handleInputChange}
                      disabled={!isEditMode.fbPageName}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("fbPageName")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.fbPageName ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                {Object.values(isEditMode).some((mode) => mode) && (
                  <button type="submit" className="btn btn-success mt-3">
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