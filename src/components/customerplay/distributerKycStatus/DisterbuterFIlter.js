import { Alert } from "antd";
import { useEffect, useState } from "react";
import Select from 'react-select';
import BulkAssignedModel from "../BulkAssigedModel";
import { FaBroadcastTower } from "react-icons/fa";
import { Link } from "react-router-dom";
import BroadCasterModal from "../distributerList/broadCasterModal/BroadCasterModal";
import { getContestTypeByPage } from "../../../api/login/Login";

function DisterbuterFIlter({ dynemicFields, submitForm, initialValues, params, getReailerDistIdAgainst, selectedUsers, setSelectedUsers }) {
    const todayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    };

    const [formData, setFormData] = useState({
        start_date: todayDate(),
        end_date: todayDate(),
        filter_type: [], // Multi-select options ["Win", "Upcomming", "Live"]
        page: 1,
        count: 10,
        contest_type: '',
        contest_name: '',
        amount: ''
    });

    const [error, setError] = useState('');
    const [isSearchDisabled, setIsSearchDisabled] = useState(false);
    const [showbroadcast, setShowbroadcast] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        setFormData({
            start_date: todayDate(),
            end_date: todayDate(),
            filter_type: [],
            page: 1,
            count: 10,
            contest_type: '',
            contest_name: '',
            amount: ''
        });
        getFloorMasters()
    }, [params]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error) {
            return;
        }
        submitForm(formData);
    };

    const resetForm = () => {
        setFormData({
            start_date: todayDate(),
            end_date: todayDate(),
            filter_type: [],
            page: 1,
            count: 10,
            contest_type: '',
            contest_name: '',
            amount: ''
        });
    };

    const handleFilterTypeChange = (selectedOptions) => {
        const selectedValues = selectedOptions.map(option => option.value);
        setFormData({ ...formData, filter_type: selectedValues });
    };

    const [contestType, setContestType] = useState([]);
    const getFloorMasters = async (page) => {
        
        try {
            const res = await getContestTypeByPage(0,100)
            console.log(res?.data);
            
            const contestTypes = res?.data?.map((item) => ({
                ...item,
                value: item.title,
                label: item.title,
            }));
            setContestType(contestTypes)
        } catch (error) {

        }
    }

    return (
        <>
            <div className="row m-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Filter &nbsp; &nbsp;{`${params?.name}`}  </b></h4>
                                </div>
                                <form className="row cusforms" style={{ padding: "0 20px" }} onSubmit={handleSubmit}>
                                    <div className="form-group col-2">
                                        <label htmlFor="start_date">Start Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="start_date"
                                            value={formData.start_date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-2">
                                        <label htmlFor="end_date">End Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="end_date"
                                            value={formData.end_date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-2">
                                        <label htmlFor="contest_name">Contest Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contest_name"
                                            placeholder="Enter contest name"
                                            value={formData.contest_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-2">
                                        <label htmlFor="amount">Amount</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="amount"
                                            placeholder="Enter amount"
                                            value={formData.amount}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-2">
                                        <label htmlFor="contest_type">Contest Type</label>
                                        <Select
                                            id="contest_type"
                                            value={{ label: formData.contest_type, value: formData.contest_type }}
                                            onChange={(selectedOption) => setFormData({ ...formData, contest_type: selectedOption._id })}
                                            options={contestType}
                                            placeholder="Select contest type"
                                        />
                                    </div>
                                    <div className="form-group col-2">
                                        <label htmlFor="filter_type">Filter Type</label>
                                        <Select
                                            isMulti
                                            id="filter_type"
                                            value={formData.filter_type.map(ft => ({ label: ft, value: ft }))}
                                            onChange={handleFilterTypeChange}
                                            options={[
                                                { value: 'Win', label: 'Win' },
                                                { value: 'Upcomming', label: 'Upcomming' },
                                                { value: 'Live', label: 'Live' }
                                            ]}
                                            placeholder="Select filter types"
                                        />
                                    </div>
                                    <div className="form-group col-2">
                                        <label htmlFor="page">Page</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="page"
                                            value={formData.page}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-2">
                                        <label htmlFor="count">Count</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="count"
                                            value={formData.count}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {error && (
                                        <div className="form-group col-12">
                                            <Alert message="Warning" description={error} type="warning" showIcon closable />
                                        </div>
                                    )}
                                    <div className="form-group col-12">
                                        <button type="submit" className="btn btn-primary" disabled={isSearchDisabled}>
                                            SEARCH
                                        </button>
                                        <button type="button" className="btn btn-warning" onClick={resetForm}>
                                            RESET
                                        </button>
                                    </div>
                                    {/* <div className="form-group col-6">
                                        <div className="text-center">
                                            <button className="btn btn-primary " onClick={() => setModalShow(true)}>
                                                BULK EDIT
                                            </button>
                                            <Link to="/admin/create-lead" className="btn btn-primary ">Create Lead</Link>
                                            <button className="btn btn-info " onClick={() => setShowbroadcast(true)}>
                                                <FaBroadcastTower className="fs-4" /> Broad Caster
                                            </button>
                                        </div>
                                    </div> */}
                                </form>

                                <BulkAssignedModel
                                    dynemicFields={dynemicFields}
                                    show={modalShow}
                                    selectedUsers={selectedUsers}
                                    onHide={() => setModalShow(false)}
                                />
                                <BroadCasterModal show={showbroadcast} onHide={() => setShowbroadcast(false)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DisterbuterFIlter;
