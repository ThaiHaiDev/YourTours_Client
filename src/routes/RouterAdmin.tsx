import { Route, Routes } from 'react-router-dom';
import DashboardAdmin from '../pages/DashboardAdmin/DashboardAdmin';
import LayoutAmenityAdmin from '../pages/LayoutAmenityAdmin/LayoutAmenityAdmin';
import LayoutDiscountAdmin from '../pages/LayoutDiscountAdmin/LayoutDiscountAdmin';
import LayoutHomeAdmin from '../pages/LayoutHomeAdmin/LayoutHomeAdmin';
import LayoutSurchargeAdmin from '../pages/LayoutSurchargeAdmin/LayoutSurchargeAdmin';
import LayoutTypeAmenityAdmin from '../pages/LayoutTypeAmenityAdmin/LayoutTypeAmenityAdmin';
import LayoutTypeBedAdmin from '../pages/LayoutTypeBedAdmin/LayoutTypeBedAdmin';
import LayoutTypeRoomAdmin from '../pages/LayoutTypeRoomAdmin/LayoutRoomAdmin';
import LayoutUserAdmin from '../pages/LayoutUserAdmin/LayoutUserAdmin';

const RoutesAdmin = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardAdmin />} />
            <Route path="/customers" element={<LayoutUserAdmin />} />
            <Route path="/house" element={<LayoutHomeAdmin />} />
            <Route path="/roomcategories" element={<LayoutTypeRoomAdmin />} />
            <Route path="/bedcategories" element={<LayoutTypeBedAdmin />} />
            <Route path="/amenity" element={<LayoutAmenityAdmin />} />
            <Route path="/amenitycategories" element={<LayoutTypeAmenityAdmin />} />
            <Route path="/discount" element={<LayoutDiscountAdmin />} />
            <Route path="/surcharge" element={<LayoutSurchargeAdmin />} />
        </Routes>
    );
};

export default RoutesAdmin;
