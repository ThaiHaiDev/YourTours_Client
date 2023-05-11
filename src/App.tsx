import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import authMessSlice from './redux/authMess';
import { RootState } from './redux/store';

import Auth from './routes/Auth';

import './App.css';

function App() {
    const authMessData = useSelector((state: RootState) => state.authMess);
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('acch', authMessData.error401);
        if (authMessData.error401) {
            enqueueSnackbar('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại!', { variant: 'warning' });
            dispatch(authMessSlice.actions.closeError401());
        }
    }, [authMessData.error401, dispatch, enqueueSnackbar]);
    return (
        <div>
            <Auth />
        </div>
    );
}

export default App;
