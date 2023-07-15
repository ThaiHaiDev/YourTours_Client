import { useState, useEffect, useContext } from 'react';
import roomCategoryApi from '../../services/roomCategoryApi';
import TypeRoomAdmin from './RoomAdmin';
import { SearchContext } from '../../contexts/searchContext';

const LayoutTypeRoomAdmin = () => {
    const [listTypeRoom, setListTypeRoom] = useState<any>([]);
    const searchContext = useContext(SearchContext);

    useEffect(() => {
        roomCategoryApi
            .getAllRoomCategory(searchContext?.searchText.toLowerCase().toString() || '')
            .then((dataResponse) => {
                setListTypeRoom(dataResponse?.data?.content);
                searchContext?.setHanldSearch(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchContext?.hanldSearch]);

    const handleChangeData = (data: any) => {
        setListTypeRoom(data);
    };

    return <div>{<TypeRoomAdmin data={listTypeRoom} setListTypeRoom={handleChangeData} />}</div>;
};

export default LayoutTypeRoomAdmin;
