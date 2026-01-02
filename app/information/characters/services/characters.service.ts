import { CharacterResponse, akatsukiResponse } from "../models";
const url = "https://dattebayo-api.onrender.com";

export const getCharacters = async (): Promise<CharacterResponse> => {
  try {
    const response = await fetch(`${url}/characters`);
    if (!response.ok) {
      console.error("No se pudo traer los datos", response.status);
      return {characters: [], currentPage: 0, pageSize: 0, total: 0};
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Error al traer los datos:",
      error instanceof Error && error.message
    );
    return {characters: [], currentPage: 0, pageSize: 0, total: 0};
  }
};
export const getAkatsukis = async (): Promise<akatsukiResponse> => {
  try {
    const response = await fetch(`${url}/akatsuki`);
    if (!response.ok) {
      console.error("No se pudo traer los datos", response.status);
      return {akatsuki: [], currentPage: 0, pageSize: 0, total: 0};
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Error al traer los datos:",
      error instanceof Error && error.message
    );
    return {akatsuki: [], currentPage: 0, pageSize: 0, total: 0};
  }
};


