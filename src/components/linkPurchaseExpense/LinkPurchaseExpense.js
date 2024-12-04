import { Link } from "react-router-dom";

export const LinkPurchaseExpense = () => {
  const sales = [
    {
      id: 1,
      name: "TEX FREE",
      acEffect: "TEX FREE",
      account: "FREE",
      basedOn: "Some Basis",
      basedCalculationOn: "Account 1",
      calculationType: "Basis 1",
      addDeduct: "Add",
      percentage: "10%",
    },
    {
      id: 2,
      name: "TEX FREE",
      acEffect: "TEX FREE",
      account: "FREE",
      basedOn: "Some Basis",
      basedCalculationOn: "Account 2",
      calculationType: "Basis 2",
      addDeduct: "Deduct",
      percentage: "15%",
    },
    {
      id: 3,
      name: "TEX FREE",
      acEffect: "TEX FREE",
      account: "FREE",
      basedOn: "Some Basis",
      basedCalculationOn: "Account 3",
      calculationType: "Basis 3",
      addDeduct: "Add",
      percentage: "20%",
    },
  ];

  console.log(sales);
  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <div className="d-flex flex-col flex-lg-row justify-content-between">
            <h2>List Of Sales Invoice</h2>
            <div className="mb-3 d-flex align-items-center gap-2">
              <label htmlFor="fastSearch" className="form-label text-nowrap">
                Fast Search (F1) :
              </label>
              <input type="text" className="form-control" id="fastSearch" />
            </div>
          </div>

          <div className="d-flex">
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-plus"></i>
              <Link to="/link-expense-with-invoice-type">ADD</Link>
            </button>
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-pen-to-square"></i>
              <span>EDIT</span>
            </button>
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-eye"></i>
              <span>VIEW</span>
            </button>
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-trash"></i>
              <span>DELETE</span>
            </button>
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-arrow-rotate-right"></i>
              <span>REFRESH</span>
            </button>
          </div>

          <div className="d-flex gap-4 justify-content-between bg-light">
            <p>Drag a column header and drop it here to group by that column</p>
            <button className="btn btn-link align-items-center d-flex gap-4">
              <i className="fa-solid fa-file-excel"></i>
              <i className="fa-solid fa-file"></i>
            </button>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr className="align-items-center">
                  <th>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="selectAll"
                      />
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between">
                      <span>Name</span>
                      <i className="fa-solid fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between">
                      <span>A/C Effect</span>
                      <i className="fa-solid fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between">
                      <span>Account</span>
                      <i className="fa-solid fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between">
                      <span>Based On</span>
                      <i className="fa-solid fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between">
                      <span>Based Calculation On</span>
                      <i className="fa-solid fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between">
                      <span>Calculation Type</span>
                      <i className="fa-solid fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between">
                      <span>Add/Deduct</span>
                      <i className="fa-solid fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between">
                      <span>Percentage</span>
                      <i className="fa-solid fa-filter"></i>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sales.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={`checkbox-${item.id}`}
                        />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.acEffect}</td>
                    <td>{item.account}</td>
                    <td>{item.basedOn || "-"}</td>
                    <td>{item.basedCalculationOn}</td>
                    <td>{item.calculationType}</td>
                    <td>{item.addDeduct}</td>
                    <td>{item.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkPurchaseExpense