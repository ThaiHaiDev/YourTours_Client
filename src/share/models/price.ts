export interface BaseResponsePriceOfHomeWithMonthResponse {
    success?: boolean;
    data?: PriceOfHomeWithMonthResponse;
}

export interface PriceOfHomeWithMonthResponse {
    /** @format uuid */
    homeId?: string;
    /** @format int32 */
    month?: number;
    prices?: PriceOfHomeDetail[];
}

export interface PriceOfHomeDetail {
    /** @format uuid */
    id?: string;
    /** @format date */
    date: string;
    /**
     * @format double
     * @min 0
     */
    price: number;
    /** @format uuid */
    homeId?: string;
    isEspecially?: boolean;
    especially?: boolean;
}

export interface PriceOfHomeCreateRequest {
    /** @format uuid */
    homeId: string;
    /** @format date */
    dateStart: string;
    /** @format date */
    dateEnd: string;
    /**
     * @format double
     * @min 0
     */
    price: number;
}

export interface BaseResponsePriceOfHomeResponse {
    success?: boolean;
    data?: PriceOfHomeResponse;
}

export interface PriceOfHomeResponse {
    /** @format double */
    totalCost?: number;
    /** @format double */
    percent?: number;
    discountName?: string;
    detail?: ArrayPriceAndDayModels[];
    /** @format double */
    totalCostWithSurcharge?: number;
    /** @format double */
    totalCostWithNoDiscount?: any;
    /** @format double */
    surchargeCost?: number;
}

export interface ArrayPriceAndDayModels {
    /** @format double */
    cost?: number;
    /** @format date */
    day?: string;
    especially?: boolean;
}
