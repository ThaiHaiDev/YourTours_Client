import { useState } from 'react';
import { t } from 'i18next';

import './CountRoomFilter.scss';

const DataFakeCount = [
    {
        index: 1,
        number: 1,
    },
    {
        index: 2,
        number: 2,
    },
    {
        index: 3,
        number: 3,
    },
    {
        index: 4,
        number: 4,
    },
    {
        index: 5,
        number: 5,
    },
    {
        index: 6,
        number: 6,
    },
    {
        index: 7,
        number: 7,
    },
    {
        index: 8,
        number: 8,
    },
];

const CountRoomFilter = (props: any) => {
    const [idActive, setIdActive] = useState<number>(props?.dataFilterDefauld ? Number(props?.dataFilterDefauld) : 0);

    const handleSetActive = (id: number) => {
        setIdActive(id);
        if (props.handleChangeNumberOfBed) {
            props.handleChangeNumberOfBed(id);
        } else if (props.handleChangeNumberOfBedRoom) {
            props.handleChangeNumberOfBedRoom(id);
        } else if (props.handleChangeNumberOfBathRoom) {
            props.handleChangeNumberOfBathRoom(id);
        }
    };

    return (
        <div className="count-room__filter">
            <p className="title-count__filter">{props?.name}</p>
            <div className="list-number__choose">
                <p className={idActive === 0 ? 'item-first active' : 'item-first'} onClick={() => handleSetActive(0)}>
                    {t('label.any')}
                </p>
                {DataFakeCount.map((count: any) => (
                    <p
                        className={idActive === count.index ? `item-chose active` : `item-chose`}
                        key={count.index}
                        onClick={() => handleSetActive(count.index)}
                    >
                        {count.number}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CountRoomFilter;
