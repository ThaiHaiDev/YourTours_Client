import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import Logo from '../../assets/imgMaster/logo.svg';
import './Congratulation.scss';
import { t } from 'i18next';

const CongratulationPage = () => {
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    };

    const nextPage = () => {
        navigate('/host');
    };

    return (
        <div className="congratulation-page">
            <div className="row">
                <div className="col l-6">
                    <div className="sidebar__logo" onClick={backHome}>
                        <img src={Logo} alt="company logo" className="logo-bg" />
                    </div>
                    <div className="background-left"></div>
                </div>
                <div className="col l-6">
                    <div className="text-thanks">
                        <h1>{`${t('setupOwner.welcome')} ${user.current?.fullName}!`}</h1>
                        <p>{t('setupOwner.beforePostHome')}</p>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <p style={{ color: 'red', padding: 0, fontWeight: 'bold' }}>{t('setupOwner.note')}</p>
                            <p style={{ padding: 0, marginLeft: '8px' }}>{t('setupOwner.rose')}</p>
                        </div>
                        <h2>-- Yourtours</h2>
                    </div>
                    <button type="submit" onClick={nextPage}>
                        {t('common.continue')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CongratulationPage;
