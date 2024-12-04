import React, { useState } from 'react';
// Bootstrap classes added for styling

const SearchSec = () => {
  const [formData, setFormData] = useState({
    invoiceType: '',
    taxType: '',
    spAc: '',
    transporter: '',
    vehicle: '',
    lrNo: '',
    lrDate: '',
    orderNo: '',
    orderDate: '',
    rateSheet: '',
    salesman: '',
    barcode: '',
    deliveryAt: '',
    cartoonBags: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form className="invoice-form row g-3" onSubmit={handleSubmit}>
      <div className="form-group col-md-3">
        <label htmlFor="invoiceType" className="form-label">Invoice Type:</label>
        <select id="invoiceType" className="form-select" name="invoiceType" value={formData.invoiceType} onChange={handleChange}>
          <option value="">Select Invoice Type</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="taxType" className="form-label">Tax Type:</label>
        <select id="taxType" className="form-select" name="taxType" value={formData.taxType} onChange={handleChange}>
          <option value="">Select Tax Type</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="spAc" className="form-label">S\P A\c:</label>
        <select id="spAc" className="form-select" name="spAc" value={formData.spAc} onChange={handleChange}>
          <option value="">Select S\P A\c</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="transporter" className="form-label">Transporter:</label>
        <select id="transporter" className="form-select" name="transporter" value={formData.transporter} onChange={handleChange}>
          <option value="">Select Transporter</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="vehicle" className="form-label">Vehicle:</label>
        <select id="vehicle" className="form-select" name="vehicle" value={formData.vehicle} onChange={handleChange}>
          <option value="">Select Vehicle</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="lrNo" className="form-label">Lr No:</label>
        <input id="lrNo" type="text" className="form-control" name="lrNo" value={formData.lrNo} onChange={handleChange} />
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="lrDate" className="form-label">Lr Date:</label>
        <input id="lrDate" type="date" className="form-control" name="lrDate" value={formData.lrDate} onChange={handleChange} />
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="orderNo" className="form-label">Order No:</label>
        <input id="orderNo" type="text" className="form-control" name="orderNo" value={formData.orderNo} onChange={handleChange} />
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="orderDate" className="form-label">Order Date:</label>
        <input id="orderDate" type="date" className="form-control" name="orderDate" value={formData.orderDate} onChange={handleChange} />
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="rateSheet" className="form-label">Rate Sheet:</label>
        <select id="rateSheet" className="form-select" name="rateSheet" value={formData.rateSheet} onChange={handleChange}>
          <option value="">Select Rate Sheet</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="salesman" className="form-label">Salesman:</label>
        <select id="salesman" className="form-select" name="salesman" value={formData.salesman} onChange={handleChange}>
          <option value="">Select Salesman</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="barcode" className="form-label">Barcode:</label>
        <input id="barcode" type="text" className="form-control" name="barcode" value={formData.barcode} onChange={handleChange} />
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="deliveryAt" className="form-label">Delivery at:</label>
        <select id="deliveryAt" className="form-select" name="deliveryAt" value={formData.deliveryAt} onChange={handleChange}>
          <option value="">Select Delivery Location</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="cartoonBags" className="form-label">Cartoon/Bags:</label>
        <input id="cartoonBags" type="number" className="form-control" name="cartoonBags" value={formData.cartoonBags} onChange={handleChange} />
      </div>
      
     
    </form>
  );
};

export default SearchSec;
