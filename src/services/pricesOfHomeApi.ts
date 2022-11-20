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
    setDiscountOfHome(data: any): Promise<any> {
        const url = `api/v1/cms/discount-of-home/create/list`;
        return axiosClient.post(url, data);
    },
    setSurchargeOfHome(data: any): Promise<any> {
        const url = 'api/v1/cms/surcharge-of-home/create/list';
        return axiosClient.post(url, data);
    },
    showPriceByRangeDay(idHoom: string | undefined, dateFrom: string | undefined, dateTo: string | undefined): Promise<any> {
        const url = `api/v1/public/prices?homeId=${idHoom}&dateFrom=${dateFrom}&dateTo=${dateTo}`;
        return axiosClient.get(url);
    },
};

export default pricesOfHomeApi;