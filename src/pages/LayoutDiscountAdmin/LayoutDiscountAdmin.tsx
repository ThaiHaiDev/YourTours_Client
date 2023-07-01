import { useState, useEffect, useContext } from 'react';
import discountApi from '../../services/discountApi';
import DiscountAdmin from './DiscountAdmin';
import { SearchContext } from '../../contexts/searchContext';

const LayoutDiscountAdmin = () => {
    const [listDiscount, setListDiscount] = useState<any>([]);
    const searchContext = useContext(SearchContext);

    useEffect(() => {
        discountApi.getAllDiscount(searchContext?.searchText.toLowerCase().toString() || '').then((dataResponse) => {
            setListDiscount(dataResponse?.data?.content);
            searchContext?.setHanldSearch(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchContext?.hanldSearch]);

    const handleChangeData = (data: any) => {
        setListDiscount(data);
    };

    return <div>{<DiscountAdmin data={listDiscount} setList={handleChangeData} />}</div>;
};

export default LayoutDiscountAdmin;
