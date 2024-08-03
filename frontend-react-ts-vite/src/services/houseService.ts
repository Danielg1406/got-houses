import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const searchHouses = async (query: string) => {
  const response = await api.get(`/houses?query=${query}`);
  return response.data;
};

export const getHouseDetails = async (id: number) => {
  const response = await api.get(`/houses/${id}`);
  return response.data;
};
