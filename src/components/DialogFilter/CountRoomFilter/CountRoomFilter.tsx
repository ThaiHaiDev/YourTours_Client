import { useState } from 'react';
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
    const [idActive, setIdActive] = useState<number>(0);

    const handleSetActive = (id: number) => {
        setIdActive(id);
    };

    return (
        <div className="count-room__filter">
            <p className="title-count__filter">Phòng ngủ</p>
            <div className="list-number__choose">
                <p className={idActive === 0 ? 'item-first active' : 'item-first'} onClick={() => setIdActive(0)}>Bất kì</p>
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
