import { useState, useEffect } from 'react';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import SelectedLocate from '../../pages/SetupOwner/StepperOne/SelectedLocate';
import filterApi from '../../services/filterApi';
import CheckBox from './CheckBoxFilter/CheckBox';
import CountRoomFilter from './CountRoomFilter/CountRoomFilter';
import './DialogFilter.scss';
import RangePriceFilter from './RangePriceFilter/RangePriceFilter';

export default function DialogFilter(props: any) {
    const [open, setOpen] = useState<boolean>(false);
    const [valuePriceRange, setValuePriceRange] = useState<any>([1, 5000000]);
    const [filterAmenities, setFilterAmenities] = useState<any>([]);
    const [numberOfBed, setNumberOfBed] = useState<string>('');
    const [numberOfBedRoom, setNumberOfBedRoom] = useState<string>('');
    const [numberOfBathRoom, setNumberOfBathRoom] = useState<string>('');
    const [filterProvince, setFilterProvince] = useState<string>('');
    const [dataFilterDefauld, setDataFilterDefauld] = useState<any>({});
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        if (valuePriceRange.slice(0, 9) === 'priceFrom') {
            setFilter(
                `${valuePriceRange}${filterProvince}${numberOfBed}${numberOfBedRoom}${numberOfBathRoom}${filterAmenities}`,
            );
        } else {
            setFilter(`${filterProvince}${numberOfBed}${numberOfBedRoom}${numberOfBathRoom}${filterAmenities}`);
        }
    }, [filterAmenities, valuePriceRange, numberOfBed, numberOfBedRoom, numberOfBathRoom, filterProvince]);

    const handleClickOpen = () => {
        var provinceCode = '';
        var priceFrom = '';
        var priceTo = '';
        var numberOfBed = '';
        var numberOfBedRoom = '';
        var numberOfBathRoom = '';
        if (props.dataQueryDefauld.includes('provinceCode')) {
            var startprovinceCode = props.dataQueryDefauld.indexOf('provinceCode=') + 'provinceCode='.length;
            var endprovinceCode = props.dataQueryDefauld.indexOf('&', startprovinceCode);

            if (startprovinceCode !== -1 && endprovinceCode !== -1) {
                provinceCode = props.dataQueryDefauld.substring(startprovinceCode, endprovinceCode);
            }
        }
        if (props.dataQueryDefauld.includes('priceFrom')) {
            var startpriceFrom = props.dataQueryDefauld.indexOf('priceFrom=') + 'priceFrom='.length;
            var endpriceFrom = props.dataQueryDefauld.indexOf('&', startpriceFrom);

            if (startpriceFrom !== -1 && endpriceFrom !== -1) {
                priceFrom = props.dataQueryDefauld.substring(startpriceFrom, endpriceFrom);
            }
        }
        if (props.dataQueryDefauld.includes('priceTo')) {
            var startpriceTo = props.dataQueryDefauld.indexOf('priceTo=') + 'priceTo='.length;
            var endpriceTo = props.dataQueryDefauld.indexOf('&', startpriceTo);

            if (startpriceTo !== -1 && endpriceTo !== -1) {
                priceTo = props.dataQueryDefauld.substring(startpriceTo, endpriceTo);
            }
        }
        if (props.dataQueryDefauld.includes('numberOfBed')) {
            var startnumberOfBed = props.dataQueryDefauld.indexOf('numberOfBed=') + 'numberOfBed='.length;
            var endnumberOfBed = props.dataQueryDefauld.indexOf('&', startnumberOfBed);

            if (startnumberOfBed !== -1 && endnumberOfBed !== -1) {
                numberOfBed = props.dataQueryDefauld.substring(startnumberOfBed, endnumberOfBed);
            }
        }
        if (props.dataQueryDefauld.includes('numberOfBedRoom')) {
            var startnumberOfBedRoom = props.dataQueryDefauld.indexOf('numberOfBedRoom=') + 'numberOfBedRoom='.length;
            var endnumberOfBedRoom = props.dataQueryDefauld.indexOf('&', startnumberOfBedRoom);

            if (startnumberOfBedRoom !== -1 && endnumberOfBedRoom !== -1) {
                numberOfBedRoom = props.dataQueryDefauld.substring(startnumberOfBedRoom, endnumberOfBedRoom);
            }
        }
        if (props.dataQueryDefauld.includes('numberOfBathRoom')) {
            var startnumberOfBathRoom =
                props.dataQueryDefauld.indexOf('numberOfBathRoom=') + 'numberOfBathRoom='.length;
            var endnumberOfBathRoom = props.dataQueryDefauld.indexOf('&', startnumberOfBathRoom);

            if (startnumberOfBathRoom !== -1 && endnumberOfBathRoom !== -1) {
                numberOfBathRoom = props.dataQueryDefauld.substring(startnumberOfBathRoom, endnumberOfBathRoom);
            }
        }
        setDataFilterDefauld({
            provinceCode,
            priceFrom,
            priceTo,
            numberOfBed,
            numberOfBedRoom,
            numberOfBathRoom,
        });
        console.log('ad', {
            provinceCode,
            priceFrom,
            priceTo,
            numberOfBed,
            numberOfBedRoom,
            numberOfBathRoom,
        });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();

    const handleFilter = () => {
        filterApi.getAllRoomsWithFilter({ queryParams: filter, pagi: props?.pagi }).then((dataResponse: any) => {
            if (props.filterData) {
                props.filterData(dataResponse.data.content);
            }
            navigate({
                search: filter,
            });
            setOpen(false);
        });
    };

    const handleChangePriceRange = (value: number[]) => {
        setValuePriceRange(`priceFrom=${value[0]}&priceTo=${value[1]}&`);
    };

    const handleChangeFilterAmenities = (value: string) => {
        setFilterAmenities(`amenities=${value}&`);
    };
    const handleChangeNumberOfBed = (value: number) => {
        if (value !== 0) {
            setNumberOfBed(`numberOfBed=${value}&`);
        } else {
            setNumberOfBed('');
        }
    };
    const handleChangeNumberOfBedRoom = (value: number) => {
        if (value !== 0) {
            setNumberOfBedRoom(`numberOfBedRoom=${value}&`);
        } else {
            setNumberOfBedRoom('');
        }
    };
    const handleChangeNumberOfBathRoom = (value: number) => {
        if (value !== 0) {
            setNumberOfBathRoom(`numberOfBathRoom=${value}&`);
        } else {
            setNumberOfBathRoom('');
        }
    };
    const handleChangeProvince = (value: any) => {
        if (value) {
            setFilterProvince(`provinceCode=${value}&`);
        } else {
            setFilterProvince('');
        }
    };

    return (
        <div className="dialog-filter">
            <Button variant="outlined" onClick={handleClickOpen} className="btn-show">
                Bộ lọc
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth="md"
            >
                <div>
                    <DialogTitle
                        id="alert-dialog-title"
                        sx={{ fontSize: '18px', fontWeight: 'bold', width: '600px', marginBottom: '20px' }}
                    >
                        {t('common.filter')}
                    </DialogTitle>
                    <DialogContent sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                        Chọn tỉnh thành bạn muốn đến
                        <div style={{ marginTop: '30px' }}>
                            <SelectedLocate
                                setValueStepOne={handleChangeProvince}
                                dataFilterDefauld={dataFilterDefauld}
                            />
                        </div>
                        <br /> <hr />
                    </DialogContent>
                    <DialogContent sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                        {t('label.priceRange')}
                        <div style={{ marginTop: '30px' }}>
                            <RangePriceFilter
                                handleChangePriceRange={handleChangePriceRange}
                                dataFilterDefauld={dataFilterDefauld}
                            />
                        </div>
                        <br /> <hr />
                    </DialogContent>

                    <DialogContent sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                        {t('label.convenient')}
                        <div style={{ marginTop: '30px' }}>
                            <CheckBox setFilterAmenities={handleChangeFilterAmenities} />
                        </div>
                        <hr />
                    </DialogContent>

                    <DialogContent sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                        {t('label.room')}
                        <div style={{ marginTop: '30px', marginBottom: '50px' }}>
                            <CountRoomFilter
                                name={t('label.bedroom')}
                                handleChangeNumberOfBed={handleChangeNumberOfBed}
                                dataFilterDefauld={dataFilterDefauld?.numberOfBed}
                            />
                            <CountRoomFilter
                                name={t('label.bed')}
                                handleChangeNumberOfBedRoom={handleChangeNumberOfBedRoom}
                                dataFilterDefauld={dataFilterDefauld?.numberOfBedRoom}
                            />
                            <CountRoomFilter
                                name={t('label.bathroom')}
                                handleChangeNumberOfBathRoom={handleChangeNumberOfBathRoom}
                                dataFilterDefauld={dataFilterDefauld?.numberOfBathRoom}
                            />
                        </div>
                        <hr />
                    </DialogContent>
                </div>
                <div
                    style={{ position: 'fixed', bottom: 0, marginBottom: '33px', background: 'white', width: '885px' }}
                >
                    <DialogActions>
                        <Button onClick={handleClose} color="error" sx={{ fontSize: '14px' }}>
                            Close
                        </Button>
                        <Button onClick={handleFilter} autoFocus sx={{ fontSize: '14px', textTransform: 'none' }}>
                            OK
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}
