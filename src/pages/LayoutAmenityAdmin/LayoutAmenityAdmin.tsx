import { useState, useEffect } from 'react';
import amenityApi from '../../services/amenityApi';
import { AmenityDetail } from '../../share/models/amenities';
import AmenityAdmin from './AmenityAdmin';

const LayoutAmenityAdmin = () => {
    const [listAmenity, setListAmenity] = useState<AmenityDetail[]>([]);

    useEffect(() => {
        amenityApi.getAllAmenity().then((dataResponse) => {
            if (dataResponse.data?.content) {
                setListAmenity(dataResponse.data?.content);
            }
        });
    }, []);

    const handleChangeData = (data: any) => {
        setListAmenity(data);
    };

    return <div>{listAmenity.length !== 0 && <AmenityAdmin data={listAmenity} setList={handleChangeData} />}</div>;
};

export default LayoutAmenityAdmin;
