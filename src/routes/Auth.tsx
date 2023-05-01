// Library
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Auth Page
import Signin from '../pages/AuthPage/Signin/Signin';
import Signup from '../pages/AuthPage/Signup/Signup';
import ForgotPass from '../pages/AuthPage/ForgotPass/ForgotPass';

// Admin Page
import LayoutAdmin from '../pages/LayoutAdmin/LayoutAdmin';

// 404 Page
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import AnimationStar from '../components/AnimationStar/AnimationStar';

// Customer Page
const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const RoomDetail = React.lazy(() => import('../pages/RoomDetail/RoomDetail'));
const IntroSettingOwnerPage = React.lazy(() => import('../pages/IntroSettingOwnerPage/IntroSettingOwnerPage'));
const StepperMain = React.lazy(() => import('../pages/SetupOwner/StepperMain/StepperMain'));
const CongratulationPage = React.lazy(() => import('../pages/CongratulationPage/Congratulation'));
const ListRoomPage = React.lazy(() => import('../pages/ListRoomPage/ListRoomPage'));
const BookingPage = React.lazy(() => import('../pages/BookingPage/BookingPage'));
const InfoUserPage = React.lazy(() => import('../pages/InfoUserPage/InfoUserPage'));
const HistoryBookingPage = React.lazy(() => import('../pages/HistoryBookingPage/HistoryBookingPage'));
const FavoritesPage = React.lazy(() => import('../pages/FavoritesPage/FavoritesPage'));

// Host Owner Page
const OwnerSetting = React.lazy(() => import('../pages/OwnerSetting/MainOwnerSetting/OwnerSetting'));
const ListRoomOfHost = React.lazy(() => import('../pages/OwnerSetting/ManagerRoom/ListRoomOfHost'));
const ManagerRoom = React.lazy(() => import('../pages/OwnerSetting/ManagerRoom/ManagerRoom'));
const ConvenientOwnerSetting = React.lazy(
    () => import('../pages/OwnerSetting/ConvenientOwnerSetting/ConvenientOwnerSetting'),
);
const CountRoomDetailSetting = React.lazy(
    () => import('../pages/OwnerSetting/CountRoomDetailSetting/CountRoomDetailSetting'),
);
const CalendarRoomSetting = React.lazy(() => import('../pages/OwnerSetting/CalendarRoomSetting/CalendarRoomSetting'));
const TransactionHistoryOwner = React.lazy(
    () => import('../pages/OwnerSetting/TransactionHistoryOwner/TransactionHistoryOwner'),
);

// Test Page
const Test = React.lazy(() => import('../pages/Test/Test'));

const Auth = () => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <React.Suspense>
                        <HomePage />
                    </React.Suspense>
                }
            />
            <Route
                path="/detail/:idHome"
                element={
                    <React.Suspense>
                        <RoomDetail />
                    </React.Suspense>
                }
            />
            <Route
                path="/stepsetupowner"
                element={
                    <React.Suspense>
                        <StepperMain />
                    </React.Suspense>
                }
            />
            {user.current.id === undefined ? (
                <>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgotpassword" element={<ForgotPass />} />
                </>
            ) : (
                <>
                    <Route
                        path="/signin"
                        element={
                            <React.Suspense fallback="Loading...">
                                <HomePage />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <React.Suspense fallback="Loading...">
                                <HomePage />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/forgotpassword"
                        element={
                            <React.Suspense fallback="Loading...">
                                <HomePage />
                            </React.Suspense>
                        }
                    />
                </>
            )}
            <Route
                path="/congratulation"
                element={
                    <React.Suspense>
                        <CongratulationPage />
                    </React.Suspense>
                }
            />
            <Route
                path="/intro-host"
                element={
                    <React.Suspense>
                        <IntroSettingOwnerPage />
                    </React.Suspense>
                }
            />
            <Route
                path="/list-room"
                element={
                    <React.Suspense>
                        <ListRoomPage />
                    </React.Suspense>
                }
            />
            <Route
                path="/wishlists"
                element={
                    <React.Suspense>
                        <FavoritesPage />
                    </React.Suspense>
                }
            />
            <Route
                path="/account/*"
                element={
                    <React.Suspense>
                        <InfoUserPage />
                    </React.Suspense>
                }
            />
            <Route
                path="/booking"
                element={
                    <React.Suspense>
                        <BookingPage />
                    </React.Suspense>
                }
            />
            <Route
                path="/historybooking"
                element={
                    <React.Suspense>
                        <HistoryBookingPage />
                    </React.Suspense>
                }
            />

            <Route path="/test" element={<Test />} />
            <Route path="/test2" element={<AnimationStar />} />

            <Route path="/admin/*" element={user.current.role === 'ADMIN' && <LayoutAdmin />} />
            <Route
                path="/host"
                element={
                    <React.Suspense>
                        <OwnerSetting />
                    </React.Suspense>
                }
            />
            <Route
                path="/host/setting"
                element={
                    <React.Suspense>
                        <ListRoomOfHost />
                    </React.Suspense>
                }
            />
            <Route
                path="/host/setting/:idHome"
                element={
                    <React.Suspense>
                        <ManagerRoom />
                    </React.Suspense>
                }
            />
            <Route
                path="/host/setting/convenient/:idHome"
                element={
                    <React.Suspense>
                        <ConvenientOwnerSetting />
                    </React.Suspense>
                }
            />
            <Route
                path="/host/setting/countroomdetail/:idHome"
                element={
                    <React.Suspense>
                        <CountRoomDetailSetting />
                    </React.Suspense>
                }
            />
            <Route
                path="/host/setting/calendar"
                element={
                    <React.Suspense>
                        <CalendarRoomSetting />
                    </React.Suspense>
                }
            />
            <Route
                path="/host/setting/transactionhistory"
                element={
                    <React.Suspense>
                        <TransactionHistoryOwner />
                    </React.Suspense>
                }
            />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default Auth;
