import FilterBar from '../../components/FilterBar/FilterBar';
import './ListRoomPage.scss';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import NavbarFix from '../../components/NavbarFix/NavbarFix';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RoomItem from '../../components/RoomItem/RoomItem';
import SkeletonRoomItem from '../../components/SkeletonRoomItem/SkeletonRoomItem';

const ListRoomPage = () => {
    const style = {
        height: 30,
        border: '1px solid green',
        // margin: 6,
        padding: 8,
    };

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

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
                    <div className="row" style={{margin: 0}}>
                        <SkeletonRoomItem />
                        {state.items.map((i: any, index: number) => (
                            <RoomItem />
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default ListRoomPage;
