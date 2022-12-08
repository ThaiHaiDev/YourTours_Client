import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import SelectedLocate from './SelectedLocate';
import './StepperOne.scss';

interface StepperOneData {
    setDataStep1: (value: string) => void;
    handleSetAddressDetail: (value: string) => void;
}

const StepperOne = (props: StepperOneData) => {
    const handleChangeAddrees = (event: ChangeEvent<HTMLInputElement>) => {
        if (props?.handleSetAddressDetail) {
            props?.handleSetAddressDetail(event.currentTarget?.value);
        }
    };

    return (
        <div className="step-one">
            <div className="row">
                <div className="col l-6 m-6 c-6">
                    <div className="require-step1">
                        <img
                            src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/Gif_Pro/web-gd6fe21e8b_640.png"
                            alt=""
                            className="image-step1"
                        />
                        <h1>Chỗ ở của bạn nằm ở đâu?</h1>
                    </div>
                </div>
                <div className="col l-6 m-6 c-6">
                    <SelectedLocate setValueStepOne={props.setDataStep1} />
                    <input type="text" className="input-address-step1" onChange={handleChangeAddrees} required />
                    <p className="span-address-step1">Vui lòng điền địa chỉ chi tiết</p>
                    <Link to='/' className='btn-out'>Thoát</Link>
                </div>
            </div>
        </div>
    );
};

export default StepperOne;
