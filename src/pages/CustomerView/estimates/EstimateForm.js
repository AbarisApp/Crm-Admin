import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EstimateForm = () => {
  const [estimateDetails, setEstimateDetails] = useState({
    customer: '',
    estimateNumber: 'EST-000002',
    estimateDate: '2024-10-07',
    expiryDate: '2024-10-14',
    currency: 'USD $',
    reference: '',
    status: 'Draft',
    saleAgent: 'Test Admin',
    discountType: 'No discount',
    adminNote: '',
    items: [{ description: '', qty: 1, rate: 0, tax: 'No Tax', amount: 0 }],
    discount: 0,
    adjustment: 0,
  });

  // Helper Functions
  const addItem = () => {
    setEstimateDetails({
      ...estimateDetails,
      items: [...estimateDetails.items, { description: '', qty: 1, rate: 0, tax: 'No Tax', amount: 0 }],
    });
  };

  const updateItem = (index, field, value) => {
    const newItems = estimateDetails.items.map((item, i) =>
      i === index ? { ...item, [field]: value, amount: item.qty * item.rate } : item
    );
    setEstimateDetails({ ...estimateDetails, items: newItems });
  };

  const calculateTotal = () => {
    const subtotal = estimateDetails.items.reduce((acc, item) => acc + item.amount, 0);
    const total = subtotal - (subtotal * estimateDetails.discount) / 100 + Number(estimateDetails.adjustment);
    return total.toFixed(2);
  };

  return (
    <form className="estimate-form card p-3">
      <h5 className="mb-3">Estimates Add</h5>
      {/* Customer & Estimate Details */}
      <div className="form-section mb-4">
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Customer</label>
            <input
              type="text"
              className="form-control"
              value={estimateDetails.customer}
              onChange={(e) => setEstimateDetails({ ...estimateDetails, customer: e.target.value })}
              placeholder="Customer"
            />
          </div>
          <div className="col-md-7 d-flex" style={{ margin: "20px 0" }}>
            <div>
              <h6>Bill to</h6>
              Wittener Str. 3,<br /> 44149 Dortmund, <br />Germany
              Dortmund, Nordrhein-Westfalen
              DE, 44149
            </div>
            <div>
              <h6>Ship to</h6>
              --
              --
              ----
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Estimate Number</label>
            <input
              type="text"
              className="form-control"
              value={estimateDetails.estimateNumber}
              onChange={(e) => setEstimateDetails({ ...estimateDetails, estimateNumber: e.target.value })}
            />
          </div>
        </div>

        {/* Estimate Dates */}
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Estimate Date</label>
            <input
              type="date"
              className="form-control"
              value={estimateDetails.estimateDate}
              onChange={(e) => setEstimateDetails({ ...estimateDetails, estimateDate: e.target.value })}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Expiry Date</label>
            <input
              type="date"
              className="form-control"
              value={estimateDetails.expiryDate}
              onChange={(e) => setEstimateDetails({ ...estimateDetails, expiryDate: e.target.value })}
            />
          </div>
        </div>

        {/* Currency, Status, Reference */}
        <div className="row mt-3">
          <div className="col-md-4">
            <label className="form-label">Currency</label>
            <select
              className="form-select"
              value={estimateDetails.currency}
              onChange={(e) => setEstimateDetails({ ...estimateDetails, currency: e.target.value })}
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              value={estimateDetails.status}
              onChange={(e) => setEstimateDetails({ ...estimateDetails, status: e.target.value })}
            >
              <option value="Draft">Draft</option>
              <option value="Finalized">Finalized</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Reference #</label>
            <input
              type="text"
              className="form-control"
              value={estimateDetails.reference}
              onChange={(e) => setEstimateDetails({ ...estimateDetails, reference: e.target.value })}
            />
          </div>
        </div>

        {/* Sales Info */}
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label">Sale Agent</label>
            <input
              type="text"
              className="form-control"
              value={estimateDetails.saleAgent}
              onChange={(e) => setEstimateDetails({ ...estimateDetails, saleAgent: e.target.value })}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Discount Type</label>
            <select
              className="form-select"
              value={estimateDetails.discountType}
              onChange={(e) => setEstimateDetails({ ...estimateDetails, discountType: e.target.value })}
            >
              <option value="No discount">No discount</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>

        {/* Admin Note */}
        <div className="mt-3">
          <label className="form-label">Admin Note</label>
          <textarea
            className="form-control"
            value={estimateDetails.adminNote}
            onChange={(e) => setEstimateDetails({ ...estimateDetails, adminNote: e.target.value })}
          />
        </div>
      </div>

      {/* Items Table */}
      <div className="item-table mb-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Tax</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {estimateDetails.items.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={item.description}
                    onChange={(e) => updateItem(index, 'description', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={item.qty}
                    onChange={(e) => updateItem(index, 'qty', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={item.rate}
                    onChange={(e) => updateItem(index, 'rate', e.target.value)}
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    value={item.tax}
                    onChange={(e) => updateItem(index, 'tax', e.target.value)}
                  >
                    <option value="No Tax">No Tax</option>
                    <option value="VAT">VAT</option>
                  </select>
                </td>
                <td>{item.qty * item.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" type="button" onClick={addItem}>
          Add Item
        </button>
      </div>

      {/* Summary Section */}
      <div>
        <div className="row">
          <div className="col-md-3">
            <label className="form-label">Discount (%)</label>
            <input
              type="number"
              className="form-control"
              value={estimateDetails.discount}
              onChange={(e) => setEstimateDetails({ ...estimateDetails, discount: e.target.value })}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Adjustment</label>
            <input
              type="number"
              className="form-control"
              value={estimateDetails.adjustment}
              onChange={(e) => setEstimateDetails({ ...estimateDetails, adjustment: e.target.value })}
            />
          </div>
        </div>
        
      </div>

      <div className="row">
          <div className="col-md-12">
            <label className="form-label">Client Note</label>
            <input
              type="text"
              className="form-control"
              // value={estimateDetails.discount}
              // onChange={(e) => setEstimateDetails({ ...estimateDetails, discount: e.target.value })}
            />
          </div>

          <div className="col-md-12">
            <label className="form-label">Terms & Conditions</label>
            <input
              type="text"
              className="form-control"
              // value={estimateDetails.adjustment}
              // onChange={(e) => setEstimateDetails({ ...estimateDetails, adjustment: e.target.value })}
            />
          </div>
        </div>

      {/* Total */}
      <div className="mt-4">
        <h3>Total: {calculateTotal()}</h3>
      </div>
    </form>
  );
};

export default EstimateForm;
