import axiosClientFile from '../share/axios-client/axiosClientFile';
import { BaseResponseUploadMediaResponse } from '../share/models/image.model';

const imageRoomApi = {
    uploadImage(data: any): Promise<BaseResponseUploadMediaResponse> {
        const url = 'api/v1/media/public/upload';
        return axiosClientFile.post(url, data);
    },
};

export default imageRoomApi;
