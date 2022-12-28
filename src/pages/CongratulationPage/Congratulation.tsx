import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import './Congratulation.scss';

const CongratulationPage = () => {
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    }

    const nextPage = () => {
        navigate('/host');
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
                    <div className='background-left'></div>
                </div>
                <div className="col l-6">
                    <div className="text-thanks">
                        <h1>{`Hân hạnh chào đón ${user.current?.fullName}!`}</h1>
                        <p>
                            Chủ nhà là trung tâm trong mọi hoạt động của chúng tôi và chúng tôi rất mong bạn sẽ được
                            trải nghiệm sự kì diệu của việc đón tiếp khách.
                        </p>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <p style={{ color: 'red', padding: 0, fontWeight: 'bold' }}>Lưu ý:</p>
                            <p style={{ padding: 0, marginLeft: '8px' }}>Với mỗi lần giao dịch, Yourtours sẽ chiết khấu 10% hoa hồng</p>
                        </div>
                        <h2>-- Yourtours</h2>
                    </div>
                    <button type="submit" onClick={nextPage}>Tiếp tục</button>
                </div>
            </div>
        </div>
    );
};

export default CongratulationPage;
