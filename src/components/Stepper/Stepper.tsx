import * as React from 'react';
import { AxiosError } from 'axios';
import { t } from 'i18next';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

import userSlice from '../../pages/AuthPage/userSlice';

import ConfirmOwner from '../../pages/ConfirmOwner/ConfirmOwner';
import setupOwnerSlice from '../../pages/SetupOwner/setupOwnerSlice';
import StepperFive from '../../pages/SetupOwner/StepperFive/StepperFive';
import StepperFour from '../../pages/SetupOwner/StepperFour/StepperFour';
import StepperOne from '../../pages/SetupOwner/StepperOne/StepperOne';
import StepperThree from '../../pages/SetupOwner/StepperThree/StepperThree';
import StepperTwo from '../../pages/SetupOwner/StepperTwo/StepperTwo';

import { RootState } from '../../redux/store';
import homeDetailApi from '../../services/homeDetailApi';
import imageRoomApi from '../../services/imageRoomApi';
import { ConvenientOptionShow } from '../../share/models/convenient';
import { ImageHomeDetailRequest } from '../../share/models/imageList';
import { RoomOfHomeCreateRequest } from '../../share/models/roomHome';
import LoadingMaster from '../LoadingMaster/LoadingMaster';

const steps = [
    t('setupOwner.nameStep.one'),
    t('setupOwner.nameStep.two'),
    t('setupOwner.nameStep.three'),
    t('setupOwner.nameStep.four'),
    t('setupOwner.nameStep.five'),
];

export default function StepperComponent() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const dispatch = useDispatch();

    const setupRoomHost: any = useSelector((state: RootState) => state.settingowner.detailRoom);

    const { enqueueSnackbar } = useSnackbar();

    const [load, setLoad] = React.useState<boolean>(false);

    const [dataStep1, setDataStep1] = React.useState<string>('');
    const [addressDetail, setAddressDetail] = React.useState<string>('');

    const setDataStep2: RoomOfHomeCreateRequest[] = [];
    const [countGuest, setCountGuest] = React.useState<number>(0);

    const [dataStep3, setDataStep3] = React.useState<ConvenientOptionShow[]>([]);

    const [dataStep4, setDataStep4] = React.useState<File[]>([]);

    const setDataStep4URL: ImageHomeDetailRequest[] = [];
    const [checkImage, setCheckImage] = React.useState<boolean>(false);

    const [dataStep5, setDataStep5] = React.useState<any>('');

    const navigate = useNavigate();

    const handleSetAddressDetail = (value: string) => {
        setAddressDetail(value);
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
            if (addressDetail !== '' && dataStep1 !== '') {
                dispatch(setupOwnerSlice.actions.addProvinceIdRoom(dataStep1));
                dispatch(setupOwnerSlice.actions.addAddressDetailRoom(addressDetail));
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                enqueueSnackbar(t('message.addressEmpty'), {
                    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                    variant: 'warning',
                });
            }
        } else if (activeStep === 1) {
            if (setDataStep2.length > 0) {
                dispatch(setupOwnerSlice.actions.addroomsOfHomeRoom(setDataStep2));
            }
            if (countGuest !== 0) {
                dispatch(setupOwnerSlice.actions.addNumberOfGuestsRoom(countGuest));
            }
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else if (activeStep === 2) {
            const dataIdList: any = [];
            for (var i = 0; i < dataStep3.length; i++) {
                dataIdList.push({ amenityId: dataStep3[i].value });
            }
            dispatch(setupOwnerSlice.actions.addamenitiesOfHomeRoom(dataIdList));
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else if (activeStep === 3) {
            if (dataStep4.length < 5) {
                enqueueSnackbar(t('message.maxImage'), {
                    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                    variant: 'warning',
                });
            } else if (dataStep4.length > 5) {
                enqueueSnackbar(t('message.fullImage'), {
                    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                    variant: 'warning',
                });
            } else {
                if (!checkImage) {
                    enqueueSnackbar(t('message.uploadImagePlease'), {
                        anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                        variant: 'warning',
                    });
                } else {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                }
            }
        } else if (activeStep === 4) {
            if (
                dataStep5 !== '' &&
                dataStep5?.name !== '' &&
                dataStep5?.description !== '' &&
                dataStep5?.costPerNightDefault !== ''
            ) {
                dispatch(setupOwnerSlice.actions.addInfoOfHomeRoom(dataStep5));
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                enqueueSnackbar(t('message.fullinfo'), {
                    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                    variant: 'warning',
                });
            }
        }

        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSetDataStep3 = (value: any) => {
        setDataStep3(value);
    };

    const handleSetDataStep5 = (value: any) => {
        setDataStep5(value);
    };

    const handleUpload = async () => {
        if (dataStep4.length === 5) {
            try {
                setLoad(true);
                for (var i = 0; i < dataStep4.length; i++) {
                    const formData = new FormData();
                    await formData.append('file', dataStep4[i]);
                    const dataUrlImage = await imageRoomApi.uploadImage(formData);
                    await setDataStep4URL.push({ path: dataUrlImage?.data?.previewUrl });
                }
                if (setDataStep4URL.length >= 5) {
                    setCheckImage(true);
                }
                await dispatch(setupOwnerSlice.actions.addimagesOfHomeRoom(setDataStep4URL));
                setLoad(false);
            } catch (error) {
                setLoad(false);
            }
        } else if (dataStep4.length < 5) {
            enqueueSnackbar(t('message.maxImage'), {
                anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                variant: 'warning',
            });
        } else {
            enqueueSnackbar(t('message.fullImage'), {
                anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                variant: 'warning',
            });
        }
    };

    const handlePostRoom = () => {
        homeDetailApi
            .createHomeDetailByHost(setupRoomHost)
            .then((dataResponse: any) => {
                enqueueSnackbar(t('message.postHomeSuccess'), {
                    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                    variant: 'success',
                });
                dispatch(setupOwnerSlice.actions.addimagesOfHomeRoom(dataResponse.data.thumbnail));
                dispatch(userSlice.actions.updateHost());
                navigate('/congratulation');
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, {
                    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                    variant: 'error',
                });
            });
    };

    return (
        <Box sx={{ width: '100%' }}>
            <LoadingMaster loadingMaster={load} />
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};

                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step
                            key={label}
                            {...stepProps}
                            sx={{ fontSize: '30px', paddingLeft: '30px', paddingRight: '30px' }}
                        >
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <ConfirmOwner />
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, marginRight: '40px' }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handlePostRoom}>Đăng lên</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {/* Content */}
                    {(() => {
                        if (activeStep === 0) {
                            return (
                                <StepperOne
                                    setDataStep1={setDataStep1}
                                    handleSetAddressDetail={handleSetAddressDetail}
                                />
                            );
                        } else if (activeStep === 1) {
                            return <StepperTwo setDataStep2={setDataStep2} setCountGuest={setCountGuest} />;
                        } else if (activeStep === 2) {
                            return <StepperThree setDataStep3={handleSetDataStep3} />;
                        } else if (activeStep === 3) {
                            return <StepperFour setDataStep4={setDataStep4} />;
                        } else if (activeStep === 4) {
                            return <StepperFive handleSetDataStep5={handleSetDataStep5} />;
                        }
                    })()}
                    <Box sx={{ display: 'flex', pt: 2, position: 'absolute', right: '50px', bottom: '-90vh' }}>
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
                                {t('common.uploadImage')}
                            </LoadingButton>
                        )}
                        <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
