import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Pie, Bar } from "react-chartjs-2";

// Register the required components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const chartTheme = {
  color: "#ffeeca",
  borderColor: "#867555",
  grid: {
    color: "rgba(134, 117, 85, 0.2)",
  },
  legend: {
    labels: {
      color: "#ffeeca",
    },
  },
  title: {
    color: "#d4a418",
  },
};

export const UserGrowthChart = ({ data }) => {
  return (
    <Line
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: chartTheme.legend.labels.color,
              font: {
                size: 12,
              },
            },
          },
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              color: chartTheme.grid.color,
            },
            ticks: {
              color: chartTheme.color,
            },
          },
          y: {
            grid: {
              color: chartTheme.grid.color,
            },
            ticks: {
              color: chartTheme.color,
            },
          },
        },
      }}
    />
  );
};

export const RevenueDistribution = ({ data }) => {
  return (
    <Pie
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: chartTheme.legend.labels.color,
              font: {
                size: 12,
              },
            },
          },
          title: {
            display: false,
          },
        },
      }}
    />
  );
};

export const TopSongsChart = ({ data }) => {
  return (
    <Bar
      data={{
        ...data,
        datasets: data.datasets.map((dataset) => ({
          ...dataset,
          borderColor: "transparent",
        })),
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: chartTheme.color,
            },
          },
          y: {
            grid: {
              color: chartTheme.grid.color,
            },
            ticks: {
              color: chartTheme.color,
            },
          },
        },
      }}
    />
  );
};
