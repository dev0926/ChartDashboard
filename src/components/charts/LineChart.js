import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { ChartContext } from "../../context/ChartContext";
import { getBarChartData } from "../../data/charts/getBarChartData";
import { getLineChartData } from "../../data/charts/getLineChartData";
import { getPieChartData } from "../../data/charts/getPieChartData";
function LineChart({ chartData }) {
  const {
    activeSeasonIds,
    setActiveSeasonIds,
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
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          elements: {
            line: {
              tension: 0,
            },
          },
          plugins: {
            title: {
              display: true,
              text: "League Points over Seasons",
            },
          },

          onClick: function (evt, element) {
            if (element.length > 0) {
              const seasonId = element[0].index;
              let newSeasonIds = [];
              if (activeSeasonIds.includes(seasonId))
                newSeasonIds = activeSeasonIds.filter((id) => id !== seasonId);
              else newSeasonIds = [...activeSeasonIds, seasonId];
              setActiveSeasonIds(newSeasonIds);
              setBarChartData(getBarChartData(allTeamIds, newSeasonIds));
              setLineChartData(getLineChartData(allTeamIds, allSeasonIds));
              setPieChartData(getPieChartData(allTeamIds, newSeasonIds));
            }
          },
        }}
      />
    </div>
  );
}
export default LineChart;
