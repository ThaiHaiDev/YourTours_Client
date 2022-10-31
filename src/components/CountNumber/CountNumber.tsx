import { useState } from 'react';

import './CountNumber.scss';

const CountNumber = (props: any) => {
    const [counter, setCounter] = useState<number>(0);

    const handleIncrease = () => {
        setCounter((preState) => preState + 1); // Set state Callback
        
        if (!props.setData.some((person: any) => person.categoryId === props.idRoom)) {
            props.setData.push({
                categoryId: props.idRoom,
                number: counter + 1,
            });
        } else {
            for (const obj of props.setData) {
                if (obj.categoryId === props.idRoom) {
                    obj.number = counter + 1;
                    break;
                }
            }
        }

        
    };

    const handleReducer = () => {
        setCounter((preState) => preState - 1); // Set state Callback

        if (!props.setData.some((person: any) => person.categoryId === props.idRoom)) {
            props.setData.push({
                categoryId: props.idRoom,
                number: counter - 1,
            });
        } else {
            for (const obj of props.setData) {
                if (obj.categoryId === props.idRoom) {
                    obj.number = counter - 1;
                    break;
                }
            }
        }


    };
    return (
        <div className="count-number">
            {counter === 0 ? (
                <button className="btn-notallow">-</button>
            ) : (
                <button onClick={handleReducer} className="btn reducer">
                    -
                </button>
            )}
            <h1>{counter}</h1>
            <button onClick={handleIncrease} className="btn increase">
                +
            </button>
        </div>
    );
};

export default CountNumber;
