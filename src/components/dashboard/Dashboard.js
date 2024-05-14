import BarChart from "../charts/BarChat";
import LineChart from "../charts/LineChart";
import DoughnutChart from "../charts/DoughnutChart";
import { useContext } from "react";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { ChartContext } from "../../context/ChartContext";

Chart.register(CategoryScale);

const Dashboard = () => {
  const { barChartData, lineChartData, pieChartData } =
    useContext(ChartContext);

  return (
    <div>
      <h1 className="font-bold text-4xl p-2">Soccer Statistics</h1>
      <div className="flex">
        <div className="flex flex-col">
          <div className="m-0.5 p-1 border-black border">
            <BarChart chartData={barChartData} />
          </div>
          <div className="m-0.5 p-1 border-black border">
            <LineChart chartData={lineChartData} />
          </div>
        </div>
        <div className="m-0.5 p-1 border-black border w-[100%] flex flex-col justify-center items-center">
          <DoughnutChart chartData={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
