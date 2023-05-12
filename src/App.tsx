import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import userSlice from './pages/AuthPage/userSlice';
import authMessSlice from './redux/authMess';

import { RootState } from './redux/store';

import Auth from './routes/Auth';

import './App.css';

function App() {
    const authMessData = useSelector((state: RootState) => state.authMess);
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    useEffect(() => {
        if (authMessData.error401) {
            enqueueSnackbar('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại!', { variant: 'warning' });
            dispatch(authMessSlice.actions.closeError401());
            // Code set auto logout in here
            setTimeout(function () {
                dispatch(userSlice.actions.logout());
                console.log('logout');
            }, 5000);
        }
    }, [authMessData.error401, dispatch, enqueueSnackbar]);
    return (
        <div>
            <Auth />
        </div>
    );
}

export default App;
