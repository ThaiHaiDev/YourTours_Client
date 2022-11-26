import React, { useRef, useState, useEffect } from 'react';

import './Thememenu.scss';

import { useDispatch } from 'react-redux';

import globalSlice from '../../../redux/globalSlice';

const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light',
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark',
    },
];

const color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue',
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red',
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan',
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green',
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange',
    },
];

const clickOutsideRef = (content_ref: any, toggle_ref: any) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active');
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active');
            }
        }
    });
};

const ThemeMenu = () => {
    const menu_ref = useRef<HTMLDivElement>(null);
    const menu_toggle_ref = useRef<HTMLDivElement>(null);

    clickOutsideRef(menu_ref, menu_toggle_ref);

    const setActiveMenu = () => {
       setHidden(false)
    };

    const closeMenu = () => {
        setHidden(true)
    }

    const [currMode, setcurrMode] = useState<string>('light');

    const [currColor, setcurrColor] = useState('blue');

    const [hidden, setHidden] = useState<Boolean>(true);

    const dispatch = useDispatch();

    const setMode = (mode: any) => {
        setcurrMode(mode.id);
        localStorage.setItem('themeMode', mode.class);
        dispatch(globalSlice.actions.setMode(mode.class));
    };

    const setColor = (color: any) => {
        setcurrColor(color.id);
        localStorage.setItem('colorMode', color.class);
        dispatch(globalSlice.actions.setColor(color.class));
    };

    useEffect(() => {
        const themeClass = mode_settings.find((e) => e.id === localStorage.getItem('themeMode'));

        const colorClass = color_settings.find((e) => e.class === localStorage.getItem('colorMode'));

        if (themeClass !== undefined) setcurrMode(themeClass.id);

        if (colorClass !== undefined) setcurrColor(colorClass.id);
    }, []);

    return (
        <div>
            <button className="dropdown__toggle" onClick={() => setActiveMenu()}>
                <i className="bx bx-palette"></i>
            </button>

            <div className={`theme-menu ${!hidden && 'active'}`}>
                        <h4>Theme settings</h4>
                        <button className="theme-menu__close" onClick={() => closeMenu()}>
                            <i className="bx bx-x"></i>
                        </button>
                        <div className="theme-menu__select">
                            <span>Choose mode</span>
                            <ul className="mode-list">
                                {mode_settings.map((item, index) => (
                                    <li key={index} onClick={() => setMode(item)}>
                                        <div
                                            className={`mode-list__color ${item.background} ${
                                                item.id === currMode ? 'active' : ''
                                            }`}
                                        >
                                            <i className="bx bx-check"></i>
                                        </div>
                                        <span>{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="theme-menu__select">
                            <span>Choose color</span>
                            <ul className="mode-list">
                                {color_settings.map((item, index) => (
                                    <li key={index} onClick={() => setColor(item)}>
                                        <div
                                            className={`mode-list__color ${item.background} ${
                                                item.id === currColor ? 'active' : ''
                                            }`}
                                        >
                                            <i className="bx bx-check"></i>
                                        </div>
                                        <span>{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
        </div>
    );
};

export default ThemeMenu;
