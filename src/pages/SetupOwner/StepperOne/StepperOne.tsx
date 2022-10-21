import { useState } from 'react';
import SelectedLocate from './SelectedLocate';
import './StepperOne.scss'

const StepperOne = () => {
    const [valueStepOne, setValueStepOne]= useState<any>()

    console.log(valueStepOne)
    return (
        <div className="step-one">
            <div className='row'>
                <div className='col l-6 m-6'>
                    <h1>Chỗ ở của bạn nằm ở đâu?</h1>
                </div>
                <div className='col l-6 m-6'>
                    <SelectedLocate setValueStepOne={setValueStepOne} />
                </div>
            </div>
        </div>
    );
};

export default StepperOne;
