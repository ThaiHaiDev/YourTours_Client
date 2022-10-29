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

const Auth = () => {
    const user = useSelector((state: RootState) => state.user)
    return (
        <Routes>
            <Route path="/" element={user.current.role === 'USER' ? <RoomDetail /> : <HomePage />}  />
            <Route path="/detail" element={<RoomDetail />} />
            <Route path="/stepsetupowner" element={<StepperMain />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/confirm" element={<ConfirmOwner />} />
            <Route path="/congratulation" element={<CongratulationPage />} />
            <Route path="/host/setting" element={<OwnerSetting />} />
            <Route path="/host/setting/convenient" element={<ConvenientOwnerSetting />} />
            {/* <Route path='*' exact={true} element={<NotFoundPage />} /> */}
        </Routes>
    );
};

export default Auth;
