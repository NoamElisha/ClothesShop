import Axios from "../API/axios.js";

async function getClientsUsername(){
    const response = await Axios.get("/clients/usernames");
    const { data } = response;
    return data;
}
// when i see pending use awiat
console.log(await getClientsUsername());