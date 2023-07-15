import { useState, useEffect, useContext } from 'react';
import homeApi from '../../services/homeApi';
import HomeAdmin from './HomeAdmin';
import { SearchContext } from '../../contexts/searchContext';

const LayoutHomeAdmin = () => {
    const [listHome, setListHome] = useState<any>([]);
    const searchContext = useContext(SearchContext);

    useEffect(() => {
        homeApi.getAllHome(searchContext?.searchText.toLowerCase().toString() || '').then((dataResponse) => {
            setListHome(dataResponse?.data?.content);
            searchContext?.setHanldSearch(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchContext?.hanldSearch]);

    return <div>{<HomeAdmin data={listHome} />}</div>;
};

export default LayoutHomeAdmin;
