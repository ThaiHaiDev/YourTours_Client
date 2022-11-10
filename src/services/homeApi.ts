import { AxiosResponse } from "axios";
import axiosClient from "../share/axios-client/axiosClient";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const homeApi = {
    getRoomCategory(idHome: string | undefined): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/cms/homes/${idHome}/detail`;
        return axiosClient.get(url);
    },
};

export default homeApi;