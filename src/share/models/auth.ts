// Sign in
export interface LoginRequest {
    email: string;
    password: string;
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

export interface LoginErrorResponse {
    message: string;
    errors: {
        user?: string;
    };
}

// Sign up
export interface RegisterRequest {
    /** @pattern (([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})) */
    email: string;
    fullName: string;
    password: string;
}

export interface BaseResponseRegisterResponse {
    success?: boolean;
    data?: RegisterResponse;
}

export interface RegisterResponse {
    success?: boolean;
}

export interface RegisterErrorResponse {
    message: string;
    errors: {
        user?: string;
    };
}

// OTP
export interface OTPErrorResponse {
    message: string;
    errors: {
        user?: string;
    };
}

// Re Send OTP
export interface ReSendOTPRequest {
    email: string;
    otpType: string;
}

// Forgot Password
export interface ForgotPasswordRequest {
    email: string;
}

export interface ForgotPasswordErrorResponse {
    message: string;
    errors: {
        user?: string;
    };
}

export interface OTPForgotPasswordRequest {
    otp: string,
    newPassword: string,
    confirmPassword: string
}
