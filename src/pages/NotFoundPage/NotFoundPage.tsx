import './NotFoundPage.scss';

import _404Page from '../../assets/img/404.png';
import Logo from '../../assets/imgMaster/logo.svg';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    };

    return (
        <div className="not-found">
            <div className="sidebar__logo" onClick={backHome}>
                <img src={Logo} alt="company logo" className="logo-bg" />
            </div>
            <img src={_404Page} alt="" />
        </div>
    );
};

export default NotFoundPage;
