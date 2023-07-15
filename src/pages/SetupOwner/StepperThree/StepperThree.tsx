import { useEffect, useState } from 'react';
import amenityCategoryApi from '../../../services/amenityCategoryApi';
import { AmenityCategoriesModel } from '../../../share/models/amenityCategories';
import { ConvenientOptionShow } from '../../../share/models/convenient';
import SelectedMultiple from './SelectedMultiple';
import './StepperThree.scss';
import { t } from 'i18next';
import ConfirmClose from '../../../components/ConfirmClose/ConfirmClose';

interface StepperThreeData {
    setDataStep3: (value: ConvenientOptionShow[]) => void;
}

const StepperThree = (props: StepperThreeData) => {
    const [data, setData] = useState<AmenityCategoriesModel[]>();

    useEffect(() => {
        amenityCategoryApi.getAmenityCategories().then((dataResponse) => {
            if (dataResponse?.data?.content) {
                setData(dataResponse.data.content);
            }
        });
    }, []);

    return (
        <div className="step-three">
            <div className="row">
                <div className="col l-6 m-6">
                    <div className="require-step3">
                        <img
                            src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/Gif_Pro/Asset-5.png"
                            alt=""
                            className="image-step3"
                        />
                        <h1>{t('setupOwner.content_step_three')}</h1>
                    </div>
                </div>
                <div className="col l-6 m-6">
                    <SelectedMultiple dataList={data} setDataStep3={props.setDataStep3} />
                    <ConfirmClose />
                </div>
            </div>
        </div>
    );
};

export default StepperThree;
