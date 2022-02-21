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
    animation: true,
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    scales: {
        y: {
            suggestedMax: 50,
            min: 0,
            ticks: {
                stepSize: 10
            }
        },
        x: {
            grid: {
                display: false,
            }
        }
    },
};


const Canvas = ({data, chartRef}) => {
    const canvasData = {
        datasets: data
    }

    return (
        <div>
            <Line ref={chartRef} options={options} height={400} data={canvasData}/>
        </div>
    );
};

export default Canvas;