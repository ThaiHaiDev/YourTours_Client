import { useState, useEffect } from "react";
import amenityApi from "../../services/amenityApi";
import AmenityAdmin from "./AmenityAdmin";

const LayoutAmenityAdmin = () => {
    const [listAmenity, setListAmenity] = useState<any>([]);

    useEffect(() => {
        amenityApi.getAllAmenity().then((dataResponse) => {
            setListAmenity(dataResponse.data.content)
        })
    }, [])
    
    return (
        <div>
            {listAmenity.length !== 0 && <AmenityAdmin data={listAmenity} />}
        </div>
    )
}

export default LayoutAmenityAdmin