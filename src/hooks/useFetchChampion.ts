import { useEffect, useState } from "react";
import { getAllChampions } from "../api/ChampionAPI";
export type ChampionInterface = {
    id? : number;
    name : string;
    roles?: string[];
    squarePortraitPath?: string;
    base64String?: string;
}

export interface ChampionInterfaceContextValue {
    championInterfaceArr : ChampionInterface[];
}
const useFetchChampion = () => {

    const [championData, setChampionData] = useState<ChampionInterfaceContextValue>({championInterfaceArr: []});

    const setChampionContext = async () => {
        let champions = await getAllChampions()
        setChampionData(champions);
      };

    return {
        championData: championData,
        setChampionContext
    }
};  

export default useFetchChampion;