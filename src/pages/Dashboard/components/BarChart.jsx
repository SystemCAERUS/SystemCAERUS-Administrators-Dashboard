/*import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ labels, data }) => {
  // Sample data for the bar chart
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Current Breakdowns by Department',
        data: data,
        backgroundColor: 'rgb(255, 234, 221)',
        borderColor: 'rgb(219, 0, 91)',
        borderWidth: 2,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;*/


import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const BarChart = ({ labels, data }) => {

    const colors = [
        'rgb(255,212,204)',
        'rgb(255,247,204)',
        'rgb(230,255,204)',
        'rgb(204,255,255)',
        'rgb(204,212,255)',
        'rgb(238,204,255)',
      ];


  // Calculate line data
  const lineData = {
    labels: labels,
    datasets: [
      {
        type: 'line',
        label: 'Line',
        data: data,
        fill: false,
        borderColor: 'rgb(50, 50, 50)',
        borderWidth: 1,
        pointRadius: 0,
        order: 0, 
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        grid: {
          display: true,
        },
        beginAtZero: true, // Ensure the y-axis starts at zero
      },
    },
    plugins: {
      tooltip: {
        intersect: false, // Disable tooltip intersection for better visibility
      },
    },
  };

  // Combined data for bar chart and line chart
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Current Breakdowns by Department',
        data: data,
        backgroundColor: colors.slice(0, data.length),
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 0.2,
        order: 1, 
      },
      ...lineData.datasets, // Add line data to the datasets
    ],
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;


