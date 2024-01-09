import axios, { AxiosError } from "axios";
import { config } from "./config";
import { Navigate, useNavigate } from "react-router-dom";

//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NDZhMmRhLTQwNTUtNGM4ZS04YWEwLWQwMDk0NGQ1ZTg2ZCIsImlhdCI6MTcwNDI5MzI1MywiZXhwIjoxNzA0MzE0ODUzfQ.3G52CQYgfgnANvYIIURS216xGzO5vk93JtqxuHvQCTc"




export const getListCategory = async (page: number) : Promise<any> =>{
    try{
        let response = await axios.get(`https://mock-api.arikmpt.com/api/category?page=${page}`, config);

        return response.data;
    }
    catch(error){
        throw error;
    }
}

export const registerUser = async (data : object) : Promise<object> => {
    

    let response = await axios.post('https://mock-api.arikmpt.com/api/user/register',data);
    return response.data;
};

export const loginUser = async (data: object) : Promise<object> => {
    // let userData = {
    //     "email" : "kevin@email.com",
    //     "password" : "159753"
    // }

    let response = await axios.post('https://mock-api.arikmpt.com/api/user/login',data);
    return response.data;
};

export const createCategory = async () => {
    let data = {
        "name" : "New Category"
    }
    let response = await axios.post('https://mock-api.arikmpt.com/api/category/create',data, config);
    return response.data;
}