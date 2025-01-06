import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Gauge,
} from 'recharts';

const ResturantDashBoardRating = () => {
    const pieDataAlcohol = [
        { name: 'Alcohol', value: 40 },
        { name: 'Wine', value: 30 },
        { name: 'Full Bar', value: 30 },
    ];

    const pieDataCity = [
        { name: 'Ciudad Victoria', value: 45 },
        { name: 'San Luis', value: 30 },
        { name: 'Other', value: 25 },
    ];

    const barDataRestaurants = [
        { name: 'Tortilla Loca', foodRating: 2.5, overallRating: 1.8, serviceRating: 1.6 },
        { name: 'Pueblo de Taco', foodRating: 2.2, overallRating: 1.7, serviceRating: 1.5 },
        // Add more restaurant data here
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <>
            <div className="container mt-4">
                <div className="card">
                    <div className="card-header text-center bg-danger text-white">
                        <h4 className="mb-0"><b>Restaurant Rating Dashboard</b></h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card text-center border-danger mb-3">
                                    <div className="card-body">
                                        <h3>No. of Orders</h3>
                                        <p>1161</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card text-center border-danger mb-3">
                                    <div className="card-body">
                                        <h3>Count of Feedback</h3>
                                        <p>130</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card text-center border-danger mb-3">
                                    <div className="card-body">
                                        <h3>Average Food Rating</h3>
                                        <p>1.22</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card text-center border-danger mb-3">
                                    <div className="card-body">
                                        <h3>Count of Cuisine</h3>
                                        <p>1.22</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-2">
                                <div className="card text-center border-danger mb-3">
                                    <div className="card-body">
                                        <h3>Count of Prefe...</h3>
                                        <p>1.22</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-4">
                                <div className="chart chart-chart">
                                    <h3 style={{ textAlign: 'center' }}>Restaurant by Alcohol Service</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <PieChart>
                                            <Pie
                                                data={pieDataAlcohol}
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={100}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {pieDataAlcohol.map((entry, index) => (
                                                    <Cell key={`cell - ${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="chart chart-chart">
                                    <h3 style={{ textAlign: 'center' }}>Count of Restaurants by City</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <PieChart>
                                            <Pie
                                                data={pieDataCity}
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={100}
                                                fill="#82ca9d"
                                                dataKey="value"
                                            >
                                                {pieDataCity.map((entry, index) => (
                                                    <Cell key={`cell - ${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="chart chart-chart">
                                    <h3 style={{ textAlign: 'center' }}>Restaurant by Alcohol Service</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <PieChart>
                                            <Pie
                                                data={pieDataAlcohol}
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={100}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {pieDataAlcohol.map((entry, index) => (
                                                    <Cell key={`cell - ${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="col-md-4 mt-4">
                                <div className="chart chart-chart">
                                    <h3 style={{ textAlign: 'center' }}>Average Ratings by Restaurant</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={barDataRestaurants}>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="foodRating" fill="#8884d8" />
                                            <Bar dataKey="overallRating" fill="#82ca9d" />
                                            <Bar dataKey="serviceRating" fill="#ffc658" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="chart chart-chart">
                                    <h3 style={{ textAlign: 'center' }}>Count of Customer ID by Name of Restaurant</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={barDataRestaurants}>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="foodRating" fill="#8884d8" />
                                            <Bar dataKey="overallRating" fill="#82ca9d" />
                                            <Bar dataKey="serviceRating" fill="#ffc658" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="chart chart-chart">
                                    <h3 style={{ textAlign: 'center' }}>Average Of Overall Rating By Name Restaurant</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={barDataRestaurants}>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="foodRating" fill="#8884d8" />
                                            <Bar dataKey="overallRating" fill="#82ca9d" />
                                            <Bar dataKey="serviceRating" fill="#ffc658" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ResturantDashBoardRating