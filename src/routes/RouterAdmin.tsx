import { Route, Routes } from 'react-router-dom';
import DashboardAdmin from '../pages/DashboardAdmin/DashboardAdmin';

const RoutesAdmin = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardAdmin />} />
        </Routes>
    );
};

export default RoutesAdmin;
