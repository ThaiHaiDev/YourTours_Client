import { useState } from 'react';

import './CountNumber.scss';

const CountNumberGuest = (props: any) => {
    const [counter, setCounter] = useState<number>(0);

    const handleIncrease = () => {
        setCounter((preState) => preState + 1); // Set state Callback
        if (props.setCountGuest) {
            props.setCountGuest(counter + 1);
        }
    };

    const handleReducer = () => {
        setCounter((preState) => preState - 1); // Set state Callback

        if (props.setCountGuest) {
            props.setCountGuest(counter - 1);
        }
    };
    return (
        <div className="count-number">
            {counter === 0 ? (
                <button className="btn-notallow">-</button>
            ) : (
                <button onClick={handleReducer} className="btn-reducer">
                    -
                </button>
            )}
            <h1>{counter}</h1>
            <button onClick={handleIncrease} className="btn-increase">
                +
            </button>
        </div>
    );
};

export default CountNumberGuest;
