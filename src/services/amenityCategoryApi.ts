// import axios, { AxiosResponse } from "axios";
import axiosClient from "../share/axios-client/axiosClient";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const amenityCategoryApi = {
    // getRoomCategory(data: any): Promise<AxiosResponse> {
    //     const url = `${API_BASE_URL}api/v1/auth/register`;
    //     return axiosClient.post(url, data);
    // },
    getAmenityCategories(): Promise<any> {
        const url = "api/v1/cms/amenity-categories/page?isDefault=true";
        return axiosClient.get(url);
    },
    getAmenityCategoriesAll(): Promise<any> {
        const url = "api/v1/cms/amenity-categories/page?number=0&size=2";
        return axiosClient.get(url);
    },
    getAmenityCategoriesAllDetail(idHome: string | undefined): Promise<any> {
        const url = `api/v1/cms/amenity-categories/page/child?homeId=${idHome}`;
        return axiosClient.get(url);
    },
    updateActiveConvenientItem(data: any): Promise<any> {
        const url = `api/v1/cms/amenities-of-homes/create`;
        return axiosClient.post(url, data);
    }, 
    getAllAmenityInCategories(idCata: string, idHome: string | undefined): Promise<any> {
        const url = `api/v1/cms/amenity-categories/home/${idCata}/detail?homeId=${idHome}`;
        return axiosClient.get(url);
    },
    getAmenityInCategories(idCata: string): Promise<any> {
        const url = `api/v1/cms/amenities/page?categoryId=${idCata}`;
        return axiosClient.get(url);
    },
};

export default amenityCategoryApi;