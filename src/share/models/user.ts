export interface UserDetail {
    /** @format uuid */
    id?: string;
    fullName: string;
    /** @pattern (([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})) */
    email: string;
    phoneNumber?: string;
    /** @format date */
    dateOfBirth?: string;
    gender?: 'MALE' | 'FEMALE' | 'OTHER';
    address?: string;
    avatar?: string;
    status?: 'ACTIVE' | 'LOCK';
    role?: 'USER' | 'ADMIN' | 'COMPANY';
    isOwner?: boolean;
    owner?: boolean;
}

export interface BaseResponseUserDetail {
    success?: boolean;
    data?: UserDetail;
}

export interface BaseResponseBasePagingResponseUserInfo {
    success?: boolean;
    data?: BasePagingResponseUserInfo;
}

export interface BasePagingResponseUserInfo {
    content?: UserDetail[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface BaseResponseVerifyOtpResponse {
    success?: boolean;
    data?: VerifyOtpResponse;
}

export interface VerifyOtpResponse {
    success?: boolean;
}

export interface VerifyOtpRequest {
    otp: string;
}
