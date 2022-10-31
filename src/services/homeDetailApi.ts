// import axios, { AxiosResponse } from "axios";
import axiosClient from "../share/axios-client/axiosClient";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const homeDetailApi = {
    // getRoomCategory(data: any): Promise<AxiosResponse> {
    //     const url = `${API_BASE_URL}api/v1/auth/register`;
    //     return axiosClient.post(url, data);
    // },
    createHomeDetailByHost(data:any): Promise<any> {
        const url = "api/v1/cms/homes/create";
        return axiosClient.post(url,data);
    },
};

export default homeDetailApi;