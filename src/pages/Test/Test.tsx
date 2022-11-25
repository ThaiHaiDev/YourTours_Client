import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Test.scss';
import RoutesAdmin from '../../routes/RouterAdmin';
import Sidebar from '../../components/AllAdminComponents/Sidebar/Sidebar';
import globalSlice from '../../redux/globalSlice';
import { RootState } from '../../redux/store';
import NavbarAdmin from '../../components/AllAdminComponents/NavbarAdmin/NavbarAdmin';

import './boxicons-2.0.7/css/boxicons.min.css';

function LayoutAdmin() {
    const dispatch = useDispatch();
    const themeReducer = useSelector((state: RootState) => state.global);

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode');

        const colorClass = localStorage.getItem('colorMode');

        dispatch(globalSlice.actions.setMode(themeClass));

        dispatch(globalSlice.actions.setColor(colorClass));
    }, [dispatch]);

    return (
        <div className='layout-admin'>
            <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                <Sidebar />
                <div className="layout__content">
                    <NavbarAdmin />
                    <div className="layout__content-main">
                        <RoutesAdmin />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutAdmin;
