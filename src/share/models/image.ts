export interface BaseResponseUploadMediaResponse {
    success?: boolean;
    data?: UploadMediaResponse;
}

export interface UploadMediaResponse {
    previewUrl?: string;
    /** @format date-time */
    createDate: string;
    path: string;
}
