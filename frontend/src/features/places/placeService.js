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

const getPlaces = async () => {

    const response = await axios.get(API_URL)

    return response.data
}

const getSpecificPlace = async (placeId) => {

    const response = await axios.get(API_URL + placeId)

    return response.data
}

const deletePlace = async (placeId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}` 
        }
    }

    const response = await axios.delete(API_URL + placeId, config)

    return response.data
}

const placeService = {
    createPlace,
    getPlaces,
    getSpecificPlace,
    deletePlace
}

export default placeService