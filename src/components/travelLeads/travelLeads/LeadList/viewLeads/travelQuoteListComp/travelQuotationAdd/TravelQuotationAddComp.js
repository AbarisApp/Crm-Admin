import { useEffect, useState } from "react";
import HotelInformaton from "./HotelInformaton"
import QuotationInformation from "./QuotationInformation"
import ItenaryAdd from "./ItenaryAdd";
import FilghtAdd from "./FilghtAdd";
import TransportInformation from "./TransportInformation";
import { addTravelRoomType, addTRCRM_tr_quotation_master, clodinaryImage, currencyList, getAirlLine, getIdTRCRM_tr_quotation_master, getTravelAllCity, getTravelAllCountry, getTravelAllMealType, getTravelAllOthers, getTravelAllState, getTRCRM_cost_label_master, getTRCRM_cost_type_master, getTRCRM_hotel_type_master, getTRCRM_sight_seeing_masteradmin, updateTRCRM_tr_quotation_master } from "../../../../../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";


const TravelQuotationAddComp = ({ editData, cancelForm, getTransitionReport }) => {
    const param = useParams()

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        step1: {},
        step2: {},
        step3: {}
    });

    const handleNext = (data) => {
        setFormData((prevData) => ({
            ...prevData,
            [`step${currentStep}`]: data,
        }));

        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };


    const [initialData, setInitialData] = useState({
        title: '',
        city: [],
        adult: '',
        child: '',
        infant: '',
        tour_start_date: '',
        cities: [{
            country: '',
            state: '',
            city: '',
            stay: '',
        }],
        costLlabel: '',
        cost_type: '',
        currency: '',
        options: [{
            country: '',
            state: '',
            city: '',
            nights: '',
            hotel: '',
            room_type: '',
            no_of_room: '',
            meal_plan: '',
            single_sharing_amt: '',
            twin_double_sharing_amt: '',
            triple_sharing_amt: '',
            child_with_bed_amt: '',
            childwithout_bed_amt: '',
        }],
        choose_cost_type: '',
        flight_cost: '',
        child_flight_cost: '',
        infant_flight_cost: '',
        visa_cost: '',
        travel_insurance_cost: '',
        tax_cost: '',
        other_currency: '',
        other_cost: '',
        cruise_currency: '',
        cruise_cost: '',
        bus_taxi_currency: '',
        bus_taxi_cost: '',
        train_currency: '',
        train_cost: '',
        sighteen_currency: '',
        sighteen_cost: '',
        child_sightseen_currency: '',
        child_sightseen_cost: '',
        total_amount: '',
        create_itinerary: '',
        days: [{
            title: '',
            sightseeing: [],
            breakfast: '',
            lunch: '',
            dinner: '',
            other_detail: '',
        }],
        flight: '',
        attach_file: '',
        vehicle_type: '',
        vehicle_name: '',
        other_facilities: [],
        overview: '',
        inclusions: '',
        exclusions: '',
        terms_conditions: '',
        others: '',
        extra1: '',
        extra2: '',

    })
    const [rows, setRows] = useState([{ country: "", state: "", city: "", stay: "" }]);
    const addRow = () => {
        setRows([...rows, { country: "", state: "", city: "", stay: "" }]);
    };
    const removeRow = (index) => {
        const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
        setRows(updatedRows);
    };
    const handleInputChange = async (index, field, value) => {
        if (field == 'country') {
            try {
                const res = await getTravelAllState(value);
                setAllStatesD(res?.data);
            } catch (error) {

            }
        };
        // if (field == 'state') {
        //     try {
        //         const res = await getTravelAllCity(value);
        //         setAllCitiesD(res?.data);
        //     } catch (error) {

        //     }
        // };
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
        const clone = { ...initialData, cities: updatedRows }
        setInitialData(clone)
    };

    const [allCountriesD, setAllCountriesD] = useState([]);
    const [allStatesD, setAllStatesD] = useState([]);
    const [allCitiesD, setAllCitiesD] = useState([]);
    const [roomTypeData, setRoomTypeData] = useState([]);
    const [hotelTypeData, setHotelTypeData] = useState([]);
    const [curencyData, setCurencyData] = useState([]);
    const [mealTypeData, setMealTypeData] = useState([]);
    const [costLable, setCostLable] = useState([]);
    const [costType, setCostType] = useState([]);
    const [sightingData, setSightingData] = useState([]);
    const [otherFacilityData, setOtherFacilityData] = useState([]);
    const [locations, setLocations] = useState([]);



    const getAllCountryListData = async () => {
        try {
            const res = await getTravelAllCountry();
            setAllCountriesD(res?.data)
        } catch (error) {

        }
    };
    const comboData = async () => {
        try {
            const resCurrency = await currencyList()
            setCurencyData(resCurrency?.data)
            const resRoomType = await addTravelRoomType();
            setRoomTypeData(resRoomType?.data)
            const resHotelType = await getTRCRM_hotel_type_master();
            setHotelTypeData(resHotelType?.data)
            const resmealType = await getTravelAllMealType();
            setMealTypeData(resmealType?.data)
            const resCostLable = await getTRCRM_cost_label_master();
            setCostLable(resCostLable?.data)
            const resCostType = await getTRCRM_cost_type_master();
            setCostType(resCostType?.data)
            const ressighting = await getTRCRM_sight_seeing_masteradmin();
            setSightingData(ressighting?.data)
            const resOthersFascility = await getTravelAllOthers();
            setOtherFacilityData(resOthersFascility?.data)
            const resCity = await getAirlLine()
            // console.log(resCity?.data);
            setLocations(resCity?.data);
        } catch (error) {

        }
    }

    //HotelInfo
    const [rowsHotelInfo, setRowsHotelInfo] = useState([
        {
            city: "",
            nights: "",
            hotel: "",
            room_type: "",
            no_of_room: "",
            meal_plan: '',
            single_sharing_amt: '',
            twin_double_sharing_amt: '',
            triple_sharing_amt: '',
            child_with_bed_amt: '',
            childwithout_bed_amt: '',
        }
    ]); // Initialize as an array

    const AddRowHotelInfo = () => {
        setRowsHotelInfo((prevRows) => [
            ...prevRows,
            {
                city: "",
                nights: "",
                hotel: "",
                room_type: "",
                no_of_room: "",
                meal_plan: '',
                single_sharing_amt: '',
                twin_double_sharing_amt: '',
                triple_sharing_amt: '',
                child_with_bed_amt: '',
                childwithout_bed_amt: '',
            },
        ]);
    };
    const handleInputChangeHotelInfo = (index, field, value) => {
        const updatedRows = [...rowsHotelInfo];
        updatedRows[index][field] = value;
        setRowsHotelInfo(updatedRows);
        const clone = { ...initialData, options: updatedRows }
        setInitialData(clone)
    };

    //HotelInfo

    //Itinerary
    const [rowsItinerary, setRowsItinerary] = useState([
        {
            title: "",
            sightseeing: [],
            breakfast: false,
            lunch: false,
            dinner: false,
            other_detail: '',
        }
    ]); // Initialize as an array

    const AddRowItinerary = () => {
        setRowsItinerary((prevRows) => [
            ...prevRows,
            {
                title: "",
                sightseeing: [],
                breakfast: false,
                lunch: false,
                dinner: false,
                other_detail: '',
            },
        ]);
    };
    const handleInputChangeItinerary = (index, field, value) => {
        const updatedRows = [...rowsItinerary];
        updatedRows[index][field] = value;
        setRowsItinerary(updatedRows);
        const clone = { ...initialData, days: updatedRows }
        setInitialData(clone)
    };
    //Itinerary
    const [image, setImage] = useState()
    const handleChangeImage = async (e) => {
        const image = new FormData()
        image.append('image', e.target.files[0])
        try {
            const res = await clodinaryImage(image)
            setTimeout(() => {
                setImage(res.data?.data?.url)
            }, 1000);
        } catch (error) {

        }
    }

    const changeHandle = (e) => {
        const { name, type, value, checked } = e.target;
        const updatedValue = type === "checkbox" ? checked : value;

        setInitialData((prevData) => ({
            ...prevData,
            [name]: updatedValue,
        }));
    }

    const handleQuillChange = (field, value) => {
        setInitialData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    // const changeHandle = (e) => {
    //     const clone = { ...initialData }
    //     const value = e.target.value
    //     const name = e.target.name
    //     clone[name] = value
    //     setInitialData(clone)
    // }
    // console.log(initialData);
    const toastSuccessMessage = (message) => {
        toast.success(`${param?.id ? `${message}` : `${message}`} ${'Success'}`, {
            position: "top-right",
        });
    };

    const submitData = async () => {
        const clone = { ...initialData, attach_file: image }
        if (!editData?._id) {
            try {
                const res = await addTRCRM_tr_quotation_master(clone)
                console.log(res);
                if (res?.error == false) {
                    toastSuccessMessage('Add Quotation')
                    getTransitionReport(0)
                    setTimeout(() => {
                        cancelForm()
                    }, 2000)

                } else {
                    toastSuccessMessage(res?.message)
                }

            } catch (error) {

            }
        } else {
            try {
                const res = await updateTRCRM_tr_quotation_master(editData._id, clone)
                console.log(res);
                if (res?.error == false) {
                    toastSuccessMessage('Update Quotation')
                    getTransitionReport(0)
                    setTimeout(() => {
                        cancelForm()
                    }, 2000)
                } else {
                    toastSuccessMessage(res?.message)
                }

            } catch (error) {

            }
        }


    }

    useEffect(() => {
        const getIdData = async () => {
            try {
                const res = await getIdTRCRM_tr_quotation_master(editData._id)
                console.log(res);
                // setInitialState(res?.data)
                setInitialData(res?.data)
                setRows(res?.data?.cities)
                setRowsHotelInfo(res?.data?.options)
                setRowsItinerary(res?.data?.days)
                setImage(res.data?.attach_file)
            } catch (error) {

            }
        }
        if (editData && editData._id) {
            getIdData();
        }
    }, [editData])


    useEffect(() => {
        getAllCountryListData();
        comboData()
    }, []);
    return (
        <>
            {currentStep === 1 && (
                <QuotationInformation locations={locations} allCountriesD={allCountriesD} allStatesD={allStatesD} allCitiesD={allCitiesD} rows={rows} setRows={setRows} addRow={addRow} removeRow={removeRow} handleInputChange={handleInputChange} setInitialData={setInitialData} initialData={initialData} changeHandle={changeHandle} onNext={handleNext} data={formData.step1} cancelForm={cancelForm} />
            )}
            {currentStep === 2 && (
                <HotelInformaton locations={locations} costType={costType} costLable={costLable} mealTypeData={mealTypeData} curencyData={curencyData} hotelTypeData={hotelTypeData} initialData={initialData} changeHandle={changeHandle} roomTypeData={roomTypeData} rowsHotelInfo={rowsHotelInfo} setInitialData={setInitialData} setRowsHotelInfo={setRowsHotelInfo} AddRowHotelInfo={AddRowHotelInfo} handleInputChangeHotelInfo={handleInputChangeHotelInfo} onNext={handleNext}
                    onPrev={handlePrev}
                    data={formData.step2} />
            )}
            {currentStep === 3 && (
                <ItenaryAdd
                    onNext={handleNext}
                    onPrev={handlePrev}
                    data={formData.step2}
                    initialData={initialData}
                    changeHandle={changeHandle}
                    sightingData={sightingData}
                    setRowsItinerary={setRowsItinerary}
                    AddRowItinerary={AddRowItinerary}
                    rowsItinerary={rowsItinerary}
                    handleInputChangeItinerary={handleInputChangeItinerary}
                />
            )}
            {currentStep === 4 && (
                <FilghtAdd
                    onNext={handleNext}
                    onPrev={handlePrev}
                    data={formData.step2}
                    handleChangeImage={handleChangeImage}
                    image={image}
                    initialData={initialData}
                    handleQuillChange={handleQuillChange}
                />
            )}
            {currentStep === 5 && (
                <TransportInformation
                    onPrev={handlePrev}
                    data={formData.step2}
                    initialData={initialData}
                    changeHandle={changeHandle}
                    handleQuillChange={handleQuillChange}
                    setInitialData={setInitialData}
                    otherFacilityData={otherFacilityData}
                    locations={locations}
                    submitData={submitData}
                    getTransitionReport={getTransitionReport}
                    editData={editData}
                />
            )}

            {/* <QuotationInformation />
            <HotelInformaton /> */}
            <ToastContainer />
        </>
    )
}

export default TravelQuotationAddComp