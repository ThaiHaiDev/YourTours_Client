export interface FactoryUpdateRequestUUIDUpdateBaseProfileHomeModel {
    /** @format uuid */
    id?: string;
    data: UpdateBaseProfileHomeModel;
}
export interface UpdateBaseProfileHomeModel {
    /** @format uuid */
    name?: string;
    description?: string;
    guide?: string;
    refundPolicy?: any;
}

export interface BaseResponseHostHomeDetailModel {
    success?: boolean;
    data?: BaseResponseHomeInfo;
}

export interface BaseResponseHomeInfo {
    content?: HostHomeDetailModel[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface HostHomeDetailModel {
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
    roomsOfHome: RoomOfHomeCreateModel[];
    amenitiesOfHome: AmenityOfHomeDetail[];
    numberOfRooms?: NumberOfRoomsModel[];
    surcharges?: SurchargeHomeViewModel[];
    discounts?: DiscountOfHomeViewModel[];
    amenities?: AmenityInfo[];
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

export interface SurchargeHomeViewModel {
    /** @format uuid */
    surchargeCategoryId?: string;
    surchargeCategoryName?: string;
    /** @format double */
    cost?: number;
    description?: string;
}

export interface DiscountOfHomeViewModel {
    category?: DiscountHomeCategoryDetail;
    config?: DiscountOfHomeDetail;
}

export interface DiscountHomeCategoryDetail {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    type: 'BY_DATE' | 'BY_ADVANCE';
    /** @format int32 */
    numDateDefault?: number;
    status?: 'ACTIVE' | 'LOCK';
}

export interface DiscountOfHomeDetail {
    /** @format uuid */
    id?: string;
    /**
     * @format double
     * @min 0
     */
    percent?: number;
    /** @format int32 */
    numberDateStay?: number;
    /** @format int32 */
    numberMonthAdvance?: number;
    /** @format uuid */
    homeId: string;
    /** @format uuid */
    categoryId: string;
}

export interface FactoryUpdateRequestUUIDUpdateAddressHomeModel {
    /** @format uuid */
    id?: string;
    data: UpdateAddressHomeModel;
}

export interface UpdateAddressHomeModel {
    /** @format uuid */
    id?: string;
    provinceCode?: string;
    address?: string;
}

export interface FactoryUpdateRequestUUIDUpdateBasePriceHomeModel {
    /** @format uuid */
    id?: string;
    data: UpdateBasePriceHomeModel;
}

export interface UpdateBasePriceHomeModel {
    /** @format uuid */
    id?: string;
    /**
     * @format double
     * @min 0
     */
    costPerNightDefault: number;
}
