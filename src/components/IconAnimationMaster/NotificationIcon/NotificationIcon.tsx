import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import Bell from '../../../assets/img/bell.jpg';
import audioFile from '../../../assets/music/2.mp3';
import { RootState } from '../../../redux/store';

import './NotificationIcon.scss';

const NotificationIcon = () => {
    const notiData = useSelector((state: RootState) => state.notification);
    const audioRef = useRef<any>(null);

    useEffect(() => {
        if (notiData.notiKey) {
            audioRef.current.play().catch((error: any) => {
                // Autoplay was prevented, handle the error or show a user interaction prompt.
            });
        } else {
            audioRef.current.stop().catch((error: any) => {
                // Autoplay was prevented, handle the error or show a user interaction prompt.
            });
        }
    }, [notiData.notiKey]);

    return (
        <div>
            <img src={Bell} alt="noti" className="bell" />
            <audio src={audioFile} controls ref={audioRef} style={{ display: 'none' }}>
                test
            </audio>
        </div>
    );
};

export default NotificationIcon;
