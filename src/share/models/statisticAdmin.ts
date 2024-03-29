export interface numberStatisticResponse {
    totalNumberOfGuests: number;
    totalNumberOfOwner: number;
    totalNumberOfBooking: number;
    totalNumberOfRevenue: number;
    revenueStatistics: revenueStatisticsResponse[];
}

export interface revenueStatisticsResponse {
    month: string;
    amount: number;
}

export interface numberStatisData {
    icon: string;
    count: number;
    title: string;
}

export interface guestsStatisData {
    userId?: string;
    fullName: string;
    email: string;
    numberOfBooking: number;
    totalCost: string;
    rate: string;
}

export interface ownersStatisData {
    userId?: string;
    email: string;
    fullName: string;
    numberOfBooking: number;
    totalCost: string;
    numberOfHomes: number;
}

export interface homesStatisData {
    homeId?: string;
    homeName?: string;
    numberOfView?: number;
    numberOfBooking?: number;
    revenue?: string;
    numberOfEvaluate?: number;
    averageRate?: number;
    reservationRate?: number;
    ownerName?: string;
}

export interface transactionStatisData {
    homeId?: string;
    homeName?: string;
    customerName: string;
    ownerName?: string;
    totalCost?: any;
    adminCost?: any;
    createdDate: string;
}

export interface BaseResponseOwnerStatistic {
    success?: boolean;
    data?: OwnerStatistic;
}

export interface OwnerStatistic {
    /** @format int64 */
    totalNumberOfBooking?: number;
    /** @format int64 */
    totalNumberOfBookingFinish?: number;
    homeStatistic?: HomeBookingStatistic[];
    revenueStatistics?: RevenueStatistic[];
}

export interface HomeBookingStatistic {
    homeName?: string;
    /** @format int64 */
    numberOfBooking?: number;
    /** @format uuid */
    homeId?: string;
}

export interface RevenueStatistic {
    month?: string;
    /** @format double */
    amount?: number;
}
