import { ChangeEvent } from 'react';
import SelectedLocate from './SelectedLocate';
import './StepperOne.scss';

interface StepperOneData {
    setDataStep1: (value: string) => void;
    handleSetAddressDetail: (value: string) => void;
}

const StepperOne = (props: StepperOneData) => {

    const handleChangeAddrees = (event: ChangeEvent<HTMLInputElement>) => {
        if (props?.handleSetAddressDetail) {
            props?.handleSetAddressDetail(event.currentTarget?.value)
        }
    };

    return (
        <div className="step-one">
            <div className="row">
                <div className="col l-6 m-6 c-6">
                    <img
                        src="https://pixabay.com/get/geba6cdedcfc910d7b2b236021f512aa79602900e644dbfe8d64b8c23a52c7eed7b9482b3d661e2fdb506866483f810550ae82440ede4bc628b1876860e34273563be7effcb928586e757bf01e2d573e4_640.png"
                        alt=""
                        className="image-step1"
                    />
                    <h1>Chỗ ở của bạn nằm ở đâu?</h1>
                </div>
                <div className="col l-6 m-6 c-6">
                    <SelectedLocate setValueStepOne={props.setDataStep1} />
                    <input type="text" className="input-address-step1" onChange={handleChangeAddrees} required />
                    <p className="span-address-step1">Vui lòng điền địa chỉ chi tiết</p>
                </div>
            </div>
        </div>
    );
};

export default StepperOne;
