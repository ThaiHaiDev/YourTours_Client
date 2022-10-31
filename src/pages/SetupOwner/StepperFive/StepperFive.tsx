import './StepperFive.scss';

import { SubmitHandler, useForm } from 'react-hook-form';

const StepperFive = () => {
    const { register, reset, handleSubmit } = useForm<any>();

    const onSubmit: SubmitHandler<any> = (data: any) => {
        console.log(data);
    };
    return (
        <div className="step-five">
            <div className="row">
                <div className="col l-6 m-6">
                    <h1>Hãy đặt tên và mô tả cho chỗ ở của bạn</h1>
                </div>
                <div className="col l-6 m-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>
                            Tiêu đề nhà/phòng cho thuê cần làm nổi bật những điều tạo nên nét đặc biệt cho chỗ ở của
                            bạn.
                        </p>
                        <input
                            type="text"
                            placeholder="Tên căn nhà"
                            {...register('name', {
                                required: 'Email được yêu cầu',
                            })}
                        />

                        <input
                            type="text"
                            placeholder="Wifi"
                            {...register('wifi')}
                        />

                        <input
                            type="text"
                            placeholder="Mật khẩu wifi"
                            {...register('passWifi')}
                        />
                        <p>Số sao đánh giá phòng của bạn.</p>
                        <button type="submit" className="customs-btn">
                            Đăng kí
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StepperFive;
