import React, { useState } from 'react';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import LanguageIcon from '@mui/icons-material/Language';

import { InputLabel, Select, MenuItem } from '@mui/material';

import globalSlice from '../../redux/globalSlice';
import LoadingMaster from '../LoadingMaster/LoadingMaster';
import './LanguageSelected.scss';

const LanguageSelect = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>(localStorage.getItem('i18n') || 'vi');
    const [loadingMaster, setLoadingMaster] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleChange = (event: any) => {
        setSelectedLanguage(event.target.value);
        dispatch(globalSlice.actions.setLanguage(event.target.value));
        setLoadingMaster(true);
        setTimeout(function () {
            document.location = '/';
        }, 200);
    };

    return (
        <div className="language-select-container">
            <LoadingMaster loadingMaster={loadingMaster} />
            <div className="title-language">
                <LanguageIcon className="language-select-icon" />
                <InputLabel className="language-select-label">{t('language.title')}</InputLabel>
            </div>

            <Select className="language-select" value={selectedLanguage} onChange={handleChange}>
                <MenuItem value="en" sx={{ fontFamily: 'serif', fontSize: '12px', padding: '10px 50px 10px 20px' }}>
                    {t('language.en')}
                </MenuItem>
                <MenuItem value="vi" sx={{ fontFamily: 'serif', fontSize: '12px', padding: '10px 50px 10px 20px' }}>
                    {t('language.vi')}
                </MenuItem>
            </Select>
        </div>
    );
};

export default LanguageSelect;
