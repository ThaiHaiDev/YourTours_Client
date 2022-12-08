import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import './StepperFive.scss';

const StepperFive = (props: any) => {
    const [nameRoom, setNameRoom] = useState<string>('');
    const [descRoom, setDescRoom] = useState<string>('');
    const [priceRoom, setPriceRoom] = useState<string>('');

    const handleChangeNameRoom = (event: ChangeEvent<HTMLInputElement>) => {
        setNameRoom(event.currentTarget?.value);
        if (props.handleSetDataStep5) {
            props.handleSetDataStep5({
                name: event.currentTarget?.value,
                description: descRoom,
                costPerNightDefault: priceRoom,
            });
        }
    };

    const handleChangeDescRoom = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescRoom(event.currentTarget?.value);
        if (props.handleSetDataStep5) {
            props.handleSetDataStep5({
                name: nameRoom,
                description: event.currentTarget?.value,
                costPerNightDefault: priceRoom,
            });
        }
    };

    const handleChangePriceRoom = (event: ChangeEvent<HTMLInputElement>) => {
        setPriceRoom(event.currentTarget?.value);
        if (props.handleSetDataStep5) {
            props.handleSetDataStep5({
                name: nameRoom,
                description: descRoom,
                costPerNightDefault: event.currentTarget?.value,
            });
        }
    };

    return (
        <div className="step-five">
            <div className="row">
                <div className="col l-6 m-6">
                    <img
                        src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/Gif_Pro/nha-dep_tu-van-xay-nha-600-trieu-tien-ich-5.png"
                        alt=""
                        className="image-step5"
                    />
                    <h1>Hãy đặt tên và mô tả cho chỗ ở của bạn</h1>
                </div>
                <div className="col l-6 m-6">
                    <form>
                        <p className="title-desc-step5">
                            Tiêu đề nhà/phòng cho thuê cần làm nổi bật những điều tạo nên nét đặc biệt cho chỗ ở của
                            bạn.
                        </p>
                        <input
                            type="text"
                            placeholder="Tên căn nhà"
                            className="input-step5"
                            onChange={handleChangeNameRoom}
                        />

                        <p className="title-desc-step5">
                            Tạo phần mô tả để chia sẻ những điều tạo nên nét đặc biệt cho chỗ ở của bạn.
                        </p>
                        <textarea className="text-step5" onChange={handleChangeDescRoom} />

                        <p className="title-desc-step5">Bây giờ, hãy đặt mức giá mà bạn muốn.</p>
                        <input
                            type="number"
                            placeholder="Đơn vị VND"
                            className="input-step5"
                            onChange={handleChangePriceRoom}
                        />
                    </form>
                    <Link to='/' className='btn-out'>Thoát</Link>
                </div>
            </div>
        </div>
    );
};

export default StepperFive;
