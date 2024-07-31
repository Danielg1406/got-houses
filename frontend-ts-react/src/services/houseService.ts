import axios from 'axios';

const BASE_URL = "http://localhost:8080"

export const getAllHouses = async () => {
    const response = await axios.get(`${BASE_URL}/houses`);
    return response.data;
};

export const getHouseDetails = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/houses/${id}`);
    return response.data;
};
