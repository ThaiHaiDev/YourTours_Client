export interface BaseResponseBasePagingResponseRoomCategoryInfo {
    success?: boolean;
    data?: BasePagingResponseRoomCategoryInfo;
}

export interface BasePagingResponseRoomCategoryInfo {
    content?: RoomCategoryInfo[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface RoomCategoryInfo {
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

export interface FactoryCreateRequestUUIDRoomCategoryDetail {
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

export interface BaseResponseRoomCategoryDetail {
    success?: boolean;
    data?: RoomCategoryDetail;
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

export interface FactoryUpdateRequestUUIDRoomCategoryDetail {
    /** @format uuid */
    id: string;
    data: RoomCategoryDetail;
}

export interface BaseResponseListRoomOfHomeInfo {
    success?: boolean;
    data?: RoomOfHomeInfo[];
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

export interface CreateListRoomOfHomeModel {
    /** @format uuid */
    homeId?: string;
    listCreate?: RoomOfHomeCreateModel[];
}

export interface RoomOfHomeCreateModel {
    /** @format uuid */
    categoryId?: string;
    /**
     * @format int32
     * @min 0
     */
    number?: number;
}
