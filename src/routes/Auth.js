import { Routes, Route } from 'react-router-dom';
import Signin from '../pages/AuthPage/Signin/Signin';
import Signup from '../pages/AuthPage/Signup/Signup';
// import HomePage from '../pages/HomePage/HomePage';
import RoomDetail from '../pages/RoomDetail/RoomDetail';

const Auth = () => {
    return (
        <Routes>
            <Route path="/" element={<RoomDetail />} />
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}

export default Auth