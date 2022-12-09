import { useState, useEffect } from "react";
import surchargeApi from "../../services/surchargeApi";
import SurchargeAdmin from "./SurchargeAdmin";

const LayoutSurchargeAdmin = () => {
    const [listSurcharge, setListSurcharge] = useState<any>([]);

    useEffect(() => {
        surchargeApi.getAllSurcharge().then((dataResponse) => {
            setListSurcharge(dataResponse.data.content)
        })
    }, [])

    console.log(listSurcharge)
    
    return (
        <div>
            {listSurcharge.length !== 0 && <SurchargeAdmin data={listSurcharge} />}
        </div>
    )
}

export default LayoutSurchargeAdmin