import Axios from "../API/axios.js";

async function getGarments(){
    const response = await Axios.get("/garments");
    const { data } = response;
    return data;
}
// when i see pending use awiat
console.log(await getGarments());