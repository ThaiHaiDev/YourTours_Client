export interface ConvenientOfHomeDetailRequest {
    /** @format uuid */
    id?: string;
    isHave?: boolean;
    /** @format uuid */
    amenityId?: string;
    /** @format uuid */
    homeId?: string;
}

export interface ConvenientOptionShow {
    value: string;
    label?: string;
}
