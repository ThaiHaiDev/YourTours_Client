import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import notificationSlice from '../../redux/notificationSlice';
import { RootState } from '../../redux/store';
import notificationApi from '../../services/notificationApi';
import './BellRing.scss';

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

const BellRing = (props: any) => {
    const [dataNoti, setDataNoti] = useState<any>([]);
    const dropdown_toggle_el = useRef(null);
    const dropdown_content_el = useRef(null);
    const user = useSelector((state: RootState) => state.user);
    const noti = useSelector((state: RootState) => state.notification);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user.current.id) {
            notificationApi.getNotificationForUser().then((dataRes: any) => {
                setDataNoti(dataRes.data.content);
            });
        }
    }, [user]);

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

    const handleResetNoti = () => {
        if (noti.numberOfNotification !== 0) {
            notificationApi.resetNumberNotification('').then(() => {
                dispatch(notificationSlice.actions.subscribeNumberOfNotification(0));
            });
        }
    };

    return (
        <>
            {user.current.id ? (
                <div className="bell-ring" onClick={handleResetNoti}>
                    <button ref={dropdown_toggle_el} className="dropdown__toggle">
                        {props.icon ? <i className={props.icon}></i> : ''}
                        {props.badge ? <span className="dropdown__toggle-badge">{props.badge}</span> : ''}
                        {props.customToggle ? props.customToggle() : ''}
                    </button>
                    <div ref={dropdown_content_el} className="dropdown__content">
                        {props.contentData && props.renderItems
                            ? dataNoti.map((item: any, index: any) => props.renderItems(item, index))
                            : ''}
                        {props.renderFooter ? <div className="dropdown__footer">{props.renderFooter()}</div> : ''}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default BellRing;
