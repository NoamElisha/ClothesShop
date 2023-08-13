import axios from "axios";
import Axios from "../API/axios.js";

async function postClient(username,password, garments=[]){
    try{
        const response = await Axios.post("/clients",{
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

// const username = "noam";
// const password = "123";
// postClient(username, password) // call back hell
//     .then(data => {
//         //console.log(data);
//     })
//     .catch(error => {
//         console.error("Error:", error);
// });


export default postClient;