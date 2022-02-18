import React from 'react';
import {Line} from "react-chartjs-2";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
    animation: false,
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    scales: {
        y: {
            max: 100,
            min: 0,
        },
        x: {
            grid: {
                display: false,
            }
        }
    },
};


const Canvas = ({data}) => {
    return (
        <div>
            <Line options={options} height={400} data={data}/>
        </div>
    );
};

export default Canvas;