import axiosClient from "../share/axios-client/axiosClient";
import { BaseResponseFactoryDeleteResponse } from "../share/models/cms";

const notificationApi = {
    getNotificationForUser(size: number): Promise<any> {
        const url = `api/v1/app/notification/page?number=0&size=${size}`;
        return axiosClient.get(url);
    },
    resetNumberNotification(data: any): Promise<any> {
        const url = `api/v1/user/reset/notification`;
        return axiosClient.post(url, data);
    },
    showOffViewNotification(data: any): Promise<any> {
        const url = `api/v1/app/notification/tick-view`;
        return axiosClient.put(url, data);
    },
    deleteNotificationViewed(all: any): Promise<BaseResponseFactoryDeleteResponse> {
        const url = `api/v1/app/notification/list/delete?all=${all}`;
        return axiosClient.delete(url);
    },
};

export default notificationApi;
