import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import './StepperFive.scss';
import { t } from 'i18next';

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
                    <h1>{t('setupOwner.content_step_five')}</h1>
                </div>
                <div className="col l-6 m-6">
                    <form>
                        <p className="title-desc-step5">{t('label.nameHome')}</p>
                        <input
                            type="text"
                            placeholder={t('placeholder.nameHome')! as string}
                            className="input-step5"
                            onChange={handleChangeNameRoom}
                        />

                        <p className="title-desc-step5">{t('label.descHome')}</p>
                        <textarea className="text-step5" onChange={handleChangeDescRoom} />

                        <p className="title-desc-step5">{t('label.priceHome')}</p>
                        <input
                            type="number"
                            placeholder={t('placeholder.priceVND')! as string}
                            className="input-step5"
                            onChange={handleChangePriceRoom}
                        />
                    </form>
                    <Link to="/" className="btn-out">
                        {t('common.close')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StepperFive;
