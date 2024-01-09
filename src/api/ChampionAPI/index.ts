import { ChampionInterface, ChampionInterfaceContextValue } from "../../hooks/useFetchChampion";
import { apiService, apiServiceBuffer } from "../baseAPIConfig";
import { removeUnusedPath } from "./ChampionAPIHelpers";


export const getAllChampions = async () : Promise<ChampionInterfaceContextValue> => {
    try{
        let response = await apiService.get(`v1/champion-summary.json`)
        let retData : ChampionInterfaceContextValue = {championInterfaceArr: response.data}
        return retData;
    }
    catch(e){
        throw e;
    }
}

export const getChampionByID = async (id : number) : Promise<ChampionInterface> => {

    try{
        let response = await apiService.get(`v1/champions/${id}.json`)
        let retData : ChampionInterface = {name: response.data.name, squarePortraitPath: response.data.squarePortraitPath};
        console.log(retData);
        return response.data;
    }
    catch(e){
        throw e;
    }
}

export const getChampionPortrait = async(router : number | string) : Promise<ArrayBuffer> => {
    try{
        console.log(router);
        if(typeof router === "number"){
            let response = await apiServiceBuffer.get(`v1/champion-icons/${router}.png`);
            return response.data;
        }
        else{
            let response = await apiServiceBuffer.get(removeUnusedPath(router));
            return response.data;
        }
    }
    catch(e){
        throw e;
    }
}

export default getChampionByID;