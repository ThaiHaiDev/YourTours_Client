import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from './pages/AuthPage/userSlice';
import authMessSlice from './redux/authMess';
import { RootState } from './redux/store';
import Auth from './routes/Auth';
import { ConnectServerSocket, DisConnectServerSocket } from './share/socket';
import NotificationIcon from './components/IconAnimationMaster/NotificationIcon/NotificationIcon';

import './App.css';

function App() {
    const authMessData = useSelector((state: RootState) => state.authMess);
    const notiData = useSelector((state: RootState) => state.notification);
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    useEffect(() => {
        if (authMessData.error401) {
            enqueueSnackbar('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại!', { variant: 'warning' });
            dispatch(authMessSlice.actions.closeError401());
            DisConnectServerSocket();
            // Code set auto logout in here
            setTimeout(function () {
                dispatch(userSlice.actions.logout());
            }, 5000);
        } else {
            ConnectServerSocket();
        }
    }, [authMessData.error401, dispatch, enqueueSnackbar]);
    return (
        <div>
            <Auth />
            <div className="noti-fix">{notiData.notiKey ? <NotificationIcon /> : <></>}</div>
        </div>
    );
}

export default App;
