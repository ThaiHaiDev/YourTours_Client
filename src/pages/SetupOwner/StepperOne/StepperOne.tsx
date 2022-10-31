import SelectedLocate from './SelectedLocate';
import './StepperOne.scss';

interface StepperOneData {
    setDataStep1: (value : string) => void
}

const StepperOne = (props: StepperOneData) => {
    return (
        <div className="step-one">
            <div className='row'>
                <div className='col l-6 m-6'>
                    <h1>Chỗ ở của bạn nằm ở đâu?</h1>
                </div>
                <div className='col l-6 m-6'>
                    <SelectedLocate setValueStepOne={props.setDataStep1} />
                </div>
            </div>
        </div>
    );
};

export default StepperOne;
