import { Route, Routes } from 'react-router-dom';
import DashboardAdmin from '../pages/DashboardAdmin/DashboardAdmin';
import UserAdmin from '../pages/UserAdmin/UserAdmin';

const RoutesAdmin = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardAdmin />} />
            <Route path="/customers" element={<UserAdmin />} />
        </Routes>
    );
};

export default RoutesAdmin;
