import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import StepperOne from '../../pages/SetupOwner/StepperOne/StepperOne';
import StepperTwo from '../../pages/SetupOwner/StepperTwo/StepperTwo';
import StepperThree from '../../pages/SetupOwner/StepperThree/StepperThree';
import StepperFour from '../../pages/SetupOwner/StepperFour/StepperFour';
import StepperFive from '../../pages/SetupOwner/StepperFive/StepperFive';
import StepperSix from '../../pages/SetupOwner/StepperSix/StepperSix';
import { useNavigate } from 'react-router-dom';
import imageRoomApi from '../../services/imageRoomApi';

const steps = ['Setup vị trí', 'Setup phòng', 'Setup tiện ích', 'Setup ảnh', 'Mô tả phòng', 'Chi tiết phòng'];

export default function StepperComponent() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const [lodding, setLoadding] = React.useState<boolean>(false)

    const [dataStep1, setDataStep1] = React.useState<string>('')
    const setDataStep2:any = []
    const [dataStep3, setDataStep3] = React.useState<any>([])
    const [dataStep4, setDataStep4] = React.useState<File[]>([])
    const setDataStep4URL:any = []

    const navigate = useNavigate();

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        if (activeStep === 0) {
            console.log('Data 1: ',dataStep1)
        }

        else if (activeStep === 1) {
            console.log('Data 2: ',setDataStep2)
        }

        else if (activeStep === 2) {
            console.log('Data 3: ',dataStep3)
        }

        else if (activeStep === 3) {
            console.log('Data 4: ',setDataStep4URL)
        }
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleUpload = async() => {
        for (var i = 0; i < dataStep4.length; i++) {
            const formData = new FormData();
            formData.append('file', dataStep4[i]);
            const dataUrlImage = await imageRoomApi.uploadImage(formData)
            setDataStep4URL.push(dataUrlImage.data.previewUrl)
        }
        
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // setSkipped((prevSkipped) => {
        //     const newSkipped = new Set(prevSkipped.values());
        //     newSkipped.add(activeStep);
        //     return newSkipped;
        // });
    };

    const handleReset = () => {
        navigate('/congratulation')
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    // if (isStepOptional(index)) {
                    //     labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    // }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps} sx={{fontSize: '30px'}}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {/* Content */}
                    {(() => {
                        if (activeStep === 0) {
                            return <StepperOne setDataStep1={setDataStep1} />
                        } else if (activeStep === 1) {
                            return <StepperTwo setDataStep2={setDataStep2} />
                        } else if (activeStep === 2){
                            return <StepperThree setDataStep3={setDataStep3} />
                        } else if (activeStep === 3){
                            return <StepperFour setDataStep4={setDataStep4} />
                        } else if (activeStep === 4){
                            return <StepperFive />
                        } else if (activeStep === 5){
                            return <StepperSix />
                        } 
                    })()}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {/* {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )} */}
                        {activeStep === 3 && (
                            <Button color="inherit" onClick={handleUpload} sx={{ mr: 1 }}>
                                Tải ảnh lên
                            </Button>
                        )}
                        <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
