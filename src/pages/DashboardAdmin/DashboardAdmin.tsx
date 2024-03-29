import React, { ChangeEvent, useEffect, useState } from 'react';

import format from 'date-fns/format';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import DateForStatistic from '../../components/AllAdminComponents/DateForStatistic/DateForStatistic';

import StatusCard from '../../components/AllAdminComponents/Statuscard/Statuscard';
import Table from '../../components/AllAdminComponents/Table/Table';
import statisticApi from '../../services/statisticApi';
import {
    guestsStatisData,
    homesStatisData,
    numberStatisData,
    ownersStatisData,
    transactionStatisData,
} from '../../share/models/statisticAdmin';
import format3Dots from '../../utils/format3Dots';
import formatPrice from '../../utils/formatPrice';
import './DashboardAdmin.scss';
import TabsChart from './TabsChart/TabsChart';

const topCustomers = {
    head: ['Tên khách hàng', 'Email', 'Tổng lượt đặt', 'Tổng chi tiêu', 'Đánh giá'],
};

const renderCusomerHead = (item: string, index: number) => <th key={index}>{item}</th>;

const renderCusomerBody = (item: guestsStatisData, index: number) => (
    <tr key={index}>
        <td>{item.fullName}</td>
        <td>{item.email}</td>
        <td>{item.numberOfBooking}</td>
        <td>{formatPrice(item.totalCost)}</td>
        <td>{item.rate ? item.rate : '--'}</td>
    </tr>
);

const latestOrders = {
    header: ['Tên chủ nhà', 'Email', 'Số nhà cho thuê', 'Số lượng khách đặt phòng', 'Doanh thu'],
};

const renderOrderHead = (item: string, index: number) => <th key={index}>{item}</th>;

const renderOrderBody = (item: ownersStatisData, index: number) => (
    <tr key={index}>
        <td>{item.fullName}</td>
        <td>{item.email}</td>
        <td>{item.numberOfHomes}</td>
        <td>{item.numberOfBooking}</td>
        <td>{item.totalCost}</td>
    </tr>
);

const homesHeader = {
    header: [
        'Tên chủ nhà',
        'Tên nhà',
        'Số lượng khách đặt phòng',
        'Lượt xem',
        'Lượt đánh giá',
        'Đánh giá trung bình',
        'Tỉ lệ đặt phòng',
        'Doanh thu',
    ],
};

const renderHomeHead = (item: string, index: number) => <th key={index}>{item}</th>;

const renderHomeBody = (item: homesStatisData, index: number) => (
    <tr key={index}>
        <td>{item.ownerName}</td>
        <td>{format3Dots(item.homeName, 24)}</td>
        <td>{item.numberOfBooking}</td>
        <td>{item.numberOfView}</td>
        <td>{item.numberOfEvaluate}</td>
        <td>{item.averageRate}</td>
        <td>{item.reservationRate ? item.reservationRate.toFixed(2) : 0}</td>
        <td>{item.revenue ? formatPrice(item.revenue) : '--'}</td>
    </tr>
);

const transactionHeader = {
    header: [
        'Tên chủ nhà',
        'Tên khách hàng',
        'Tên nhà thuê',
        'Ngày tạo',
        'Tổng tiền thanh toán',
        'Tiền thụ hưởng admin',
    ],
};

const renderTransactionHead = (item: string, index: number) => <th key={index}>{item}</th>;

const renderTransactionBody = (item: transactionStatisData, index: number) => (
    <tr key={index}>
        <td>{item.ownerName}</td>
        <td>{item.customerName}</td>
        <td>{format3Dots(item.homeName, 24)}</td>
        <td>{item.createdDate}</td>
        <td>{item.totalCost ? formatPrice(item.totalCost) : '--'}</td>
        <td>{item.adminCost ? formatPrice(item.adminCost) : '--'}</td>
    </tr>
);

