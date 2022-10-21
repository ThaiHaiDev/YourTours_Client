import { Routes, Route } from 'react-router-dom';
import Signin from '../pages/AuthPage/Signin/Signin';
import Signup from '../pages/AuthPage/Signup/Signup';
import HomePage from '../pages/HomePage/HomePage';
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
        </Routes>
    )
}

export default Auth