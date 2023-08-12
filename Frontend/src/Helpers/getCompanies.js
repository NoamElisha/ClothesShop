import Axios from "../API/axios.js";

async function getCompanies(){
    const response = await Axios.get("/companies");
    const { data } = response;
    return data;
}
// when i see pending use awiat
//console.log(await getCompanies());