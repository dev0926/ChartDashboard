import { useMemo, useState } from "react";
import { createContext } from "react";
import { SoccerData } from "../data/Soccer";
import { getBarChartData } from "../data/charts/getBarChartData";
import { getLineChartData } from "../data/charts/getLineChartData";
import { getPieChartData } from "../data/charts/getPieChartData";

export const ChartContext = createContext();

export const ChartContextProvider = ({ children }) => {
  const [activeTeamIds, setActiveTeamIds] = useState([]);
  const [activeSeasonIds, setActiveSeasonIds] = useState([]);

  const allTeamIds = SoccerData.map((teamData) => teamData.id);
  const allSeasonIds = SoccerData[0].data.map((season) => season.id);

  const [barChartData, setBarChartData] = useState(
    getBarChartData(allTeamIds, allSeasonIds)
  );
  const [lineChartData, setLineChartData] = useState(
    getLineChartData(allTeamIds, allSeasonIds)
  );
  const [pieChartData, setPieChartData] = useState(
    getPieChartData(allTeamIds, allSeasonIds)
  );

  const value = useMemo(
    () => ({
      activeSeasonIds,
      activeTeamIds,
      allTeamIds,
      allSeasonIds,
      barChartData,
      lineChartData,
      pieChartData,
      setActiveSeasonIds,
      setActiveTeamIds,
      setBarChartData,
      setLineChartData,
      setPieChartData,
    }),
    [
      activeSeasonIds,
      activeTeamIds,
      allTeamIds,
      allSeasonIds,
      barChartData,
      lineChartData,
      pieChartData,
      setActiveSeasonIds,
      setActiveTeamIds,
      setBarChartData,
      setLineChartData,
      setPieChartData,
    ]
  );

  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  );
};