const DashboardAdmin = () => {
    const date = new Date();
    const firstDay = format(new Date(date.getFullYear(), date.getMonth(), 1), 'yyyy-MM-dd');
    const lastDay = format(new Date(date.getFullYear(), date.getMonth() + 1, 0), 'yyyy-MM-dd');
    const [numberStatis, setNumberStatis] = useState<numberStatisData[]>([
        {
            icon: 'bx bx-user',
            count: 0,
            title: 'Tổng số khách hàng',
        },
        {
            icon: 'bx bx-cart',
            count: 0,
            title: 'Tổng lượt đặt phòng',
        },
        {
            icon: 'bx bx-dollar-circle',
            count: 0,
            title: 'Tổng doanh thu',
        },
        {
            icon: 'bx bx-home-circle',
            count: 0,
            title: 'Tổng số chủ nhà',
        },
    ]);
    const [dataGuests, setDataGuests] = useState<guestsStatisData[]>([]);
    const [dataOwners, setDataOwners] = useState<ownersStatisData[]>([]);
    const [dataHomes, setDataHomes] = useState<homesStatisData[]>([]);
    const [dataTransaction, setDataTransaction] = useState<transactionStatisData[]>([]);
    const [value, setValue] = React.useState('1');
    const [dateStatistic, setDateStatistic] = useState<any>([firstDay, lastDay]);
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        statisticApi.getStatisticOfAdmin(year.toString()).then((dataResponse) => {
            const dataStatistic = [
                {
                    icon: 'bx bx-user',
                    count: dataResponse.data.totalNumberOfGuests,
                    title: 'Tổng số khách hàng',
                },
                {
                    icon: 'bx bx-cart',
                    count: dataResponse.data.totalNumberOfBooking,
                    title: 'Tổng lượt đặt phòng',
                },
                {
                    icon: 'bx bx-dollar-circle',
                    count: `${new Intl.NumberFormat('vi-VN').format(parseInt(dataResponse.data.totalNumberOfRevenue))}`,
                    title: 'Tổng doanh thu',
                },
                {
                    icon: 'bx bx-home-circle',
                    count: dataResponse.data.totalNumberOfOwner,
                    title: 'Tổng số chủ nhà',
                },
            ];
            setNumberStatis(dataStatistic);
        });

        statisticApi.getStatisticOfAdminForGuest(dateStatistic).then((dataResponse) => {
            setDataGuests(dataResponse?.data?.content);
        });

        statisticApi.getStatisticOfAdminForOwner(dateStatistic).then((dataResponse) => {
            setDataOwners(dataResponse.data.content);
        });

        statisticApi.getStatisticOfAdminForHome(dateStatistic).then((dataResponse) => {
            setDataHomes(dataResponse.data.content);
        });

        statisticApi.getStatisticOfTransaction(dateStatistic).then((dataResponse) => {
            setDataTransaction(dataResponse.data.content);
        });
    }, [dateStatistic, year]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handleChangeDayStatistic = (value: any) => {
        // const dateFrom = format(value[0].startDate, 'yyyy-MM-dd');
        // const dateTo = format(value[0].endDate, 'yyyy-MM-dd');
        const dateFrom = value[0].startDate;
        const dateTo = value[0].endDate;
        setDateStatistic([dateFrom, dateTo]);
    };

    const handleChangeYear = (event: ChangeEvent<HTMLInputElement>) => {
        setYear(parseInt(event.currentTarget?.value));
    };

    return (
        <div className="dashboard__admin">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2 className="page-header">Dashboard</h2>
                <div className="choose-year">
                    <h2>Chọn năm thống kê:</h2>
                    <input
                        type="number"
                        min={2000}
                        max={2100}
                        defaultValue={currentYear}
                        className="input-year"
                        onChange={handleChangeYear}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col l-5">
                    <div className="row">
                        {numberStatis?.map((item: numberStatisData, index: number) => (
                            <div className="col l-6" key={index}>
                                <StatusCard icon={item.icon} count={item.count} title={item.title} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col l-7" style={{ paddingBottom: '30px' }}>
                    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}>
                        <TabsChart year={year} />
                    </Box>
                </div>

                <div className="col l-12">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab
                                        label="Thống kê khách"
                                        value="1"
                                        sx={{ textTransform: 'none', fontSize: '14px' }}
                                    />
                                    <Tab
                                        label="Thống kê chủ nhà"
                                        value="2"
                                        sx={{ textTransform: 'none', fontSize: '14px' }}
                                    />
                                    <Tab
                                        label="Thống kê nhà"
                                        value="3"
                                        sx={{ textTransform: 'none', fontSize: '14px' }}
                                    />
                                    <Tab label="Giao dịch" value="4" sx={{ textTransform: 'none', fontSize: '14px' }} />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className="card-admin">
                                    <div className="card__header">
                                        <h3>Khách hàng thân thiết</h3>
                                        <DateForStatistic
                                            size="horizontal"
                                            setDataDay={handleChangeDayStatistic}
                                            dateStart={firstDay}
                                            dateEnd={lastDay}
                                        />
                                    </div>
                                    <div className="card__body">
                                        <Table
                                            limit="5"
                                            headData={topCustomers.head}
                                            renderHead={(item: string, index: number) => renderCusomerHead(item, index)}
                                            bodyData={dataGuests}
                                            renderBody={(item: guestsStatisData, index: number) =>
                                                renderCusomerBody(item, index)
                                            }
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div className="card-admin">
                                    <div className="card__header">
                                        <h3>Chủ nhà cho thuê tốt nhất</h3>
                                        <DateForStatistic
                                            size="horizontal"
                                            setDataDay={handleChangeDayStatistic}
                                            dateStart={firstDay}
                                            dateEnd={lastDay}
                                        />
                                    </div>
                                    <div className="card__body">
                                        <Table
                                            limit="5"
                                            headData={latestOrders.header}
                                            renderHead={(item: string, index: number) => renderOrderHead(item, index)}
                                            bodyData={dataOwners}
                                            renderBody={(item: ownersStatisData, index: number) =>
                                                renderOrderBody(item, index)
                                            }
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="3">
                                <div className="card-admin">
                                    <div className="card__header">
                                        <h3>Thống kê nhà</h3>
                                        <DateForStatistic
                                            size="horizontal"
                                            setDataDay={handleChangeDayStatistic}
                                            dateStart={firstDay}
                                            dateEnd={lastDay}
                                        />
                                    </div>
                                    <div className="card__body">
                                        <Table
                                            limit="5"
                                            headData={homesHeader.header}
                                            renderHead={(item: string, index: number) => renderHomeHead(item, index)}
                                            bodyData={dataHomes}
                                            renderBody={(item: ownersStatisData, index: number) =>
                                                renderHomeBody(item, index)
                                            }
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="4">
                                <div className="card-admin">
                                    <div className="card__header">
                                        <h3>Thống kê giao dịch</h3>
                                        <DateForStatistic
                                            size="horizontal"
                                            setDataDay={handleChangeDayStatistic}
                                            dateStart={firstDay}
                                            dateEnd={lastDay}
                                        />
                                    </div>
                                    <div className="card__body">
                                        <Table
                                            limit="5"
                                            headData={transactionHeader.header}
                                            renderHead={(item: string, index: number) =>
                                                renderTransactionHead(item, index)
                                            }
                                            bodyData={dataTransaction}
                                            renderBody={(item: transactionStatisData, index: number) =>
                                                renderTransactionBody(item, index)
                                            }
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;
