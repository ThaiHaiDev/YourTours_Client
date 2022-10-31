import { useEffect, useState } from 'react';
import amenityCategoryApi from '../../../services/amenityCategoryApi';
import SelectedMultiple from './SelectedMultiple';
import './StepperThree.scss';

const StepperThree = (props : any) => {
    const [data, setData] = useState<any>()
    useEffect(() => {
        amenityCategoryApi.getAmenityCategories().then((data) => {
            setData(data.data.content);
        });
    }, [])

    return (
        <div className="step-three">
            <div className='row'>
                <div className='col l-6 m-6'>
                    <h1>Cho khách biết chỗ ở của bạn có những gì?</h1>
                </div>
                <div className='col l-6 m-6'>
                    <SelectedMultiple dataList={data} setDataStep3={props.setDataStep3} />
                </div>
            </div>
        </div>
    );
};

export default StepperThree;
