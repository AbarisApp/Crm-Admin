import React from 'react'
import AgronomyVisitForm from './AgronomyVisitForm'
import { useNavigate } from 'react-router-dom'


const AgronomyVisitInfomation = () => {

    const navigate = useNavigate()

    function handleAddNewClick() {
        navigate("/add-agronomy-information")
    }
  return (
    <div className="card m-2">
    <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center">
      <h2 className="fs-4">Agronomy Practice</h2>
      <button
        onClick={handleAddNewClick}
        type="button"
        className="btn btn-primary"
      >
        Add New
      </button>
    </div>
    <AgronomyVisitForm />
  </div>
  )
}

export default AgronomyVisitInfomation