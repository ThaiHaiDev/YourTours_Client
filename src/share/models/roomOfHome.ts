export interface BaseResponseBasePagingResponseRoomOfHomeInfo {
    success?: boolean;
    data?: BasePagingResponseRoomOfHomeInfo;
}

export interface BasePagingResponseRoomOfHomeInfo {
    content?: RoomOfHomeInfo[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface RoomOfHomeInfo {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    /** @format uuid */
    categoryId?: string;
    categoryDetail?: RoomCategoryDetail;
    descriptionOfBed?: string;
    /** @format int32 */
    orderFlag?: number;
}

export interface RoomCategoryDetail {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    important: boolean;
    configBed: boolean;
    status?: 'ACTIVE' | 'LOCK';
    /** @format int64 */
    numberOfHomes?: number;
}

export interface BaseResponseBasePagingResponseBedCategoryInfo {
    success?: boolean;
    data?: BasePagingResponseBedCategoryInfo;
}

export interface BasePagingResponseBedCategoryInfo {
    content?: BedCategoryInfo[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface BedCategoryInfo {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    status?: 'ACTIVE' | 'LOCK';
    /** @format int32 */
    numberOfRoom?: number;
}

export interface CreateListBedOfHomeDetail {
    listBedOfHomeDetail?: BedOfHomeDetail[];
}

export interface BedOfHomeDetail {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    categoryId?: string;
    /** @format uuid */
    roomOfHomeId?: string;
    /**
     * @format int32
     * @min 0
     */
    amount: number;
}

export interface BaseResponseCreateListBedOfHomeResponse {
    success?: boolean;
    data?: CreateListBedOfHomeResponse;
}

export interface CreateListBedOfHomeResponse {
    success?: boolean;
    bedDescription?: string;
}
