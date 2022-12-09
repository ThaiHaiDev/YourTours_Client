import { useState, useEffect } from "react";
import amenityCategoryApi from "../../services/amenityCategoryApi";
import TypeAmenityAdmin from "./TypeAmenityAdmin";

const LayoutTypeAmenityAdmin = () => {
    const [listTypeAmenity, setListTypeAmenity] = useState<any>([]);

    useEffect(() => {
        amenityCategoryApi.getAmenityCategoriesAll().then((dataResponse) => {
            setListTypeAmenity(dataResponse.data.content)
        })
    }, [])
    
    return (
        <div>
            {listTypeAmenity.length !== 0 && <TypeAmenityAdmin data={listTypeAmenity} />}
        </div>
    )
}

export default LayoutTypeAmenityAdmin