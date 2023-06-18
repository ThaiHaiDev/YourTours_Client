export interface BaseResponseBasePagingResponseSurchargeHomeCategoryInfo {
    success?: boolean;
    data?: BasePagingResponseSurchargeHomeCategoryInfo;
}

export interface BasePagingResponseSurchargeHomeCategoryInfo {
    content?: SurchargeHomeCategoryInfo[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface SurchargeHomeCategoryInfo {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    status?: 'ACTIVE' | 'LOCK';
}

export interface FactoryCreateRequestUUIDSurchargeHomeCategoryDetail {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    status?: 'ACTIVE' | 'LOCK';
}

export interface BaseResponseSurchargeHomeCategoryDetail {
    success?: boolean;
    data?: SurchargeHomeCategoryDetail;
}

export interface SurchargeHomeCategoryDetail {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    status?: 'ACTIVE' | 'LOCK';
}

export interface FactoryUpdateRequestUUIDSurchargeHomeCategoryDetail {
    /** @format uuid */
    id: string;
    data: SurchargeHomeCategoryDetail;
}
