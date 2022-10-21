import { useNavigate } from 'react-router-dom';
import './Congratulation.scss';

const CongratulationPage = () => {
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    }

    return (
        <div className="congratulation-page">
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
                        <h1>Hân hạnh chào đón Hải!</h1>
                        <p>
                            Chủ nhà là trung tâm trong mọi hoạt động của chúng tôi và chúng tôi rất mong bạn sẽ được
                            trải nghiệm sự kì diệu của việc đón tiếp khách.
                        </p>
                        <h2>-- Curry</h2>
                    </div>
                    <button type="submit">Tiếp tục</button>
                </div>
            </div>
        </div>
    );
};

export default CongratulationPage;
