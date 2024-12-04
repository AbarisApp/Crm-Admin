import React from 'react';
import html2pdf from 'html2pdf.js';
export const DeliveryChallanDetails = () => {
    const handlePrint = () => {
        const element = document.getElementById('printable-card');

        const opt = {
            margin: 0.5,
            filename: 'DeliveryChallanDetails.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Generate PDF
        html2pdf().from(element).set(opt).save();
    };

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card" id="printable-card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Delivery Challan Details</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <strong>DC Entry No.</strong>
                                            <p>HO21212DC0016</p>
                                        </div>
                                        <div className="col-md-3">
                                            <strong>DC Entry Date</strong>
                                            <p>25-Dec-2024</p>
                                        </div>
                                        <div className="col-md-3">
                                            <strong>Delivery From</strong>
                                            <p>CM STORE</p>
                                        </div>
                                        <div className="col-md-3">
                                            <strong>Outward Type</strong>
                                            <p>DC</p>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-3">
                                                <strong>Customer / Vendor Name</strong>
                                                <p>Abaris Softech</p>
                                            </div>
                                            <div className="col-md-3">
                                                <strong>Inward Entry No.</strong>
                                                <p>N/A</p>
                                            </div>
                                        </div>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Sr. No.</th>
                                                    <th>Product Name</th>
                                                    <th>Product Desc.</th>
                                                    <th>Stock</th>
                                                    <th>Quantity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>GODREJ REF RD EDGEPRO 255C 33 TAI RY WN -01567</td>
                                                    <td />
                                                    <td>0</td>
                                                    <td>1</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="mt-3">
                                            <strong>Remark / Narration:</strong>
                                            <p>98B, 2nd Floor, Namberdar Estate, Taimoor Nagar, New Friends Colony, New Delhi-110025 MOB-8851746286</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <button onClick={handlePrint} className="btn btn-primary mt-3">Print</button>
                </div>
            </div>
        </>
    );
};
