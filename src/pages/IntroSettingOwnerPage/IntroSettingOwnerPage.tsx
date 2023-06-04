import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import Logo from '../../assets/imgMaster/logo.svg';
import './IntroSettingOwnerPage.scss';
import { t } from 'i18next';

const IntroSettingOwnerPage = () => {
    const userLogin = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    };

    const nextPage = () => {
        navigate('/stepsetupowner');
    };

    useEffect(() => {
        if (userLogin.current.id === undefined) {
            navigate('/signin');
        }
    }, [userLogin, navigate]);

    return (
        <div className="introsettingowner-page">
            <div className="row">
                <div className="col l-6">
                    <div className="sidebar__logo" onClick={backHome}>
                        <img src={Logo} alt="company logo" className="logo-bg" />
                    </div>
                </div>
                <div className="col l-6">
                    <div className="text-thanks">
                        <h1>{t('setupOwner.title')}</h1>
                        <p>{t('setupOwner.commit')}</p>
                        <h2>-- Yourtours</h2>
                    </div>
                    <p className="btn-out" onClick={backHome}>
                        {t('common.close')}
                    </p>
                    <button type="submit" onClick={nextPage}>
                        {t('common.continue')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IntroSettingOwnerPage;
