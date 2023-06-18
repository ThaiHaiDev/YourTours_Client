import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { t } from 'i18next';
import { useSnackbar } from 'notistack';

import { useNavigate } from 'react-router-dom';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Rating } from '@mui/material';

import evaluateApi from '../../services/evaluateApi';
import './FormEvaluate.scss';

export interface dataProps {
    showFormReview: boolean;
    handleCloseReview: () => void;
    idBook: string | undefined;
}

const FormEvaluate = (props: dataProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<number | null>(2);
    const [valueReview, setValueReview] = useState<string>('');

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (props.showFormReview) {
            setOpen(true);
        }
        props.handleCloseReview();
    }, [props, props.showFormReview]);

    const handleClose = () => {
        setOpen(false);
    };

    const reviewChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValueReview(event.currentTarget?.value);
    };

    const submitFormHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const dataReview = {
            bookId: props.idBook,
            rates: value,
            comment: valueReview,
        };
        const resetForm = event.target as HTMLFormElement;

        evaluateApi
            .addEvaluate(dataReview)
            .then(() => {
                enqueueSnackbar(t('message.reviewSuccess'), { variant: 'success' });
                resetForm.reset();
                navigate('/historybooking');
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="xl">
            <DialogTitle
                sx={{
                    fontSize: '20px',
                    borderBottom: '1px solid #2196f3',
                    marginLeft: '25px',
                    paddingLeft: '0',
                    marginRight: '25px',
                    paddingRight: '0',
                    paddingBottom: '10px',
                }}
            >
                {t('title.review')}
            </DialogTitle>
            <form onSubmit={submitFormHandler}>
                <DialogContent>
                    <DialogContentText sx={{ fontSize: '16px' }}>{t('label.thanksReview')}</DialogContentText>
                    <DialogContentText sx={{ fontSize: '16px' }}>{t('label.fillReview')}</DialogContentText>

                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <p style={{ fontSize: '15px', marginRight: '10px' }}>{t('label.selectedRate')}</p>
                        <Rating
                            sx={{ fontSize: '20px' }}
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </div>

                    <input
                        type="text"
                        placeholder={t('placeholder.feedback')! as string}
                        onChange={reviewChangeHandler}
                        required
                        style={{ fontSize: '14px', padding: '10px 15px', marginTop: '10px', width: '100%' }}
                    />
                </DialogContent>
                <DialogActions sx={{ marginBottom: '10px' }}>
                    <button onClick={handleClose} className="btn-review-cancel">
                        Cancel
                    </button>
                    <button type="submit" className="btn-review-detail">
                        {t('common.review')}
                    </button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default FormEvaluate;
