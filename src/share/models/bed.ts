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

export interface FactoryCreateRequestUUIDBedCategoryDetail {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    status?: 'ACTIVE' | 'LOCK';
    /** @format int32 */
    numberOfRoom?: number;
}

export interface BaseResponseBedCategoryDetail {
    success?: boolean;
    data?: BedCategoryInfo;
}
