export interface LoginRequest {
    email: string,
    password: string
}

export interface BaseResponseLoginResponse {
    success?: boolean;
    data?: LoginResponse;
}

export interface LoginResponse {
    access_token?: string;
    /** @format int64 */
    expires_in?: number;
    /** @format int64 */
    refresh_expires_in?: number;
    refresh_token?: string;
    token_type?: string;
    id_token?: string;
    /** @format int32 */
    'not-before-policy'?: number;
    session_state?: string;
    scope?: string;
    error?: string;
    error_description?: string;
    error_uri?: string;
    isBlocked?: boolean;
}
