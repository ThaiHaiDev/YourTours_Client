import { useEffect, useState } from 'react';
import amenityCategoryApi from '../../../services/amenityCategoryApi';
import { ConvenientOptionShow } from '../../../share/models/convenient';
import SelectedMultiple from './SelectedMultiple';
import './StepperThree.scss';

interface StepperThreeData {
    setDataStep3: (value: ConvenientOptionShow[]) => void;
}

const StepperThree = (props: StepperThreeData) => {
    const [data, setData] = useState<any>();

    useEffect(() => {
        amenityCategoryApi.getAmenityCategories().then((data) => {
            setData(data.data.content);
        });
    }, []);

    return (
        <div className="step-three">
            <div className="row">
                <div className="col l-6 m-6">
                    <img
                        src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/Gif_Pro/Asset-5.png"
                        alt=""
                        className="image-step3"
                    />
                    <h1>Cho khách biết chỗ ở của bạn có những gì?</h1>
                </div>
                <div className="col l-6 m-6">
                    <SelectedMultiple dataList={data} setDataStep3={props.setDataStep3} />
                </div>
            </div>
        </div>
    );
};

export default StepperThree;
