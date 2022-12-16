import axiosClient from "../share/axios-client/axiosClient";

const statisticApi = {
    getStatisticOfHost(year : string | undefined): Promise<any> {
        const url = `api/v1/cms/statistic/owner${year}`;
        return axiosClient.get(url);
    },
    getStatisticOfAdmin(): Promise<any> {
        const url = `api/v1/cms/statistic/admin`;
        return axiosClient.get(url);
    },
    getStatisticOfAdminForGuest(): Promise<any> {
        const url = `api/v1/cms/statistic/admin/guests`;
        return axiosClient.get(url);
    },
    getStatisticOfAdminForOwner(): Promise<any> {
        const url = `api/v1/cms/statistic/admin/owners`;
        return axiosClient.get(url);
    },
    
};

export default statisticApi;