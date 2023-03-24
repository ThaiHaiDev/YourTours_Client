export interface BaseResponseBasePagingResponseAmenityInfo {
    success?: boolean;
    data?: BasePagingResponseAmenityInfo;
}

export interface BasePagingResponseAmenityInfo {
    content?: AmenityInfo[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface AmenityInfo {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    status?: 'ACTIVE' | 'LOCK';
    /** @format uuid */
    categoryId?: string;
    icon?: string;
    category?: AmenityCategoryDetail;
    setFilter?: boolean;
    isConfig?: boolean;
}

export interface AmenityCategoryDetail {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    status?: 'ACTIVE' | 'LOCK';
    isDefault?: boolean;
}

export interface BaseResponseBasePagingResponseHomeInfo {
    success?: boolean;
    data?: BasePagingResponseHomeInfo;
}

export interface BasePagingResponseHomeInfo {
    content?: HomeInfo[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface HomeInfo {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    wifi?: string;
    passWifi?: string;
    ruleOthers?: string;
    timeCheckInStart?: any;
    timeCheckInEnd?: any;
    timeCheckOut?: any;
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
