import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { RootState } from '../../redux/store';
import userApi from '../../services/userApi';
import './InfoUserPage.scss';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

const InfoUserPage = () => {
    const user = useSelector((state: RootState) => state.user);

    const { handleSubmit, register, setValue } = useForm();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setValue('fullName', user?.current.fullName);
        setValue('email', user?.current.email);
        setValue('phoneNumber', user?.current.phoneNumber);
        setValue('dateOfBirth', user?.current.dateOfBirth);
        setValue('address', user?.current.address);
        setValue('gender', user?.current.gender);
    }, [setValue, user]);

    const onSubmit: SubmitHandler<any> = (data: any) => {
        const dataUpdate = {
            fullName: data.fullName,
            email: data.fullNemailame, 
            phoneNumber: data.phoneNumber,
            dateOfBirth: data.dateOfBirth,
            address: data.address,
            gender: data.male !== false ? 'MALE': 'FEMALE'
        }
        userApi
            .updateInfoUser(dataUpdate)
            .then((dataResponse: any) => {
                enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="info-user__page">
            <Navbar />
            <div className="content-account">
                <div className="row">
                    <div className="col l-3" style={{paddingTop: 0}}>
                        <div className="card-info">
                            <div className="avatar-info">
                                <img
                                    src="https://avatars.githubusercontent.com/u/85157423?s=400&u=3ae0bdfd3720e1c68eaabe4a0049555583250c24&v=4"
                                    alt=""
                                />
                            </div>
                            <div className="name-info">
                                <h1>Hai Nguyen</h1>
                                <Link to="#" className="edit-info_-link">
                                    Chỉnh sửa
                                </Link>
                            </div>
                            <br />
                            <hr />
                        </div>
                    </div>
                    <div className="col l-9">
                        <div className="card-content">
                            <h2>Thông tin tài khoản</h2>
                            <p className="desc-info-content">
                                Thông tin này sẽ được từ nhập vào đơn hàng sau của bạn. Thông tin của bạn sẽ được mã hoá
                                và không chia sẻ với bên thứ 3
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row" style={{ margin: '0 30px' }}>
                                    <div className="col l-6">
                                        <p className="label-info__user">Họ tên đầy đủ</p>
                                        <input type="text" className="input-info__user" {...register('fullName')} />
                                    </div>

                                    <div className="col l-6">
                                        <p className="label-info__user">Email (nhận voucher)</p>
                                        <input type="email" className="input-info__user" {...register('email')} />
                                    </div>

                                    <div className="col l-6">
                                        <p className="label-info__user">Ngày sinh</p>
                                        <input type="date" className="input-info__user" {...register('dateOfBirth')} />
                                    </div>

                                    <div className="col l-6">
                                        <p className="label-info__user">Số điện thoại</p>
                                        <input type="text" className="input-info__user" {...register('phoneNumber')} />
                                    </div>

                                    <div className="col l-6">
                                        <p className="label-info__user">Địa chỉ</p>
                                        <input type="text" className="input-info__user" {...register('address')} />
                                    </div>

                                    <div className="col l-6">
                                        <p className="label-info__user">Giới tính</p>
                                        <div className="input-checkbox">
                                            <input type="checkbox" value="MALE" {...register('male')} />
                                            <label>Nam</label>
                                            <input type="checkbox" value="FEMALE" {...register('female')}/>
                                            <label>Nữ</label>
                                        </div>
                                    </div>
                                    <button className="btn-save-info">Lưu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoUserPage;
