import React, { useEffect, useState } from 'react'
import { getTravelAllCountry, getTravelAllTags } from '../../api/login/Login';
import Multiselect from 'multiselect-react-dropdown';

function MasterPackageFIlter() {
    const [allCountriesD, setAllCountriesD] = useState([]);
    const [allTagsD, setAllTagsD] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    const getAllCountryListData = async () => {
        try {
            const res = await getTravelAllCountry();
            setAllCountriesD(res?.data)
        } catch (error) {

        }
    };
    const getAllTagsListData = async () => {
        try {
            const res = await getTravelAllTags();
            setAllTagsD(res?.data);
        } catch (error) {

        }
    };
    const onSelectTag = (selectedList, selectedItem) => {
        setSelectedTags(selectedList);
    };
    const onRemoveTag = (selectedList, removedItem) => {
        setSelectedTags(selectedList);
    };
    useEffect(() => {
        getAllCountryListData();
        getAllTagsListData();
    }, []);

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Filter</b></h4>
                                </div>
                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                                    <div className="form-group col-4 mt-2">
                                        <label htmlFor="fromDate">Country</label>
                                        <select className="form-select form-control" aria-label="Default select example">
                                            <option selected>Select Country</option>
                                            {allCountriesD && allCountriesD?.map((item, i) => {
                                                return <option key={i} value={item?.id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group col-4 mt-2">
                                        <label htmlFor="fromDate">No Of Nights</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter No Of Nights'
                                            id="fromDate"
                                        />
                                    </div>
                                    <div className="form-group col-4 mt-2">
                                        <label htmlFor="fromDate">Select Tags</label>
                                        <Multiselect
                                            options={allTagsD}
                                            selectedValues={selectedTags}
                                            onSelect={onSelectTag}
                                            onRemove={onRemoveTag}
                                            displayValue="tag_name"
                                            placeholder="Select options"
                                            style={{
                                                chips: { BiFontSize: '12px' },
                                                searchBox: { padding: '1px 8px' }
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-12 mt-5">
                                        <button type="button" className="btn btn-warning float-end" >
                                            RESET
                                        </button>
                                        <button type="submit" className="btn btn-primary float-end">
                                            FILTER
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MasterPackageFIlter