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

import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import setupOwnerSlice from '../../pages/SetupOwner/setupOwnerSlice';
import { RootState } from '../../redux/store';
import homeDetailApi from '../../services/homeDetailApi';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';
import { RoomOfHomeCreateRequest } from '../../share/models/roomHome';
import { ConvenientOptionShow } from '../../share/models/convenient';
import { ImageHomeDetail } from '../../share/models/imageList';

const steps = ['Setup vị trí', 'Setup phòng', 'Setup tiện ích', 'Setup ảnh', 'Mô tả phòng', 'Chi tiết phòng'];

export default function StepperComponent() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const dispatch = useDispatch();

    const setupRoomHost = useSelector((state: RootState) => state.settingowner.detailRoom);

    const { enqueueSnackbar } = useSnackbar();

    const [load, setLoad] = React.useState<boolean>(false);

    const [dataStep1, setDataStep1] = React.useState<string>('');
    const setDataStep2: RoomOfHomeCreateRequest[] = [];
    const [countGuest, setCountGuest] = React.useState<number>(0);
    const [dataStep3, setDataStep3] = React.useState<ConvenientOptionShow[]>([]);
    const [dataStep4, setDataStep4] = React.useState<File[]>([]);
    const setDataStep4URL: ImageHomeDetail[] = [];

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
            dispatch(setupOwnerSlice.actions.addProvinceIdRoom(dataStep1));
        } else if (activeStep === 1) {
            if (setDataStep2.length > 0) {
                dispatch(setupOwnerSlice.actions.addroomsOfHomeRoom(setDataStep2));
            }
            if (countGuest !== 0) {
                dispatch(setupOwnerSlice.actions.addNumberOfGuestsRoom(countGuest));
            }
        } else if (activeStep === 2) {
            const dataIdList: any = [];
            for (var i = 0; i < dataStep3.length; i++) {
                dataIdList.push({ id: dataStep3[i].value });
            }
            dispatch(setupOwnerSlice.actions.addamenitiesOfHomeRoom(dataIdList));
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

    const handleUpload = async () => {
        setLoad(true);
        for (var i = 0; i < dataStep4.length; i++) {
            const formData = new FormData();
            await formData.append('file', dataStep4[i]);
            const dataUrlImage = await imageRoomApi.uploadImage(formData);
            await setDataStep4URL.push({ path: dataUrlImage.data.previewUrl });
        }
        dispatch(setupOwnerSlice.actions.addimagesOfHomeRoom(setDataStep4URL));
        setLoad(false);
    };

    const handleReset = () => {
        // console.log('Data gửi xuông: ',setupRoomHost)
        homeDetailApi
            .createHomeDetailByHost(setupRoomHost)
            .then((dataResponse: any) => {
                enqueueSnackbar('Đăng kí thành công', { variant: 'success' });
                navigate('/congratulation')
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
        // console.log(setupRoomHost)
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
                        <Step key={label} {...stepProps} sx={{ fontSize: '30px' }}>
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
                            return <StepperOne setDataStep1={setDataStep1} />;
                        } else if (activeStep === 1) {
                            return <StepperTwo setDataStep2={setDataStep2} setCountGuest={setCountGuest} />;
                        } else if (activeStep === 2) {
                            return <StepperThree setDataStep3={setDataStep3} />;
                        } else if (activeStep === 3) {
                            return <StepperFour setDataStep4={setDataStep4} />;
                        } else if (activeStep === 4) {
                            return <StepperFive />;
                        } else if (activeStep === 5) {
                            return <StepperSix />;
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
                            // <Button color="inherit" onClick={handleUpload} sx={{ mr: 1 }}>
                            //     Tải ảnh lên
                            // </Button>
                            <LoadingButton
                                variant="contained"
                                loading={load}
                                onClick={handleUpload}
                                style={{ marginRight: '10px', textAlign: 'center' }}
                            >
                                Tải ảnh lên
                            </LoadingButton>
                        )}
                        <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
