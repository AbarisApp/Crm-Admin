import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import DashboardCard from './dashboardCard/dashboardCard';
const ResturentDasbord = () => {
    const pieData = [
        { name: 'One-off', value: 33.06 },
        { name: 'Frequent', value: 33.10 },
        { name: 'Casual', value: 33.84 },
    ];
    const COLORS = ['#8884d8', '#8dd1e1', '#82ca9d'];

    const barData = [
        { name: 'Highly Satisfied', count: 74 },
        { name: 'Satisfied', count: 20 },
        { name: 'Highly Dissatisfied', count: 18 },
        { name: 'Dissatisfied', count: 16 },
    ];
    return (
        // <div className="container mt-5">
        //     <h1 className="text-center mb-4">Restaurant Survey Scorecard</h1>
        //     <h5 className="text-center">Restaurant Average Score: <strong>2.61</strong></h5>
        //     <div className="row">
        //         <DashboardCard title="Cleanliness" score="3.17" pieData={pieData} barData={barData} />
        //         <DashboardCard title="Food" score="3.57" pieData={pieData} barData={barData} />
        //         <DashboardCard title="Reception" score="1.91" pieData={pieData} barData={barData} />
        //         <DashboardCard title="Reservation" score="2.53" pieData={pieData} barData={barData} />
        //         <DashboardCard title="Server" score="1.89" pieData={pieData} barData={barData} />
        //         <DashboardCard title="Waiting Time" score="2.56" pieData={pieData} barData={barData} />
        //     </div>
        // </div>

        <div className="container mt-4">
            <div className="card">
                <div className="card-header text-center bg-danger text-white">
                    <h4 className="mb-0"><b>Restaurant Survey Scorecard</b></h4>
                    <h5 className="text-center">Restaurant Average Score: <strong>2.61</strong></h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <DashboardCard title="Cleanliness" score="3.17" pieData={pieData} barData={barData} />
                        <DashboardCard title="Food" score="3.57" pieData={pieData} barData={barData} />
                        <DashboardCard title="Reception" score="1.91" pieData={pieData} barData={barData} />
                        <DashboardCard title="Reservation" score="2.53" pieData={pieData} barData={barData} />
                        <DashboardCard title="Server" score="1.89" pieData={pieData} barData={barData} />
                        <DashboardCard title="Waiting Time" score="2.56" pieData={pieData} barData={barData} />

                    </div>

                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">{'Cleanlines Responce'} {'#'}</h5>
                                    <ResponsiveContainer width="100%" height={150}>
                                        <BarChart data={barData} layout="vertical">
                                            <XAxis type="number" hide />
                                            <YAxis type="category" dataKey="name" width={100} />
                                            <Bar dataKey="count" fill="#82ca9d" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">{'Cleanlines Responce'} {'#'}</h5>
                                    <ResponsiveContainer width="100%" height={150}>
                                        <BarChart data={barData} layout="vertical">
                                            <XAxis type="number" hide />
                                            <YAxis type="category" dataKey="name" width={100} />
                                            <Bar dataKey="count" fill="#82ca9d" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">{'Cleanlines Responce'} {'#'}</h5>
                                    <ResponsiveContainer width="100%" height={150}>
                                        <BarChart data={barData} layout="vertical">
                                            <XAxis type="number" hide />
                                            <YAxis type="category" dataKey="name" width={100} />
                                            <Bar dataKey="count" fill="#82ca9d" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">{'Cleanlines Responce'} {'#'}</h5>
                                    <ResponsiveContainer width="100%" height={150}>
                                        <BarChart data={barData} layout="vertical">
                                            <XAxis type="number" hide />
                                            <YAxis type="category" dataKey="name" width={100} />
                                            <Bar dataKey="count" fill="#82ca9d" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Top 10 Restaurants by Rating (Tables) */}
                        <div className="col-md-12">
                            <div className="card mb-4">
                                <div className="card-header bg-danger text-white">
                                    <b>Average Of Score By Question Test</b>
                                </div>
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col-lg-3'>
                                            <div className='average-grapg'>
                                                <h4>4.5</h4>
                                                <div className='box-fill-average-1'>

                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='average-grapg'>
                                                <h4>3.5</h4>
                                                <div className='box-fill-average-1'>

                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='average-grapg'>
                                                <h4>2.5</h4>
                                                <div className='box-fill-average-1'>

                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='average-grapg'>
                                                <h4>1.5</h4>
                                                <div className='box-fill-average-1'>

                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResturentDasbord