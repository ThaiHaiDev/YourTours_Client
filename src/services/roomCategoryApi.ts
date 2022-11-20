// import axios, { AxiosResponse } from "axios";
import axiosClient from "../share/axios-client/axiosClient";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const roomCategoryApi = {
    getRoomCategory(): Promise<any> {
        const url = "api/v1/cms/room-categories/page?important=true";
        return axiosClient.get(url);
    },
    getAllRoomCategory(idHome : string | undefined): Promise<any> {
        const url = `api/v1/cms/room-categories/page/host?homeId=${idHome}&number=0&size=20`;
        return axiosClient.get(url);
    },
    saveCountRoomOfHome(data : any): Promise<any> {
        const url = 'api/v1/cms/room-of-home/create/list';
        return axiosClient.post(url, data);
    },
};

export default roomCategoryApi;