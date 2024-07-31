// src/services/houseService.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const searchHouses = async (query: string) => {
    const response = await axios.get(`${BASE_URL}/houses`, {
        params: { query }
    });
    return response.data;
};

export const getHouseDetails = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/houses/${id}`);
    return response.data;
};
