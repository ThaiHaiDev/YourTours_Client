import './NotFoundPage.scss';

import _404Page from '../../assets/img/404.png';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    }
    
    return (
        <div className="not-found">
            <div className="sidebar__logo" onClick={backHome}>
                <img
                    src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
                    alt="company logo"
                    className="logo-bg"
                />
            </div>
            <img src={_404Page} alt="" />
        </div>
    );
};

export default NotFoundPage;
