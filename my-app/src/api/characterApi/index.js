import $api from "../api";

export const getCharacter = async () => {
  const { data } = await $api.get("character/");
  return data;
};

export const getCharacterById = async (id) => {
  const { data } = await $api.get(`character/${id}`);
  return data;
};
