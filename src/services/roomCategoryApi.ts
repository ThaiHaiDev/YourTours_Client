// import axios, { AxiosResponse } from "axios";
import axiosClient from '../share/axios-client/axiosClient';
import { BaseResponseFactoryDeleteResponse } from '../share/models/cms';
import {
    BaseResponseBasePagingResponseRoomCategoryInfo,
    BaseResponseListRoomOfHomeInfo,
    BaseResponseRoomCategoryDetail,
    CreateListRoomOfHomeModel,
    FactoryCreateRequestUUIDRoomCategoryDetail,
    FactoryUpdateRequestUUIDRoomCategoryDetail,
} from '../share/models/roomCategory';

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const roomCategoryApi = {
    getRoomCategory(): Promise<BaseResponseBasePagingResponseRoomCategoryInfo> {
        const url = 'api/v1/cms/room-categories/page?important=true';
        return axiosClient.get(url);
    },
    addRoomCategory(data: FactoryCreateRequestUUIDRoomCategoryDetail): Promise<BaseResponseRoomCategoryDetail> {
        const url = 'api/v1/cms/room-categories/create';
        return axiosClient.post(url, data);
    },
    deleteRoomCategory(idData: string | undefined): Promise<BaseResponseFactoryDeleteResponse> {
        const url = `api/v1/cms/room-categories/${idData}/delete`;
        return axiosClient.delete(url);
    },
    updateRoomCategory(data: FactoryUpdateRequestUUIDRoomCategoryDetail): Promise<BaseResponseRoomCategoryDetail> {
        const url = 'api/v1/cms/room-categories/update';
        return axiosClient.put(url, data);
    },
    getAllRoomCategoryOfHome(idHome: string | undefined): Promise<BaseResponseBasePagingResponseRoomCategoryInfo> {
        const url = `api/v1/cms/room-categories/page/host?homeId=${idHome}&number=0&size=20`;
        return axiosClient.get(url);
    },
    saveCountRoomOfHome(data: CreateListRoomOfHomeModel): Promise<BaseResponseListRoomOfHomeInfo> {
        const url = 'api/v1/cms/room-of-home/create/list';
        return axiosClient.post(url, data);
    },
    getAllRoomCategory(searchText: string | undefined): Promise<BaseResponseBasePagingResponseRoomCategoryInfo> {
        const url = `api/v1/cms/room-categories/page?${searchText !== '' ? `keyword=${searchText}&` : ''}number=0&size=20`;
        return axiosClient.get(url);
    },
};

export default roomCategoryApi;
