import React, { useEffect, useState } from 'react';

import format from 'date-fns/format';

import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import DateForStatistic from '../../components/AllAdminComponents/DateForStatistic/DateForStatistic';
import StatusCard from '../../components/AllAdminComponents/Statuscard/Statuscard';
import Table from '../../components/AllAdminComponents/Table/Table';
import { RootState } from '../../redux/store';
import statisticApi from '../../services/statisticApi';
import {
    guestsStatisData,
    numberStatisData,
    ownersStatisData,
    revenueStatisticsResponse,
} from '../../share/models/statisticAdmin';
import './DashboardAdmin.scss';

const topCustomers = {
    head: ['Tên khách hàng', 'Tổng lượt đặt', 'Tổng chi tiêu'],
};

const renderCusomerHead = (item: string, index: number) => <th key={index}>{item}</th>;

const renderCusomerBody = (item: guestsStatisData, index: number) => (
    <tr key={index}>
        <td>{item.fullName}</td>
        <td>{item.numberOfBooking}</td>
        <td>{item.totalCost}</td>
    </tr>
);

const latestOrders = {
    header: ['Tên chủ nhà', 'Số nhà cho thuê', 'Số lượng khách đặt phòng', 'Doanh thu'],
};

const renderOrderHead = (item: string, index: number) => <th key={index}>{item}</th>;

const renderOrderBody = (item: ownersStatisData, index: number) => (
    <tr key={index}>
        <td>{item.fullName}</td>
        <td>{item.numberOfHomes}</td>
        <td>{item.numberOfBooking}</td>
        <td>{item.totalCost}</td>
    </tr>
);

const DashboardAdmin = () => {
    const themeReducer = useSelector((state: RootState) => state.global);
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const [numberStatis, setNumberStatis] = useState<numberStatisData[]>([]);
    const [dataChart, setdataChart] = useState<revenueStatisticsResponse[]>([]);
    const [dataGuests, setDataGuests] = useState<guestsStatisData[]>([]);
    const [dataOwners, setDataOwners] = useState<ownersStatisData[]>([]);
    const [value, setValue] = React.useState('1');
    const [dateStatistic, setDateStatistic] = useState<any>([
        format(firstDay, 'yyyy-MM-dd'),
        format(lastDay, 'yyyy-MM-dd'),
    ]);

    useEffect(() => {
        statisticApi.getStatisticOfAdmin(new Date().getFullYear().toString()).then((dataResponse) => {
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
                    count: dataResponse.data.totalNumberOfRevenue,
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

        statisticApi.getStatisticOfAdminForChart().then((dataResponse) => {
            setdataChart(dataResponse?.data?.revenueStatistics);
        });

        statisticApi.getStatisticOfAdminForGuest(dateStatistic).then((dataResponse) => {
            setDataGuests(dataResponse?.data?.content);
        });

        statisticApi.getStatisticOfAdminForOwner().then((dataResponse) => {
            setDataOwners(dataResponse.data.content);
        });
    }, [dateStatistic]);

    const chartOptions = {
        options: {
            chart: {
                id: 'basic-bar',
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            },
        },
        series: [
            {
                name: 'Doanh thu',
                data: [
                    dataChart.length !== 0 ? dataChart[0]?.amount : 0,
                    dataChart.length !== 0 ? dataChart[1]?.amount : 0,
                    dataChart.length !== 0 ? dataChart[2]?.amount : 0,
                    dataChart.length !== 0 ? dataChart[3]?.amount : 0,
                    dataChart.length !== 0 ? dataChart[4]?.amount : 0,
                    dataChart.length !== 0 ? dataChart[5]?.amount : 0,
                    dataChart.length !== 0 ? dataChart[6]?.amount : 0,
                    dataChart.length !== 0 ? dataChart[7]?.amount : 0,
                    dataChart.length !== 0 ? dataChart[8]?.amount : 0,
                    dataChart.length !== 0 ? dataChart[9]?.amount : 0,
                    dataChart.length !== 0 ? dataChart[10]?.amount : 0,
                    dataChart.length !== 0 ? dataChart[11]?.amount : 0,
                ],
            },
        ],
    };

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handleChangeDayStatistic = (value: any) => {
        const dateFrom = format(value[0].startDate, 'yyyy-MM-dd');
        const dateTo = format(value[0].endDate, 'yyyy-MM-dd');
        setDateStatistic([dateFrom, dateTo]);
    };

    return (
        <div className="dashboard__admin">
            <h2 className="page-header">Dashboard</h2>
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
                    <div className="card-admin-chart">
                        {/* chart */}
                        <Chart
                            options={
                                themeReducer.mode === 'theme-mode-dark'
                                    ? {
                                          ...chartOptions.options,
                                          theme: { mode: 'dark' },
                                      }
                                    : {
                                          ...chartOptions.options,
                                          theme: { mode: 'light' },
                                      }
                            }
                            // options={chartOptions.options}
                            series={chartOptions.series}
                            type="line"
                            height="100%"
                            width="100%"
                        />
                    </div>
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
                                    </div>
                                    <div className="card__body">
                                        <Table
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
                                <h2>gaaa</h2>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;
