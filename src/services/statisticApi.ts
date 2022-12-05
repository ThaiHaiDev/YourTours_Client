import axiosClient from "../share/axios-client/axiosClient";

const statisticApi = {
    getStatisticOfHost(year : string | undefined): Promise<any> {
        const url = `api/v1/cms/statistic/owner${year}`;
        return axiosClient.get(url);
    },
};

export default statisticApi;