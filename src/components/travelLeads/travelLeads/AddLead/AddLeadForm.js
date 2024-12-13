import React, { useCallback, useEffect, useState } from "react";
import FlightBooking from "./FlightBooking";
import HotelBooking from "./HotelBooking";
import Visa from "./Visa";
import Forex from "./Forex";
import Transport from "./Transport";
import GroupPackage from "./Grouppackage";
import CoustumPackage from "./CustomPackage";
import Bus from "./Bus";
import Train from "./Train";
import Sightseeing from "./Sightseeing";
import Passport from "./Passport";
import TrvelInsurance from "./TravelInsurance";
import Cruise from "./Cruise";
import Adventure from "./Adventure";
import Package from "./Package";
import Other from "./Other";
import debounce from "lodash.debounce";
import { addTravelRoomType, addTRCRM_tr_leadaddType, countryList, currencyList, getAirlLine, getByIdTRCRM_tr_lead, getByIdTRCRMOnlyUpdate, getLead_proposal_status, getpackageId, getsource, getStateMaster, gettask_priorityadmin, getTRCRM_customer_type_master_admin, getTRCRM_flight_classadmin, getTRCRM_preferenceadmin, getTRCRM_service_masteradmin, getTRCRM_sight_seeing_masteradmin, getTRCRM_star_rating_master, getTRCRM_trip_type_master_admin, getTRCRMstaff_admin, staffList, trcrm_tr_leadUpdate, TRCRM_visa_category_masterGet, TTRCRM_visa_type_masterGet } from "../../../../api/login/Login";
import { Select } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Loadar from "../../../../common/loader/Loader";
const { Option } = Select;

