import { NavLink } from 'react-router-dom';
import './ConfirmOwner.scss';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import Province from '../../mockdata/ProvinceVN.json';

import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

import formatPrice from '../../utils/formatPrice';

const ConfirmOwner = () => {
    const setupRoomHost = useSelector((state: RootState) => state.settingowner.detailRoom);
    const provinceName = Province.filter((pro: any) => {
        return parseInt(pro.code) === parseInt(setupRoomHost.provinceCode);
    });
    const priceRoom = formatPrice(setupRoomHost.costPerNightDefault);
    const linkImage = setupRoomHost?.imagesOfHome[0]['path']

    return (
        <div className="confirm-page">
            <NavLink to="/" className="logo">
                <img
                    src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
                    alt="company logo"
                    className="logo-bg"
                />
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
                        <h1>Bạn đã sẵn sàng đăng!</h1>
                        <span>
                            Khi bạn nhấn đăng, khách có thể tìm thấy nhà/phòng cho thuê của bạn trên Yourtours và đặt
                            bất kì ngày nào còn trống.
                        </span>
                        <span>
                            Ngoài ra, bạn hãy vào phần chủ nhà để có thể cập nhật thêm nhiều thông tin (phụ phí, giá
                            theo ngày đặc biệt, ...) cho ngôi nhà của bạn để thêm phần chi tiết.
                        </span>
                        <br /> <br /> <br />
                        <div className="status">
                            <p>Tạo mục nhà/phòng cho thuê </p>
                            <div className="status-icon">
                                <CheckCircleOutlineIcon className="icon-success" /> <p>Hoàn tất!</p>
                            </div>
                        </div>
                        <br />
                        <div className="status">
                            <p>Xác nhận tài khoản của bạn </p>
                            <span>
                                Khi bạn nhấn đăng, khách có thể tìm thấy nhà/phòng cho thuê của bạn trên Yourtours và
                                đặt bất kì ngày nào còn trống.
                                <br />
                            </span>

                            <div className="status-icon" style={{ marginTop: '10px' }}>
                                <CheckCircleOutlineIcon className="icon-success" /> <p>Hoàn tất!</p>
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
