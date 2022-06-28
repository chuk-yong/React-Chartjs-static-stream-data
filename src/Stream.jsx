// Example in https://nagix.github.io/chartjs-plugin-streaming/master/tutorials/react/stream.html
// is not correct!  Use Chart from chart.js instead.
import React from "react";
import { Chart } from "chart.js";
import StreamingPlugin from "chartjs-plugin-streaming";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

Chart.register(StreamingPlugin);

export default function Stream() {
  return (
    <Line
      data={{
        datasets: [
          {
            label: "Dataset 1",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            borderDash: [8, 4],
            fill: true,
            data: []
          },
          {
            label: "Dataset 2",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgb(54, 162, 235)",
            cubicInterpolationMode: "monotone",
            fill: true,
            data: []
          }
        ]
      }}
      options={{
        scales: {
          x: {
            type: "realtime",
            realtime: {
              delay: 2000,
              onRefresh: (chart) => {
                chart.data.datasets.forEach((dataset) => {
                  dataset.data.push({
                    x: Date.now(),
                    y: Math.random()
                  });
                });
              }
            }
          }
        }
      }}
    />
  );
}
