import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";


export const SaleMilkInvoice = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Milk Parlor",
        title_2: 'Sale Milk Add',
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />




            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="invoice-box">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4>Invoice <span className="invoice-title">#00029</span></h4>
                                        </div>
                                        <div className="col-md-6 text-end">
                                            <h5>Issue Date: 11/09/2024</h5>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <p><strong>From :</strong></p>
                                            <p>
                                                <strong>KHAN DAIRY FARM</strong><br />
                                                Branch - 01<br />
                                                Uttara, Dhaka, Bangladesh<br />
                                                Email: 017865567610<br />
                                                Phone: akh01@gmail.com
                                            </p>
                                        </div>
                                        <div className="col-md-6 text-end">
                                            <p><strong>To :</strong></p>
                                            <p>
                                                <strong>arjun munda</strong><br />
                                                Phone: 0000000000<br />
                                                Email: arjun@gmail.com<br />
                                                Address: Dhanmondi, Bangladesh
                                            </p>
                                        </div>
                                    </div>
                                    <table className="table mt-4">
                                        <thead>
                                            <tr>
                                                <th>Account No</th>
                                                <th>Description</th>
                                                <th>Litre</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>BK023323</td>
                                                <td>Milk Sale</td>
                                                <td>2.00</td>
                                                <td>Rs.10.00</td>
                                                <td>Rs.20.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="row">
                                        <div className="col-md-6" />
                                        <div className="col-md-6">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th>Total:</th>
                                                        <td>Rs.20.00</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Paid:</th>
                                                        <td>Rs.20.00</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Due:</th>
                                                        <td>Rs.0.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="paid-stamp mt-5">
                                        PAID
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
