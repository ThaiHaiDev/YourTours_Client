// import axios, { AxiosResponse } from "axios";
import axiosClient from "../share/axios-client/axiosClient";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const roomCategoryApi = {
    getRoomCategory(): Promise<any> {
        const url = "api/v1/cms/room-categories/page?important=true";
        return axiosClient.get(url);
    },
    addRoomCategory(data : any): Promise<any> {
        const url = "api/v1/cms/room-categories/create";
        return axiosClient.post(url, data);
    },
    deleteRoomCategory(idData : string | undefined): Promise<any> {
        const url = `api/v1/cms/room-categories/${idData}/delete`;
        return axiosClient.delete(url);
    },
    getAllRoomCategoryOfHome(idHome : string | undefined): Promise<any> {
        const url = `api/v1/cms/room-categories/page/host?homeId=${idHome}&number=0&size=20`;
        return axiosClient.get(url);
    },
    saveCountRoomOfHome(data : any): Promise<any> {
        const url = 'api/v1/cms/room-of-home/create/list';
        return axiosClient.post(url, data);
    },
    getAllRoomCategory(): Promise<any> {
        const url = `api/v1/cms/room-categories/page?number=0&size=20`;
        return axiosClient.get(url);
    },
};

export default roomCategoryApi;