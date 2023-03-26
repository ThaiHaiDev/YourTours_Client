import { ConvenientOfHomeDetailRequest } from './convenient';
import { ImageHomeDetailRequest } from './imageList';
import { RoomOfHomeCreateRequest } from './roomHome';

export interface CreateHomeDetailResquest {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    wifi?: string;
    passWifi?: string;
    ruleOthers?: string;
    timeCheckInStart?: TimeRanges;
    timeCheckInEnd?: TimeRanges;
    timeCheckOut?: TimeRanges;
    guide?: string;
    /**
     * @format double
     * @min 0
     */
    costPerNightDefault?: number;
    refundPolicy?: 'BEFORE_ONE_DAY';
    status?: 'ACTIVE' | 'LOCK';
    /**
     * @format int32
     * @min 0
     */
    numberOfGuests?: number;
    imagesOfHome?: ImageHomeDetailRequest[];
    roomsOfHome?: RoomOfHomeCreateRequest[];
    amenitiesOfHome?: ConvenientOfHomeDetailRequest[];
}

export interface BaseResponseHomeDetail {
    success?: boolean;
    data?: HomeDetail;
}

export interface BaseResponseBasePagingResponseHomeInfo {
    success?: boolean;
    data?: BasePagingResponseHomeInfo;
}

export interface BasePagingResponseHomeInfo {
    content?: HomeDetail[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}
export interface HomeDetail {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    wifi?: string;
    passWifi?: string;
    ruleOthers?: string;
    timeCheckInStart?: LocalTime;
    timeCheckInEnd?: LocalTime;
    timeCheckOut?: LocalTime;
    guide?: string;
    addressDetail?: string;
    provinceCode?: string;
    /** @format int32 */
    rank?: number;
    /**
     * @format double
     * @min 0
     */
    costPerNightDefault: number;
    refundPolicy?: 'BEFORE_ONE_DAY' | 'NO_REFUND' | 'BEFORE_SEVEN_DAYS';
    status?: 'ACTIVE' | 'LOCK';
    /**
     * @format int32
     * @min 0
     */
    numberOfGuests?: number;
    /** @format int64 */
    view?: number;
    /** @format int64 */
    favorite?: number;
    thumbnail?: string;
    /** @format double */
    averageRate?: number;
    /** @format int64 */
    numberOfReviews?: number;
    /** @format date-time */
    lastModifiedDate?: string;
    roomsImportant?: NumberOfRoomsModel[];
    /** @format int32 */
    numberOfBed?: number;
    isFavorite?: boolean;
    provinceName?: string;
    imagesOfHome: ImageHomeDetail[];
    roomsOfHome: RoomOfHomeCreateModel[];
    amenitiesOfHome: AmenityOfHomeDetail[];
}

export interface LocalTime {
    /** @format int32 */
    hour?: number;
    /** @format int32 */
    minute?: number;
    /** @format int32 */
    second?: number;
    /** @format int32 */
    nano?: number;
}

export interface NumberOfRoomsModel {
    roomCategoryName?: string;
    /** @format uuid */
    roomCategoryId?: string;
    number?: string;
}

export interface ImageHomeDetail {
    /** @format uuid */
    id?: string;
    path?: string;
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

export interface AmenityOfHomeDetail {
    /** @format uuid */
    id?: string;
    isHave?: boolean;
    /** @format uuid */
    amenityId: string;
    /** @format uuid */
    homeId?: string;
}
