import Axios from "../API/axios.js";

async function checkUsername(username) {
    try {
        const response = await Axios.post("/clients/check-username", {
            username: username
        });
        const { result } = response.data;
        return result == 0; // Return true if result is 0 (username exists)
    } catch (error) {
        throw error;
    }
}

export default checkUsername;
