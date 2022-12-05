import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import './Sidebar.scss';

import SidebarItem from './SidebarItem';

import SidebarData from '../../../mockdata/sidebarData';

const logo = 'https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg';

const Sidebar = (props: any) => {
    const location = useLocation();
    const activeItem = SidebarData.All.findIndex((item) => item.route === location.pathname);
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>

            <p className="sub__header">Tổng quan</p>
            {SidebarData.Overview.map((item, index) => (
                <Link to={item.route} key={item.id}>
                    <SidebarItem title={item.display_name} icon={item.icon} active={item.id === activeItem} />
                </Link>
            ))}

            <p className="sub__header">Quản lý</p>
            {SidebarData.Manage.map((item, index) => (
                <Link to={item.route} key={item.id}>
                    <SidebarItem title={item.display_name} icon={item.icon} active={item.id === activeItem} />
                </Link>
            ))}

            <p className="sub__header">Cài đặt</p>
            {SidebarData.Setting.map((item, index) => (
                <Link to={item.route} key={item.id}>
                    <SidebarItem title={item.display_name} icon={item.icon} active={item.id === activeItem} />
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
