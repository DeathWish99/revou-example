import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getChampionByID, { getChampionPortrait } from "../../api/ChampionAPI";
import { arrayBufferToBase64 } from "../../api/ChampionAPI/ChampionAPIHelpers";
import { Champion } from "../../components";
import { ChampionContext } from "../../contexts/ChampionContext";
import { ChampionInterface } from "../../hooks/useFetchChampion";
import { getListCategory } from "../../api/KakAriAPI";

const ChampionInfoContainer = () => {

    const { id } = useParams()
    const champions = useContext(ChampionContext);
    const [championData, setChampionData] = useState<ChampionInterface>({name: ''});
    const [championImg, setChampionImg] = useState('');

    async function getData() {
        try{
            // if(champions.championInterfaceArr.length === 0){
            //     const result = await getChampionByID(parseInt(id || '-1'));
            //     setChampionData(result);
            // }
            // else{
                let champion = champions.championInterfaceArr.find(x => x.id === parseInt(id ?? '-1'));
                setChampionData(champion || {name:'None'});
                
                if(id){
                    console.log(await getListCategory(parseInt(id)));
                }
            //}
        }
        catch(e){
            throw e;
        }
    }
    const getImage = async () => {

        if(id != undefined){
            let testImg : ArrayBuffer = await getChampionPortrait(parseInt(id));
            let base64ImgStr = "data:image/png;base64,"+arrayBufferToBase64(testImg);
            setChampionImg(base64ImgStr);
        }
    }

    useEffect(() => {
        if(id != undefined){
            getData();
            getImage();
        }
    }, [])
    // console.log(convertUrlToCDragonFormat(test.squarePortraitPath));

   return (
   <>
        {
            championData.name !== undefined ? <Champion id={parseInt(id || '-1')} name={championData.name} base64String={championImg} />
            :
            <div className="container p-5 text-center">
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>   
        }
        
    </>
   )
};

export default ChampionInfoContainer;