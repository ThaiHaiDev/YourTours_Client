import React, { useState, useRef } from 'react';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import LanguageIcon from '@mui/icons-material/Language';

import { InputLabel } from '@mui/material';

import en from '../../assets/imgMaster/en.png';
import vi from '../../assets/imgMaster/vi.png';

import globalSlice from '../../redux/globalSlice';
import LoadingMaster from '../LoadingMaster/LoadingMaster';
import './LanguageSelected.scss';

const LanguageSelect = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>(localStorage.getItem('i18n') || 'vi');
    const [loadingMaster, setLoadingMaster] = useState<boolean>(false);
    const dispatch = useDispatch();

    const dropdown_toggle_el = useRef<any>(null);
    const dropdown_content_el = useRef<any>(null);

    const handleChange = (value: any) => {
        setSelectedLanguage(value);
        dispatch(globalSlice.actions.setLanguage(value));
        setLoadingMaster(true);
        setTimeout(function () {
            document.location = '/';
        }, 200);
    };

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

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

    return (
        <div className="language-select-container">
            <LoadingMaster loadingMaster={loadingMaster} />
            <div className="title-language">
                <LanguageIcon className="language-select-icon" />
                <InputLabel className="language-select-label">{t('language.title')}</InputLabel>
            </div>

            <div className="bell-ring">
                <button ref={dropdown_toggle_el} className="dropdown__toggle">
                    {selectedLanguage === 'vi' ? <img src={vi} alt="vietnam" /> : <img src={en} alt="english" />}
                </button>
                <div ref={dropdown_content_el} className={`dropdown__content`} style={{ width: '200px' }}>
                    <div className="header__noti">
                        <h2 style={{ marginTop: '3px', marginBottom: '8px' }}>{t('language.selectTitle')}</h2>
                    </div>
                    <hr style={{ border: '0.2px solid #e0e0e0', padding: '0px 18px' }} />
                    <div className="list-language">
                        <div className="item-language" onClick={() => handleChange('vi')}>
                            <img src={vi} alt="vietnam" />
                            <p>Tiếng Việt</p>
                        </div>
                        <div className="item-language" onClick={() => handleChange('en')}>
                            <img src={en} alt="english" />
                            <p>English (UK)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Select className="language-select" value={selectedLanguage} onChange={handleChange}>
                <MenuItem value="en" sx={{ fontFamily: 'serif', fontSize: '12px', padding: '10px 50px 10px 20px' }}>
                    {t('language.en')}
                </MenuItem>
                <MenuItem value="vi" sx={{ fontFamily: 'serif', fontSize: '12px', padding: '10px 50px 10px 20px' }}>
                    {t('language.vi')}
                </MenuItem>
            </Select> */}
        </div>
    );
};

export default LanguageSelect;
