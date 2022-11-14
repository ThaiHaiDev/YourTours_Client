import CalendarSetting from '../../../components/HostSetting/CalendarSetting/CalendarSetting';
import NavbarOwner from '../../../components/NavbarOwner/NavbarOwner';
import './CalendarRoomSetting.scss';

const CalendarRoomSetting = () => {
    return (
        <div className="calendar-room__setting">
            <NavbarOwner />
            <CalendarSetting />
        </div>
    );
};

export default CalendarRoomSetting;
