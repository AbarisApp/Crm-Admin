import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { getAccGroupByPage, getAccLedgerById, getBankMaster, postAccLedger, updateAccLedgerById } from "../../../api/login/Login";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function QuotationAdd() {
  const [formData, setFormData] = useState({
    name: "",
    alias: "",
    date: new Date().toISOString().split("T")[0], // Auto-fill today's date
    items: [
      {
        item: "",
        taxPercent: "",
        quantity2: "",
        quantity: "",
        rate: "",
        rateTax: "",
        discount: "",
        discType: "",
        amount: ""
      }
    ],
    narration: "",
    taxType: "",       // Added field
    validTill: "",     // Added field
    subject: "",       // Added field
    rateSheet: "",     // Added field
    salesman: "",      // Added field
    mistry: ""         // Added field
  });

  const params = useParams();
  const navigate = useNavigate();

  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;

    if (index !== null) {
      const items = [...formData.items];
      items[index][name] = value;
      setFormData((prevData) => ({ ...prevData, items }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleAddRow = () => {
    setFormData((prevData) => ({
      ...prevData,
      items: [
        ...prevData.items,
        {
          item: "",
          taxPercent: "",
          quantity2: "",
          quantity: "",
          rate: "",
          rateTax: "",
          discount: "",
          discType: "",
          amount: ""
        }
      ]
    }));
  };

  const handleRemoveRow = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      items: prevData.items.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        items: formData.items.map(item => ({
          item: item.item,
          taxPercent: item.taxPercent,
          quantity2: item.quantity2,
          quantity: item.quantity,
          rate: item.rate,
          rateTax: item.rateTax,
          discount: item.discount,
          discType: item.discType,
          amount: item.amount
        }))
      };
return
      let res;
      if (!params?.update) {
        res = await postAccLedger(payload);
      } else {
        res = await updateAccLedgerById(params.update, payload);
      }

      if (res?.statusCode === "200") {
        toast.success(`Ledger ${params.update ? "updated" : "added"} successfully`);
        navigate(`/customer-view/${params.id}/ledgers`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h4>Add Quotation</h4>
      <form onSubmit={handleSubmit} className="card p-4">
        <div className="row mb-3">
          <div className="col-md-3">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <label>Contact:</label>
            <input type="text" name="contact" onChange={handleInputChange} className="form-control" />
          </div>
          <div className="col-md-3">
            <label>Account:</label>
            <input type="text" name="account" onChange={handleInputChange} className="form-control" />
          </div>
          <div className="col-md-3">
            <label>Quote No.:</label>
            <input type="number" name="quoteNumber" onChange={handleInputChange} className="form-control" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <label>Tax Type:</label>
            <select name="taxType" value={formData.taxType} onChange={handleInputChange} className="form-control">
              <option value="">Select Tax Type</option>
              {/* Add tax type options here */}
            </select>
          </div>
          <div className="col-md-3">
            <label>Valid Till:</label>
            <input type="date" name="validTill" value={formData.validTill} onChange={handleInputChange} className="form-control" />
          </div>
          <div className="col-md-3">
            <label>Subject:</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="form-control" />
          </div>
          <div className="col-md-3">
            <label>Rate Sheet:</label>
            <select name="rateSheet" value={formData.rateSheet} onChange={handleInputChange} className="form-control">
              <option value="">Select Rate Sheet</option>
              {/* Add rate sheet options here */}
            </select>
          </div>
          <div className="col-md-3">
            <label>Salesman:</label>
            <select name="salesman" value={formData.salesman} onChange={handleInputChange} className="form-control">
              <option value="">Select Salesman</option>
              {/* Add salesman options here */}
            </select>
          </div>
          <div className="col-md-3">
            <label>Mistry:</label>
            <input type="text" name="mistry" value={formData.mistry} onChange={handleInputChange} className="form-control" />
          </div>
        </div>

        <div className="table-responsive mb-3">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Item</th>
                <th>Tax %</th>
                <th>Quantity2</th>
                <th>Quantity</th>
                <th>Rate</th>
                <th>Rate + Tax</th>
                <th>Disc. (Rs.)</th>
                <th>Disc Type</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {formData.items.map((item, index) => (
                <tr key={index}>
                  <td><input type="text" name="item" value={item.item} onChange={(e) => handleInputChange(e, index)} className="form-control" /></td>
                  <td><input type="number" name="taxPercent" value={item.taxPercent} onChange={(e) => handleInputChange(e, index)} className="form-control" /></td>
                  <td><input type="number" name="quantity2" value={item.quantity2} onChange={(e) => handleInputChange(e, index)} className="form-control" /></td>
                  <td><input type="number" name="quantity" value={item.quantity} onChange={(e) => handleInputChange(e, index)} className="form-control" /></td>
                  <td><input type="number" name="rate" value={item.rate} onChange={(e) => handleInputChange(e, index)} className="form-control" /></td>
                  <td><input type="number" name="rateTax" value={item.rateTax} onChange={(e) => handleInputChange(e, index)} className="form-control" /></td>
                  <td><input type="number" name="discount" value={item.discount} onChange={(e) => handleInputChange(e, index)} className="form-control" /></td>
                  <td>
                    <select name="discType" value={item.discType} onChange={(e) => handleInputChange(e, index)} className="form-control">
                      <option value="">Select</option>
                      {/* Add discount type options */}
                    </select>
                  </td>
                  <td><input type="number" name="amount" value={item.amount} onChange={(e) => handleInputChange(e, index)} className="form-control" /></td>
                  <td><button type="button" onClick={() => handleRemoveRow(index)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={handleAddRow} className="btn btn-primary">Add Row</button>
        </div>

        <div className="mb-3">
          <label>Narration:</label>
          <textarea name="narration" value={formData.narration} onChange={handleInputChange} className="form-control"></textarea>
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default QuotationAdd;
