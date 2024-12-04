
import React, { useEffect } from 'react';
import SameCompFilter from './SameCompFilter';
import { useParams } from 'react-router-dom';

export const HistoryTracking = ({ title }) => {
  const param = useParams();

  const initialValues = {
    formData: '',
    toData: '',
    selectOption: '',
    category_id: param.id,
  };

  const submitForm = (values) => {
    console.log("Submitted Values:", values);
  };

  useEffect(() => {
    // Example data fetching logic (if needed)
  }, []);

  return (
    <>
      <SameCompFilter
        title={title}
        initialValues={initialValues}
        submitForm={submitForm}
      />
    </>
  );
};
