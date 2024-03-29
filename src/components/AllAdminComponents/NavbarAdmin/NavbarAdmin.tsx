import React, { ChangeEvent, useContext, KeyboardEvent } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { SearchContext } from '../../../contexts/searchContext';
import { setupQuerySearch } from '../../../helpers/setupQuerySearch';
import user_menu from '../../../mockdata/user_menus.json';
import { RootState } from '../../../redux/store';
import Dropdown from '../DropdownAdmin/DropdownAdmin';
import ThemeMenu from '../Thememenu/Thememenu';
import './NavbarAdmin.scss';

const renderUserToggle = (user: any) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">{user.display_name}</div>
    </div>
);

const renderUserMenu = (item: any, index: any) => (
    <Link to="/" key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
);

const NavbarAdmin = () => {
    const userLogin = useSelector((state: RootState) => state.user);
    const location = useLocation();
    const dataSetupSearch = setupQuerySearch(location.pathname);

    const curr_user = {
        display_name: userLogin.current.fullName,
        image: 'https://avatars.githubusercontent.com/u/85157423?v=4',
    };

    const searchContext = useContext(SearchContext);

    const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        searchContext?.setSearchText(event.currentTarget?.value);
    };
    const handleSeach = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            searchContext?.setHanldSearch(true);
        }
    };

    return (
        <div className="topnav-admin">
            {dataSetupSearch.isShow ? (
                <div className="topnav__search">
                    <input
                        type="text"
                        placeholder={dataSetupSearch.title}
                        onChange={searchChangeHandler}
                        onKeyDown={handleSeach}
                        value={searchContext?.searchText}
                    />
                    <i className="bx bx-search"></i>
                </div>
            ) : (
                <></>
            )}

            <div style={{ marginTop: '20px' }}>{/* <FilterAdmin /> */}</div>

            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item: any, index: any) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu />
                </div>
            </div>
        </div>
    );
};

export default NavbarAdmin;
