import axios from "axios";

const API_BASE_URL = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/';

export const apiService = axios.create({
    baseURL: API_BASE_URL
});

export const apiServiceBuffer = axios.create({
    baseURL: API_BASE_URL,
    responseType: "arraybuffer"
})