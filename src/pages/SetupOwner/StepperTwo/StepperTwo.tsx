import { useEffect, useState } from 'react';
import CountNumber from '../../../components/CountNumber/CountNumber';
import roomCategoryApi from '../../../services/roomCategoryApi';
import './StepperTwo.scss';

const StepperTwo = (props: any) => {
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
                        <div className="count tenant">
                            <p>Khách</p>
                            <CountNumber />
                        </div>

                        {data?.map((room: any) => (
                            <div className="count bed" key={room.id}>
                                <p>{room.name}</p>
                                <CountNumber idRoom={room.id} setData={props.setDataStep2}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepperTwo;
