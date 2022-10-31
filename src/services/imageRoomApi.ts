import axiosClientFile from '../share/axios-client/axiosClientFile';

const imageRoomApi = {
    uploadImage(data: any): Promise<any> {
        const url = "api/v1/media/public/upload";
        return axiosClientFile.post(url, data);
    },
};

export default imageRoomApi;
