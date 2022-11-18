import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './InfoUserPage.scss';

const InfoUserPage = () => {
    return (
        <div className="info-user__page">
            <Navbar />
            <div className="content-account">
                <div className="row">
                    <div className="col l-4">
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
                    <div className="col l-8">
                        <div className="card-content">
                            <h2>Thông tin tài khoản</h2>
                            <p className="desc-info-content">
                                Thông tin này sẽ được từ nhập vào đơn hàng sau của bạn. Thông tin của bạn sẽ được mã hoá
                                và không chia sẻ với bên thứ 3
                            </p>
                            <div className="row" style={{margin: '0 30px'}}>
                                <div className="col l-6">
                                    <p className="label-info__user">Họ tên đầy đủ</p>
                                    <input type="text" className="input-info__user" />
                                </div>

                                <div className="col l-6">
                                    <p className="label-info__user">Email (nhận voucher)</p>
                                    <input type="email" className="input-info__user" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoUserPage;
