export interface BaseResponseBasePagingResponseDiscountHomeCategoryInfo {
    success?: boolean;
    data?: BasePagingResponseDiscountHomeCategoryInfo;
}

export interface BasePagingResponseDiscountHomeCategoryInfo {
    content?: DiscountHomeCategoryInfo[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface DiscountHomeCategoryInfo {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    type: 'BY_DATE' | 'BY_ADVANCE';
    /** @format int32 */
    numDateDefault?: number;
    status?: 'ACTIVE' | 'LOCK';
}

export interface FactoryCreateRequestUUIDDiscountHomeCategoryDetail {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    type: 'BY_DATE' | 'BY_ADVANCE';
    /** @format int32 */
    numDateDefault?: number;
    status?: 'ACTIVE' | 'LOCK';
}

export interface BaseResponseDiscountHomeCategoryDetail {
    success?: boolean;
    data?: DiscountHomeCategoryDetail;
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

export interface FactoryUpdateRequestUUIDDiscountHomeCategoryDetail {
    /** @format uuid */
    id: string;
    data: DiscountHomeCategoryDetail;
}
