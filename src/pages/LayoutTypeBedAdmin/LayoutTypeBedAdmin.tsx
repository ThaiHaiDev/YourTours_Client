import { useState, useEffect } from "react";
import bedApi from "../../services/bedApi";
import TypeBedAdmin from "./TypeBedAdmin";

const LayoutTypeBedAdmin = () => {
    const [listTypeBed, setListTypeBed] = useState<any>([]);

    useEffect(() => {
        bedApi.getAllTypeBed().then((dataResponse) => {
            setListTypeBed(dataResponse.data.content)
        })
    }, [])
    
    return (
        <div>
            {listTypeBed.length !== 0 && <TypeBedAdmin data={listTypeBed} />}
        </div>
    )
}

export default LayoutTypeBedAdmin