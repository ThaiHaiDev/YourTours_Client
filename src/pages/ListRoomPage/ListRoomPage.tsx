import FilterBar from '../../components/FilterBar/FilterBar';
import Navbar from '../../components/Navbar/Navbar';
import './ListRoomPage.scss';

const ListRoomPage = () => {
    return (
        <div className="list-room__page">
            <Navbar />
            <FilterBar />
        </div>
    )
}

export default ListRoomPage