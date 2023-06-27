import axiosClient from '../share/axios-client/axiosClient';
import { BaseResponseOwnerStatistic } from '../share/models/statisticAdmin';


const statisticApi = {
    getStatisticOfHost(year: string | undefined): Promise<BaseResponseOwnerStatistic> {
        const url = `api/v1/cms/statistic/owner${year}`;
        return axiosClient.get(url);
    },
    getStatisticOfAdmin(year: string | undefined): Promise<any> {
        const url = `api/v1/cms/statistic/admin?year=${year}`;
        return axiosClient.get(url);
    },
    getStatisticOfAdminForChart(): Promise<any> {
        const url = `api/v1/cms/statistic/admin/chart?year=2023&type=BOOKING`;
        return axiosClient.get(url);
    },
    getStatisticOfAdminForGuest(date: any): Promise<any> {
        const url = `api/v1/cms/statistic/admin/guests?dateStart=${date[0]}&dateEnd=${date[1]}&number=0&size=20`;
        return axiosClient.get(url);
    },
    getStatisticOfAdminForOwner(): Promise<any> {
        const url = `api/v1/cms/statistic/admin/owners`;
        return axiosClient.get(url);
    },
    getStatisticOfAdminForOwnerByMonth(date: any): Promise<any> {
        const url = `api/v1/cms/statistic/owner/month?year=${date.year}&month=${date.month}&number=0&size=100`;
        return axiosClient.get(url);
    },
};

export default statisticApi;
