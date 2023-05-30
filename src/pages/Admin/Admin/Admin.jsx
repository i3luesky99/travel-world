import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import moment from "moment/moment";
import "moment/locale/vi";
moment.locale("vi");

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Admin() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [];

  const data = {
    labels,
    datasets: [
      {
        label: "Doanh thu",
        data: [100000, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const today = moment();
  const startOfWeek = today.isoWeekday(1).startOf("week");
  const startOfMonth = today.startOf("month");
  const daysInMonth = startOfMonth.daysInMonth();

  for (let i = 0; i < daysInMonth; i++) {
    const day = startOfWeek.clone().add(i, "days");
    labels.push(day.format("DD/MM/YYYY"));
  }

  return (
    <div>
      <div>Thống kê</div>
      <Bar options={options} data={data} />
    </div>
  );
}
