export interface FactoryCreateRequestUUIDBookHomeDetail {
    /** @format uuid */
    id?: string;
    /** @format date */
    dateStart: string;
    /** @format date */
    dateEnd: string;
    phoneNumber?: string;
    email?: string;
    /** @format double */
    cost?: number;
    paymentMethod?: any;
    visaAccount?: string;
    /** @format uuid */
    homeId: string;
    /** @format uuid */
    userId?: string;
    status?: any;
    homeName?: string;
    customerName?: string;
    thumbnail?: string;
    owner?: string;
    /** @format double */
    totalCost?: number;
    /** @format int32 */
    numberOfGuests?: number;
    homeAddressDetail?: string;
    homeProvinceCode?: string;
    /** @format double */
    percent?: number;
    surcharges?: BookingSurchargeDetailDetail[];
    guests?: BookingGuestDetailDetail[];
    /** @format double */
    costOfHost?: number;
    /** @format double */
    costOfAdmin?: number;
    refundPolicy?: 'BEFORE_ONE_DAY' | 'NO_REFUND' | 'BEFORE_SEVEN_DAYS';
    /** @format double */
    moneyPayed?: number;
    ownerName?: string;
    /** @format double */
    baseCost?: number;
    createdDate?: string;
    lastModifiedDate?: string;
    /** @format double */
    surchargeCost?: number;
    userName?: string;
}

export interface BookingSurchargeDetailDetail {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    surchargeId?: string;
    /** @format uuid */
    booking?: string;
    /** @format double */
    costOfSurcharge?: number;
}

export interface BookingGuestDetailDetail {
    /** @format uuid */
    id?: string;
    guestCategory?: any;
    /** @format int32 */
    number?: number;
    /** @format uuid */
    booking?: string;
}

export interface BaseResponseBookHomeDetail {
    success?: boolean;
    data?: BookHomeDetail;
}

export interface BookHomeDetail {
    /** @format uuid */
    id?: string;
    /** @format date */
    dateStart: string;
    /** @format date */
    dateEnd: string;
    phoneNumber?: string;
    email?: string;
    /** @format double */
    cost?: number;
    paymentMethod?: 'PAY_IN_FULL' | 'PAY_50_PERCENT';
    visaAccount?: string;
    /** @format uuid */
    homeId: string;
    /** @format uuid */
    userId?: string;
    status?: 'WAITING' | 'CHECK_IN' | 'CHECK_OUT' | 'CANCELED';
    homeName?: string;
    customerName?: string;
    thumbnail?: string;
    owner?: string;
    /** @format double */
    totalCost?: number;
    /** @format int32 */
    numberOfGuests?: number;
    homeAddressDetail?: string;
    homeProvinceCode?: string;
    /** @format double */
    percent?: number;
    surcharges?: BookingSurchargeDetailDetail[];
    guests?: BookingGuestDetailDetail[];
    /** @format double */
    costOfHost?: number;
    /** @format double */
    costOfAdmin?: number;
    refundPolicy?: 'BEFORE_ONE_DAY' | 'NO_REFUND' | 'BEFORE_SEVEN_DAYS';
    /** @format double */
    moneyPayed?: number;
    ownerName?: string;
    /** @format double */
    baseCost?: number;
    createdDate?: string;
    lastModifiedDate?: string;
    /** @format double */
    surchargeCost?: number;
    userName?: string;
}

export interface BaseResponseBasePagingResponseBookHistory {
    success?: boolean;
    data?: BasePagingResponseBookHomeInfo;
}

export interface BasePagingResponseBookHomeInfo {
    content?: BookHomeDetail[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface UpdateStatusBookingRequest {
    /** @format uuid */
    bookingId: string;
}

export interface BaseResponseBasePagingResponseBookHistoryOfHost {
    success?: boolean;
    data?: BasePagingResponseBookHomeInfo;
}

export interface RequestCheckBooking {
    dateStart?: string;
    dateEnd?: string;
    homeId?: string;
    guests?: string;
}
