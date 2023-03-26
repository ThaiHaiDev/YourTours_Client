import { BookingGuestDetailDetail, BookingSurchargeDetailDetail } from './booking';

export interface BaseResponseBasePagingResponseBookHomeInfo {
    success?: boolean;
    data?: BasePagingResponseBookHomeInfo;
}

export interface BasePagingResponseBookHomeInfo {
    content?: BookHomeInfo[];
    /** @format int32 */
    pageNumber?: number;
    /** @format int32 */
    pageSize?: number;
    /** @format int64 */
    totalElements?: number;
}

export interface BookHomeInfo {
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
}

export interface UpdateStatusBookingRequest {
    /** @format uuid */
    bookingId: string;
}
