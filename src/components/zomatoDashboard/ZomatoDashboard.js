import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const ZomatoDashboard = () => {
    const barChartData = {
        labels: ["Byresandra", "Brigade Road", "Indiranagar", "Malleswaram", "Banashankari", "Lavelle Road", "Church Street", "Koramangala 6th Block", "Koramangala 7th Block", "MG Road"],
        datasets: [
            {
                label: "North Indian",
                data: [64, 130, 147, 119, 84, 89, 77, 71, 36, 30],
                backgroundColor: "#f38b4a",
            },
            {
                label: "South Indian",
                data: [391, 234, 247, 170, 144, 74, 50, 49, 24, 20],
                backgroundColor: "#36a2eb",
            },
            {
                label: "Other",
                data: [289, 238, 247, 112, 74, 144, 50, 49, 36, 30],
                backgroundColor: "#4bc0c0",
            },
        ],
    };

    // Data for the doughnut chart (Average cost for two people)
    const doughnutData = {
        labels: ["North Indian", "South Indian", "Both", "Other"],
        datasets: [
            {
                data: [615, 316, 533, 530],
                backgroundColor: ["#f38b4a", "#36a2eb", "#9966ff", "#4bc0c0"],
            },
        ],
    };


    const stackedBarChartData = {
        labels: ["Yes", "No"],
        datasets: [
            {
                label: "North Indian",
                data: [37.94, 30.46],
                backgroundColor: "#f38b4a",
            },
            {
                label: "South Indian",
                data: [9.95, 12.49],
                backgroundColor: "#36a2eb",
            },
            {
                label: "Other",
                data: [44.10, 45.86],
                backgroundColor: "#4bc0c0",
            },
            {
                label: "Both",
                data: [7.81, 11.19],
                backgroundColor: "#9966ff",
            },
        ],
    };

    const stackedBarChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header text-center bg-danger text-white">
                    <h4 className="mb-0"><b>Zomato Restaurant Data Analysis</b></h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        {/* Statistics Cards */}
                        <div className="col-md-3">
                            <div className="card text-center border-danger mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">0</h5>
                                    <p className="card-text">Total Restaurants</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center border-danger mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">0</h5>
                                    <p className="card-text">North Indian Restaurants</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center border-danger mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">0</h5>
                                    <p className="card-text">South Indian Restaurants</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center border-danger mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">0</h5>
                                    <p className="card-text">Other Restaurants</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Bar Chart */}
                        <div className="col-md-6">
                            <div className="card mb-4">
                                <div className="card-header bg-danger text-white">
                                    <b>Top 10 Restaurant Locations by Rating</b>
                                </div>
                                <div className="card-body class-Bar-first">
                                    <Bar data={barChartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
                                </div>
                            </div>
                        </div>

                        {/* Doughnut Chart */}
                        <div className="col-md-6">
                            <div className="card mb-4">
                                <div className="card-header bg-danger text-white">
                                    <b>Average Cost for Two People</b>
                                </div>
                                <div className="card-body class-Doughnut">
                                    <Doughnut data={doughnutData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card mb-4">
                                <div className="card-header bg-danger text-white">
                                    <b>Count of Restaurant Names by Online Order and NS Restaurant</b>
                                </div>
                                <div className="card-body class-bar">
                                    <Bar style={{ width: '100%' }} data={stackedBarChartData} options={stackedBarChartOptions} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Top 10 Restaurants by Rating (Tables) */}
                        <div className="col-md-6">
                            <div className="card mb-4">
                                <div className="card-header bg-danger text-white">
                                    <b>Top 10 Restaurants by Rating (Out of 5)</b>
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead className="table-danger">
                                            <tr>
                                                <th>Restaurant Name</th>
                                                <th>Area</th>
                                                <th>Restaurant Type</th>
                                                <th>Rating</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Asia Kitchen</td>
                                                <td>Byresandra</td>
                                                <td>Other</td>
                                                <td>4.90</td>
                                            </tr>
                                            <tr>
                                                <td>Byg Brewski</td>
                                                <td>Bellandur</td>
                                                <td>Both</td>
                                                <td>4.90</td>
                                            </tr>
                                            <tr>
                                                <td>Sana-di-ge</td>
                                                <td>Old Airport Road</td>
                                                <td>Other</td>
                                                <td>4.90</td>
                                            </tr>
                                            <tr>
                                                <td>Bengal Waffle Factory</td>
                                                <td>Malleswaram</td>
                                                <td>Other</td>
                                                <td>4.80</td>
                                            </tr>
                                            <tr>
                                                <td>Punjab Grill</td>
                                                <td>Whitefield</td>
                                                <td>North Indian</td>
                                                <td>4.80</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card mb-4">
                                <div className="card-header bg-danger text-white">
                                    <b>Top 10 Restaurants by Ratings</b>
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead className="table-danger">
                                            <tr>
                                                <th>Restaurant Name</th>
                                                <th>Area</th>
                                                <th>Restaurant Type</th>
                                                <th>Ratings</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Byg Brewski Brewing Company</td>
                                                <td>Bellandur</td>
                                                <td>Both</td>
                                                <td>16345</td>
                                            </tr>
                                            <tr>
                                                <td>Toit</td>
                                                <td>Indiranagar</td>
                                                <td>Other</td>
                                                <td>14956</td>
                                            </tr>
                                            <tr>
                                                <td>The Black Pearl</td>
                                                <td>Byresandra</td>
                                                <td>North Indian</td>
                                                <td>10413</td>
                                            </tr>
                                            <tr>
                                                <td>Big Pitcher</td>
                                                <td>Old Airport Road</td>
                                                <td>North Indian</td>
                                                <td>9272</td>
                                            </tr>
                                            <tr>
                                                <td>Arbor Brewing Company</td>
                                                <td>Brigade Road</td>
                                                <td>Other</td>
                                                <td>8873</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ZomatoDashboard