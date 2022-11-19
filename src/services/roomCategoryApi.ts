// import axios, { AxiosResponse } from "axios";
import axiosClient from "../share/axios-client/axiosClient";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const roomCategoryApi = {
    getRoomCategory(): Promise<any> {
        const url = "api/v1/cms/room-categories/page?important=true";
        return axiosClient.get(url);
    },
    getAllRoomCategory(): Promise<any> {
        const url = "api/v1/cms/room-categories/page";
        return axiosClient.get(url);
    },
};

export default roomCategoryApi;