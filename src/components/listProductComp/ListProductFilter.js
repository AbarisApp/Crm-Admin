import React, { useEffect, useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { getCategory, getIndustry } from '../addProduct/Apimasters';
import { getAccGroupByPage, getBrandByPage } from '../../api/login/Login';

function ListProductFilter() {
    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedValuesbran, setSelectedValuesBran] = useState([]);
    const [selectedIndustry, setSelectedValuesIndus] = useState([]);
    const [selectedIndusSeller, setSelectedValuesSeller] = useState('');



    const [brand, setBrand] = useState()
    const [seller, setSeller] = useState()
    const [options, setOpion] = useState([
        { name: 'Category 1', id: 1 },
        { name: 'Category 2', id: 2 },
        { name: 'Category 3', id: 3 },
        { name: 'Category 4', id: 4 }
    ])

    const [options1, setOpion1] = useState([
        { name: 'Industry 1', id: 1 },
        { name: 'Industry 2', id: 2 },
        { name: 'Industry 3', id: 3 },
        { name: 'Industry 4', id: 4 }
    ])

    const getallMaster = async () => {
        const res = await getCategory()
        const res2 = await getIndustry()
        const res3 = await getBrandByPage()
        const res5 = await getAccGroupByPage(0, 100)


        const categ = res.data.category.map((item) => {
            return { ...item, name: item.name, id: item._id }
        })


        const indus = res2.data.category.map((item) => {
            return { ...item, name: item.name, id: item._id }
        })
        const bran = res3.data.map((item) => {
            return { ...item, name: item.name, id: item._id }
        })

        setOpion(categ)
        setOpion1(indus)
        setBrand(bran)
        setSeller(res5.data)
    }

    useEffect(() => {
        getallMaster()
    }, [])



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
                                            // selectedValues={item?.category_id}
                                            displayValue="name"
                                            placeholder="Select options"
                                            style={{
                                                chips: { BiFontSize: '15px' },
                                                searchBox: { padding: '0 8px' }
                                            }}
                                            onRemove={(selectedCat) => {
                                                const selectedIds = selectedCat?.map((cat) => {
                                                    return cat;
                                                });
                                                setSelectedValues(selectedIds);
                                            }}
                                            onSelect={(selectedCat) => {
                                                const selectedIds = selectedCat?.map((cat) => {
                                                    return cat;
                                                });
                                                setSelectedValues(selectedIds);
                                            }}

                                        />
                                    </div>

                                    <div className="form-group col-4" >
                                        <label htmlFor="fromDate">Brand </label>
                                        <Multiselect
                                            options={brand}
                                            // selectedValues={item?.category_id}
                                            displayValue="name"
                                            placeholder="Select options"
                                            style={{
                                                chips: { BiFontSize: '15px' },
                                                searchBox: { padding: '0 8px' }
                                            }}
                                            onRemove={(selectedCat) => {
                                                const selectedIds = selectedCat?.map((cat) => {
                                                    return cat;
                                                });
                                                setSelectedValuesBran(selectedIds);
                                            }}
                                            onSelect={(selectedCat) => {
                                                const selectedIds = selectedCat?.map((cat) => {
                                                    return cat;
                                                });
                                                setSelectedValuesBran(selectedIds);
                                            }}

                                        />
                                    </div>

                                    <div className="form-group col-4" >
                                        <label htmlFor="fromDate">Industry </label>
                                        <Multiselect
                                            options={options1}
                                            // selectedValues={item?.category_id}
                                            displayValue="name"
                                            placeholder="Select options"
                                            style={{
                                                chips: { BiFontSize: '15px' },
                                                searchBox: { padding: '0 8px' }
                                            }}
                                            onRemove={(selectedCat) => {
                                                const selectedIds = selectedCat?.map((cat) => {
                                                    return cat;
                                                });
                                                setSelectedValuesIndus(selectedIds);
                                            }}
                                            onSelect={(selectedCat) => {
                                                const selectedIds = selectedCat?.map((cat) => {
                                                    return cat;
                                                });
                                                setSelectedValuesIndus(selectedIds);
                                            }}

                                        />
                                    </div>


                                    <div className="form-group col-4 mt-2">
                                        <label htmlFor="fromDate">Seller</label>
                                        <select className="form-select form-control" aria-label="Default select example" value={selectedIndusSeller}
                                            name="seller_id" onChange={(e) => {
                                                setSelectedValuesSeller(e.target.value);
                                            }}>
                                            <option selected>Select Seller</option>
                                            {seller && seller?.map((group) => {
                                                return <option value={group._id}>{group.name}</option>
                                            })}
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