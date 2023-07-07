import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels, data }) => {
  const colors = [
    'rgb(255,212,204)',
    'rgb(255,247,204)',
    'rgb(230,255,204)',
    'rgb(204,255,255)',
    'rgb(204,212,255)',
    'rgb(238,204,255)',
  ];

  const chartContainerStyle = {
    width: "400px",
    height: "400px",
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Parts Under Repair",
        backgroundColor:  colors.slice(0, data.length),
        borderColor: "rgb(0, 0, 0)",
        data: data,
      },
    ],
  };

  return (
    <div style={chartContainerStyle}>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
