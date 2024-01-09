import { ChampionInterface } from "../../hooks/useFetchChampion";


const Champion = ({id, name, roles, squarePortraitPath, base64String}: ChampionInterface) => {
    return(
    <>
    <div>
        <label>{name}</label>
        <img src={base64String} ></img>
    </div>
    </>)
}

export default Champion;