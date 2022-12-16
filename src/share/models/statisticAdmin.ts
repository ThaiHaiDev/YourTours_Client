export interface numberStatisticResponse {
    totalNumberOfGuests: number,
    totalNumberOfOwner: number,
    totalNumberOfBooking: number,
    totalNumberOfRevenue: number,
    revenueStatistics: revenueStatisticsResponse[]
}

export interface revenueStatisticsResponse {
    month: string,
    amount: number
}

export interface numberStatisData {
    icon: string,
    count: number,
    title: string
}

export interface guestsStatisData {
    userId?: string,
    fullName: string,
    numberOfBooking: number,
    totalCost: string
}

export interface ownersStatisData {
    userId?: string,
    fullName: string,
    numberOfBooking: number,
    totalCost: string,
    numberOfHomes: number
}