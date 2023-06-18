export interface BaseResponseAmenityDetail {
    success?: boolean;
    data?: BaseResponseAmenityDetailInfo;
}

export interface BaseResponseAmenityDetailInfo {
    content?: AmenityDetail[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface AmenityDetail {
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

export interface RequestAmenity {
    id?: string;
    name?: string;
    categoryId?: string;
    description?: string;
    icon: string;
}

export interface BaseResponseAmenityDetailAdd {
    success?: boolean;
    data?: AmenityDetail;
}

export interface AmenityDetail {
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
