import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  // Sample data for the line chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3, 10,13],
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

  return <Line data={data} options={options} />;
};

export default LineChart;
