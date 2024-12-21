import React, { useState } from "react";
import CropMasterForm from "./CropMasterForm";
import CropMasterTable from "./CropMasterTable";

const CropMasterInformation = () => {
  const [data, setData] = useState([
    { name: "John Doe", company: "FarmTech" },
    { name: "Jane Smith", company: "AgriCorp" },
    { name: "Mike Johnson", company: "GreenFields" },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(null); 

  const handleAddData = (newData) => {
    setData([...data, newData]);
  };

  const handleEditData = (updatedData) => {
    const updatedDataList = data.map((item, index) =>
      index === selectedIndex ? updatedData : item
    );
    setData(updatedDataList);
    setSelectedIndex(null); 
  };

  const handleDeleteData = (index) => {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  };

  return (
    <div>
      <div className="bg-black text-light p-2 m-2">
        <h3 className="fs-4">Crop Master</h3>
      </div>
      <div className="card m-2">
        <CropMasterForm
          onAddData={handleAddData}
          onEditData={handleEditData}
          selectedIndex={selectedIndex}
          data={data}
        />  
      </div>
      <div className="card m-2">
        <CropMasterTable
          data={data}
          onEdit={(index) => setSelectedIndex(index)}
          onDelete={handleDeleteData}
        />
      </div>
    </div>
  );
};

export default CropMasterInformation;
