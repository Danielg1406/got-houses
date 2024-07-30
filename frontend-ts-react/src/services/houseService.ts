import axios from 'axios';

export const searchHouses = async (query: string) => {
    const response = await axios.get(`/houses?query=${query}`);
    return response.data;
};

export const getHouseDetails = async (id: number) => {
    const response = await axios.get(`/houses/${id}`);
    return response.data;
};
