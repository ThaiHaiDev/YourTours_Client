import { useState, useEffect } from 'react';
import homeApi from '../../services/homeApi';
import HomeAdmin from './HomeAdmin';

const LayoutHomeAdmin = () => {
    const [listHome, setListHome] = useState<any>([]);

    useEffect(() => {
        homeApi.getAllHome().then((dataResponse) => {
            setListHome(dataResponse?.data?.content);
        });
    }, []);

    return <div>{listHome.length !== 0 && <HomeAdmin data={listHome} />}</div>;
};

export default LayoutHomeAdmin;
