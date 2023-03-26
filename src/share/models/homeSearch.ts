export interface ResponseHomeInfoSearch {
    success?: boolean;
    data?: BasePagingResponseHomeInfo;
}
export interface BasePagingResponseHomeInfo {
    content?: HomeInfoSearch[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface HomeInfoSearch {
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
    roomsImportant?: any;
    /** @format int32 */
    numberOfBed?: number;
    isFavorite?: boolean;
    provinceName?: string;
    imagesOfHome: any;
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
