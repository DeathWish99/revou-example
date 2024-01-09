
import getChampionByID, { getAllChampions, getChampionPortrait } from "../../api/ChampionAPI";
import { arrayBufferToBase64, removeUnusedPath } from "../../api/ChampionAPI/ChampionAPIHelpers";
import { createCategory, getListCategory, loginUser, registerUser } from "../../api/KakAriAPI";
import { Input, Card } from "../../components"
import MyForm from "../../components/Form"

// let test = await getChampionByID(23)
// console.log(test);
// // console.log(convertUrlToCDragonFormat(test.squarePortraitPath));
// let testImg : ArrayBuffer = await getChampionPortrait(test.squarePortraitPath);
// let base64ImgStr = "data:image/png;base64,"+arrayBufferToBase64(testImg);
// console.log(testImg);
//console.log(JSON.parse(localStorage.getItem("champions") || '{}'));
//console.log(await loginUser());
//console.log(await createCategory());
//console.log(await getListCategory());
const HomeContainer = () => (
    <div>
        <Card>
            {/* <Table headers={[
                {
                    label: 'Nama',
                    key: 'name'
                },
                {
                    label: 'Umur',
                    key: 'age'
                },
                {
                    label: 'Hobi',
                    key: 'hobby'
                }
            ]} data={
                name: 'Kevin',
                age: 24,
                hobby: "test"
            } /> */}

            <MyForm />
        </Card>
    </div>
)

export default HomeContainer