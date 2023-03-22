export interface BaseResponseListProvinceModel {
    success?: boolean;
    data?: ProvinceModel[];
}

export interface ProvinceModel {
    /** @format int64 */
    id?: number;
    codeName?: string;
    name?: string;
    divisionType?: string;
    thumbnail?: string;
}

export interface ProvincePopularModel {
    thumbnail?: string;
    codeName?: string;
    /** @format int64 */
    numberBooking?: number;
    name?: string;
}

export interface BaseResponseBasePagingResponseProvincePopular {
    success?: boolean;
    data?: BasePagingResponseProvincePopular;
}

export interface BasePagingResponseProvincePopular {
    content?: ProvincePopularModel[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}
