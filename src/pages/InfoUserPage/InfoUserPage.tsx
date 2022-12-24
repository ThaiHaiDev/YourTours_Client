import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import EditInfo from './EditAccount/EditAccount';

import { Route, Routes } from 'react-router-dom';

import './InfoUserPage.scss';
import ActiveAccount from './ActiveAccount/ActiveAccount';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const InfoUserPage = () => {
    const user = useSelector((state: RootState) => state.user);
    return (
        <div className="info-user__page">
            <Navbar />
            <div className="content-account">
                <div className="row">
                    <div className="col l-3" style={{ paddingTop: 0 }}>
                        <div className="card-info">
                            <div className="avatar-info">
                                <img
                                    src="https://avatars.githubusercontent.com/u/85157423?s=400&u=3ae0bdfd3720e1c68eaabe4a0049555583250c24&v=4"
                                    alt=""
                                />
                            </div>
                            <div className="name-info">
                                <h1>{user.current?.fullName}</h1>
                                <Link to="/account" className="edit-info_-link">
                                    Chỉnh sửa
                                </Link>
                            </div>
                            <br />
                            <hr />
                            <Link to="/account/edit-account" className='link-user'><AccountBoxIcon sx={{marginRight: '10px'}}/>Thông tin cá nhân</Link>
                            <Link to="/account/active-account" className='link-user'><LocalActivityIcon sx={{marginRight: '10px'}}/>Kích hoạt tài khoản</Link>

                        </div>
                    </div>
                    <div className="col l-9">
                        <div className="card-content">
                            <Routes>
                                <Route path="/edit-account" element={<EditInfo />} />
                                <Route path="/active-account" element={<ActiveAccount />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoUserPage;
