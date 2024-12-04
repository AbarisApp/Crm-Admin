import React, { useState, useEffect } from 'react';
import 'react-tagsinput/react-tagsinput.css';
import ProductVedioSec from './ProductVedioSec';
import SeoSection from './SeoSection';
import DescriptionSec from './DescriptionSec';
import ShippingConfiguration from './ShippingConfiguration';
import LowStockQtyWarning from './LowStockQtyWarning';
import StockVisibilityState from './StockVisibilityState';
import CashOnDelivery from './CashOnDelivery';
import FeaturedSec from './FeaturedSec';
import TodaysDealSec from './TodaysDealSec';
import TrendingSection from './TrendingSection';
import FlashDealSec from './FlashDealSec';
import BottomSec from './BottomSec';
import ProductInformation from './ProductInformation';
import VariationSec from './VariationSec';
import ProductPriceAndStock from './ProductPriceAndStock';
import './AddProduct.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { languageList, postProduct, updateProducts } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import INITIAL_STATE from './Constant';
import ProductLists from './ProductList';
import Loadar from '../../common/loader/Loader';
import getProductById from './getProductById';
const variationIdVsPricingAndAttributes = new Map();
function AddProduct() {
    const [val, setVal] = useState([]);
    const [value, setValue] = useState(0);
    const [data, setData] = useState([]);

    const getLang = async () => {
        const res = await languageList(); // Assuming `languageList` fetches the language data
        setData(res.data);

        const maped = res.data.map((item) => {
            return {
                ...INITIAL_STATE,
                language_id: { _id: item._id, name: item.name },
                variations: [],
                variation_Form: [],
            };
        });
        if (params?.uid) {
            getDataId()
        } else {
            setVal(maped);
        }
    };

    const params = useParams()
    useEffect(() => {
        getLang();
    }, [params?.uid]);

    const getDataId = async () => {
        setLoad(true);
        try {
            const data = await getProductById(params?.uid);

            if (data && data.product && data.product.length > 0) {
                const product = data.product[0];

                setVal(data?.product || []);
                setVariationForm(product.variation_Form || []);
                setVariationList(product.variations || []);

                product.variations.forEach((item) => {
                    variationIdVsPricingAndAttributes.set(item._id, item);
                });
            } else {
                console.error("Product data or product array is empty.");
            }
            setLoad(false);
        } catch (error) {
            setLoad(false);
            console.error("Error fetching product:", error.message);
        }
    }

    const handleChange = (event, newValue) => {
        console.log(event, newValue);

        setValue(newValue);
    };

    const onChangeHandler = async (e, id, bul) => {
        let maped;
        if (typeof bul === "boolean") {
            maped = val?.map((item) => {
                if (item?.language_id?._id === id) {
                    const obj = {
                        ...item,
                        [e.target.name]: bul,
                    };
                    return obj;
                } else {
                    return item;
                }
            });
            setVal(maped);
        } else if (bul) {
            maped = val?.map((item) => {
                if (item?.language_id?._id === id) {
                    const obj = {
                        ...item,
                        [e.target.name]: bul,
                    };
                    return obj;
                } else {
                    return item;
                }
            });
            setVal(maped);
        } else {
            maped = val?.map((item) => {
                if (item?.language_id?._id === id) {
                    const obj = {
                        ...item,
                        [e.target.name]: e.target.value,
                    };
                    return obj;
                } else {
                    return item;
                }
            });
            setVal(maped);

        }
        console.log("maped", maped);
    };
    const handleCategoryId = (ids) => {
        val[value].category_id = [...ids];
    };
    const onChangeHandlerTag = (data, id) => {
        let maped;
        maped = val?.map((item) => {
            if (item?.language_id?._id === id) {
                const obj = {
                    ...item,
                    tags: data,
                };
                return obj;
            } else {
                return item;
            }
        });
        setVal(maped);
    }
    const DescriptionHandle = (id, data) => {
        let maped;
        maped = val?.map((item) => {
            if (item?.language_id?._id === id) {
                const obj = {
                    ...item,
                    productDescription: data,
                };
                return obj;
            } else {
                return item;
            }
        });
        setVal(maped);
    }

    const [variationList, setVariationList] = useState([]);
    const [variationForm, setVariationForm] = useState([]);
    const setattributesVal = (data) => {
        setVariationForm(data || []);
    };




    const handleVariantData = (data) => {
        let existingId = "";
        let findIndex = data.findIndex((item) => {
            const variationIdVsPricingAndAttributesItem =
                variationIdVsPricingAndAttributes.get(item._id);

            if (
                variationIdVsPricingAndAttributesItem &&
                item._id === variationIdVsPricingAndAttributesItem._id
            ) {
                existingId = item._id;
                return true;
            }

            return false;
        });
        if (findIndex !== -1) {
            data[findIndex] = variationIdVsPricingAndAttributes.get(existingId);
        }
        setVariationList(data);
    };
    const deleteRow = (id) => {
        let cloneAllData = JSON.parse(JSON.stringify(variationList));
        const filterdData = cloneAllData.filter((item) => {
            return item._id !== id;
        });
        setVariationList(filterdData);
    };

    const updateVarientPriceAndAttributes = (data) => {
        variationIdVsPricingAndAttributes.set(data._id, data);
        const cloneAllData = JSON.parse(JSON.stringify(variationList));
        const selectedIndex = cloneAllData.findIndex((item) => {
            return item._id === data._id;
        });
        if (selectedIndex !== -1) {
            cloneAllData[selectedIndex] = data;
        }
        setVariationList(cloneAllData);
        console.log(cloneAllData);

    };


    const [load, setLoad] = useState(false)
    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-right",
        });
    };

    const addNewAttributeData = async (e, id) => {
        setLoad(true)
        e.preventDefault();
        let clone2 = val.map((item) => {
            return { ...item, variations: variationList, variation_Form: variationForm }
        })
        console.log(clone2);
        try {
            const res = await postProduct({ list: clone2 })
            if (res.data?.test) {
                toastSuccessMessage(params?.uid ? "Updated successfully" : "Added successfully");
            } else {

            }
            setLoad(false)
        } catch (error) {

        }
        setLoad(false)
    };

    const updateProduct = async (e, id) => {
        setLoad(true)
        e.preventDefault();
        let clone2 = val.map((item) => {
            return { ...item, variations: variationList, variation_Form: variationForm }
        })
        try {
            const res = await updateProducts({ data: { list: clone2 }, id: params?.uid })
            console.log(res);
            
            if (res.data?.message) {
                toastSuccessMessage(params?.uid ? "Updated successfully" : "Added successfully");
            } else {

            }
            setLoad(false)
        } catch (error) {

        }
        setLoad(false)
    };

    return (
        <>
            {load && <Loadar />}
            <ToastContainer />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {data &&
                                data.map((item, i) => (
                                    <Tab key={i} label={item?.name} value={i} />
                                ))}
                        </TabList>
                    </Box>
                    {val &&
                        val.map((item, i) => (
                            <TabPanel key={i} value={i} style={{ padding: "0" }}>
                                <form className="row cusforms mt-3">

                                    <section className="ListDistributer mx-4 expdf ">
                                        <div className="tbl-caption tbl-caption-2 p-2">
                                            <h4 className="heading mb-0" style={{ padding: "10" }}><b>Add New Product</b></h4>
                                        </div>

                                        <div className="row m-4">
                                            <div className="col-xl-7 me-5" style={{ padding: "0" }}>
                                                <ProductInformation
                                                    item={item}
                                                    onChangeHandler={onChangeHandler}
                                                    setCategoryIds={handleCategoryId}
                                                    onChangeHandlerTag={onChangeHandlerTag}
                                                />
                                                <ProductVedioSec item={item} onChangeHandler={onChangeHandler} />
                                                <SeoSection
                                                    item={item}
                                                    onChangeHandler={onChangeHandler} />
                                            </div>
                                            <div className="col-xl-4" style={{ padding: "0" }}>
                                                <ShippingConfiguration />
                                                <LowStockQtyWarning />
                                                <StockVisibilityState />
                                                <CashOnDelivery />
                                                <FeaturedSec />
                                                <TodaysDealSec />
                                                <TrendingSection />
                                                <FlashDealSec />
                                            </div>
                                        </div>
                                        <div className="row m-4">
                                            <div className="col-xl-12 me-5" style={{ padding: "0" }}>
                                                <DescriptionSec
                                                    item={item} onChangeHandler={DescriptionHandle}
                                                />

                                            </div>
                                        </div>
                                        <div className="row m-4">
                                            <div className="col-xl-12 me-5" style={{ padding: "0" }}>
                                                <VariationSec
                                                    setattributesVal={setattributesVal}
                                                    setVariantsData={handleVariantData}
                                                    variations={variationList}
                                                    variationForm={variationForm}
                                                />
                                            </div>
                                        </div>
                                        <div className="row m-4">
                                            <div className="col-xl-12 me-5" style={{ padding: "0" }}>
                                                {/* <ProductPriceAndStock /> */}
                                                <ProductLists
                                                    onChangeHandler={onChangeHandler}
                                                    item={{
                                                        ...item,
                                                        variations: variationList,
                                                        variation_Form: variationForm,
                                                    }}
                                                    // sellerD={sellerD}
                                                    // pickUp={pickUp}
                                                    isVariantLoading={false}
                                                    updatedVariants={variationList}
                                                    deleteRow={deleteRow}
                                                    updateVarientPriceAndAttributes={
                                                        updateVarientPriceAndAttributes
                                                    }
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="row m-4">
                                            <div className="col-xl-12 me-5" style={{ padding: "0" }}>
                                                <BottomSec />
                                            </div>
                                            <div className="form-group col-12 mt-3">
                                                <button type="button" onClick={submitData} className="btn btn-primary float-end">
                                                    Add Product
                                                </button>
                                               
                                            </div>
                                        </div> */}
                                        {val.length === i + 1 ? (
                                            <div className="form-group mb-3 text-right">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    fdprocessedid="uzw7ye"
                                                    onClick={() => {
                                                        setValue(i + 1);
                                                    }}
                                                >
                                                    Prev
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    fdprocessedid="uzw7ye"
                                                    onClick={(e) => {
                                                        if (params.uid) {
                                                            updateProduct(e, item?.language_id?._id);

                                                        } else {
                                                            addNewAttributeData(e, item?.language_id?._id);

                                                        }
                                                    }}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        ) : (
                                            " "
                                        )}
                                    </section>
                                </form>
                            </TabPanel>
                        ))}
                </TabContext>
            </Box>

        </>
    )
}

export default AddProduct