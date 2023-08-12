import Axios from "../API/axios.js";

async function deleteGarment(clientId, garmentId) {
    try {
        const response = await Axios.delete(`/clients/garments/${clientId}/${garmentId}`);
        const { data } = response;
        return data;
    } catch (error) {
        throw error;
    }
}

// Usage
const clientId = "64d0df235d6c306004cd475c"; 
const garmentId = "64cfe559c9dd6d1968ac8fc9"; 
deleteGarment(clientId, garmentId)
    .then(data => {
        //console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });






