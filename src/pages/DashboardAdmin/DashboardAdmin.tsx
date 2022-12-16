import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Chart from 'react-apexcharts';

import StatusCard from '../../components/AllAdminComponents/Statuscard/Statuscard';

import Table from '../../components/AllAdminComponents/Table/Table';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import './DashboardAdmin.scss';
import statisticApi from '../../services/statisticApi';

const topCustomers = {
    head: ['Tên khách hàng', 'Tổng lượt đặt', 'Tổng chi tiêu'],
};

const renderCusomerHead = (item: any, index: any) => <th key={index}>{item}</th>;

const renderCusomerBody = (item: any, index: any) => (
    <tr key={index}>
        <td>{item.fullName}</td>
        <td>{item.numberOfBooking}</td>
        <td>{item.totalCost}</td>
    </tr>
);

const latestOrders = {
    header: ['Tên chủ nhà', 'Số nhà cho thuê', 'Số lượng khách đặt phòng', 'Doanh thu'],
};

const renderOrderHead = (item: any, index: any) => <th key={index}>{item}</th>;

const renderOrderBody = (item: any, index: any) => (
    <tr key={index}>
        <td>{item.fullName}</td>
        <td>{item.numberOfHomes}</td>
        <td>{item.numberOfBooking}</td>
        <td>{item.totalCost}</td>
    </tr>
);

const DashboardAdmin = () => {
    const themeReducer = useSelector((state: RootState) => state.global);

    const [numberStatis, setNumberStatis] = useState<any>([]);
    const [dataChart, setDataChart] = useState<any>([]);
    const [dataGuests, setDataGuests] = useState<any>([]);
    const [dataOwners, setDataOwners] = useState<any>([]);

    useEffect(() => {
        statisticApi.getStatisticOfAdmin().then((dataResponse) => {
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
            setDataChart(dataResponse.data.revenueStatistics);
        });

        statisticApi.getStatisticOfAdminForGuest().then((dataResponse) => {
            setDataGuests(dataResponse.data.content);
        });

        statisticApi.getStatisticOfAdminForOwner().then((dataResponse) => {
            setDataOwners(dataResponse.data.content);
            console.log(dataResponse.data.content);
        });
    }, []);

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
                    dataChart[0]?.amount,
                    dataChart[1]?.amount,
                    dataChart[2]?.amount,
                    dataChart[3]?.amount,
                    dataChart[4]?.amount,
                    dataChart[5]?.amount,
                    dataChart[6]?.amount,
                    dataChart[7]?.amount,
                    dataChart[8]?.amount,
                    dataChart[9]?.amount,
                    dataChart[10]?.amount,
                    dataChart[11]?.amount,
                ],
            },
        ],
    };

    return (
        <div className="dashboard__admin">
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col l-5">
                    <div className="row">
                        {numberStatis?.map((item: any, index: number) => (
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

                <div className="col l-4">
                    <div className="card-admin">
                        <div className="card__header">
                            <h3>Khách hàng thân thiết</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item: any, index: any) => renderCusomerHead(item, index)}
                                bodyData={dataGuests}
                                renderBody={(item: any, index: any) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col l-8">
                    <div className="card-admin">
                        <div className="card__header">
                            <h3>Chủ nhà cho thuê tốt nhất</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item: any, index: any) => renderOrderHead(item, index)}
                                bodyData={dataOwners}
                                renderBody={(item: any, index: any) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;
