import { createContext, useState } from "react";
import { ChampionInterfaceContextValue } from "../../hooks/useFetchChampion";

const initialContext : ChampionInterfaceContextValue ={
    championInterfaceArr: [
        {name: 'None'}
    ]
}

export const ChampionContext = createContext<ChampionInterfaceContextValue>(initialContext);