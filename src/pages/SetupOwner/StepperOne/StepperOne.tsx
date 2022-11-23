import SelectedLocate from './SelectedLocate';
import './StepperOne.scss';

interface StepperOneData {
    setDataStep1: (value: string) => void;
}

const StepperOne = (props: StepperOneData) => {
    return (
        <div className="step-one">
            <div className="row">
                <div className="col l-6 m-6">
                    <img
                        src="https://pixabay.com/get/ge15732d905b02fd9b46a66f2667de4893ff3b86de5356d579469c6daff132585e15d1fe10236a59a52562d51c7f7c77dd4d37be78ae721d52f3742fcbf368a24430f43c79f2dacb0fd481cef6e4b8ce0_640.png"
                        alt=""
                        className='image-step1'
                    />
                    <h1>Chỗ ở của bạn nằm ở đâu?</h1>
                </div>
                <div className="col l-6 m-6">
                    <SelectedLocate setValueStepOne={props.setDataStep1} />
                </div>
            </div>
        </div>
    );
};

export default StepperOne;
