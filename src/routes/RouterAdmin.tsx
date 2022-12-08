import { Route, Routes } from 'react-router-dom';
import DashboardAdmin from '../pages/DashboardAdmin/DashboardAdmin';
import LayoutUserAdmin from '../pages/UserAdmin/LayoutUserAdmin';

const RoutesAdmin = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardAdmin />} />
            <Route path="/customers" element={<LayoutUserAdmin />} />
        </Routes>
    );
};

export default RoutesAdmin;
