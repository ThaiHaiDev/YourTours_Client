import { useState, useEffect, useContext } from 'react';
import surchargeApi from '../../services/surchargeApi';
import SurchargeAdmin from './SurchargeAdmin';
import { SearchContext } from '../../contexts/searchContext';

const LayoutSurchargeAdmin = () => {
    const [listSurcharge, setListSurcharge] = useState<any>([]);
    const searchContext = useContext(SearchContext);

    useEffect(() => {
        surchargeApi.getAllSurcharge(searchContext?.searchText.toLowerCase().toString() || '').then((dataResponse) => {
            setListSurcharge(dataResponse?.data?.content);
            searchContext?.setHanldSearch(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchContext?.hanldSearch]);

    const handleChangeData = (data: any) => {
        setListSurcharge(data);
    };

    return <div>{<SurchargeAdmin data={listSurcharge} setList={handleChangeData} />}</div>;
};

export default LayoutSurchargeAdmin;
