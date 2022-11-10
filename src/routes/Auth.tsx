import { Routes, Route } from 'react-router-dom';
import Signin from '../pages/AuthPage/Signin/Signin';
import Signup from '../pages/AuthPage/Signup/Signup';
import ConfirmOwner from '../pages/ConfirmOwner/ConfirmOwner';
import CongratulationPage from '../pages/CongratulationPage/Congratulation';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import ConvenientOwnerSetting from '../pages/OwnerSetting/ConvenientOwnerSetting/ConvenientOwnerSetting';
import OwnerSetting from '../pages/OwnerSetting/MainOwnerSetting/OwnerSetting';
import RoomDetail from '../pages/RoomDetail/RoomDetail';
import StepperMain from '../pages/SetupOwner/StepperMain/StepperMain';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'
import ForgotPass from '../pages/AuthPage/ForgotPass/ForgotPass';
import IntroSettingOwnerPage from '../pages/IntroSettingOwnerPage/IntroSettingOwnerPage';
import Test from '../pages/Test/Test';
import ManagerRoom from '../pages/OwnerSetting/ManagerRoom/ManagerRoom';
import CountRoomDetailSetting from '../pages/OwnerSetting/CountRoomDetailSetting/CountRoomDetailSetting';

const Auth = () => {
    const user = useSelector((state: RootState) => state.user)
    return (
        <Routes>
            <Route path="/" element={user.current.role === 'USER' ? <HomePage /> : <RoomDetail />}  />
            <Route path="/detail" element={<RoomDetail />} />
            <Route path="/stepsetupowner" element={<StepperMain />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPass />} />
            <Route path="/confirm" element={<ConfirmOwner />} />
            <Route path="/congratulation" element={<CongratulationPage />} />
            <Route path="/intro-host" element={<IntroSettingOwnerPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/host" element={<OwnerSetting />} />
            <Route path="/host/setting/:idHome" element={<ManagerRoom />} />
            <Route path="/host/setting/convenient" element={<ConvenientOwnerSetting />} />
            <Route path="/host/setting/countroomdetail" element={<CountRoomDetailSetting />} />
            
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
};

export default Auth;
