import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RouteChart = ({ routes }) => {
  const data = {
    labels: routes.map((r) => r.route_name),
    datasets: [
      {
        label: "Duration (mins)",
        data: routes.map((r) => r.estimated_duration),
        backgroundColor: "#14b8a6",
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg mt-6">
      <h3 className="text-lg font-bold text-teal-400 mb-4">📊 Duration Comparison</h3>
      <Bar data={data} />
    </div>
  );
};

export default RouteChart;
