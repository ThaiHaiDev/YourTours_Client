import { AxiosResponse } from "axios";
import axiosClient from "../share/axios-client/axiosClient";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const homeApi = {
    getRoomCategory(idHome: string | undefined): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/cms/homes/${idHome}/detail`;
        return axiosClient.get(url);
    },
    updateTitleHome(data : any): Promise<any>  {
        const url = `api/v1/cms/homes/update/homes-profile`;
        return axiosClient.put(url, data);
    },
    updateAddressHome(data : any): Promise<any>  {
        const url = `api/v1/cms/homes/update/homes-address`;
        return axiosClient.put(url, data);
    },
    updatePriceHome(data : any): Promise<any>  {
        const url = `api/v1/cms/homes/update/homes-price`;
        return axiosClient.put(url, data);
    },
    
};

export default homeApi;