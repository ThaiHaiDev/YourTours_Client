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

    const handleChangeData = (data : any) => {
        setListTypeAmenity(data)
    }
    
    return (
        <div>
            {listTypeAmenity.length !== 0 && <TypeAmenityAdmin data={listTypeAmenity} setList={handleChangeData}/>}
        </div>
    )
}

export default LayoutTypeAmenityAdmin