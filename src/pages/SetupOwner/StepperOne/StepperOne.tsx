import { ChangeEvent } from 'react';
import SelectedLocate from './SelectedLocate';
import './StepperOne.scss';
import { t } from 'i18next';
import ConfirmClose from '../../../components/ConfirmClose/ConfirmClose';

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
                        <h1>{t('setupOwner.content_step_one')}</h1>
                    </div>
                </div>
                <div className="col l-6 m-6 c-6">
                    <SelectedLocate setValueStepOne={props.setDataStep1} />
                    <input type="text" className="input-address-step1" onChange={handleChangeAddrees} required />
                    <p className="span-address-step1">{t('contentMess.address')}</p>
                    <ConfirmClose />
                </div>
            </div>
        </div>
    );
};

export default StepperOne;
