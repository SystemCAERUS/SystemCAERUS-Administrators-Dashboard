import React from "react";
import { Radar } from "react-chartjs-2";
import ChartJS from 'chart.js/auto'; // Import the new 'auto' bundle for Chart.js version 3

// For Chart.js version 3, we don't need to register elements manually

function RadarChart({ labels, data }) {
  const chartContainerStyle = {
    width: "450px",
    height: "450px",
  };

  const radarData = {
    labels: labels,
    datasets: [
      {
        label: "Planned Maintainance by Department",
        data: data,
        backgroundColor: "rgb(245, 209, 232)",
        borderColor: "rgb(154, 32, 140)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true },
      angleLines: {
        display: false,
      },
      pointLabels: {
        fontSize: 14,
      },
    },
    elements: {
      line: {
        tension: 0, // Disable bezier curves
      },
    },
  };

  return (
    <div style={chartContainerStyle}>
      <Radar data={radarData} options={options} />
    </div>
  );
}

export default RadarChart;
