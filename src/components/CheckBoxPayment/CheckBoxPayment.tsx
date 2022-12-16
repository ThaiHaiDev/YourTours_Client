import * as React from 'react';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useDispatch } from 'react-redux';
import bookingSlice from '../../pages/BookingPage/bookingSlice';

import './CheckBoxPayment.scss';

interface StyledFormControlLabelProps extends FormControlLabelProps {
    checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: theme.palette.primary.main,
        },
    }),
);

function MyFormControlLabel(props: FormControlLabelProps) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function CheckBoxPayment(props: any) {
    const dispatch = useDispatch();

    const handleChangeRadio = async (event: React.ChangeEvent<HTMLInputElement>) => {
        await dispatch(bookingSlice.actions.addPaymentMethod({ paymentMethod: event.target.value }));
        if (event.target.value === 'PAY_50_PERCENT') {
            props?.setPriceAfterChoosePayment(props.price / 2);
        } else {
            props?.setPriceAfterChoosePayment(props.price);
        }
    };

    return (
        <div className='payment-radio-box'>
            <RadioGroup name="use-radio-group" defaultValue="PAY_IN_FULL">
                <MyFormControlLabel
                    value="PAY_IN_FULL"
                    label="Thanh toán toàn bộ"
                    control={<Radio sx={{ fontSize: '14px' }} onChange={handleChangeRadio} />}
                />
                <MyFormControlLabel
                    value="PAY_50_PERCENT"
                    label="Thanh toán 50%"
                    control={<Radio onChange={handleChangeRadio} />}
                />
            </RadioGroup>
        </div>
    );
}
