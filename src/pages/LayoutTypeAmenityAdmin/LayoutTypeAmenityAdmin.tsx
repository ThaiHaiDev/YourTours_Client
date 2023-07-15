import { useState, useEffect, useContext } from 'react';
import amenityCategoryApi from '../../services/amenityCategoryApi';
import { AmenityCategoriesModel } from '../../share/models/amenityCategories';
import TypeAmenityAdmin from './TypeAmenityAdmin';
import { SearchContext } from '../../contexts/searchContext';

const LayoutTypeAmenityAdmin = () => {
    const [listTypeAmenity, setListTypeAmenity] = useState<AmenityCategoriesModel[]>([]);
    const searchContext = useContext(SearchContext);

    useEffect(() => {
        amenityCategoryApi
            .getAmenityCategoriesAll(searchContext?.searchText.toLowerCase().toString() || '')
            .then((dataResponse) => {
                searchContext?.setHanldSearch(false);
                if (dataResponse?.data?.content) {
                    setListTypeAmenity(dataResponse?.data?.content);
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchContext?.hanldSearch]);

    const handleChangeData = (data: AmenityCategoriesModel[]) => {
        setListTypeAmenity(data);
    };

    return <div>{<TypeAmenityAdmin data={listTypeAmenity} setList={handleChangeData} />}</div>;
};

export default LayoutTypeAmenityAdmin;
