import { useState } from 'react';
import { Table, Button, Form, Pagination } from 'react-bootstrap';
import { DatePicker } from 'antd';

function HolidayList({ onChangeVal }) {
  const [vendor, setVendor] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  
  const itemsPerPage = 7; // Change this number to show more/less items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data with the new fields
  const vendorData = [
    { id: 1, sortOrder: 1, pageName: 'Summer Special', pageTitle: 'Summer Deals', type: 'Holiday', addedDate: '2024-09-01', status: 'Active', agentClass: 'Class A', value: 10, maxLimit: 1000, themeName: 'Summer Special', destinationName: 'Paris', extraDiscount: 5, discountType: 'Percentage', modified: '2024-09-02', packageName: 'Paris Adventure', showOnHome: true },
    { id: 2, sortOrder: 2, pageName: 'Winter Getaway', pageTitle: 'Winter Retreats', type: 'Holiday', addedDate: '2024-09-02', status: 'Inactive', agentClass: 'Class B', value: 20, maxLimit: 2000, themeName: 'Winter Getaway', destinationName: 'New York', extraDiscount: 10, discountType: 'Flat', modified: '2024-09-03', packageName: 'New York Escape', showOnHome: false },
    { id: 3, sortOrder: 3, pageName: 'Beach Holiday', pageTitle: 'Beach Bliss', type: 'Holiday', addedDate: '2024-09-03', status: 'Active', agentClass: 'Class C', value: 15, maxLimit: 1500, themeName: 'Beach Fun', destinationName: 'Miami', extraDiscount: 8, discountType: 'Percentage', modified: '2024-09-04', packageName: 'Miami Getaway', showOnHome: true },
    { id: 4, sortOrder: 4, pageName: 'Adventure Trip', pageTitle: 'Thrilling Adventures', type: 'Holiday', addedDate: '2024-09-04', status: 'Active', agentClass: 'Class D', value: 30, maxLimit: 3000, themeName: 'Adventure Awaits', destinationName: 'Hawaii', extraDiscount: 12, discountType: 'Flat', modified: '2024-09-05', packageName: 'Hawaii Adventures', showOnHome: true },
    { id: 5, sortOrder: 5, pageName: 'Cultural Tour', pageTitle: 'Explore Cultures', type: 'Holiday', addedDate: '2024-09-05', status: 'Active', agentClass: 'Class E', value: 25, maxLimit: 2500, themeName: 'Cultural Journey', destinationName: 'Tokyo', extraDiscount: 7, discountType: 'Percentage', modified: '2024-09-06', packageName: 'Tokyo Cultural Tour', showOnHome: true },
    { id: 6, sortOrder: 6, pageName: 'Safari Adventure', pageTitle: 'Wildlife Adventures', type: 'Holiday', addedDate: '2024-09-06', status: 'Inactive', agentClass: 'Class F', value: 35, maxLimit: 3500, themeName: 'Safari Time', destinationName: 'Kenya', extraDiscount: 15, discountType: 'Flat', modified: '2024-09-07', packageName: 'Kenya Safari', showOnHome: false },
    { id: 1, sortOrder: 1, pageName: 'Summer Special', pageTitle: 'Summer Deals', type: 'Holiday', addedDate: '2024-09-01', status: 'Active', agentClass: 'Class A', value: 10, maxLimit: 1000, themeName: 'Summer Special', destinationName: 'Paris', extraDiscount: 5, discountType: 'Percentage', modified: '2024-09-02', packageName: 'Paris Adventure', showOnHome: true },
    { id: 2, sortOrder: 2, pageName: 'Winter Getaway', pageTitle: 'Winter Retreats', type: 'Holiday', addedDate: '2024-09-02', status: 'Inactive', agentClass: 'Class B', value: 20, maxLimit: 2000, themeName: 'Winter Getaway', destinationName: 'New York', extraDiscount: 10, discountType: 'Flat', modified: '2024-09-03', packageName: 'New York Escape', showOnHome: false },
    { id: 3, sortOrder: 3, pageName: 'Beach Holiday', pageTitle: 'Beach Bliss', type: 'Holiday', addedDate: '2024-09-03', status: 'Active', agentClass: 'Class C', value: 15, maxLimit: 1500, themeName: 'Beach Fun', destinationName: 'Miami', extraDiscount: 8, discountType: 'Percentage', modified: '2024-09-04', packageName: 'Miami Getaway', showOnHome: true },
    { id: 4, sortOrder: 4, pageName: 'Adventure Trip', pageTitle: 'Thrilling Adventures', type: 'Holiday', addedDate: '2024-09-04', status: 'Active', agentClass: 'Class D', value: 30, maxLimit: 3000, themeName: 'Adventure Awaits', destinationName: 'Hawaii', extraDiscount: 12, discountType: 'Flat', modified: '2024-09-05', packageName: 'Hawaii Adventures', showOnHome: true },
    { id: 5, sortOrder: 5, pageName: 'Cultural Tour', pageTitle: 'Explore Cultures', type: 'Holiday', addedDate: '2024-09-05', status: 'Active', agentClass: 'Class E', value: 25, maxLimit: 2500, themeName: 'Cultural Journey', destinationName: 'Tokyo', extraDiscount: 7, discountType: 'Percentage', modified: '2024-09-06', packageName: 'Tokyo Cultural Tour', showOnHome: true },
    { id: 6, sortOrder: 6, pageName: 'Safari Adventure', pageTitle: 'Wildlife Adventures', type: 'Holiday', addedDate: '2024-09-06', status: 'Inactive', agentClass: 'Class F', value: 35, maxLimit: 3500, themeName: 'Safari Time', destinationName: 'Kenya', extraDiscount: 15, discountType: 'Flat', modified: '2024-09-07', packageName: 'Kenya Safari', showOnHome: false },
  ];

  const handleSearch = () => {
    console.log('Search clicked with', { vendor, fromDate, toDate });
  };

  const totalPages = Math.ceil(vendorData.length / itemsPerPage);
  const currentItems = vendorData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="vendor-balance">
      <div className='card'>
        {/* Vendor Search Section */}
        <Form className="mb-4" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* From Date */}
          <Form.Group controlId="fromDate">
            <Form.Label>From Date</Form.Label>
            <DatePicker onChange={(date, dateString) => setFromDate(dateString)} />
          </Form.Group>

          {/* To Date */}
          <Form.Group controlId="toDate">
            <Form.Label>To Date</Form.Label>
            <DatePicker onChange={(date, dateString) => setToDate(dateString)} />
          </Form.Group>

          {/* Search Button */}
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Form>

        {/* Vendor Balance Table */}
        <div style={{ overflowX: 'auto' }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sort Order</th>
                <th>Page Name</th>
                <th>Page Title</th>
                <th>Type</th>
                <th>Added Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Render table data dynamically */}
              {currentItems.map((vendor) => (
                <tr key={vendor.id}>
                  <td>{vendor.sortOrder}</td>
                  <td>{vendor.pageName}</td>
                  <td>{vendor.pageTitle}</td>
                  <td>{vendor.type}</td>
                  <td>{vendor.addedDate}</td>
                  <td>{vendor.status}</td>
                  <td>
                    <Button variant="warning" size="sm">Edit</Button>{' '}
                    <Button variant="danger" size="sm">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Pagination Controls */}
        <Pagination>
          {/* <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} /> */}
          <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} />
          {/* <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} /> */}
        </Pagination>
      </div>
    </section>
  );
}

export default HolidayList;