export default function AddLeadForm() {
    const params = useParams()
    const naviagte = useNavigate()
    const [packageData, setPackageData] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [loader, setLoader] = useState(false)

    const [initialData, setInitialData] = useState({
        customer_type: '',
        mobile_number: '',
        email_id: '',
        salutation: '',
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        alternate_mobile_number: '',
        alternate_email_id: '',
        lead_source: '',
        lead_priority: '',
        lead_status: '',
        no_of_adults: '',
        no_of_children: '',
        no_of_infant: '',
        trip_type: '',
        tag: '',
        assigned_to: '',
        notes: '',
        enquiry_type_flight_booking: false,
        enquiry_type_hotelbooking: false,
        enquiry_type_visa: false,
        enquiry_type_travel_insurance: false,
        enquiry_type_forex: false,
        enquiry_type_sightseeing: false,
        enquiry_type_transport: false,
        enquiry_type_other: false,
        package: false,
        enquiry_type_package: [{
            tour_start_date: '',
            budget: '',
            country: [],
            package_id: '',
            extra_details: ''
        }],
        enquiry_type_customise_package: false,
        enquiry_type_bus: false,
        enquiry_type_train: false,
        enquiry_type_passport: false,
        enquiry_type_cruise: false,
        enquiry_type_adventure: false,
        enquiry_type_group: false,
        flightBookings: [{
            from: '',
            to: '',
            departure: '',
            return: '',
            class: '',
            category_domestic_flight: false,
            category_international_flight: false,
            flexibility: '',
            preference: ''
        }],
        hotelBookingModels: [{
            country: '',
            city: '',
            room_type: '',
            star_rating: '',
            check_in: '',
            check_out: '',
            number_of_nights: '',
            budget: '',
            hotel_name: '',
            number_of_rooms: ''
        }],
        visaModel: [{
            country: '',
            visa_category: '',
            visa_type: '',
            duration: '',
            travel_date: '',
            job_profile: '',
            age: '',
            qualification: '',
            description: ''
        }],
        travelInsuranceModel: [{
            country: '',
            how_long: '',
            travel_date: '',
            insurance_for_visa: ''
        }],
        forexModel: [{
            country: '',
            currency: '',
            amount: ''
        }],
        sightseeingModel: [{
            sightseeing_id: '',
            preference: '',
            travel_date: ''
        }],
        transportModel: [{
            country: '',
            city: '',
            transport_date: '',
            drop_date: '',
            preference: '',
            transport_type_airport_transfers: false,
            transport_type_sightseeing_transfers: false,
            transport_type_other: false,
            transport_type_other_name: ''
        }],
        otherModel: [{
            country: '',
            travel_date: '',
            number_of_days: '',
            sub_category: '',
            description: ''
        }],
        customisePackageModel: [{
            country: '',
            option: '',
            stayCityFields: [],
            services: '',
            hotel_rating: '',
            travel_date: '',
            no_of_nights: '',
            flexibility: '',
            no_of_rooms: '',
            preference: '',
            budget: '',
            description: ''
        }],
        busModel: [{
            country: '',
            from: '',
            to: '',
            departure: '',
            return: '',
            preference: '',
            remark: ''
        }],
        trainModel: [{
            country: '',
            from: '',
            to: '',
            departure: '',
            return: '',
            preference: '',
            remark: ''
        }],
        passportModel: [{
            issuing_country: '',
            date: '',
            current_passport_number: '',
            place_of_apply: '',
            no_of_person: '',
            category: '',
            urgent: false,
            remark: ''
        }],
        cruiseModel: [{
            country: '',
            city: '',
            days: '',
            cruise_name: '',
            type: '',
            departure: '',
            return: '',
            room_preference: '',
            remark: ''
        }],
        adventureModel: [{
            country: '',
            city: '',
            travel_date: '',
            category_motorbiking: false,
            category_camping: false,
            category_safari: false,
            category_water_sports: false,
            remark: ''
        }],
        groupModel: [{
            country: '',
            state: '',
            package_id: '',
            preference: '',
            remark: ''
        }],

        flightDeleted: [],
        hotelBookingDeleted: [],
        travelInsuranceDeleted: [],
        sightDeleted: [],
        forexDeleted: [],
        transportDeleted: [],
        otherDeleted: [],
        busDeleted: [],
        trainDeleted: [],
        passportDeleted: [],
        cruiseDeleted: [],
        adventureDeleted: [],
        groupDeleted: [],

    })

    // console.log(initialData);



    const [Enquiry, setEnquiry] = useState({
        enquiry_type_flight_booking: false,
        enquiry_type_hotelbooking: false,
        enquiry_type_visa: false,
        enquiry_type_travel_insurance: false,
        enquiry_type_forex: false,
        enquiry_type_sightseeing: false,
        enquiry_type_transport: false,
        enquiry_type_other: false,
        package: false,
        enquiry_type_customise_package: false,
        enquiry_type_bus: false,
        enquiry_type_train: false,
        enquiry_type_passport: false,
        enquiry_type_cruise: false,
        enquiry_type_adventure: false,
        enquiry_type_group: false
    })

    // console.log(Enquiry);

    const handleEnquiry = (str, val) => {
        // setEnquiry(!run)

        const clone = { ...Enquiry, [str]: val }
        // console.log(clone);
        setEnquiry(clone)
        const clone2 = { ...initialData, enquiry_type_flight_booking: clone?.enquiry_type_flight_booking, enquiry_type_hotelbooking: clone?.enquiry_type_hotelbooking, enquiry_type_visa: clone?.enquiry_type_visa, enquiry_type_travel_insurance: clone?.enquiry_type_travel_insurance, enquiry_type_forex: clone?.enquiry_type_forex, enquiry_type_sightseeing: clone?.enquiry_type_sightseeing, enquiry_type_transport: clone?.enquiry_type_transport, enquiry_type_other: clone?.enquiry_type_other, package: clone?.package, enquiry_type_customise_package: clone?.enquiry_type_customise_package, enquiry_type_bus: clone?.enquiry_type_bus, enquiry_type_train: clone?.enquiry_type_train, enquiry_type_passport: clone?.enquiry_type_passport, enquiry_type_cruise: clone?.enquiry_type_cruise, enquiry_type_adventure: clone?.enquiry_type_adventure, enquiry_type_group: clone?.enquiry_type_group }
        setInitialData(clone2)
    }

    const [customerType, setCustomer] = useState(null)
    const [leadSource, setLeadSource] = useState(null)
    const [leadPriority, setLeadPriority] = useState(null)
    const [leadStatus, setLeadStatus] = useState(null)
    const [tripType, setTripType] = useState(null)
    const [staff, setStaff] = useState(null)
    const [preference, setPreference] = useState(null)
    const [classData, setClassData] = useState(null)
    const [roomType, setroomType] = useState(null)
    const [starRatting, setStarRatting] = useState(null)
    const [countryData, setcountryData] = useState(null)
    const [visaCatData, setVisaCatData] = useState(null)
    const [visaTypeData, setVisaTypeData] = useState(null)
    const [currencyData, setCurrencyData] = useState(null)
    const [sight_seeingData, setSight_seeing] = useState(null)
    const [state, setstate] = useState(null)
    const [services, setServices] = useState(null)

    const comboDataGet = async () => {
        try {
            const resCustomerType = await getTRCRM_customer_type_master_admin()
            setCustomer(resCustomerType?.data);
            const resLeadSource = await getsource()
            setLeadSource(resLeadSource?.data);
            const resLeadPriority = await gettask_priorityadmin()
            setLeadPriority(resLeadPriority?.data);
            const resleadStatus = await getLead_proposal_status()
            setLeadStatus(resleadStatus?.data);
            const resTripType = await getTRCRM_trip_type_master_admin()
            setTripType(resTripType?.data);
            const resStaff = await getTRCRMstaff_admin()
            setStaff(resStaff?.data);
            const resPreference = await getTRCRM_preferenceadmin()
            setPreference(resPreference?.data);
            const resClassData = await getTRCRM_flight_classadmin()
            setClassData(resClassData?.data);
            const resRoomType = await addTravelRoomType()
            setroomType(resRoomType?.data);
            const resStarRating = await getTRCRM_star_rating_master()
            setStarRatting(resStarRating?.data);
            const resCountry = await countryList()
            setcountryData(resCountry?.data);
            const resvisa_category = await TRCRM_visa_category_masterGet()
            setVisaCatData(resvisa_category?.data);
            const resvisa_type = await TTRCRM_visa_type_masterGet()
            setVisaTypeData(resvisa_type?.data);
            const resCurrency = await currencyList()
            setCurrencyData(resCurrency?.data);
            const resSight_seeing = await getTRCRM_sight_seeing_masteradmin()
            setSight_seeing(resSight_seeing?.data);
            const resState = await getStateMaster()
            setstate(resState?.data)
            const resService = await getTRCRM_service_masteradmin()
            setServices(resService?.data)
        } catch (error) {

        }
    }


    const [locations, setLocations] = useState([]);
    const searchAirlLine = async () => {
        try {
            const res = await getAirlLine()
            setLocations(res?.data);
        } catch (error) {

        }
    }

    const changeHandle = (e) => {
        const clone = { ...initialData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialData(clone)
    }

    // flightRow

    const [flightrows, setflightrowsRows] = useState([
        {
            from: "",
            to: "",
            departure: "",
            return: "",
            class: "",
            category_domestic_flight: false,
            category_international_flight: false,
            flexibility: "",
            preference: "",
        },
    ]);

    const addRowFlight = () => {
        setflightrowsRows((prevRows) => [
            ...prevRows,
            {
                from: "",
                to: "",
                departure: "",
                return: "",
                class: "",
                category_domestic_flight: false,
                category_international_flight: false,
                flexibility: "",
                preference: "",
            },
        ]);
    };

    const handleRowChangeFlight = (index, field, value) => {
        const updatedRows = [...flightrows];
        updatedRows[index][field] = value;
        setflightrowsRows(updatedRows);
        const clone = { ...initialData, flightBookings: updatedRows }
        setInitialData(clone)
    };

    // flightRow

    // hotelRow
    const [hotelRow, setHotelRow] = useState([
        {
            country: "",
            city: "",
            room_type: "",
            star_rating: "",
            check_in: "",
            check_out: "",
            number_of_nights: "",
            budget: "",
            hotel_name: "",
            number_of_rooms: "",
        },
    ]);

    const addHotelRow = () => {
        setHotelRow((prevRows) => [
            ...prevRows,
            {
                country: "",
                city: "",
                room_type: "",
                star_rating: "",
                check_in: "",
                check_out: "",
                number_of_nights: "",
                budget: "",
                hotel_name: "",
                number_of_rooms: "",
            },
        ]);
    };

    const handleInputChangeHotel = (index, field, value) => {
        const updatedRows = [...hotelRow];
        updatedRows[index][field] = value;
        setHotelRow(updatedRows);
        const clone = { ...initialData, hotelBookingModels: updatedRows }
        setInitialData(clone)
    };
    // hotelRow

    // visa
    const [rowsVisa, setRowsVisa] = useState([
        {
            country: "",
            visa_category: "",
            visa_type: "",
            duration: "",
            travel_date: "",
            job_profile: '',
            age: '',
            qualification: "",
            description: "",
        }
    ]);

    const AddVisaRow = () => {
        setRowsVisa((prevRows) => [
            ...prevRows,
            {
                country: "",
                visa_category: "",
                visa_type: "",
                duration: "",
                travel_date: "",
                job_profile: '',
                age: '',
                qualification: "",
                description: "",
            },
        ]);
    };
    const handleInputChangeVisa = (index, field, value) => {
        const updatedRows = [...rowsVisa];
        updatedRows[index][field] = value;
        setRowsVisa(updatedRows);
        const clone = { ...initialData, visaModel: updatedRows }
        setInitialData(clone)
    };
    // visa

    //travelInsurence
    const [rowsTravelIns, setRowsTravelIns] = useState([
        {
            country: "",
            how_long: "",
            travel_date: "",
            insurance_for_visa: false,
        }
    ]);

    const AddRowTravelIns = () => {
        setRowsTravelIns((prevRows) => [
            ...prevRows,
            {
                country: "",
                how_long: "",
                travel_date: "",
                insurance_for_visa: false,
            },
        ]);
    };

    const handleInputChangeTravelInsurence = (index, field, value) => {
        const updatedRows = [...rowsTravelIns];
        updatedRows[index][field] = value;
        setRowsTravelIns(updatedRows);
        const clone = { ...initialData, travelInsuranceModel: updatedRows }
        setInitialData(clone)
    };
    //travelInsurence

    //forex
    const [rowsForex, setRowsForex] = useState([
        {
            country: "",
            currency: '',
            amount: " "
        }
    ]);

    const AddRowForex = () => {
        setRowsForex((prevRows) => [
            ...prevRows,
            {
                country: "",
                currency: '',
                amount: " "
            },
        ]);
    };
    const handleInputChangeForex = (index, field, value) => {
        const updatedRows = [...rowsForex];
        updatedRows[index][field] = value;
        setRowsForex(updatedRows);
        const clone = { ...initialData, forexModel: updatedRows }
        setInitialData(clone)
    };
    //forex

    //Sightseeing
    const [rowsSightseeing, setRowsSightseeing] = useState([
        {
            country: "",
            city: "",
            sightseeing_id: "",
            preference: "",
            travel_date: "",
        }
    ]); // Initialize as an array

    const AddRowSightseeing = () => {
        setRowsSightseeing((prevRows) => [
            ...prevRows,
            {
                country: "",
                city: "",
                sightseeing_id: "",
                preference: "",
                travel_date: "",
            },
        ]);
    };

    const handleInputChangeSightseeing = (index, field, value) => {
        const updatedRows = [...rowsSightseeing];
        updatedRows[index][field] = value;
        setRowsSightseeing(updatedRows);
        const clone = { ...initialData, sightseeingModel: updatedRows }
        setInitialData(clone)
    };
    //Sightseeing

    //trasport
    const [rowsTrasport, setRowsTrasport] = useState([
        {
            country: "",
            city: "",
            transport_date: "",
            drop_date: "",
            preference: "",
            transport_type_airport_transfers: false,
            transport_type_sightseeing_transfers: false,
            transport_type_other: false,
            transport_type_other_name: "",
        }
    ]); // Initialize as an array

    const AddRowtTrasport = () => {
        setRowsTrasport((prevRows) => [
            ...prevRows,
            {
                country: "",
                city: "",
                transport_date: "",
                drop_date: "",
                preference: "",
                transport_type_airport_transfers: false,
                transport_type_sightseeing_transfers: false,
                transport_type_other: false,
                transport_type_other_name: "",
            },
        ]);
    };
    const handleInputChangeTranport = (index, field, value) => {
        const updatedRows = [...rowsTrasport];
        updatedRows[index][field] = value;
        setRowsTrasport(updatedRows);
        const clone = { ...initialData, transportModel: updatedRows }
        setInitialData(clone)
    };
    //trasport
    //other
    const [rowsOther, setOther] = useState([
        {
            country: "",
            travel_date: "",
            number_of_days: "",
            sub_category: "",
            description: "",
        }
    ]); // Initialize as an array

    const AddOther = () => {
        setRowsTrasport((prevRows) => [
            ...prevRows,
            {
                country: "",
                travel_date: "",
                number_of_days: "",
                sub_category: "",
                description: "",
            },
        ]);
    };
    const handleInputChangeOther = (index, field, value) => {
        const updatedRows = [...rowsOther];
        updatedRows[index][field] = value;
        setOther(updatedRows);
        const clone = { ...initialData, otherModel: updatedRows }
        setInitialData(clone)
    };
    //other

    //package
    const [packageRow, setpackageRow] = useState([
        {
            tour_start_date: "",
            budget: "",
            country: [],
            package_id: "",
            extra_details: ''
        }
    ]); // Initialize as an array

    const addPackageRow = () => {
        setpackageRow((prevRows) => [
            ...prevRows,
            {
                tour_start_date: "",
                budget: "",
                country: [],
                package_id: "",
                extra_details: ''
            },
        ]);
    };
    const handleInputChangePackage = (index, field, value) => {
        const updatedRows = [...packageRow];
        updatedRows[index][field] = value;
        setpackageRow(updatedRows);
        const clone = { ...initialData, enquiry_type_package: updatedRows }
        setInitialData(clone)
    };

    //customisePackage
    const [rowsCustomisePackage, setRowsCustomisePackage] = useState([
        {
            country: [],
            option: "",
            stayCityFields: [],
            services: "",
            hotel_rating: "",
            travel_date: "",
            no_of_nights: "",
            flexibility: "",
            no_of_rooms: "",
            preference: "",
            budget: "",
            description: "",
        },
    ]);

    // console.log(rowsCustomisePackage);


    const AddRowCustomisePackage = () => {
        setRowsCustomisePackage((prevRows) => [
            ...prevRows,
            {
                country: [],
                option: "",
                stayCityFields: [],
                services: "",
                hotel_rating: "",
                travel_date: "",
                no_of_nights: "",
                flexibility: "",
                no_of_rooms: "",
                preference: "",
                budget: "",
                description: "",
            },
        ]);
    };

    // Handle input changes
    const handleInputChangeGroupCustomisePackage = (index, field, value) => {
        const updatedRows = [...rowsCustomisePackage];
        updatedRows[index][field] = value;
        setRowsCustomisePackage(updatedRows);
        const clone = { ...initialData, customisePackageModel: updatedRows }
        setInitialData(clone)
    };
    // Add Stay and City field for a specific row
    const addStayCityField = (rowIndex) => {
        const updatedRows = [...rowsCustomisePackage];
        updatedRows[rowIndex].stayCityFields.push({ stay: "", city: "" });
        setRowsCustomisePackage(updatedRows);
        // const clone = { ...initialData, customisePackageModel: updatedRows }
        // setInitialData(clone)
    };
    const handleStayCityChange = (rowIndex, fieldIndex, field, value) => {
        const updatedRows = [...rowsCustomisePackage];
        updatedRows[rowIndex].stayCityFields[fieldIndex][field] = value;
        setRowsCustomisePackage(updatedRows);
        const clone = { ...initialData, customisePackageModel: updatedRows }
        setInitialData(clone)
    };
    //customisePackage

    //bus
    const [rowsBus, setRowsBus] = useState([
        {
            country: "",
            from: "",
            to: "",
            departure: "",
            return: "",
            preference: '',
            remark: '',
        }
    ]); // Initialize as an array

    const AddRowBuss = () => {
        setRowsBus((prevRows) => [
            ...prevRows,
            {
                country: "",
                from: "",
                to: "",
                departure: "",
                return: "",
                preference: '',
                remark: '',
            },
        ]);
    };
    const handleInputChangeBuss = (index, field, value) => {
        const updatedRows = [...rowsBus];
        updatedRows[index][field] = value;
        setRowsBus(updatedRows);
        const clone = { ...initialData, busModel: updatedRows }
        setInitialData(clone)
    };
    //bus

    //train
    const [rowsTrain, setRowsTrain] = useState([
        {
            country: "",
            from: "",
            to: "",
            departure: "",
            return: "",
            preference: '',
            remark: '',
        }
    ]); // Initialize as an array

    const AddRowTrain = () => {
        setRowsTrain((prevRows) => [
            ...prevRows,
            {
                country: "",
                from: "",
                to: "",
                departure: "",
                return: "",
                preference: '',
                remark: '',
            },
        ]);
    };
    const handleInputChangeTrain = (index, field, value) => {
        const updatedRows = [...rowsTrain];
        updatedRows[index][field] = value;
        setRowsTrain(updatedRows);
        const clone = { ...initialData, trainModel: updatedRows }
        setInitialData(clone)
    };
    //train

    //passPort
    const [rowsPassport, setRowsPassport] = useState([
        {
            issuing_country: "",
            date: "",
            current_passport_number: "",
            place_of_apply: "",
            no_of_person: "",
            category: '',
            urgent: false,
            remark: ''
        }
    ]); // Initialize as an array

    const AddRowPassport = () => {
        setRowsPassport((prevRows) => [
            ...prevRows,
            {
                issuing_country: "",
                date: "",
                current_passport_number: "",
                place_of_apply: "",
                no_of_person: "",
                category: '',
                urgent: false,
                remark: ''
            },
        ]);
    };
    const handleInputChangePassport = (index, field, value) => {
        const updatedRows = [...rowsPassport];
        updatedRows[index][field] = value;
        setRowsPassport(updatedRows);
        const clone = { ...initialData, passportModel: updatedRows }
        setInitialData(clone)
    };

    //passPort

    //CRUISE
    const [rowsCruise, setRowsCruise] = useState([
        {
            country: "",
            city: "",
            days: "",
            cruise_name: "",
            type: "",
            departure: '',
            return: '',
            room_preference: '',
            remark: ''
        }
    ]); // Initialize as an array

    const AddRowCruise = () => {
        setRowsCruise((prevRows) => [
            ...prevRows,
            {
                country: "",
                city: "",
                days: "",
                cruise_name: "",
                type: "",
                departure: '',
                return: '',
                room_preference: '',
                remark: ''
            },
        ]);
    };
    const handleInputChangeCruise = (index, field, value) => {
        const updatedRows = [...rowsCruise];
        updatedRows[index][field] = value;
        setRowsCruise(updatedRows);
        const clone = { ...initialData, cruiseModel: updatedRows }
        setInitialData(clone)
    };
    //CRUISE

    // Adventure
    const [rowsAdventure, setRowsAdventure] = useState([
        {
            country: "",
            city: "",
            travel_date: "",
            category_motorbiking: false,
            category_camping: false,
            category_safari: false,
            category_water_sports: false,
            remark: ''
        }
    ]); // Initialize as an array

    const AddRowAdventure = () => {
        setRowsAdventure((prevRows) => [
            ...prevRows,
            {
                country: "",
                city: "",
                travel_date: "",
                category_motorbiking: false,
                category_camping: false,
                category_safari: false,
                category_water_sports: false,
                remark: ''
            },
        ]);
    };
    const handleInputChangeAdventure = (index, field, value) => {
        const updatedRows = [...rowsAdventure];
        updatedRows[index][field] = value;
        setRowsAdventure(updatedRows);
        const clone = { ...initialData, adventureModel: updatedRows }
        setInitialData(clone)
    };
    // Adventure

    // groupPackage

    const packageDataGet = async (query) => {
        try {
            // if (query.length < 2) {
            //     setPackageData([]);
            //     return;
            // }
            const res = await getpackageId(query)
            // console.log(res?.data);
            setPackageData(res?.data);

        } catch (error) {

        }
    }
    // const debouncedFetch = useCallback(debounce((query) => packageDataGet(query), 300), []);

    const debouncedFetch = useCallback(
        debounce(async (query) => {
            if (query.length >= 2) {
                try {
                    const res = await getpackageId(query);
                    setPackageData(res?.data || []);
                } catch (error) {
                    console.error("Error fetching package data:", error);
                }
            } else {
                setPackageData([]);
            }
        }, 300),
        []
    );

    const [rowsGroupPackage, setGroupPackage] = useState([
        {
            country: "",
            state: "",
            package_id: "",
            preference: '',
            remark: false,
        }
    ]); // Initialize as an array

    const AddRowGroupPackage = () => {
        setGroupPackage((prevRows) => [
            ...prevRows,
            {
                country: "",
                state: "",
                package_id: "",
                preference: '',
                remark: '',
            },
        ]);
    };
    const handleInputChangeGroupPackage = (index, field, value) => {
        const updatedRows = [...rowsGroupPackage];
        updatedRows[index][field] = value;
        setGroupPackage(updatedRows);
        const clone = { ...initialData, groupModel: updatedRows }
        setInitialData(clone)
    };

    const handleSearch = (value) => {
        setSearchTerm(value);
        debouncedFetch(value);
    };
    // groupPackage
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? `${message}` : `${message}`}`, {
            position: "top-right",
        });
    };

    const toastErroeMessage = (message) => {
        toast.error(`${message}`, {
            position: "top-right",
        });
    };

    const disabled = !initialData?.customer_type || !initialData?.mobile_number || !initialData?.email_id || !initialData?.salutation || !initialData?.first_name || !initialData?.last_name || !initialData?.address || !initialData?.city || !initialData?.alternate_mobile_number || !initialData?.alternate_email_id || !initialData?.lead_source || !initialData?.lead_priority || !initialData?.lead_status || !initialData?.no_of_adults || !initialData?.no_of_children || !initialData?.no_of_infant || !initialData?.trip_type || !initialData?.tag || !initialData?.assigned_to || !initialData?.notes


    const submitData = async () => {
        console.log(initialData);
        setLoader(true)
        if (!params?.id) {
            try {
                const res = await addTRCRM_tr_leadaddType(initialData)
                // console.log(res?.error == false);
                if (res?.error == false) {
                    toastSuccessMessage(res?.message)
                    setLoader(false)
                    setTimeout(() => {
                        naviagte('/travel-leads')
                    }, 2000)
                } else {
                    toastErroeMessage(res?.message)
                    setLoader(false)
                }
            } catch (error) {
                setLoader(false)
            }
            // console.log(flightrows);
            // console.log(Enquiry);
        } else {
            try {
                const res = await trcrm_tr_leadUpdate(params?.id, initialData)
                // console.log(res?.error == false);
                if (res?.error == false) {
                    toastSuccessMessage(res?.message)
                    setLoader(false)
                    setTimeout(() => {
                        naviagte('/travel-leads')
                    }, 2000)
                } else {
                    toastErroeMessage(res?.message)
                    setLoader(false)
                }
            } catch (error) {
                setLoader(false)
            }
        }

    }


    useEffect(() => {
        const getByIdData = async () => {
            try {
                const res = await getByIdTRCRMOnlyUpdate(params?.id);

                if (!res || !res.data) return;

                const data = res.data;

                // Clone and update initial data
                const updatedData = {
                    ...initialData,
                    address: data.address,
                    customer_type: data.customer_type,
                    mobile_number: data.mobile_number,
                    email_id: data.email_id,
                    salutation: data.salutation,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    city: data.city,
                    alternate_mobile_number: data.alternate_mobile_number,
                    alternate_email_id: data.alternate_email_id,
                    lead_source: data.lead_source,
                    lead_priority: data.lead_priority,
                    lead_status: data.lead_status,
                    no_of_adults: data.no_of_adults,
                    no_of_children: data.no_of_children,
                    no_of_infant: data.no_of_infant,
                    trip_type: data.trip_type,
                    tag: data.tag,
                    assigned_to: data.assigned_to,
                    notes: data.notes,
                    flightBookings: data.lead_flight,
                    enquiry_type_package: data.lead_flight,
                    hotelBookingModels: data.lead_hotel,
                    visaModel: data.lead_visa,
                    travelInsuranceModel: data.lead_travel_in,
                    forexModel: data.lead_forex,
                    sightseeingModel: data.lead_sightseeing,
                    transportModel: data.lead_transport,
                    otherModel: data.lead_other,
                    customisePackageModel: data.lead_customisePackage,
                    busModel: data.lead_bus,
                    trainModel: data.lead_train,
                    passportModel: data.lead_passport,
                    cruiseModel: data.lead_cruise,
                    adventureModel: data.lead_adventure,
                    groupModel: data.lead_group
                };
                setInitialData(updatedData);

                // Set individual state updates for rows
                const arrayOrEmpty = (arr) => (Array.isArray(arr) ? arr : []);

                setEnquiry(data);
                setflightrowsRows(arrayOrEmpty(data.lead_flight));
                setHotelRow(arrayOrEmpty(data.lead_hotel));
                setRowsVisa(arrayOrEmpty(data.lead_visa));
                setRowsTravelIns(arrayOrEmpty(data.lead_travel_in));
                setRowsForex(arrayOrEmpty(data.lead_forex));
                setRowsSightseeing(arrayOrEmpty(data.lead_sightseeing));
                setRowsTrasport(arrayOrEmpty(data.lead_transport));
                setOther(arrayOrEmpty(data.lead_other));
                setRowsCustomisePackage(arrayOrEmpty(data.lead_customisePackage));
                setRowsBus(arrayOrEmpty(data.lead_bus));
                setRowsTrain(arrayOrEmpty(data.lead_train));
                setRowsPassport(arrayOrEmpty(data.lead_passport));
                setRowsCruise(arrayOrEmpty(data.lead_cruise));
                setRowsAdventure(arrayOrEmpty(data.lead_adventure));

                const groupData = arrayOrEmpty(data.lead_group).map((group) => ({
                    ...group,
                    package_id: group.package_id?.package || "",
                }));
                setGroupPackage(groupData);

                const packageData = arrayOrEmpty(data.enquiry_type_package).map((pkg) => ({
                    ...pkg,
                    package_id: pkg.package_id?.package || "",
                }));
                setpackageRow(packageData);
            } catch (error) {
                console.error("Failed to fetch data: ", error);
            }
        };

        if (params?.id) {
            getByIdData();
        }
    }, [params?.id]);




    // useEffect(() => {
    //     const getByIdData = async () => {
    //         try {
    //             const res = await getByIdTRCRMOnlyUpdate(params?.id)
    //             // setInitialData(res?.data)

    //             const clone = { ...initialData, address: res?.data?.address, customer_type: res?.data?.customer_type, mobile_number: res?.data?.mobile_number, email_id: res?.data?.email_id, salutation: res?.data?.salutation, first_name: res?.data?.first_name, last_name: res?.data?.last_name, city: res?.data?.city, alternate_mobile_number: res?.data?.alternate_mobile_number, alternate_email_id: res?.data?.alternate_email_id, lead_source: res?.data?.lead_source, lead_priority: res?.data?.lead_priority, lead_status: res?.data?.lead_status, no_of_adults: res?.data?.no_of_adults, no_of_children: res?.data?.no_of_children, no_of_infant: res?.data?.no_of_infant, trip_type: res?.data?.trip_type, tag: res?.data?.tag, assigned_to: res?.data?.assigned_to, notes: res?.data?.notes, flightBookings: res?.data?.lead_flight, enquiry_type_package: res?.data?.lead_flight, hotelBookingModels: res?.data?.lead_hotel, visaModel: res?.data?.lead_visa, travelInsuranceModel: res?.data?.lead_travel_in, forexModel: res?.data?.lead_forex, sightseeingModel: res?.data?.lead_sightseeing, transportModel: res?.data?.lead_transport, otherModel: res?.data?.lead_other, customisePackageModel: res?.data?.lead_customisePackage, busModel: res?.data?.lead_bus, trainModel: res?.data?.lead_train, passportModel: res?.data?.lead_passport, cruiseModel: res?.data?.lead_cruise, adventureModel: res?.data?.lead_adventure, groupModel: res?.data?.lead_group }
    //             setInitialData(clone)

    //             setEnquiry(res?.data)


    //             setflightrowsRows(Array.isArray(res?.data?.lead_flight) ? res.data.lead_flight : [])

    //             setHotelRow(Array.isArray(res?.data?.lead_hotel) ? res.data.lead_hotel : [])
    //             setRowsVisa(Array.isArray(res?.data?.lead_visa) ? res.data.lead_visa : [])
    //             setRowsTravelIns(Array.isArray(res?.data?.lead_travel_in) ? res.data.lead_travel_in : [])
    //             setRowsForex(Array.isArray(res?.data?.lead_forex) ? res.data.lead_forex : [])
    //             setRowsSightseeing(Array.isArray(res?.data?.lead_sightseeing) ? res.data.lead_sightseeing : [])
    //             setRowsTrasport(Array.isArray(res?.data?.lead_transport) ? res.data.lead_transport : [])
    //             setOther(Array.isArray(res?.data?.lead_other) ? res.data.lead_other : [])
    //             setRowsCustomisePackage(Array.isArray(res?.data?.lead_customisePackage) ? res.data.lead_customisePackage : [])
    //             setRowsBus(Array.isArray(res?.data?.lead_bus) ? res.data.lead_bus : [])
    //             setRowsTrain(Array.isArray(res?.data?.lead_bus) ? res.data.lead_bus : [])
    //             setRowsPassport(Array.isArray(res?.data?.lead_passport) ? res.data.lead_passport : [])
    //             setRowsCruise(Array.isArray(res?.data?.lead_cruise) ? res.data.lead_cruise : [])
    //             setRowsAdventure(Array.isArray(res?.data?.lead_adventure) ? res.data.lead_adventure : [])
    //             setGroupPackage(Array.isArray(res?.data?.lead_group) ? res.data.lead_group : [])
    //             setGroupPackage(
    //                 Array.isArray(res?.data?.lead_group)
    //                     ? res.data.lead_group.map((group) => ({
    //                         ...group,
    //                         package_id: group.package_id?.package || "",
    //                     }))
    //                     : []
    //             );
    //             setpackageRow(Array.isArray(res?.data?.enquiry_type_package) ? res.data.enquiry_type_package : [])
    //             setpackageRow(
    //                 Array.isArray(res?.data?.enquiry_type_package)
    //                     ? res.data.enquiry_type_package.map((group) => ({
    //                         ...group,
    //                         package_id: group.package_id?.package || "",
    //                     }))
    //                     : []
    //             );
    //         } catch (error) {

    //         }
    //     }
    //     if (params?.id) {
    //         getByIdData();
    //     }
    // }, [params?.id])


    useEffect(() => {
        comboDataGet()
        searchAirlLine()
    }, [])
    return (
        <>
            {loader && <Loadar />}
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="row">
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label">Customer Type <span className="text-danger fs-5">*</span></label>
                                            <div className="w-100">
                                                <select className="form-select shadow " name="customer_type" value={initialData?.customer_type} onChange={changeHandle}>
                                                    <option selected>Open this select Customer Type</option>
                                                    {customerType && customerType?.map((item) => {
                                                        return <option value={item?._id} key={item?._id}>{item?.customer_type}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="mt-2">
                                            <label class="form-label"> Mobile <span className="text-danger fs-5">*</span></label>
                                            <input type="number" class="form-control" placeholder="Mobile number" name="mobile_number" value={initialData?.mobile_number} onChange={changeHandle} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label">Email <span className="text-danger fs-5">*</span></label>
                                            <input className="form-control" placeholder="email " type="email" name="email_id" value={initialData?.email_id} onChange={changeHandle} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="mt-2">
                                                    <label className="Form-label">Salutation <span className="text-danger fs-5">*</span></label>
                                                    <div className="w-100">
                                                        <select className="form-select shadow" name="salutation" value={initialData?.salutation} onChange={changeHandle}>
                                                            <option selected>Select Salutation</option>
                                                            <option value={'Mr'}>Mr</option>
                                                            <option value={'Mrs'}>Mrs</option>
                                                            <option value={'Ms'}>Ms</option>
                                                            <option value={'Miss'}>Miss</option>
                                                            <option value={'Dr'}>Dr</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="mt-2">
                                                    <label className="form-labe;">First Name <span className="text-danger fs-5">*</span></label>
                                                    <input type="text" placeholder="first name" className="form-control" name="first_name" value={initialData?.first_name} onChange={changeHandle} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" placeholder="Last name" className="form-control" name="last_name" value={initialData?.last_name} onChange={changeHandle} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label">Address <span className="text-danger fs-5">*</span></label>
                                            <input type="text" placeholder="addres" className="form-control" name="address" value={initialData?.address} onChange={changeHandle} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label">City <span className="text-danger fs-5">*</span></label>
                                            {/* <input type="text" placeholder="City" className="form-control" name="city" value={initialData?.city} onChange={changeHandle} /> */}
                                            <Select
                                                showSearch
                                                style={{ width: "100%", height: '40px' }}
                                                placeholder="Select Departure"
                                                optionFilterProp="children"
                                                className=""
                                                name='city'
                                                value={initialData?.city}
                                                onChange={(value) => {
                                                    setInitialData((prev) => ({
                                                        ...prev,
                                                        city: value, // Update the `city` field with the selected value
                                                    }));
                                                }}
                                            >
                                                {locations?.map((loc) => (
                                                    <Option key={loc._id} value={loc._id}>
                                                        {loc.city_name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label">Alternate Mobile Number <span className="text-danger fs-5">*</span></label>
                                            <input type="text" placeholder="Alternate Mobile Number" className="form-control" name="alternate_mobile_number" value={initialData?.alternate_mobile_number} onChange={changeHandle} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label my-1">Alternate Email Id <span className="text-danger fs-5">*</span></label>
                                            <input className="form-control" type="email" placeholder="Alternate Email Id" name="alternate_email_id" value={initialData?.alternate_email_id} onChange={changeHandle} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label my-1">Lead Source <span className="text-danger fs-5">*</span></label>
                                            <div className="w-100">
                                                <select className="form-select shadow" name="lead_source" value={initialData?.lead_source} onChange={changeHandle}>
                                                    <option selected>Open this Lead Priority</option>
                                                    {leadSource && leadSource?.map((item) => {
                                                        return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label my-1">Lead Priority <span className="text-danger fs-5">*</span></label>
                                            <div className="w-100">
                                                <select className="form-select shadow" name="lead_priority" value={initialData?.lead_priority} onChange={changeHandle}>
                                                    <option selected>Open this Lead Priority</option>
                                                    {leadPriority && leadPriority?.map((item) => {
                                                        return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label my-1">Lead Status <span className="text-danger fs-5">*</span></label>
                                            <div className="w-100">
                                                <select className="form-select shadow" name="lead_status" value={initialData?.lead_status} onChange={changeHandle}>
                                                    <option selected>Open this Lead Priority</option>
                                                    {leadStatus && leadStatus?.map((item) => {
                                                        return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="mt-2">
                                                    <label className="form-label">No. of Adults <span className="text-danger fs-5">*</span></label>
                                                    <input className="form-control" type="number" placeholder="No.of Adult" name="no_of_adults" value={initialData?.no_of_adults} onChange={changeHandle} />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="mt-2">
                                                    <label className="form-label">No. of Children <span className="text-danger fs-5">*</span></label>
                                                    <input type="number" placeholder="No.of Children" className="form-control" name="no_of_children" value={initialData?.no_of_children} onChange={changeHandle} />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="mt-2">
                                                    <label className="form-label">No. of Infant <span className="text-danger fs-5">*</span></label>
                                                    <input type="number" className="form-control" placeholder="No.of Infant" name="no_of_infant" value={initialData?.no_of_infant} onChange={changeHandle} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label my-1">Trip Type <span className="text-danger fs-5">*</span></label>
                                            <div className="w-100">
                                                <select className="form-select shadow " name="trip_type" value={initialData?.trip_type} onChange={changeHandle}>
                                                    <option selected>Open this Trip Type</option>
                                                    {tripType && tripType?.map((item) => {
                                                        return <option value={item?._id} key={item?._id}>{item?.trip_type}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label my-1">Tag <span className="text-danger fs-5">*</span></label>
                                            <div className="w-100">
                                                <select className="form-select shadow " name="tag" value={initialData?.tag} onChange={changeHandle}>
                                                    <option selected>Open this Tag</option>
                                                    {tripType && tripType?.map((item) => {
                                                        return <option value={item?._id} key={item?._id}>{item?.trip_type}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label my-1">Assigned To <span className="text-danger fs-5">*</span></label>
                                            <div className="w-100">
                                                <select className="form-select shadow " name="assigned_to" value={initialData?.assigned_to} onChange={changeHandle}>
                                                    <option selected>Open this Assigned To</option>
                                                    {staff && staff?.map((item) => {
                                                        return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mt-3">
                                            <h1 className="fs-6">Enquiry Type </h1>
                                            <div className="mt-2 row">
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_flight_booking} onChange={() => { handleEnquiry('enquiry_type_flight_booking', !Enquiry?.enquiry_type_flight_booking) }} />
                                                        <label className=" m-0 fs-6">Flight Booking</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_hotelbooking} onChange={() => { handleEnquiry('enquiry_type_hotelbooking', !Enquiry?.enquiry_type_hotelbooking) }} />
                                                        <label className=" m-0 fs-6">Hotel Booking</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_visa}
                                                            onChange={() => { handleEnquiry("enquiry_type_visa", !Enquiry?.enquiry_type_visa) }}
                                                        />
                                                        <label className=" m-0 fs-6">Visa</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_travel_insurance}
                                                            onChange={() => { handleEnquiry('enquiry_type_travel_insurance', !Enquiry?.enquiry_type_travel_insurance) }}
                                                        />
                                                        <label className=" m-0 fs-6">Travel Insurance</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_forex}
                                                            onChange={() => { handleEnquiry("enquiry_type_forex", !Enquiry?.enquiry_type_forex) }}
                                                        />
                                                        <label className=" m-0 fs-6">Forex</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_sightseeing}
                                                            onChange={() => { handleEnquiry("enquiry_type_sightseeing", !Enquiry?.enquiry_type_sightseeing) }}
                                                        />
                                                        <label className=" m-0 fs-6">Sightseeing</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_transport}
                                                            onChange={() => { handleEnquiry("enquiry_type_transport", !Enquiry?.enquiry_type_transport) }}
                                                        />
                                                        <label className=" m-0 fs-6">Transport</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} Checked={Enquiry?.enquiry_type_other}
                                                            onChange={() => { handleEnquiry("enquiry_type_other", !Enquiry?.enquiry_type_other) }}
                                                        />
                                                        <label className=" m-0 fs-6">Other</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.package}
                                                            onChange={() => { handleEnquiry("package", !Enquiry?.package) }}
                                                        />
                                                        <label className=" m-0 fs-6">Package</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_customise_package}
                                                            onChange={() => { handleEnquiry('enquiry_type_customise_package', !Enquiry?.enquiry_type_customise_package) }}
                                                        />
                                                        <label className=" m-0 fs-6">Customise Package</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_bus}
                                                            onChange={() => { handleEnquiry('enquiry_type_bus', !Enquiry?.enquiry_type_bus) }}
                                                        />
                                                        <label className=" m-0 fs-6">Bus</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_train}
                                                            onChange={() => { handleEnquiry('enquiry_type_train', !Enquiry?.enquiry_type_train) }}
                                                        />
                                                        <label className=" m-0 fs-6">Train</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_passport} onChange={() => { handleEnquiry('enquiry_type_passport', !Enquiry?.enquiry_type_passport) }} />
                                                        <label className=" m-0 fs-6">Passport</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_cruise}
                                                            onClick={() => handleEnquiry('enquiry_type_cruise', !Enquiry?.enquiry_type_cruise)}
                                                        />
                                                        <label className=" m-0 fs-6">Cruise</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} checked={Enquiry?.enquiry_type_adventure}
                                                            onChange={() => handleEnquiry('enquiry_type_adventure', !Enquiry?.enquiry_type_adventure)}
                                                        />
                                                        <label className=" m-0 fs-6">Adventure</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="d-flex mt-2 align-items-center gap-2">
                                                        <input type={"checkbox"} Checked={Enquiry?.enquiry_type_group}
                                                            onClick={() => handleEnquiry('enquiry_type_group', !Enquiry?.enquiry_type_group)}
                                                        />
                                                        <label className=" m-0 fs-6">Group</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {Enquiry?.enquiry_type_flight_booking && <div className="my-4">
                                            <FlightBooking preference={preference} classData={classData} addRowFlight={addRowFlight} flightrows={flightrows} setflightrowsRows={setflightrowsRows} handleRowChangeFlight={handleRowChangeFlight} locations={locations} />
                                        </div>}
                                        {Enquiry?.enquiry_type_hotelbooking && <div className="my-4">
                                            <HotelBooking countryData={countryData} starRatting={starRatting} roomType={roomType} addHotelRow={addHotelRow} hotelRow={hotelRow} setHotelRow={setHotelRow} handleInputChangeHotel={handleInputChangeHotel} locations={locations} />
                                        </div>}
                                        {Enquiry?.enquiry_type_visa && <div className="my-4">
                                            <Visa countryData={countryData} visaTypeData={visaTypeData} visaCatData={visaCatData} AddVisaRow={AddVisaRow} handleInputChangeVisa={handleInputChangeVisa} setRowsVisa={setRowsVisa} rowsVisa={rowsVisa} />
                                        </div>}
                                        {Enquiry?.enquiry_type_travel_insurance && <div className="my-4">
                                            <TrvelInsurance countryData={countryData} handleInputChangeTravelInsurence={handleInputChangeTravelInsurence} AddRowTravelIns={AddRowTravelIns} rowsTravelIns={rowsTravelIns} setRowsTravelIns={setRowsTravelIns} />
                                        </div>}
                                        {Enquiry?.enquiry_type_forex && <div className="my-4">
                                            <Forex countryData={countryData} currencyData={currencyData} rowsForex={rowsForex} AddRowForex={AddRowForex} handleInputChangeForex={handleInputChangeForex} />
                                        </div>}
                                        {Enquiry?.enquiry_type_sightseeing && <div className="my-4">
                                            <Sightseeing countryData={countryData} locations={locations} preference={preference} sight_seeingData={sight_seeingData} handleInputChangeSightseeing={handleInputChangeSightseeing} rowsSightseeing={rowsSightseeing} setRowsSightseeing={setRowsSightseeing} AddRowSightseeing={AddRowSightseeing} />
                                        </div>}
                                        {Enquiry?.enquiry_type_transport && <div className="my-4">
                                            <Transport countryData={countryData} locations={locations} preference={preference} handleInputChangeTranport={handleInputChangeTranport} rowsTrasport={rowsTrasport} setRowsTrasport={setRowsTrasport} AddRowtTrasport={AddRowtTrasport} />
                                        </div>}
                                        {Enquiry?.enquiry_type_other && <div className="my-4">
                                            <Other countryData={countryData} handleInputChangeOther={handleInputChangeOther} rowsOther={rowsOther} setOther={setOther} />
                                        </div>}
                                        {Enquiry?.package && <div className="my-4">
                                            <Package countryData={countryData} packageData={packageData} handleSearch={handleSearch} handleInputChangePackage={handleInputChangePackage} packageRow={packageRow} setpackageRow={setpackageRow} addPackageRow={addPackageRow} />
                                        </div>}
                                        {Enquiry?.enquiry_type_customise_package && <div className="my-4">
                                            <CoustumPackage countryData={countryData} locations={locations} services={services} starRatting={starRatting} preference={preference} rowsCustomisePackage={rowsCustomisePackage} setRowsCustomisePackage={setRowsCustomisePackage} AddRowCustomisePackage={AddRowCustomisePackage} handleInputChangeGroupCustomisePackage={handleInputChangeGroupCustomisePackage} addStayCityField={addStayCityField} handleStayCityChange={handleStayCityChange} />
                                        </div>}
                                        {Enquiry?.enquiry_type_bus && <div className="my-4">
                                            <Bus countryData={countryData} locations={locations} preference={preference} handleInputChangeBuss={handleInputChangeBuss} rowsBus={rowsBus} setRowsBus={setRowsBus} AddRowBuss={AddRowBuss} />
                                        </div>}
                                        {Enquiry?.enquiry_type_train && <div className="my-4">
                                            <Train countryData={countryData} locations={locations} preference={preference} handleInputChangeTrain={handleInputChangeTrain} rowsTrain={rowsTrain} setRowsTrain={setRowsTrain} AddRowTrain={AddRowTrain} />
                                        </div>}
                                        {Enquiry?.enquiry_type_passport && <div className="my-4">
                                            <Passport countryData={countryData} AddRowPassport={AddRowPassport} handleInputChangePassport={handleInputChangePassport} setRowsPassport={setRowsPassport} rowsPassport={rowsPassport} />
                                        </div>}
                                        {Enquiry?.enquiry_type_cruise && <div className="my-4">
                                            <Cruise countryData={countryData} preference={preference} locations={locations} handleInputChangeCruise={handleInputChangeCruise} AddRowCruise={AddRowCruise} setRowsCruise={setRowsCruise} rowsCruise={rowsCruise} />
                                        </div>}
                                        {Enquiry?.enquiry_type_adventure && <div className="my-4">
                                            <Adventure countryData={countryData} locations={locations} handleInputChangeAdventure={handleInputChangeAdventure} AddRowAdventure={AddRowAdventure} setRowsAdventure={setRowsAdventure} rowsAdventure={rowsAdventure} />
                                        </div>}
                                        {Enquiry?.enquiry_type_group && <div className="my-4">
                                            <GroupPackage countryData={countryData} packageData={packageData} state={state} handleSearch={handleSearch} preference={preference} handleInputChangeGroupPackage={handleInputChangeGroupPackage} AddRowGroupPackage={AddRowGroupPackage} setGroupPackage={setGroupPackage} rowsGroupPackage={rowsGroupPackage} />
                                        </div>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Note</label>
                                    <div className="w-100">
                                        <textarea className="form-control" style={{ height: "120px" }} name="notes" value={initialData?.notes} onChange={changeHandle}> </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-2 mt-3">
                            <div>
                                {/* disabled={disabled} */}
                                <button type="button" disabled={disabled} className="btn btn-danger m-0" onClick={submitData}>
                                    {params?.id ? 'Update' : 'Add'}
                                </button>
                            </div>
                            {/* <div>
                            <button className="btn btn-light m-0">Clear</button>
                        </div>
                        <div>
                            <button className="btn btn-primary m-0">Reset</button>
                        </div> */}
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}