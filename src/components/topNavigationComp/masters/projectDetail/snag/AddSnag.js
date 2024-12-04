import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Select from 'react-select';

function AddSnag(props) {
  const snagCategories = [
    { value: 'category1', label: 'Category 1' },
    { value: 'category2', label: 'Category 2' },
    { value: 'category3', label: 'Category 3' },
    // Add more categories as needed
  ];

  const snagSubCategories = [
    { value: 'subcategory1', label: 'SubCategory 1' },
    { value: 'subcategory2', label: 'SubCategory 2' },
    { value: 'subcategory3', label: 'SubCategory 3' },
    // Add more subcategories as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [snagTitle, setSnagTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [snagImage, setSnagImage] = useState(null);
  const [supportingFile, setSupportingFile] = useState(null);

  const handleCategoryChange = (option) => {
    setSelectedCategory(option);
  };

  const handleSubCategoryChange = (option) => {
    setSelectedSubCategory(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Snag Title:', snagTitle);
    console.log('Description:', description);
    console.log('Location:', location);
    console.log('Selected Category:', selectedCategory);
    console.log('Selected SubCategory:', selectedSubCategory);
    console.log('Snag Image:', snagImage);
    console.log('Supporting File:', supportingFile);
    // Process form submission as needed
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Snag
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Snag Title *</label>
            <input
              type="text"
              className='form-control'
              value={snagTitle}
              onChange={(e) => setSnagTitle(e.target.value)}
              placeholder="Snag Title"
              required
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
               className='form-control'
            />
          </div>

          <div>
            <label>Location</label>
            <input
              type="text"
              value={location}
               className='form-control'
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Snag Location"
            />
          </div>

          <div>
            <label>Snag Category</label>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              options={snagCategories}
              isSearchable
              placeholder="Select Snag Category"
            />
          </div>

          <div>
            <label>Snag SubCategory</label>
            <Select
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
              options={snagSubCategories}
              isSearchable
              placeholder="Select Snag SubCategory"
            />
          </div>

          <div>
            <label>Upload Snag Image</label>
            <input
              type="file"
              accept=".png, .jpeg"
               className='form-control'
              onChange={(e) => setSnagImage(e.target.files[0])}
            />
          </div>

          <div>
            <label>Other Snag Supporting File</label>
            <input
             className='form-control'
              type="file"
              onChange={(e) => setSupportingFile(e.target.files[0])}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddSnag;
