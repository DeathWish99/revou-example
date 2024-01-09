import { useContext, useEffect, useState } from "react";
import { getAllChampions } from "../../api/ChampionAPI";
import { ChampionContext } from "../../contexts/ChampionContext";
import { ChampionInterface, ChampionInterfaceContextValue } from "../../hooks/useFetchChampion";

const ChampionsSummaryContainer = () => {
    const champions = useContext(ChampionContext);

    // const getChampions = async () => {
    //     const data = await getAllChampions();
    //     setChampions(data);
    // }

    // useEffect(() => {
    //     getChampions();
    // }, [])

    return (
        <div>
          {champions ? (
            <ul>
              {/* Render the fetched data */}
              {champions.championInterfaceArr.map((champion : ChampionInterface) => {
                return(
                <>
                    <li>{champion.name}</li>
                </>
                );
              })}
              {/* <p>{champions.description}</p> */}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
};

export default ChampionsSummaryContainer;