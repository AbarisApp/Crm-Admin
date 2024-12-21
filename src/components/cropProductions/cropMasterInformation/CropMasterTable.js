import React from "react";

const CropMasterTable = ({ data, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Company</th>
            <th className="">Tools</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.company}</td>
              <td className="text-end">
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => onEdit(index)}
                >
                  <i className="fa-solid fa-pen-to-square text-success"></i>
                </button>
                <button
                  type="button" 
                  className="btn btn-info ms-2"
                  onClick={() => onDelete(index)}
                >
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CropMasterTable;
