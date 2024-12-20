import React, { useEffect, useState } from 'react';
import { getCource, getStream } from '../../api/login/Login';

const RequirementDetails = ({ handleChange, formData }) => {

  const [data, setData] = useState({
    courceData: [],
    streemDara: [],
  })

  const getValues = async () => {
    const val = { ...data }
    try {
      const assign = await getCource()
      val.courceData = assign?.data

      const source = await getStream()
      val.streemDara = source?.data

    } catch (error) {

    }
    setData(val)
  }

  useEffect(() => {
    getValues()
  }, [])
  return (
    <form className="row">
      <div className="form-group col-4">
        <label htmlFor="course">Course</label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Select Course</option>
          {data?.courceData?.map((item) => {
            return <option value={item._id}>{item?.service_name}</option>
          })}
        </select>
      </div>

      <div className="form-group col-4">
        <label htmlFor="streamType">Stream Type</label>
        <select
          id="streamType"
          name="streamType"
          value={formData.streamType}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Select Stream Type</option>
          {data?.streemDara?.map((item) => {
            return <option value={item._id}>{item?.name}</option>
          })}
        </select>
      </div>

      <div className="form-group col-4">
        <label htmlFor="budget">Budget</label>
        <input
          type="number"
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Budget"
        />
      </div>

      <div className="form-group col-4">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Location"
        />
      </div>

    </form>
  );
};

export default RequirementDetails;
