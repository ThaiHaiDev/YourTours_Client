import { useState, useEffect } from 'react';
import amenityCategoryApi from '../../services/amenityCategoryApi';
import { AmenityCategoriesModel } from '../../share/models/amenityCategories';
import TypeAmenityAdmin from './TypeAmenityAdmin';

const LayoutTypeAmenityAdmin = () => {
    const [listTypeAmenity, setListTypeAmenity] = useState<AmenityCategoriesModel[]>([]);

    useEffect(() => {
        amenityCategoryApi.getAmenityCategoriesAll().then((dataResponse) => {
            if (dataResponse?.data?.content) {
                setListTypeAmenity(dataResponse?.data?.content);
            }
        });
    }, []);

    const handleChangeData = (data: AmenityCategoriesModel[]) => {
        setListTypeAmenity(data);
    };

    return (
        <div>
            {listTypeAmenity.length !== 0 && <TypeAmenityAdmin data={listTypeAmenity} setList={handleChangeData} />}
        </div>
    );
};

export default LayoutTypeAmenityAdmin;
