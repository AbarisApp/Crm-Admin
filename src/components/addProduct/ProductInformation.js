import React, { useEffect, useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { BiFontSize } from 'react-icons/bi';
import TagsInput from 'react-tagsinput';
import { getCategory, getIndustry } from './Apimasters';
import { getAccGroupByPage, getBrandByPage, getunitPage } from '../../api/login/Login';

function ProductInformation({
    onChangeHandler,
    item,
    setCategoryIds,
    onChangeHandlerTag

}) {
    const [tags, setTags] = useState([]);
    const [brand, setBrand] = useState()
    const [unit, setUnit] = useState()
    const [seller, setSeller] = useState()
    const [options, setOpion] = useState([
        { name: 'Category 1', id: 1 },
        { name: 'Category 2', id: 2 },
        { name: 'Category 3', id: 3 },
        { name: 'Category 4', id: 4 }
    ])

    const [options2, setOpion2] = useState([
        { name: 'Attribute 1', id: 1 },
        { name: 'Attribute 2', id: 2 },
        { name: 'Attribute 3', id: 3 },
        { name: 'Attribute 4', id: 4 }
    ])

    const [options1, setOpion1] = useState([
        { name: 'Industry 1', id: 1 },
        { name: 'Industry 2', id: 2 },
        { name: 'Industry 3', id: 3 },
        { name: 'Industry 4', id: 4 }
    ])


    const [selectedIndustry, setSelectedIndustry] = useState([]);
    const [selectedProdAttribute, setSelectedProdAttribute] = useState([]);
    const getallMaster = async () => {
        const res = await getCategory()
        const res2 = await getIndustry()
        const res3 = await getBrandByPage()
        const res4 = await getunitPage()
        const res5 = await getAccGroupByPage(0, 100)


        const categ = res.data.category.map((item) => {
            return { ...item, name: item.name, id: item._id }
        })
        console.log(res2.data.category);


        const indus = res2.data.category.map((item) => {
            return { ...item, name: item.name, id: item._id }
        })

        setOpion(categ)
        setOpion1(indus)
        setBrand(res3.data)
        setUnit(res4.data)
        setSeller(res5.data)
    }

    useEffect(() => {
        getallMaster()
    }, [])




    const onSelectIndustry = (selectedList, selectedItem) => {
        setSelectedIndustry(selectedList);
    };
    const onRemoveIndustry = (selectedList, removedItem) => {
        setSelectedIndustry(selectedList);
    };
    const onSelectProdAttribute = (selectedList, selectedItem) => {
        setSelectedProdAttribute(selectedList);
    };
    const onRemoveProdAttribute = (selectedList, removedItem) => {
        setSelectedProdAttribute(selectedList);
    };

    const handleTagsChange = (newTags) => {
        setTags(newTags);
        console.log(newTags);
        onChangeHandlerTag(newTags, item?.language_id?._id);
        // Update the tags state with the new tags
    };

    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                            <h3 style={{ color: '#231f1fa1' }}>Product Information</h3>
                            <hr />

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Product Name </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Product Name '
                                    id="fromDate"
                                    value={item?.name}
                                    name="name"
                                    onChange={(e) => {
                                        onChangeHandler(e, item?.language_id?._id);
                                    }}
                                />
                            </div>

                            <div className="form-group col-12 mt-2" >
                                <label htmlFor="fromDate">Category </label>
                                <Multiselect
                                    options={options}
                                    selectedValues={item?.category_id}
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
                                        setCategoryIds(selectedIds);
                                    }}
                                    onSelect={(selectedCat) => {
                                        const selectedIds = selectedCat?.map((cat) => {
                                            return cat;
                                        });
                                        setCategoryIds(selectedIds);
                                    }}

                                />
                            </div>

                            <div className="form-group col-12 mt-2" >
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
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Seller</label>
                                <select className="form-select form-control" aria-label="Default select example" value={item?.seller_id}
                                    name="seller_id" onChange={(e) => {
                                        onChangeHandler(e, item?.language_id?._id);
                                    }}>
                                    <option selected>Select Seller</option>
                                    {seller && seller?.map((group) => {
                                        return <option value={group._id}>{group.name}</option>
                                    })}
                                </select>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Brand</label>
                                <select className="form-select form-control" aria-label="Default select example" value={item?.brand_id}
                                    name="brand_id" onChange={(e) => {
                                        onChangeHandler(e, item?.language_id?._id);
                                    }}>
                                    <option selected>Select Brand</option>
                                    {brand && brand?.map((item) => {
                                        return <option value={item._id}>{item?.name}</option>
                                    })}

                                </select>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Unit</label>
                                <select className="form-select form-control" aria-label="Default select example" value={item?.unit}
                                    name="unit" onChange={(e) => {
                                        onChangeHandler(e, item?.language_id?._id);
                                    }}>
                                    <option selected>Select Unit</option>
                                    {unit && unit?.map((item) => {
                                        return <option value={item._id}>{item?.name}</option>
                                    })}

                                </select>
                            </div>

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Weight</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Weight'
                                    id="fromDate"
                                    value={item?.weight}
                                    name="weight"
                                    onChange={(e) => {
                                        onChangeHandler(e, item?.language_id?._id);
                                    }}
                                />
                            </div>

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Minimum Purchase Qty</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder='Enter Minimum Purchase Qty'
                                    id="fromDate"
                                    value={item?.minimum_purchase_qty}
                                    name="minimum_purchase_qty"
                                    onChange={(e) => {
                                        onChangeHandler(e, item?.language_id?._id);
                                    }}
                                />
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Tags</label>
                                <TagsInput value={tags} onChange={handleTagsChange} />
                            </div>

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Barcode</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Barcode'
                                    id="fromDate"
                                    value={item?.barcode}
                                    name="barcode"
                                    onChange={(e) => {
                                        onChangeHandler(e, item?.language_id?._id);
                                    }}
                                />
                            </div>

                            {/* <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Gallary Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    placeholder='Enter Gallary Image'
                                    id="fromDate"
                                />
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Thumbnail  Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    placeholder='Enter Thumbnail  Image'
                                    id="fromDate"
                                />
                            </div> */}
                            <div className="form-group col-12 mt-2" >
                                <label htmlFor="fromDate">Product Attribute </label>
                                <Multiselect
                                    options={options2}
                                    selectedValues={selectedProdAttribute}
                                    onSelect={onSelectProdAttribute}
                                    onRemove={onRemoveProdAttribute}
                                    displayValue="name"
                                    placeholder="Select options"
                                    style={{
                                        chips: { BiFontSize: '15px' },
                                        searchBox: { padding: '0 8px' }
                                    }}
                                />
                            </div>

                            <div className="form-group col-7 mt-4">
                                <div className="form-check form-switch d-flex align-items-center justify-content-between ps-0">
                                    <label
                                        className="form-check-label me-2" // Add margin to separate label and switch
                                        htmlFor="flexSwitchCheckDefault"
                                    >
                                        Refundable
                                    </label>
                                    <input
                                        style={{ marginLeft: '80px', border: '1px solid black' }}
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        name={"refundable"}
                                        checked={item.refundable}
                                        onChange={(e) => {
                                            onChangeHandler(e, item?.language_id?._id, !item.refundable);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-7 mt-1">
                                <div className="form-check form-switch d-flex align-items-center justify-content-between ps-0">
                                    <label
                                        className="form-check-label me-2" // Add margin to separate label and switch
                                        htmlFor="flexSwitchCheckDefault"
                                    >
                                        Quotation
                                    </label>
                                    <input
                                        style={{ marginLeft: '80px', border: '1px solid black' }}
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        checked={item.quotation}
                                        onChange={(e) => {
                                          onChangeHandler(e, item?.language_id?._id, !item.quotation);
                                        }}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInformation