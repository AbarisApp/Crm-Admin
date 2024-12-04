import React from "react";

const AccountSummary = ({ data }) => {
  // Sample data to render in the table
  console.log(data);



  return (
    <div className="account-summary">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Account</th>
            <th>Group</th>
            <th>Opening</th>
            <th>Closing</th>
            <th>Salesman Name</th>
            <th>Limit Day</th>
            <th>Limit Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data?.ledger?.name}</td>
            <td>{data?.ledger?.AccLedgerGroupId?.name}</td>
            <td>{data?.ledger?.opening_balance} {data?.ledger?.opening_balance_type}</td>
            <td>{data?.ledger?.balance} {data?.ledger?.balance_type}</td>
            <td>{data?.ledger?.AccLedgerGroupId?.name} </td>
            <td>{data?.ledger?.credit_days}</td>
            <td>{data?.ledger?.credit_limit}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountSummary;
