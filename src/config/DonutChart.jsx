import { Doughnut } from "react-chartjs-2";
import React from "react";

const DonutChart = () => {
  return (
    <Doughnut
      data={{
        labels: ["Tốt", "Trung bình", "Kém", "Xấu", "Rất xấu","Nguy hại"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [
              "#2ecc71",
              "#f1c40f",
              "#e67e22",
              "#e74c3c",
              "#82589F",
              "#6D214F",
            ],
            data: [50, 50, 50, 50, 50,50],
          },
        ],
      }}
    />
  );
};

export default DonutChart;
