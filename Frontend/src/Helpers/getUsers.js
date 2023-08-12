import axios from "axios";
import Axios from "../API/axios.js";

async function getUsers(){
    const response = await Axios.get("/clients");
    const { data } = response;
    return data;
}
// when i see pending use awiat
////console.log(await getUsers());

export default getUsers;