import { useState, useEffect, useContext } from 'react';

import { SearchContext } from '../../contexts/searchContext';
import amenityApi from '../../services/amenityApi';
import { AmenityDetail } from '../../share/models/amenities';
import AmenityAdmin from './AmenityAdmin';

const LayoutAmenityAdmin = () => {
    const [listAmenity, setListAmenity] = useState<AmenityDetail[]>([]);
    const searchContext = useContext(SearchContext);

    useEffect(() => {
        amenityApi.getAllAmenity(searchContext?.searchText.toLowerCase().toString() || '').then((dataResponse) => {
            searchContext?.setHanldSearch(false);
            if (dataResponse.data?.content) {
                setListAmenity(dataResponse.data?.content);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchContext?.hanldSearch]);

    const handleChangeData = (data: any) => {
        setListAmenity(data);
    };

    return <div>{<AmenityAdmin data={listAmenity} setList={handleChangeData} />}</div>;
};

export default LayoutAmenityAdmin;
