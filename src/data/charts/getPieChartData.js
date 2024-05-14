import { SoccerData } from "../Soccer";

export const getPieChartData = (teamIds, seasonIds) => {
  return {
    labels: SoccerData.filter((teamData) => teamIds.includes(teamData.id)).map(
      (teamData) => teamData.team
    ),
    datasets: [
      {
        label: "Goals Scored",
        data: SoccerData.filter((teamData) =>
          teamIds.includes(teamData.id)
        ).map((teamData) =>
          teamData.data
            .filter((season) => seasonIds.includes(season.id))
            .reduce(
              (goalsScored, currentSeason) =>
                (goalsScored += currentSeason.goalsScored),
              0
            )
        ),
        backgroundColor: SoccerData.filter((teamData) =>
          teamIds.includes(teamData.id)
        ).map((teamData) => teamData.color),
      },
    ],
  };
};
