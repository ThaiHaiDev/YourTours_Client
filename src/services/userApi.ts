import axiosClient from "../share/axios-client/axiosClient";

const userApi = {
    updateInfoUser(data : any): Promise<any> {
        const url = 'api/v1/user/update/current-user';
        return axiosClient.put(url, data);
    }, 
    getAllUser(): Promise<any> {
        const url = `api/v1/cms/user/page?number=0&size=20`;
        return axiosClient.get(url);
    }, 
    sendEmailActiveAccount(): Promise<any> {
        const url = `api/v1/user/request/active`;
        return axiosClient.post(url);
    },
    activeAccount(otp : any): Promise<any> {
        const url = 'api/v1/auth/active-account';
        return axiosClient.post(url, otp);
    },
};

export default userApi;