import { SoccerData } from "../Soccer";

export const getBarChartData = (teamIds, seasonIds) => {
  return {
    labels: SoccerData.filter((teamData) => teamIds.includes(teamData.id)).map(
      (teamData) => teamData.team
    ),
    datasets: [
      {
        label: "Wins",
        data: SoccerData.filter((teamData) =>
          teamIds.includes(teamData.id)
        ).map((teamData) =>
          teamData.data
            .filter((season) => seasonIds.includes(season.id))
            .reduce((wins, currentSeason) => wins + currentSeason.wins, 0)
        ),
        backgroundColor: "rgba(50,220,255,0.5)",
      },
      {
        label: "Losses",
        data: SoccerData.filter((teamData) =>
          teamIds.includes(teamData.id)
        ).map((teamData) =>
          teamData.data
            .filter((season) => seasonIds.includes(season.id))
            .reduce((losses, currentSeason) => losses + currentSeason.losses, 0)
        ),
        backgroundColor: "rgba(255,75,75,0.5)",
      },
      {
        label: "Draws",
        data: SoccerData.filter((teamData) =>
          teamIds.includes(teamData.id)
        ).map((teamData) =>
          teamData.data
            .filter((season) => seasonIds.includes(season.id))
            .reduce((draws, currentSeason) => draws + currentSeason.draws, 0)
        ),
        backgroundColor: "rgba(230,0,255,0.5)",
      },
    ],
  };
};
