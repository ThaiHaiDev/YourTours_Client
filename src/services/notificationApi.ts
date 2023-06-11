import axiosClient from "../share/axios-client/axiosClient";

const notificationApi = {
    getNotificationForUser(): Promise<any> {
        const url = `api/v1/app/notification/page?number=0&size=8`;
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
};

export default notificationApi;
