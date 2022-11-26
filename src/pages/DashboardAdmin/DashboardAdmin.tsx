import React from 'react';

import { Link } from 'react-router-dom';

import Chart from 'react-apexcharts';

import StatusCard from '../../components/AllAdminComponents/Statuscard/Statuscard';

import Table from '../../components/AllAdminComponents/Table/Table';

import Badge from '../../components/AllAdminComponents/Badge/Badge';

import statusCards from '../../mockdata/status-card-data.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import './DashboardAdmin.scss';

const chartOptions = {
    options: {
        chart: {
            id: 'basic-bar',
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
    },
    series: [
        {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
    ],
};

const topCustomers = {
    head: ['user', 'total orders', 'total spending'],
    body: [
        {
            username: 'john doe',
            order: '490',
            price: '$15,870',
        },
        {
            username: 'frank iva',
            order: '250',
            price: '$12,251',
        },
        {
            username: 'anthony baker',
            order: '120',
            price: '$10,840',
        },
        {
            username: 'frank iva',
            order: '110',
            price: '$9,251',
        },
        {
            username: 'anthony baker',
            order: '80',
            price: '$8,840',
        },
    ],
};

const renderCusomerHead = (item: any, index: any) => <th key={index}>{item}</th>;

const renderCusomerBody = (item: any, index: any) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
);

const latestOrders = {
    header: ['order id', 'user', 'total price', 'date', 'status'],
    body: [
        {
            id: '#OD1711',
            user: 'john doe',
            date: '17 Jun 2021',
            price: '$900',
            status: 'shipping',
        },
        {
            id: '#OD1712',
            user: 'frank iva',
            date: '1 Jun 2021',
            price: '$400',
            status: 'paid',
        },
        {
            id: '#OD1713',
            user: 'anthony baker',
            date: '27 Jun 2021',
            price: '$200',
            status: 'pending',
        },
        {
            id: '#OD1712',
            user: 'frank iva',
            date: '1 Jun 2021',
            price: '$400',
            status: 'paid',
        },
        {
            id: '#OD1713',
            user: 'anthony baker',
            date: '27 Jun 2021',
            price: '$200',
            status: 'refund',
        },
    ],
};

// const orderStatus = {
//     shipping: 'primary',
//     pending: 'warning',
//     paid: 'success',
//     refund: 'danger',
// };

const renderOrderHead = (item: any, index: any) => <th key={index}>{item}</th>;

const renderOrderBody = (item: any, index: any) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type="primary" content={item.status} />
        </td>
    </tr>
);

const DashboardAdmin = () => {
    const themeReducer = useSelector((state: RootState) => state.global);
    
    return (
        <div className='dashboard__admin'>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col l-5">
                    <div className="row">
                        {statusCards.map((item, index) => (
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
                            options={themeReducer.mode === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            // options={chartOptions.options}
                            series={chartOptions.series}
                            type="line"
                            height="100%"
                            width='100%'
                        />
                    </div>
                </div>

                <div className="col l-4">
                    <div className="card-admin">
                        <div className="card__header">
                            <h3>top customers</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item: any, index: any) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
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
                            <h3>latest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item: any, index: any) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
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
