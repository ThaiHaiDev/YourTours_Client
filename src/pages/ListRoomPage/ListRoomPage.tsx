import { useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useLocation } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// Import css files
import FilterBar from '../../components/FilterBar/FilterBar';
import NavbarFix from '../../components/NavbarFix/NavbarFix';
import RoomItem from '../../components/RoomItem/RoomItem';
import SkeletonRoomItem from '../../components/Skeleton/SkeletonRoomItem';
import filterApi from '../../services/filterApi';
import './ListRoomPage.scss';

const ListRoomPage = () => {
    const [listDataRoom, setListDataRoom] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // URL defauld
    const location = useLocation();
    const queryParams = useMemo(() => {
        return location.search.slice(1);
    }, [location.search]);

    const filterData = (listDataNew: any) => {
        setListDataRoom(listDataNew);
    };

    const [state, setState] = useState<any>({
        items: Array.from({ length: 8 }),
        hasMore: true,
    });

    useEffect(() => {
        setLoading(true);
        filterApi
            .getAllRoomsWithFilter({ queryParams: queryParams !== '' ? queryParams : '', pagi: state.items.length })
            .then((dataResponse: any) => {
                setListDataRoom(dataResponse.data.content);
                setLoading(false);
            });
    }, [queryParams, state.items.length]);
    // console.log(state.items.length, listDataRoom.length);

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        // setTimeout(() => {
        //     if (state.items.length - listDataRoom.length <= 8) {
        //         setState((prevState: any) => {
        //             const newItems = Array.from({ length: 8 });
        //             const items = prevState.items.concat(newItems);
        //             return {
        //                 items,
        //                 hasMore: items.length > listDataRoom.length,
        //             };
        //         });
        //     }
        // }, 1500);
        setTimeout(() => {
            if (listDataRoom.length < state.items.length) {
                // Không cần lấy thêm dữ liệu
                setState((prevState: any) => ({
                    ...prevState,
                    hasMore: false,
                }));
                return;
            }

            // Lấy thêm 8 phần tử tiếp theo
            const newItems = Array.from({ length: 8 });
            setState((prevState: any) => ({
                items: prevState.items.concat(newItems),
                hasMore: true,
            }));
        }, 1500);
    };
    return (
        <div className="list-room__page">
            <div style={{ position: 'fixed', zIndex: '99' }}>
                <NavbarFix />
                <FilterBar
                    filterData={filterData}
                    queryParams={queryParams}
                    pagi={state.items.length}
                    dataQueryDefauld={queryParams}
                />
            </div>
            <div>
                <InfiniteScroll
                    dataLength={listDataRoom.length}
                    next={fetchMoreData}
                    hasMore={state.hasMore}
                    loader={false}
                    scrollableTarget="scrollableDiv"
                    style={{ paddingTop: '160px', zIndex: '-1', margin: '0 100px' }}
                >
                    <div className="row" style={{ margin: 0 }}>
                        {loading ? (
                            <SkeletonRoomItem />
                        ) : (
                            listDataRoom.map((room: any, index: number) => <RoomItem key={index} infoRoom={room} />)
                        )}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default ListRoomPage;
