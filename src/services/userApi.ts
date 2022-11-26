import axiosClient from "../share/axios-client/axiosClient";

const userApi = {
    updateInfoUser(data : any): Promise<any> {
        const url = 'api/v1/user/update/current-user';
        return axiosClient.put(url, data);
    }, 
};

export default userApi;