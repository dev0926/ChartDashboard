import { SoccerData } from "../Soccer";

export const getLineChartData = (teamIds, seasonIds) => {
  return {
    labels: SoccerData?.at(0).data.map((season) => season.season),
    datasets: SoccerData.filter((teamData) =>
      teamIds.includes(teamData.id)
    ).map((teamData) => {
      return {
        label: teamData.team,
        data: teamData.data.map((season) => season.points),
        backgroundColor: teamData.color,
        pointStyle: "circle",
        pointRadius: 10,
        pointHoverRadius: 15,
        borderWidth: 5,
        borderColor: teamData.color,
      };
    }),
  };
};
