import { NavLink } from 'react-router-dom';
import './ConfirmOwner.scss';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Logo from '../../assets/imgMaster/logo.svg';

import Province from '../../mockdata/ProvinceVN.json';

import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

import formatPrice from '../../utils/formatPrice';
import { t } from 'i18next';

const ConfirmOwner = () => {
    const setupRoomHost = useSelector((state: RootState) => state.settingowner.detailRoom);
    const provinceName = Province.filter((pro: any) => {
        return parseInt(pro.code) === parseInt(setupRoomHost.provinceCode);
    });
    const priceRoom = formatPrice(setupRoomHost.costPerNightDefault);
    const linkImage = setupRoomHost?.imagesOfHome[0]['path'];

    return (
        <div className="confirm-page">
            <NavLink to="/" className="logo">
                <img src={Logo} alt="company logo" className="logo-bg" />
            </NavLink>
            <div className="content-confirm">
                <div className="row" style={{ margin: '0', width: '100%' }}>
                    <div
                        className="col l-8 m-7 c-12"
                        style={{
                            height: '80vh',
                            display: 'grid',
                            alignContent: 'center',
                            paddingLeft: '50px',
                        }}
                    >
                        <h1>{t('setupOwner.confirm.ready')}</h1>
                        <span>{t('setupOwner.confirm.content_1')}</span>
                        <span>{t('setupOwner.confirm.content_2')}</span>
                        <br /> <br /> <br />
                        <div className="status">
                            <p>{t('setupOwner.confirm.create')}</p>
                            <div className="status-icon">
                                <CheckCircleOutlineIcon className="icon-success" />{' '}
                                <p>{t('setupOwner.confirm.completed')}</p>
                            </div>
                        </div>
                        <br />
                        <div className="status">
                            <p>{t('setupOwner.confirm.active')}</p>
                            <span>
                                {t('setupOwner.confirm.active_content')}
                                <br />
                            </span>

                            <div className="status-icon" style={{ marginTop: '10px' }}>
                                <CheckCircleOutlineIcon className="icon-success" />{' '}
                                <p>{t('setupOwner.confirm.completed')}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col l-4 m-5 c-12"
                        style={{
                            height: '90vh',
                            display: 'grid',
                            alignContent: 'center',
                            paddingRight: '50px',
                        }}
                    >
                        <div className="card">
                            <div className="img-confirm">
                                <img src={`${linkImage}`} alt="" />
                            </div>
                            <h2>{setupRoomHost.name}</h2>
                            <p>{`${provinceName[0]?.name}, Việt Nam`}</p>
                            <span>{`${priceRoom} VND / ngày`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmOwner;
