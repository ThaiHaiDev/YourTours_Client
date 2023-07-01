import { useState, useEffect, useContext } from 'react';
import bedApi from '../../services/bedApi';
import TypeBedAdmin from './TypeBedAdmin';
import { SearchContext } from '../../contexts/searchContext';

const LayoutTypeBedAdmin = () => {
    const [listTypeBed, setListTypeBed] = useState<any>([]);
    const searchContext = useContext(SearchContext);

    useEffect(() => {
        bedApi.getAllTypeBed(searchContext?.searchText.toLowerCase().toString() || '').then((dataResponse) => {
            setListTypeBed(dataResponse?.data?.content);
            searchContext?.setHanldSearch(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchContext?.hanldSearch]);

    const handleChangeData = (data: any) => {
        setListTypeBed(data);
    };

    return <div>{<TypeBedAdmin data={listTypeBed} setList={handleChangeData} />}</div>;
};

export default LayoutTypeBedAdmin;
