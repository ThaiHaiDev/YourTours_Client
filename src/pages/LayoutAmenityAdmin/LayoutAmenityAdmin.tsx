import { useState, useEffect } from "react";
import userApi from "../../services/userApi";
import AmenityAdmin from "./AmenityAdmin";

const LayoutAmenityAdmin = () => {
    const [listAmenity, setListAmenity] = useState<any>([]);

    useEffect(() => {
        userApi.getAllUser().then((dataResponse) => {
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