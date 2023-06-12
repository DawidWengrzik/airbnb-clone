import axios from 'axios';

const API_URL = 'http://localhost:8080/api/places/'

const createPlace = async (placeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}` 
        }
    }

    const response = await axios.post(API_URL, placeData, config)

    return response.data
}

const placeService = {
    createPlace
}

export default placeService