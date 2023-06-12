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

const getPlaces = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}` 
        }
    }

    const response = await axios.get(API_URL, config)

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
    deletePlace
}

export default placeService