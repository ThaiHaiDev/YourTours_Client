import { ChangeEvent, useEffect, useState } from 'react';
import './OTPBoxForgotPass.scss';

import { useForm, ValidationRule, SubmitHandler } from 'react-hook-form';

import regexCons from '../../constants/regexCons';
import { OTPForgotPasswordRequest } from '../../share/models/auth';

interface OTPBoxForgotData {
    handleSubmitOTP: (otp: OTPForgotPasswordRequest) => void;
    emailSend: string;
}

interface OTPBoxForgotDataForm {
    password: string;
    password_confirmation: string;
}

const OTPBoxForgotPass = (props: OTPBoxForgotData) => {
    const [O1, setO1] = useState<string>('');
    const [O2, setO2] = useState<string>('');
    const [O3, setO3] = useState<string>('');
    const [O4, setO4] = useState<string>('');
    const [O5, setO5] = useState<string>('');

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<any>();

    const regexPassword: ValidationRule<RegExp> = regexCons.email;

    const clickEvent = (last: string) => {
        document.getElementById(last)?.focus();
    };

    useEffect(() => {
        document.getElementById('ist')?.focus();
    }, []);

    const nameChangeHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
        setO1(event.currentTarget?.value);
    };

    const nameChangeHandler2 = (event: ChangeEvent<HTMLInputElement>) => {
        setO2(event.currentTarget?.value);
    };

    const nameChangeHandler3 = (event: ChangeEvent<HTMLInputElement>) => {
        setO3(event.currentTarget?.value);
    };

    const nameChangeHandler4 = (event: ChangeEvent<HTMLInputElement>) => {
        setO4(event.currentTarget?.value);
    };

    const nameChangeHandler5 = (event: ChangeEvent<HTMLInputElement>) => {
        setO5(event.currentTarget?.value);
    };

    const onSubmit: SubmitHandler<OTPBoxForgotDataForm> = (data: OTPBoxForgotDataForm) => {
        const newOtp = {
            otp: O1 + O2 + O3 + O4 + O5,
            newPassword: data.password,
            confirmPassword: data.password_confirmation,
        };
        if (props.handleSubmitOTP) {
            props.handleSubmitOTP(newOtp);
        }
    };

    return (
        <div className="otp-box-forgot__pass">
            <div className="container">
                <h1>Tạo mật khẩu mới</h1>
                <p style={{ marginTop: '0' }}>
                    Để bảo mật thông tin, chúng tôi cần bạn nhập OTP. Chúng tôi đã gửi cho bạn mã OTP xác thực qua gmail{' '}
                    {`${props.emailSend.slice(0, 2)}****@***.***`}. Bạn vui lòng kiểm tra gmail và nhập mã xác thực vào
                    đây:
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="userInput">
                        <input
                            className="input-otp"
                            type="text"
                            id="ist"
                            maxLength={1}
                            onKeyUp={() => clickEvent('sec')}
                            onChange={nameChangeHandler1}
                        />
                        <input
                            className="input-otp"
                            type="text"
                            id="sec"
                            maxLength={1}
                            onKeyUp={() => clickEvent('third')}
                            onChange={nameChangeHandler2}
                        />
                        <input
                            className="input-otp"
                            type="text"
                            id="third"
                            maxLength={1}
                            onKeyUp={() => clickEvent('fourth')}
                            onChange={nameChangeHandler3}
                        />
                        <input
                            className="input-otp"
                            type="text"
                            id="fourth"
                            maxLength={1}
                            onKeyUp={() => clickEvent('fifth')}
                            onChange={nameChangeHandler4}
                        />
                        <input
                            className="input-otp"
                            type="text"
                            id="fifth"
                            maxLength={1}
                            onKeyUp={() => clickEvent('')}
                            onChange={nameChangeHandler5}
                        />
                    </div>
                    <label>
                        <label className="label-email">Mật khẩu</label>
                        <input
                            className="forgot__form-input"
                            type="password"
                            {...register('password', {
                                required: 'Mật khẩu được yêu cầu',
                                pattern: {
                                    value: regexPassword,
                                    message:
                                        'Mật khẩu phải bao gồm chữ thường và kí tự in hoa, ít nhất 1 kí tự đặt biệt và 1 con số.',
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Mật khẩu phải ít từ 6 kí tự ',
                                },
                                maxLength: {
                                    value: 16,
                                    message: 'Mật khẩu chỉ có thể nhiều nhất 16 kí tự',
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="message_error">{`${errors.password && errors.password?.message}`}</p>
                        )}
                    </label>

                    <label>
                        <label className="label-email">Xác nhận mật khẩu</label>
                        <input
                            className="forgot__form-input"
                            type="password"
                            {...register('password_confirmation', {
                                required: 'Mật khẩu được yêu cầu',
                                validate: (val: string | undefined) => {
                                    if (watch('password') !== val) {
                                        return 'Xác nhận mật khẩu không khớp với mật khẩu của bạn';
                                    }
                                },
                            })}
                        />
                        {errors.password_confirmation && (
                            <p className="message_error">{`${
                                errors.password_confirmation && errors.password_confirmation?.message
                            }`}</p>
                        )}
                    </label>
                    <button type="submit" className="customs-btn">
                        Xác thực
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OTPBoxForgotPass;
