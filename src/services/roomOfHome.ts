import axiosClient from '../share/axios-client/axiosClient';
import { BaseResponseFactoryDeleteResponse } from '../share/models/cms';
import {
    BaseResponseBasePagingResponseBedCategoryInfo,
    BaseResponseBasePagingResponseRoomOfHomeInfo,
    BaseResponseCreateListBedOfHomeResponse,
    CreateListBedOfHomeDetail,
} from '../share/models/roomOfHome';

const roomOfHomeApi = {
    getAllRoomOfHome(idRoom: string | undefined): Promise<BaseResponseBasePagingResponseRoomOfHomeInfo> {
        const url = `api/v1/cms/room-of-home/page?homeId=${idRoom}number=0&size=20`;
        return axiosClient.get(url);
    },
    getAllBedOfRoom(idRoom: string | undefined): Promise<BaseResponseBasePagingResponseBedCategoryInfo> {
        const url = `api/v1/cms/bed-categories/page/room-id?roomHomeId=${idRoom}&number=0&size=20`;
        return axiosClient.get(url);
    },
    saveCountBedOfHome(data: CreateListBedOfHomeDetail): Promise<BaseResponseCreateListBedOfHomeResponse> {
        const url = 'api/v1/cms/bed-of-home/create/list';
        return axiosClient.post(url, data);
    },
    deleteRoomOfHome(idRoom: string | undefined): Promise<BaseResponseFactoryDeleteResponse> {
        const url = `api/v1/cms/room-of-home/${idRoom}/delete`;
        return axiosClient.delete(url);
    },
};

export default roomOfHomeApi;
