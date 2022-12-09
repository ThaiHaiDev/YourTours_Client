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
    console.log(listDiscount)
    
    return (
        <div>
            {listDiscount.length !== 0 && <DiscountAdmin data={listDiscount} />}
        </div>
    )
}

export default LayoutDiscountAdmin