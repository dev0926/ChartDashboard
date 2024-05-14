import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartContext } from "../../context/ChartContext";
import { getBarChartData } from "../../data/charts/getBarChartData";
import { getLineChartData } from "../../data/charts/getLineChartData";
import { getPieChartData } from "../../data/charts/getPieChartData";

function DoughnutChart({ chartData }) {
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
    <div className="chart-container" style={{ height: "60vh", width: "30vw" }}>
      <Doughnut
        data={chartData}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: `Goals Scored`,
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
              setBarChartData(getBarChartData(newTeamIds, allSeasonIds));
              setLineChartData(getLineChartData(newTeamIds, allSeasonIds));
              setPieChartData(getPieChartData(allTeamIds, allSeasonIds));
            }
          },
        }}
      />
    </div>
  );
}
export default DoughnutChart;
