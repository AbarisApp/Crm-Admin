import React, { useEffect, useRef, useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import TagsInput from 'react-tagsinput';
import { countryList, getattributePage } from '../../api/login/Login';
import { CustomSelectOption } from './CustomMultiselection';
import { AttributeItem } from './AttributeItem';
import axios from 'axios';
import { baseproductUrl } from '../../baseUrl';

function VariationSec({
    setattributesVal,
    setVariantsData,
    variationForm,
    variations,
}) {
    const [countryData ,setcountryData] = useState(null)
    const [options, setoption] = useState([
        { name: 'Category 1', id: 1 },
        { name: 'Category 2', id: 2 },
        { name: 'Category 3', id: 3 },
        { name: 'Category 4', id: 4 }
    ])
    const getAttriBute = async () => {
        const res = await getattributePage()
        const maped = res.data.map((item) => {
            return { ...item, name: item.name, id: item._id }
        })
        const res2 = await countryList()
        setcountryData(res2.data)
        setoption(maped)
    }

    useEffect(() => {
        getAttriBute()
    }, [])

    const prevAllAttributesRef = useRef();
    prevAllAttributesRef.current = variationForm || [];
    const getAttributes = (attributes) => {
        const updateExistingAttribute = attributes?.map((secondObj) => {
            const matchingObj = variationForm.find(
                (originalObj) => originalObj._id === secondObj._id
            );

            if (matchingObj) {
                const updatedObj = { ...secondObj };
                updatedObj.title = matchingObj.title;
                updatedObj.data = matchingObj.data;

                return updatedObj;
            } else {
                return secondObj;
            }
        });

        prevAllAttributesRef.current = variationForm;
        setattributesVal(updateExistingAttribute || []);
    };
    const getChoiceValues = (choiceValues, currentAttr) => {
        callVariationAPi(currentAttr);
    };

    const callVariationAPi = async (currentAttr) => {
        const clone = [...variationForm];
        const findIndex = clone.findIndex(({ _id }) => _id === currentAttr?.id);

        if (findIndex !== -1) {
            const findCurrentAttributes = { ...clone[findIndex] };
            findCurrentAttributes.data = [...currentAttr?.data];
            findCurrentAttributes.title = currentAttr?.title;

            clone[findIndex] = findCurrentAttributes;
        }
        let filteredData = clone.filter((item) => item?.data?.length);
        const data = {
            attributes: [...filteredData],
            variations: [...variations],
        }
        try {
            const res = await axios.post(`${baseproductUrl}product/form_variation`, data, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
                },
            })
            let variationLists = JSON.parse(JSON.stringify(res.data));

            variationLists?.forEach((element) => {
                element.prices = [];
                countryData?.forEach((item) => {
                    element.prices.push({ country_id: { ...item } });
                });
            });
            setVariantsData(variationLists);
        } catch (error) {

        }
        setattributesVal(clone || []);
    };
   
    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                            <h3 style={{ color: '#231f1fa1' }}>Variation</h3>
                            <hr />

                            <div className="form-group col-6 mt-2">
                                {/* <label htmlFor="fromDate">Attributes:</label> */}
                                <CustomSelectOption
                                    allAttributes={variationForm}
                                    data={options}
                                    showCheckbox={true}
                                    getSelectedOptions={getAttributes}
                                >
                                    <label>Attributes:</label>
                                </CustomSelectOption>
                            </div>

                            <div className='row p-0 mt-5'>
                                {variationForm?.map((item) => {
                                    return (
                                        <AttributeItem
                                            key={item._id}
                                            item={item}
                                            handleChoiceValues={getChoiceValues}
                                            setUpdatedVariants={setVariantsData}
                                        />
                                    );
                                })}
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VariationSec