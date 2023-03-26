export interface BaseResponseSuccessResponse {
    success?: boolean;
    data?: SuccessResponse;
}

export interface SuccessResponse {
    success?: boolean;
}

export interface BaseResponseFactoryDeleteResponse {
    success?: boolean;
    data?: FactoryDeleteResponse;
}

export interface FactoryDeleteResponse {
    success?: boolean;
}
