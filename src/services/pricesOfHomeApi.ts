import axiosClient from "../share/axios-client/axiosClient";

const pricesOfHomeApi = {
    getPriceByMonthOfRoom(month: string, idHome: string | undefined): Promise<any> {
        const url = `api/v1/cms/prices/months?month=${parseInt(month)}&year=2022&homeId=${idHome}`;
        return axiosClient.get(url);
    },
    customePriceDay(data : any): Promise<any> {
        const url = `api/v1/cms/prices/create`;
        return axiosClient.post(url, data);
    },
    
};

export default pricesOfHomeApi;