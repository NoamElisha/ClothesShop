import axios from "axios";
import Axios from "../API/axios.js";

async function postAvailableClient(username,password, garments=[]){
    try{
        const response = await Axios.post("/clients/usernames",{
            username:username,
            password:password,
            garments:garments
        });
        const { data } = response;
        return data;
    } catch (error){
        throw error;
    }
}
export default postAvailableClient;
// const username = "noam";
// const password = "123";
// postAvailableClient(username, password)
//     .then(data => {
//         //console.log(data);
//     })
//     .catch(error => {
//         console.error("Error:", error);
// });