export interface BaseResponseAmenityCategoryHomeDetail {
    success?: boolean;
    data?: BaseResponseAmenityCategoriesInfo;
}

export interface BaseResponseAmenityCategoriesInfo {
    content?: AmenityCategoriesModel[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface AmenityCategoriesModel {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    status?: 'ACTIVE' | 'LOCK';
    isDefault?: boolean;
    childAmenities?: AmenityOfHomeModel[];
}

export interface AmenityOfHomeModel {
    name?: string;
    description?: string;
    status?: 'ACTIVE' | 'LOCK';
    isHave?: boolean;
    /** @format uuid */
    amenityId?: string;
    /** @format uuid */
    homeId?: string;
}

export interface FactoryUpdateRequestUUIDAmenityCategoryDetail {
    /** @format uuid */
    id: string;
    data: AmenityOfHomeModel;
}

export interface BaseResponseBasePagingResponseAmenityCategoryHomeDetail {
    success?: boolean;
    data?: BasePagingResponseAmenityCategoryHomeDetail;
}

export interface BasePagingResponseAmenityCategoryHomeDetail {
    content?: AmenityOfHomeModel[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface FactoryCreateRequestUUIDAmenityOfHomeDetail {
    /** @format uuid */
    id?: string;
    isHave?: any;
    /** @format uuid */
    amenityId: string;
    /** @format uuid */
    homeId?: string;
}

export interface BaseResponseAmenityOfHomeDetail {
    success?: boolean;
    data?: AmenityOfHomeDetail;
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
