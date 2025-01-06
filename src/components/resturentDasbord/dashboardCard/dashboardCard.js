
import React from 'react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const DashboardCard = ({ title, score, pieData, barData }) => {
    const COLORS = ['#8884d8', '#8dd1e1', '#82ca9d'];
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">{score} {title}</h5>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                outerRadius={70}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    {/* <ResponsiveContainer width="100%" height={150}>
                        <BarChart data={barData} layout="vertical">
                            <XAxis type="number" hide />
                            <YAxis type="category" dataKey="name" width={100} />
                            <Bar dataKey="count" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer> */}
                </div>
            </div>
        </div>
    )
}

export default DashboardCard