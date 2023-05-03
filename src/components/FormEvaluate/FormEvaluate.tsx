import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Rating } from '@mui/material';

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
                enqueueSnackbar('Đánh giá thành công', { variant: 'success' });
                resetForm.reset();
                navigate('/historybooking');
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="xl">
            <DialogTitle sx={{ fontSize: '20px' }}>Đánh Giá Khách Hàng</DialogTitle>
            <form onSubmit={submitFormHandler}>
                <DialogContent>
                    <DialogContentText sx={{ fontSize: '16px' }}>
                        Chúng tôi rất lấy làm vinh dự khi có được sự tin tưởng của quý khách.
                    </DialogContentText>
                    <DialogContentText sx={{ fontSize: '16px' }}>
                        Vui lòng để lại đánh giá để chúng tôi có thể cải thiện dịch vụ của mình!
                    </DialogContentText>

                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <p style={{ fontSize: '15px', marginRight: '10px' }}>Lựa chọn đánh giá của bạn: </p>
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
                        placeholder="Phản hồi từ khách hàng"
                        onChange={reviewChangeHandler}
                        required
                        style={{ fontSize: '14px', padding: '10px 15px', marginTop: '10px', width: '100%' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <button type="submit">Đánh giá</button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default FormEvaluate;
