import React, { useEffect, useState } from "react";
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
import { formatCurrency } from "../../../theme/functions";
import useModel from "../../../hook/useModel";
import Loading from "../../../components/Loading/Loading";
import { getStatistic } from "../../../services/statistic";
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
  const [totalMoney, setTotalMoney] = useState([]);
  const [totalDays, setTotalDays] = useState([]);
  const [selectType, setSelectType] = useState("week");
  const { isOpen: isLoading, openModel: setIsLoading } = useModel(false);

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
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toLocaleString() + " VND";
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return formatCurrency(value);
          },
        },
      },
    },
  };

  const data = {
    labels: totalDays,
    datasets: [
      {
        label: "Doanh thu",
        data: totalMoney,
        backgroundColor: "#f67009",
      },
    ],
  };

  const handleGetStatistic = async (daysOfWeek) => {
    const data = await getStatistic({ dateArray: daysOfWeek });
    setTotalMoney(data.arrData);
  };

  const changeType = () => {
    const today = moment();
    const startOfWeek = today.clone().startOf("isoWeek");
    const startOfMonth = today.clone().startOf("month");
    const startOfYear = today.clone().startOf("year");
    const daysInMonth = startOfMonth.daysInMonth();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    switch (selectType) {
      case "week":
        const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
          startOfWeek.clone().add(i, "days").format("DD/MM/YYYY")
        );
        const dayOfWeekFormat = Array.from({ length: 7 }, (_, i) =>
          startOfWeek.clone().add(i, "days").format("dddd, DD/MM")
        );
        handleGetStatistic(daysOfWeek);
        setTotalDays(dayOfWeekFormat);
        break;
      case "month":
        const daysOfMonth = Array.from({ length: daysInMonth }, (_, i) =>
          startOfMonth.clone().add(i, "days").format("DD/MM/YYYY")
        );
        handleGetStatistic(daysOfMonth);

        setTotalDays(daysOfMonth);
        break;
      case "year":
        const monthsOfYear = Array.from({ length: 12 }, (_, i) =>
          startOfYear.clone().add(i, "month").format("MMMM")
        );
        setTotalDays(monthsOfYear);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    changeType();
  }, [selectType]);

  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "30px" }}>Thống kê</div>
      <select
        value={selectType}
        className="form-control"
        onChange={(e) => setSelectType(e.target.value)}
        style={{ width: "90px", marginTop: "10px", marginBottom: "10px" }}
      >
        <option value="week">Tuần</option>
        <option value="month">Tháng</option>
        <option value="year">Năm</option>
      </select>
      <Bar options={options} data={data} />
      {isLoading && <Loading />}
    </div>
  );
}
