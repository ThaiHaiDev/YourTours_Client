import * as React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import { RootState } from '../../../redux/store';

import statisticApi from '../../../services/statisticApi';
import { revenueStatisticsResponse } from '../../../share/models/statisticAdmin';
import './TabsChart.scss';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            style={{ width: '100%' }}
        >
            {value === index && (
                <Box sx={{ padding: '6px 16px 0px 16px', height: '100%' }}>
                    <Typography sx={{ height: '100%' }}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function TabsChart(props: any) {
    const [value, setValue] = React.useState(0);
    const themeReducer = useSelector((state: RootState) => state.global);

    const [dataChart, setdataChart] = React.useState<revenueStatisticsResponse[]>([]);
    const [dataChartRevenue, setdataChartRevenue] = React.useState<revenueStatisticsResponse[]>([]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        statisticApi.getStatisticOfAdminForChart('BOOKING', props.year).then((dataResponse) => {
            setdataChart(dataResponse?.data?.revenueStatistics);
        });

        statisticApi.getStatisticOfAdminForChart('REVENUE', props.year).then((dataResponse) => {
            setdataChartRevenue(dataResponse?.data?.revenueStatistics);
        });
    }, [props.year]);

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
                name: 'Booking',
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

    const chartOptionsRevenue = {
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
                    dataChartRevenue.length !== 0 ? dataChartRevenue[0]?.amount : 0,
                    dataChartRevenue.length !== 0 ? dataChartRevenue[1]?.amount : 0,
                    dataChartRevenue.length !== 0 ? dataChartRevenue[2]?.amount : 0,
                    dataChartRevenue.length !== 0 ? dataChartRevenue[3]?.amount : 0,
                    dataChartRevenue.length !== 0 ? dataChartRevenue[4]?.amount : 0,
                    dataChartRevenue.length !== 0 ? dataChartRevenue[5]?.amount : 0,
                    dataChartRevenue.length !== 0 ? dataChartRevenue[6]?.amount : 0,
                    dataChartRevenue.length !== 0 ? dataChartRevenue[7]?.amount : 0,
                    dataChartRevenue.length !== 0 ? dataChartRevenue[8]?.amount : 0,
                    dataChartRevenue.length !== 0 ? dataChartRevenue[9]?.amount : 0,
                    dataChartRevenue.length !== 0 ? dataChartRevenue[10]?.amount : 0,
                    dataChartRevenue.length !== 0 ? dataChartRevenue[11]?.amount : 0,
                ],
            },
        ],
    };

    return (
        <div className="tabs-chart">
            <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab
                        label="Đặt phòng"
                        {...a11yProps(0)}
                        sx={{ textTransform: 'none', padding: '5px', fontSize: '12px', fontFamily: 'Roboto' }}
                    />
                    <Tab
                        label="Doanh thu"
                        {...a11yProps(1)}
                        sx={{ textTransform: 'none', padding: '5px', fontSize: '12px', fontFamily: 'Roboto' }}
                    />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <div className="card-admin-chart" style={{ height: '100%' }}>
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
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="card-admin-chart">
                        <Chart
                            options={
                                themeReducer.mode === 'theme-mode-dark'
                                    ? {
                                          ...chartOptionsRevenue.options,
                                          theme: { mode: 'dark' },
                                      }
                                    : {
                                          ...chartOptionsRevenue.options,
                                          theme: { mode: 'light' },
                                      }
                            }
                            // options={chartOptions.options}
                            series={chartOptionsRevenue.series}
                            type="line"
                            height="100%"
                            width="100%"
                        />
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
}
