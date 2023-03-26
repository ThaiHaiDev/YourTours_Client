export interface BaseResponseBasePagingResponseDiscountCampaignInfo {
    success?: boolean;
    data?: BasePagingResponseDiscountCampaignInfo;
}

export interface BasePagingResponseDiscountCampaignInfo {
    content?: DiscountCampaignInfo[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface DiscountCampaignInfo {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    /**
     * @format double
     * @min 0
     */
    percent: number;
    /** @format date */
    dateStart: string;
    /** @format date */
    dateEnd: string;
    /** @format uuid */
    homeId?: string;
    codeName?: string;
    banner?: string;
}
