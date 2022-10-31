import { useEffect, useState } from 'react';
import CountNumber from '../../../components/CountNumber/CountNumber';
import CountNumberGuest from '../../../components/CountNumber/CountNumberGuest';
import roomCategoryApi from '../../../services/roomCategoryApi';
import { RoomOfHomeCreateRequest } from '../../../share/models/roomHome';
import './StepperTwo.scss';

interface StepperTwoData {
    setDataStep2?: RoomOfHomeCreateRequest[],
    setCountGuest?: (value:number) => void
}

const StepperTwo = (props: StepperTwoData) => {
    const [data, setData] = useState<any>();
    useEffect(() => {
        roomCategoryApi.getRoomCategory().then((data) => {
            setData(data.data.content);
        });
    }, []);

    return (
        <div className="step-two">
            <div className="row">
                <div className="col l-6 m-6">
                    <h1>Bạn muốn chào đón bao nhiêu khách?</h1>
                </div>
                <div className="col l-6 m-6">
                    <div className="info-count__room">
                        {data?.map((room: any, index: number) => (
                            <div key={room.id}>
                                {index === 0 && (
                                    <div className="count tenant">
                                        <p>Khách</p>
                                        <CountNumberGuest setCountGuest={props.setCountGuest} />
                                    </div>
                                )}
                                <div className="count bed" key={room.id}>
                                    <p>{room.name}</p>
                                    <CountNumber idRoom={room.id} setData={props.setDataStep2} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepperTwo;
