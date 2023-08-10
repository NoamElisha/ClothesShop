import Axios from "../API/axios.js";

async function updateClientGarments(clientId, garmentId) {
    try {
        const response = await Axios.put(`/clients/garments/${clientId}`, {
            garmentId: garmentId
        });

        const { data } = response;
        return data;
    } catch (error) {
        throw error;
    }
}

// Usage
const clientId = "64d22ea2e7d212cd4ab26082"; 
const garmentId = "64d09d0965c8b9ca3b1dea8c";
updateClientGarments(clientId, garmentId)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
});