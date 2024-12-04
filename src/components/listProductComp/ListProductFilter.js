import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

function ListProductFilter() {
    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedIndustry, setSelectedIndustry] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedPickupPoint, setSelectedPickupPoint] = useState([]);

    const options = [
        { name: 'Category 1', id: 1 },
        { name: 'Category 2', id: 2 },
        { name: 'Category 3', id: 3 },
        { name: 'Category 4', id: 4 }
    ];
    const options2 = [
        { name: 'Brand 1', id: 1 },
        { name: 'Brand 2', id: 2 },
        { name: 'Brand 3', id: 3 },
        { name: 'Brand 4', id: 4 }
    ];
    const options1 = [
        { name: 'Industry 1', id: 1 },
        { name: 'Industry 2', id: 2 },
        { name: 'Industry 3', id: 3 },
        { name: 'Industry 4', id: 4 }
    ];
    const options3 = [
        { name: 'PickupPoint 1', id: 1 },
        { name: 'PickupPoint 2', id: 2 },
        { name: 'PickupPoint 3', id: 3 },
        { name: 'PickupPoint 4', id: 4 }
    ];

    const onSelect = (selectedList, selectedItem) => {
        setSelectedValues(selectedList);
    };
    const onRemove = (selectedList, removedItem) => {
        setSelectedValues(selectedList);
    };
    const onSelectIndustry = (selectedList, selectedItem) => {
        setSelectedIndustry(selectedList);
    };
    const onRemoveIndustry = (selectedList, removedItem) => {
        setSelectedIndustry(selectedList);
    };
    const onSelectBrand = (selectedList, selectedItem) => {
        setSelectedBrand(selectedList);
    };
    const onRemoveBrand = (selectedList, removedItem) => {
        setSelectedBrand(selectedList);
    };
    const onSelectPickupPoint = (selectedList, selectedItem) => {
        setSelectedPickupPoint(selectedList);
    };
    const onRemovePickupPoint = (selectedList, removedItem) => {
        setSelectedPickupPoint(selectedList);
    };


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

                                    <div className="form-group col-4" >
                                        <label htmlFor="fromDate">Category </label>
                                        <Multiselect
                                            options={options}
                                            selectedValues={selectedValues}
                                            onSelect={onSelect}
                                            onRemove={onRemove}
                                            displayValue="name"
                                            placeholder="Select options"
                                            style={{
                                                chips: { BiFontSize: '15px' },
                                                searchBox: { padding: '0 8px' }
                                            }}
                                        />
                                    </div>

                                    <div className="form-group col-4" >
                                        <label htmlFor="fromDate">Brand </label>
                                        <Multiselect
                                            options={options2}
                                            selectedValues={selectedBrand}
                                            onSelect={onSelectBrand}
                                            onRemove={onRemoveBrand}
                                            displayValue="name"
                                            placeholder="Select options"
                                            style={{
                                                chips: { BiFontSize: '15px' },
                                                searchBox: { padding: '0 8px' }
                                            }}
                                        />
                                    </div>

                                    <div className="form-group col-4" >
                                        <label htmlFor="fromDate">Industry </label>
                                        <Multiselect
                                            options={options1}
                                            selectedValues={selectedIndustry}
                                            onSelect={onSelectIndustry}
                                            onRemove={onRemoveIndustry}
                                            displayValue="name"
                                            placeholder="Select options"
                                            style={{
                                                chips: { BiFontSize: '15px' },
                                                searchBox: { padding: '0 8px' }
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-4 mt-2" >
                                        <label htmlFor="fromDate">Pickup Point</label>
                                        <Multiselect
                                            options={options3}
                                            selectedValues={selectedPickupPoint}
                                            onSelect={onSelectPickupPoint}
                                            onRemove={onRemovePickupPoint}
                                            displayValue="name"
                                            placeholder="Select options"
                                            style={{
                                                chips: { BiFontSize: '15px' },
                                                searchBox: { padding: '0 8px' }
                                            }}
                                        />
                                    </div>

                                    <div className="form-group col-4 mt-2">
                                        <label htmlFor="fromDate">Seller</label>
                                        <select className="form-select form-control" aria-label="Default select example">
                                            <option selected>Select Seller</option>
                                            <option value={11}>One</option>
                                            <option value={21}>Two</option>
                                            <option value={11}>Three</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-4 mt-2">
                                        <label htmlFor="fromDate">Search By Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Search By Name'
                                            id="fromDate"
                                        />
                                    </div>

                                    <div className="form-group col-12 mt-3">
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

export default ListProductFilter