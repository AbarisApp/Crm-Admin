import React, { useEffect, useState } from 'react';
import { getAllAccountData, getAllSalesmanData, getPickupByPage, getProductList, getTravelAllCity, getTravelAllCountry, getTravelAllState } from '../../../../api/login/Login';
import Multiselect from 'multiselect-react-dropdown';

function DateToStatus() {

  const [allCountriesD, setAllCountriesD] = useState([]);
  const [allStatesD, setAllStatesD] = useState([]);
  const [allCitiesD, setAllCitiesD] = useState([]);
  const [allDepotD, setAllDepotD] = useState([]);
  const [selectedDepot, setSelectedDepot] = useState([]);
  const [allCustomerD, setAllCustomerD] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState([]);
  const [allEmployeeD, setAllEmployeeD] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [allCategoryD, setAllCategoryD] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [allProductD, setAllProductD] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const [formData, setFormData] = useState({
    from_date: '',
    to_date: '',
    country: '',
    state: "",
    city: '',
  });

  const handleInputChange = async (e) => {
    const inpName = e.target.name;
    const inpVal = e.target.value;
    if (inpName == 'country') {
      try {
        const res = await getTravelAllState(inpVal);
        setAllStatesD(res?.data);
      } catch (error) {

      }
    };
    if (inpName == 'state') {
      try {
        const res = await getTravelAllCity(inpVal);
        setAllCitiesD(res?.data);
      } catch (error) {

      }
    };
    const clonedObj = { ...formData };
    clonedObj[inpName] = inpVal;
    setFormData(clonedObj);

  };

  const getAllCountryListData = async () => {
    try {
      const res = await getTravelAllCountry();
      setAllCountriesD(res?.data)
    } catch (error) {
    }
  };
  const getAllDepotListData = async () => {
    try {
      const res = await getPickupByPage();
      setAllDepotD(res?.data)
    } catch (error) {
    }
  };
  const getAllCustomerListData = async () => {
    try {
      const res = await getAllAccountData();
      setAllCustomerD(res?.data?.voucher)
    } catch (error) {
    }
  };
  const getAllEmployeeListData = async () => {
    try {
      const res = await getAllSalesmanData();
      setAllEmployeeD(res?.data?.data)
    } catch (error) {
    }
  };
  const getAllCategoryListData = async () => {
    try {
      const res = await getAllSalesmanData();
      setAllCategoryD(res?.data?.data)
    } catch (error) {
    }
  };
  const getAllProductListData = async () => {
    try {
      const res = await getProductList();
      setAllProductD(res?.data?.data)
    } catch (error) {
    }
  };

  useEffect(() => {
    getAllCountryListData();
    getAllDepotListData();
    getAllCustomerListData();
    getAllEmployeeListData();
    getAllCategoryListData();
    getAllProductListData();
  }, []);

  const onSelectDepot = (selectedList, selectedItem) => {
    setSelectedDepot(selectedList);
  };
  const onRemoveDepot = (selectedList, removedItem) => {
    setSelectedDepot(selectedList);
  };
  const onSelectCustomer = (selectedList, selectedItem) => {
    setSelectedCustomer(selectedList);
  };
  const onRemoveCustomer = (selectedList, removedItem) => {
    setSelectedCustomer(selectedList);
  };
  const onSelectEmloyee = (selectedList, selectedItem) => {
    setSelectedEmployee(selectedList);
  };
  const onRemoveEmloyee = (selectedList, removedItem) => {
    setSelectedEmployee(selectedList);
  };

  const onSelectCategory = (selectedList, selectedItem) => {
    setSelectedCategory(selectedList);
  };
  const onRemoveCategory = (selectedList, removedItem) => {
    setSelectedCategory(selectedList);
  };
  const onSelectProduct = (selectedList, selectedItem) => {
    setSelectedProduct(selectedList);
  };
  const onRemoveProduct = (selectedList, removedItem) => {
    setSelectedProduct(selectedList);
  };

  const handleSubmit = () => {
    console.log('formData---', formData);
    console.log('selectedEmployee---', selectedEmployee);
  };

  return (
    <div className='card' style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
      <form className='row'>
        <div className="col-4 mt-2">
          <label for="exampleFormControlInput1" className="form-label mb-0">Form Date</label>
          <input type="date" className="form-control" name='from_date' value={formData?.from_date} onChange={handleInputChange} id="exampleFormControlInput1" />
        </div>
        <div className="col-4 mt-2">
          <label for="exampleFormControlInput1" className="form-label mb-0">To Date</label>
          <input type="date" className="form-control" name='to_date' value={formData?.to_date} onChange={handleInputChange} id="exampleFormControlInput1" />
        </div>

        <div className="col-4 mt-2">
          <label className='mb-0' htmlFor={`country`}>Country</label>
          <select
            className="form-select form-control"
            aria-label="Default select example"
            name='country'
            value={formData?.country}
            onChange={handleInputChange}
          >
            <option value="">Select Country</option>
            {allCountriesD && allCountriesD?.map((item, i) => {
              return <option key={i} value={item?.id}>{item?.name}</option>
            })}
          </select>
        </div>
        <div className="col-4 mt-2">
          <label className='mb-0' htmlFor={`state`}>State</label>
          <select
            className="form-select form-control"
            aria-label="Default select example"
            name='state'
            value={formData?.state}
            onChange={handleInputChange}
          >
            <option value="">Select State</option>
            {allStatesD && allStatesD?.map((stateItem, i) => {
              return <option key={i} value={stateItem?._id}>{stateItem?.name}</option>
            })}
          </select>
        </div>
        <div className="col-4 mt-2">
          <label className='mb-0' htmlFor={`city`}>City</label>
          <select
            className="form-select form-control"
            aria-label="Default select example"
            name='city'
            value={formData?.city}
            onChange={handleInputChange}
          >
            <option value="">Select City</option>
            {allCitiesD && allCitiesD?.map((cityItem, i) => {
              return <option key={i} value={cityItem?._id}>{cityItem?.name}</option>
            })}
          </select>
        </div>
        <div className="col-4 mt-2">
          <label for="exampleFormControlInput1" className="form-label mb-0">Downline</label>
          <select className='form-select form-control'>
            <option value="">Select DownLine</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>

        <div className="col-4 mt-2">
          <label className='mb-0' htmlFor="fromDate">Depot</label>
          <Multiselect
            options={allDepotD}
            selectedValues={selectedDepot}
            onSelect={onSelectDepot}
            onRemove={onRemoveDepot}
            displayValue="pickupPoint_name"
            placeholder="Select options"
            style={{
              chips: { BiFontSize: '15px' },
              searchBox: { padding: '0 8px' }
            }}
          />
        </div>

        <div className="col-4 mt-2">
          <label className='mb-0' htmlFor="fromDate">Customer(Party)</label>
          <Multiselect
            options={allCustomerD}
            selectedValues={selectedCustomer}
            onSelect={onSelectCustomer}
            onRemove={onRemoveCustomer}
            displayValue="name"
            placeholder="Select options"
            style={{
              chips: { BiFontSize: '15px' },
              searchBox: { padding: '0 8px' }
            }}
          />
        </div>

        <div className="col-4 mt-2">
          <label className='mb-0' htmlFor="fromDate">Employee</label>
          <Multiselect
            options={allEmployeeD}
            selectedValues={selectedEmployee}
            onSelect={onSelectEmloyee}
            onRemove={onRemoveEmloyee}
            displayValue="name"
            placeholder="Select options"
            style={{
              chips: { BiFontSize: '15px' },
              searchBox: { padding: '0 8px' }
            }}
          />
        </div>

        <div className="col-4 mt-2">
          <label className='mb-0' htmlFor="fromDate">Category</label>
          <Multiselect
            options={allCategoryD}
            selectedValues={selectedCategory}
            onSelect={onSelectCategory}
            onRemove={onRemoveCategory}
            displayValue="name"
            placeholder="Select options"
            style={{
              chips: { BiFontSize: '15px' },
              searchBox: { padding: '0 8px' }
            }}
          />
        </div>

        <div className="col-4 mt-2">
          <label className='mb-0' htmlFor="fromDate">Product</label>
          <Multiselect
            options={allProductD}
            selectedValues={selectedProduct}
            onSelect={onSelectProduct}
            onRemove={onRemoveProduct}
            displayValue="product.name"
            placeholder="Select options"
            style={{
              chips: { BiFontSize: '15px' },
              searchBox: { padding: '0 8px' }
            }}
          />
        </div>

        <div className="col-4 mt-2">
          <label for="exampleFormControlInput1" className="form-label mb-0">Status</label>
          <select className='form-select form-control'>
            <option className='' value="">Select Status</option>
            <option className='' value="All">All</option>
            <option className='' value="Pending">Pending</option>
            <option className='' value="Dispatched">Dispatched</option>
          </select>
        </div>

      </form>

      <div className='col-12 mt-2'>
        <button className="btn btn-primary btn-md float-end" type="button" onClick={handleSubmit} aria-controls="offcanvasExample"
        >Search</button>
      </div>

    </div>
  )
}

export default DateToStatus;