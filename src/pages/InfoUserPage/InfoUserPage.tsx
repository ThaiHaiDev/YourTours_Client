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
                        <div className="card-content"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoUserPage;
