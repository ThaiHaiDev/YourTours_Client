import { Routes, Route } from 'react-router-dom';
import Signin from '../pages/AuthPage/Signin/Signin';
import Signup from '../pages/AuthPage/Signup/Signup';
import CongratulationPage from '../pages/CongratulationPage/Congratulation';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OwnerSetting from '../pages/OwnerSetting/OwnerSetting';
import RoomDetail from '../pages/RoomDetail/RoomDetail';
import StepperMain from '../pages/SetupOwner/StepperMain/StepperMain';

const Auth = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail" element={<RoomDetail />} />
            <Route path="/stepsetupowner" element={<StepperMain />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/congratulation' element={<CongratulationPage />} />
            <Route path='/test' element={<OwnerSetting />} />
            <Route path='*' exact={true} element={<NotFoundPage />} />
        </Routes>
    )
}

export default Auth