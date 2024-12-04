import React from 'react'
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { FaEarthAsia } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaTags } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { FaInfo } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from 'react-bootstrap';
import { MasterPackagePdf } from '../../common/masterPackagePdf/MasterPackagePdf';

function MasterPackageDetailComp() {
    return (
        <>
            <section className="ListDistributer mx-4 expdf ">
                <div className="text-center">
                    <p>Total Number of Package Selected: 0</p>
                </div>
                <div className="row">
                    <div className="col-xl-12" >
                        <div className="card" >
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>View Package Details</b></h4>
                                        <div>
                                            <Button variant="" className="btn-sm py-1 px-2 bg-primary">
                                                <PDFDownloadLink
                                                    style={{ color: 'white', textDecoration: 'none' }}
                                                    document={<MasterPackagePdf abc={'Downloaded pdf'} />}
                                                    fileName="invoice.pdf"
                                                >
                                                    {({ loading }) => (
                                                        loading ? (
                                                            'Loading document...'
                                                        ) : (
                                                            <>
                                                                <FaDownload style={{ marginRight: '5px' }} />
                                                                Download
                                                            </>
                                                        )
                                                    )}
                                                </PDFDownloadLink>
                                            </Button>
                                            <Link className='btn btn-primary btn-sm' to={"#"} role="button" aria-controls="offcanvasExample">
                                                <FaEye style={{ marginRight: '5px' }} />
                                                View
                                            </Link>
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer ">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Download Distributer</span>
                                            </button>
                                        </div>

                                        <div className='p-4'>
                                            <h3 style={{ color: 'red', margin: '20px 0' }}><RiInformation2Line style={{ marginRight: '5px' }} /> Information</h3>
                                            <div className='row mb-3'>
                                                <div className='col-6'>
                                                    <h6 style={{ color: 'gray' }}><FaBox style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Package Name</h6>
                                                    <h3 className='ms-4'>Dive into the bliss of mysore & nearby hill stations</h3>
                                                </div>
                                                <div className='col-6'>
                                                    <h6 style={{ color: 'gray' }}><FaEarthAsia style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Countries</h6>
                                                    <h3 className='ms-4'>India</h3>
                                                </div>
                                                <div className='col-6 mt-3'>
                                                    <h6 style={{ color: 'gray' }}><FaBed style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Days/Nights</h6>
                                                    <h3 className='ms-4'>5 Days / 4 Nights</h3>
                                                </div>
                                                <div className='col-6 mt-3'>
                                                    <h6 style={{ color: 'gray' }}><FaTags style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Tags</h6>
                                                    <h3 className='ms-4'>Family,Individual,Adventure,Group,Domestic,Weekend,Student</h3>
                                                </div>
                                            </div>

                                            <div className='row mb-3'>
                                                <p>Inclusion</p>
                                                <div className='col-4'>
                                                    <h6 style={{ color: '#ff6163' }}><GiMeal style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Meal Type</h6>
                                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                        <li>Any (Any type of meal)</li>
                                                    </ul>
                                                </div>
                                                <div className='col-4'>
                                                    <h6 style={{ color: '#ff6163' }}><FaBed style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} />Night Stays</h6>
                                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                        <li>3 Night in Ooty</li>
                                                        <li>1 Night in Mysore</li>
                                                    </ul>
                                                </div>
                                                <div className='col-4'>
                                                    <h6 style={{ color: '#ff6163' }}><IoSettings style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Other Services</h6>
                                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                        <li>Free wi-fi</li>
                                                    </ul>
                                                </div>
                                                <div className='col-4 mt-2'>
                                                    <h6 style={{ color: '#ff6163' }}><FaCamera style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Sightseeing</h6>
                                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                        <li>Mysore Palace</li>
                                                        <li>Sri Chamundeshwari Temple</li>
                                                        <li>Deer Park</li>
                                                        <li>Wax World Museum</li>
                                                        <li>Mudumalai National Park</li>
                                                        <li>Ketti Valley View</li>
                                                    </ul>
                                                </div>
                                                <div className='col-8 mt-2'>
                                                    <h6 style={{ color: '#ff6163' }}><FaInfo style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> overview</h6>
                                                    <p>For your fans, this Mysore family tour itinerary for 5 days is full of varied and diverse events. Just like every family member is distinct and has various desires, Mysore is also full of numerous experiences that provide each individual with everything. For a 5-day tour, this Mysore family kit itinerary will take you through the wealth and pride of Mysore, the giant and royal palaces and the majestic centers of nature. You will also appreciate the clothes for the sandal and Mysore, along with the cuisine. In order to experience each member of the family, a family trip must consist of different locations. This 5-day Mysore family tour itinerary, featuring both Mysore and Ooty, provides a lovely time for travelers. So, book your trip right now to the most gorgeous locations in the South!</p>
                                                </div>
                                            </div>

                                            <h3 style={{ color: 'red', margin: '30px 0' }}><RiInformation2Line style={{ marginRight: '5px' }} /> Day Wise Itinerary</h3>
                                            <div style={{ border: '1px dotted black', padding: '20px', marginBottom: '10px' }}>
                                                <h4 style={{ color: '#ff6163' }}>Day 1</h4>
                                                <div className='row mb-2'>
                                                    <div className='col-4'>
                                                        <h6 style={{ color: 'gray' }}><FaMapMarkerAlt style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> City</h6>
                                                        <h5 className='ms-4'>Ooty</h5>
                                                    </div>
                                                    <div className='col-4'>
                                                        <h6 style={{ color: 'gray' }}><GiMeal style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Meals</h6>
                                                        <h3 className='ms-4'></h3>
                                                    </div>
                                                    <div className='col-4'>
                                                        <h6 style={{ color: 'gray' }}><FaCamera style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Sightseeing</h6>
                                                        <h5 className='ms-4'>Mudumalai National Park,Wax World Museum,Deer Park</h5>
                                                    </div>
                                                    <div className='col-4 mt-3'>
                                                        <h6 style={{ color: 'gray' }}><FaMapMarkerAlt style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Title</h6>
                                                        <h5 className='ms-4'>Ooty: Arrival</h5>
                                                    </div>
                                                    <div className='col-4 mt-3'>
                                                        <h6 style={{ color: 'gray' }}><BiDetail style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Other Details</h6>
                                                        <h5 className='ms-4'>Arrive at your hotel in Ooty. Visit markets & restaurants nearby & enjoy an overnight stay.</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ border: '1px dotted black', padding: '20px', marginBottom: '10px' }}>
                                                <h4 style={{ color: '#ff6163' }}>Day 2</h4>
                                                <div className='row mb-2'>
                                                    <div className='col-4'>
                                                        <h6 style={{ color: 'gray' }}><FaMapMarkerAlt style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> City</h6>
                                                        <h5 className='ms-4'>Ooty</h5>
                                                    </div>
                                                    <div className='col-4'>
                                                        <h6 style={{ color: 'gray' }}><GiMeal style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Meals</h6>
                                                        <h3 className='ms-4'></h3>
                                                    </div>
                                                    <div className='col-4'>
                                                        <h6 style={{ color: 'gray' }}><FaCamera style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Sightseeing</h6>
                                                        <h5 className='ms-4'>Mudumalai National Park,Wax World Museum,Deer Park</h5>
                                                    </div>
                                                    <div className='col-4 mt-3'>
                                                        <h6 style={{ color: 'gray' }}><FaMapMarkerAlt style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Title</h6>
                                                        <h5 className='ms-4'>Ooty: Arrival</h5>
                                                    </div>
                                                    <div className='col-4 mt-3'>
                                                        <h6 style={{ color: 'gray' }}><BiDetail style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Other Details</h6>
                                                        <h5 className='ms-4'>Arrive at your hotel in Ooty. Visit markets & restaurants nearby & enjoy an overnight stay.</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ border: '1px dotted black', padding: '20px', marginBottom: '10px' }}>
                                                <h4 style={{ color: '#ff6163' }}>Day 3</h4>
                                                <div className='row mb-2'>
                                                    <div className='col-4'>
                                                        <h6 style={{ color: 'gray' }}><FaMapMarkerAlt style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> City</h6>
                                                        <h5 className='ms-4'>Ooty</h5>
                                                    </div>
                                                    <div className='col-4'>
                                                        <h6 style={{ color: 'gray' }}><GiMeal style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Meals</h6>
                                                        <h3 className='ms-4'></h3>
                                                    </div>
                                                    <div className='col-4'>
                                                        <h6 style={{ color: 'gray' }}><FaCamera style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Sightseeing</h6>
                                                        <h5 className='ms-4'>Mudumalai National Park,Wax World Museum,Deer Park</h5>
                                                    </div>
                                                    <div className='col-4 mt-3'>
                                                        <h6 style={{ color: 'gray' }}><FaMapMarkerAlt style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Title</h6>
                                                        <h5 className='ms-4'>Ooty: Arrival</h5>
                                                    </div>
                                                    <div className='col-4 mt-3'>
                                                        <h6 style={{ color: 'gray' }}><BiDetail style={{ marginRight: '5px', color: "#ff6163", fontSize: '22px' }} /> Other Details</h6>
                                                        <h5 className='ms-4'>Arrive at your hotel in Ooty. Visit markets & restaurants nearby & enjoy an overnight stay.</h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 style={{ color: 'red', margin: '30px 0 15px 0' }}><RiInformation2Line style={{ marginRight: '5px' }} /> Inclusions</h3>
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>Breakfast</li>
                                                <li>Accommodation on double-sharing basis</li>
                                                <li>Transfers from and to Airport/ Railway</li>
                                                <li>Sightseeing</li>
                                                <li>Private cab</li>
                                                <li>All applicable taxes</li>
                                            </ul>
                                            <h3 style={{ color: 'red', margin: '30px 0 15px 0' }}><RiInformation2Line style={{ marginRight: '5px' }} /> Exclusions</h3>
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>Air/Train fare</li>
                                                <li>Lunch and dinner</li>
                                                <li>Charges for any extra activities</li>
                                                <li>Sightseeing</li>
                                                <li>Personal expenses</li>
                                                <li>Anything not mentioned in inclusions</li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default MasterPackageDetailComp