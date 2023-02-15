import axios from "axios";

const fetchRickAndMortyApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
  headers: { "Content-Type": "application/json" },
});

fetchRickAndMortyApi.interceptors.response.use((response) => {
  if (response.status === 200) {
    console.log("success");
  }
  return response;
});

export const getCharacterById = async (id) => {
  try {
    const response = await fetchRickAndMortyApi.get(`/${id}`);
    const data = response.data;
    console.log(data);
    return await data;
  } catch {
    console.error("Fetch data failure");
  }
};
