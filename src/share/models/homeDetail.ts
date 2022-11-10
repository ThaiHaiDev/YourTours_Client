import { ConvenientOfHomeDetailRequest } from './convenient';
import { ImageHomeDetailRequest } from './imageList';
import { RoomOfHomeCreateRequest } from './roomHome';

export interface CreateHomeDetailResquest {
    /** @format uuid */
    id?: string;
    name: string;
    description?: string;
    wifi?: string;
    passWifi?: string;
    ruleOthers?: string;
    timeCheckInStart?: TimeRanges;
    timeCheckInEnd?: TimeRanges;
    timeCheckOut?: TimeRanges;
    guide?: string;
    /**
     * @format double
     * @min 0
     */
    costPerNightDefault?: number;
    refundPolicy?: 'BEFORE_ONE_DAY';
    status?: 'ACTIVE' | 'LOCK';
    /**
     * @format int32
     * @min 0
     */
    numberOfGuests?: number;
    imagesOfHome?: ImageHomeDetailRequest[];
    roomsOfHome?: RoomOfHomeCreateRequest[];
    amenitiesOfHome?: ConvenientOfHomeDetailRequest[];
}
