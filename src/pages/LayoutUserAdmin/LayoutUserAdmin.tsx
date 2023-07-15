import { useState, useEffect, useContext } from 'react';

import { SearchContext } from '../../contexts/searchContext';
import userApi from '../../services/userApi';
import UserAdmin from './UserAdmin';

const LayoutUserAdmin = () => {
    const searchContext = useContext(SearchContext);
    const [listUser, setListUser] = useState<any>([]);

    useEffect(() => {
        userApi.getAllUser(searchContext?.searchText.toLowerCase().toString() || '').then((dataResponse) => {
            setListUser(dataResponse?.data?.content);
            searchContext?.setHanldSearch(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchContext?.hanldSearch]);

    return (
        <div>
            <UserAdmin data={listUser} />
        </div>
    );
};

export default LayoutUserAdmin;
