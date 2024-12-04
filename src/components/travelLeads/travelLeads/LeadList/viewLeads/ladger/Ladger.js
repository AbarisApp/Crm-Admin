import { Pagination } from "antd";
import Loadar from "../../../../../../common/loader/Loader";
import { Link, useParams } from "react-router-dom";
import { deleteAccLedgerById, getAccLedgerByPage } from "../../../../../../api/login/Login";
import { useEffect, useState } from "react";
import LadgerAdd from "./ladgerAdd/LadgerAdd";


const Ladger = ({ title }) => {
    const paremss = useParams()

    const [ladgerSet, setladgerSet] = useState(true)
    const [editId, setEditId] = useState(null)

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()


    // ----------list Api----------
    const param = useParams()
    const getFloorMasters = async (page) => {
        setLoading(true)
        try {
            const res = await getAccLedgerByPage(page, count)
            setTotalCount(res?.totalCount)
            setData(res?.data)
            setPage(page)
        } catch (error) {

        }
        setLoading(false)
    }
    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deleteAccLedgerById(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getFloorMasters(backList)
        } catch (error) {
            // toastSuccessMessage(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getFloorMasters(page)
    }, [])
    const onChangeVal = (e) => {
        // console.log(e);
        getFloorMasters(e - 1)
    };

    const ladgerOpenOf = (id = null) => {
        console.log(id);
        setEditId(id);
        setladgerSet(false);
    };
    const ladgerOpenOf2 = () => {
        setladgerSet(true);
    };

    return (
        <div >
            {loading && <Loadar />}

            {/* <h4>{title}</h4> */}
            {ladgerSet ? (
                <div className="container mt-4 card">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <button className="btn btn-primary" onClick={() => ladgerOpenOf()}>
                            + New Ladger
                        </button>
                        <div className="form-group">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search.."
                                style={{ width: "250px" }}
                            />
                        </div>
                    </div>
                    <div className="" style={{ overflow: "auto" }}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Acc Ledger Name</th>
                                    <th scope="col">Acc Ledger Alias</th>
                                    <th scope="col">Group Under</th>
                                    <th scope="col">Opening Balance</th>
                                    <th scope="col">Bal Type</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">AC Name</th>
                                    <th scope="col">AC No</th>

                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">GST No</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((ledger, i) => (
                                    <tr key={ledger.id}>
                                        <td>{i + 1}</td>
                                        <td>{ledger.name}</td>
                                        <td>{ledger.alias}</td>
                                        <td>{ledger.AccLedgerGroupId?.name}</td>
                                        <td>{ledger.opening_balance}</td>
                                        <td>{ledger.opening_balance_type}</td>
                                        <td>{ledger.mobile}</td>
                                        <td>{ledger.Email}</td>
                                        <td>{ledger.AC_name}</td>
                                        <td>{ledger.AC_no}</td>

                                        <td>{ledger.city}</td>
                                        <td>{ledger.state}</td>
                                        <td>{ledger?.GSTIN}</td>
                                        <td>
                                            {/* <Link className="btn btn-sm btn-warning" to={`/add-leager/${ledger._id}`}>Edit</Link> */}
                                            <button className="btn btn-sm btn-warning ms-2" type="button" onClick={() => { ladgerOpenOf(ledger._id) }}>Edit</button>
                                            <button className="btn btn-sm btn-danger ms-2" type="button" onClick={() => { deleteBlockAdd(ledger._id) }}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination
                            defaultCurrent={1}
                            onChange={onChangeVal}
                            total={totalCount}
                        />
                    </div>
                </div>) : (<LadgerAdd editId={editId} ladgerOpenOf2={ladgerOpenOf2} getFloorMasters={getFloorMasters} />
            )}


        </div>


    );
}

export default Ladger