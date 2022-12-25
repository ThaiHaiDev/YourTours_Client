import { useNavigate } from 'react-router-dom';
import './IntroSettingOwnerPage.scss';

const IntroSettingOwnerPage = () => {
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    }

    const nextPage = () => {
        navigate('/stepsetupowner')
    }

    return (
        <div className="introsettingowner-page">
            <div className="row">
                <div className="col l-6">
                    <div className="sidebar__logo" onClick={backHome}>
                        <img
                            src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
                            alt="company logo"
                            className="logo-bg"
                        />
                    </div>
                </div>
                <div className="col l-6">
                    <div className="text-thanks">
                        <h1>Trở thành chủ nhà sau 5 bước đơn giản</h1>
                        <p>
                            Hãy tham gia cùng chúng tôi. Chúng tôi sẽ trợ giúp bạn qua từng bước của quy trình
                        </p>
                        <h2>-- Yourtours</h2>
                    </div>
                    <p className='btn-out' onClick={backHome}>Thoát</p>
                    <button type="submit" onClick={nextPage}>Tiếp tục</button>
                </div>
            </div>
        </div>
    );
};

export default IntroSettingOwnerPage;
