import { Bar } from "react-chartjs-2";
import { useContext } from "react";
import { ChartContext } from "../../context/ChartContext";
import { getLineChartData } from "../../data/charts/getLineChartData";
import { getPieChartData } from "../../data/charts/getPieChartData";
import { getBarChartData } from "../../data/charts/getBarChartData";

const BarChart = ({ chartData }) => {
  const {
    activeTeamIds,
    setActiveTeamIds,
    allTeamIds,
    allSeasonIds,
    setBarChartData,
    setLineChartData,
    setPieChartData,
  } = useContext(ChartContext);
  return (
    <div
      className="chart-container"
      style={{ position: "relative", height: "45vh", width: "60vw" }}
    >
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Wins & Losses & Draws",
            },
            legend: {
              position: "top",
            },
          },
          onClick: function (evt, element) {
            if (element.length > 0) {
              const teamId = element[0].element["$context"].dataIndex;
              let newTeamIds = [];
              if (activeTeamIds.includes(teamId))
                newTeamIds = activeTeamIds.filter((id) => id !== teamId);
              else newTeamIds = [...activeTeamIds, teamId];
              setActiveTeamIds(newTeamIds);
              setBarChartData(getBarChartData(allTeamIds, allSeasonIds));
              setLineChartData(getLineChartData(newTeamIds, allSeasonIds));
              setPieChartData(getPieChartData(newTeamIds, allSeasonIds));
            }
          },
        }}
      />
    </div>
  );
};

export default BarChart;
