import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);  

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Chart"
    },
    annotation: {
      common: {
        drawTime: 'beforeDraw'
      },
      annotations: {
        point1: {
          type: 'point',
          xValue: 1,
          yValue: 1060,
          backgroundColor: 'rgba(255, 99, 132, 0.25)',
          pointStyle:"triangle"
        },
        point2: {
          type: 'point',
          xValue: 3,
          yValue: 410,
          backgroundColor: 'rgba(255, 99, 132, 0.25)',
          pointStyle:"circle"
        },
        point3: {
          type: 'point',
          xValue: 5,
          yValue: 860,
          backgroundColor: 'rgba(255, 99, 132, 0.25)',
          pointStyle:"rectRounded",
          labels:"bdfgds"
        },
        point4: {
          type: 'point',
          xValue: 9,
          yValue: 1200,
          backgroundColor: 'rgba(255, 99, 132, 0.25)',
          pointStyle:"triangle"
        },
        point5: {
          type: 'point',
          xValue: 11,
          yValue: 610,
          backgroundColor: 'rgba(255, 99, 132, 0.25)',
          pointStyle:"circle"
        },
        point6: {
          type: 'point',
          xValue: 13,
          yValue: 960,
          backgroundColor: 'rgba(255, 99, 132, 0.25)',
          pointStyle:"rectRounded",
          labels:"bdfgds"
        },
        line1: {
          type: 'line',
          yMin: 1100,
          yMax: 1100,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
        },
        line2: {
          type: 'line',
          yMin: 100,
          yMax: 100,
          borderColor: 'green',
          borderWidth: 2,
        }
      }
    }
  }
};

const labels = ["10", "20", "30", "40", "50", "60", "70","80", "90", "100", "110", "120", "130", "140", "150"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [849, 1273, 632, 113, 1170, 298, 925, 1119, 672, 1377, 527, 315, 63, 1046, 890],
      fill: false,
      borderColor: "red",
      tension: 0.1
    },
    {
      label: "Dataset 2",
      data: [1112, 742, 397, 1188, 555, 981, 255, 754, 1224, 1308, 623, 130, 988, 1017, 839],
      fill: false,
      borderColor: "green",
      tension: 0.1
    },
    {
      label: "Dataset 3",
      data: [1343, 103, 632, 987, 591, 239, 74, 1126, 319, 684, 1038, 1257, 560, 99, 891],
      fill: false,
      borderColor: "blue",
      tension: 0.1
    },
    {
      label: "Dataset 4",
      data: [408, 762, 1199, 1263, 587, 259, 772, 283, 1235, 685, 201, 1080, 911, 576, 376],
      fill: false,
      borderColor: "orange",
      tension: 0.1
    }
  ]
};

const CustomChild = () => {
  return (
    
      <Line options={options} data={data} />
    
  );
}

export default CustomChild;



// import React, { useEffect, useRef } from 'react';
// // import { Line } from 'react-chartjs-2';
// // import 'chartjs-plugin-annotation';
// import { Chart } from 'chart.js';
// import annotationPlugin from 'chartjs-plugin-annotation';
// Chart.register(annotationPlugin);

// const GraphWithComments = () => {
//   // Your data and options configuration
//   const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'Sales',
//         data: [30, 25, 45, 20, 55],
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     annotation: {
//       annotations: [
//         {
//           type: 'line',
//           mode: 'vertical',
//           scaleID: 'x-axis-0',
//           value: 'Mar', // X-axis value where you want to add the annotation
//           borderColor: 'red',
//           borderWidth: 2,
//           label: {
//             content: 'Comment 1: Important Event',
//             enabled: true,
//             position: 'top',
//           },
//         },
//         {
//           type: 'line',
//           mode: 'vertical',
//           scaleID: 'x-axis-0',
//           value: 'Apr', // X-axis value where you want to add the annotation
//           borderColor: 'blue',
//           borderWidth: 2,
//           label: {
//             content: 'Comment 2: Another Event',
//             enabled: true,
//             position: 'top',
//           },
//         },
//         // Add more comments or annotations as needed
//       ],
//     },
//   };

//   return (
//     <div>
//       <GraphWithAnnotations data={data} options={options} />
//     </div>
//   );
// };

// // import React, { useEffect, useRef } from 'react';
// // import { Line } from 'react-chartjs-2';
// // import 'chartjs-plugin-annotation';

// const GraphWithAnnotations = ({ data, options }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       const chartInstance = chartRef.current.chartInstance;

//       // Check if a chart instance already exists
//       if (chartInstance) {
//         // If it does, destroy the existing chart
//         chartInstance.destroy();
//       }

//       // Create a new chart on the canvas
//       const newChart = new Line(chartRef.current, {
//         type: 'line',
//         data: data,
//         options: options,
//       });

//       // Update the chart ref
//       chartRef.current = newChart;
//     }
//   }, [data, options]);

//   return (
//     <div>
//       <canvas ref={chartRef} />
//     </div>
//   );
// };

// // export default GraphWithAnnotations;