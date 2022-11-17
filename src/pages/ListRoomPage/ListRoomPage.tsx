import FilterBar from '../../components/FilterBar/FilterBar';
import './ListRoomPage.scss';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import NavbarFix from '../../components/NavbarFix/NavbarFix';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RoomItem from '../../components/RoomItem/RoomItem';
import SkeletonRoomItem from '../../components/Skeleton/SkeletonRoomItem';
import filterApi from '../../services/filterApi';

const ListRoomPage = () => {
    const [listDataRoom, setListDataRoom] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        filterApi.getAllRoomsNew().then((dataResponse: any) => {
            setListDataRoom(dataResponse.data.content)
            setLoading(false)
        })
    }, [])

    const [state, setState] = useState<any>({
        items: Array.from({ length: 20 }),
    });

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setState({
                items: state.items.concat(Array.from({ length: 20 })),
            });
        }, 1500);
    };
    return (
        <div className="list-room__page">
            <NavbarFix />
            <FilterBar />
            <div>
                <InfiniteScroll
                    dataLength={state.items.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                    style={{ paddingTop: '160px', zIndex: '-1', margin: '0 100px' }}
                >
                    <div className="row" style={{ margin: 0 }}>
                        
                        {loading ?  <SkeletonRoomItem /> : listDataRoom.map((room: any, index: number) => (
                            <RoomItem key={index} infoRoom={room} />
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default ListRoomPage;
