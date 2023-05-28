import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels, data }) => {
  const chartContainerStyle = {
    width: "400px",
    height: "400px",
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Parts Under Repair",
        backgroundColor: "rgb(253, 206, 223)",
        borderColor: "rgb(242, 190, 209)",
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
