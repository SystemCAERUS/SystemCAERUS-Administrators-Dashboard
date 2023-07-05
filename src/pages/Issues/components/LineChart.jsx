import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ labels, data }) => {
  // Sample data for the line chart
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Current Breakdowns by Department',
        data: data,
        borderColor: 'rgb(219, 0, 91)',
        backgroundColor: 'rgb(255, 234, 221)',
        borderWidth: 2,
      }
    ],
  };

  // Options for the line chart
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

  return <Line data={chartData} options={options} />;
};

export default LineChart;
