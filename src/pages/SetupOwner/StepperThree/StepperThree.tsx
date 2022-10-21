import SelectedMultiple from './SelectedMultiple';
import './StepperThree.scss';

const StepperThree = () => {
    return (
        <div className="step-three">
            <div className='row'>
                <div className='col l-6 m-6'>
                    <h1>Cho khách biết chỗ ở của bạn có những gì?</h1>
                </div>
                <div className='col l-6 m-6'>
                    <SelectedMultiple />
                </div>
            </div>
        </div>
    );
};

export default StepperThree;
