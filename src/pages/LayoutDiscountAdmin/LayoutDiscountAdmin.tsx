import { useState, useEffect } from "react";
import discountApi from "../../services/discountApi";
import DiscountAdmin from "./DiscountAdmin";

const LayoutDiscountAdmin = () => {
    const [listDiscount, setListDiscount] = useState<any>([]);

    useEffect(() => {
        discountApi.getAllDiscount().then((dataResponse) => {
            setListDiscount(dataResponse.data.content)
        })
    }, [])
    
    const handleChangeData = (data : any) => {
        setListDiscount(data)
    }
    
    return (
        <div>
            {listDiscount.length !== 0 && <DiscountAdmin data={listDiscount} setList={handleChangeData}/>}
        </div>
    )
}

export default LayoutDiscountAdmin