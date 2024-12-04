import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ProgressReport = () => {
    // Data and options for the chart
    const data = {
        labels: ['Nov 06', 'Nov 08', 'Nov 10', 'Nov 12', 'Nov 14'],
        datasets: [
            {
                label: 'Progress %',
                borderColor: '#00c0ef',
                backgroundColor: 'rgba(0, 192, 239, 0.2)',
                fill: false,
                tension: 0.4,
            },
            {
                label: 'Manpower',
                borderColor: '#ffc107',
                backgroundColor: 'rgba(255, 193, 7, 0.2)',
                fill: false,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 30,
                title: {
                    display: true,
                    text: 'Percentage',
                },
            },
            x: {
                title: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                <div style={{ width: '20%' }}>
                    <h3>Summary</h3>
                    <p>0 Items updated today</p>
                    <div style={{ marginBottom: '10px' }}>
                        <p>Total Items</p>
                        <p>0</p>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <p>Today's Progress</p>
                        <p>0%</p>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <p>Overall Progress</p>
                        <p>0%</p>
                    </div>
                    <button style={{ backgroundColor: '#ff4c4c', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Generate Report
                    </button>
                </div>
                <div style={{ width: '50%', padding: '0 20px', height: "200px" }}>
                    <h3>Project Progress</h3>
                    <Line data={data} options={options} style={{ height: "200px" }} />
                </div>
                <div style={{ width: '30%', textAlign: 'center' }}>
                    <h3>Time Status</h3>
                    <div style={{ backgroundColor: '#f5a623', height: '20px', borderRadius: '4px', margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#ff4c4c', fontSize: '14px' }}>0 days remaining to complete</span>
                    </div>
                    <div style={{ textAlign: 'left', padding: '0 20px' }}>
                        <p>Expected Start Date: 6 Nov 2024</p>
                        <p>Actual Start Date: N/A</p>
                        <p>Execution Due Date: 14 Nov 2024</p>
                        <p>Actual Completion Date: N/A</p>
                    </div>
                </div>
            </div>
            <div className='bottomsec' style={{ marginTop: '20px', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h4>Today's Updates</h4>
                    <p>Other Updates</p>
                    <p>1. n</p>
                    <img src="code-image-path" alt="Code snippet" style={{ maxWidth: '100%', borderRadius: '4px', marginTop: '10px' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h4>Today's Manpower: 3</h4>
                    <p>Mason - 3</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h4>Blocker</h4>
                    <p>1. 4</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h4>Tomorrow's Plan</h4>
                    <p>1. d</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h4>Reported Project Progress (%)</h4>
                    <p>2% Complete</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h4>Projected End Date</h4>
                    <p>22 Nov 2024</p>
                </div>
            </div>
        </div>
    );
};

export default ProgressReport;
