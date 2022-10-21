import CountNumber from '../../../components/CountNumber/CountNumber';
import './StepperTwo.scss';

const StepperTwo = () => {
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

                        <div className="count bed">
                            <p>Giường</p>
                            <CountNumber />
                        </div>

                        <div className="count bedroom">
                            <p>Phòng ngủ</p>
                            <CountNumber />
                        </div>

                        <div className="count  bathroom">
                            <p>Phòng tắm</p>
                            <CountNumber />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepperTwo;
