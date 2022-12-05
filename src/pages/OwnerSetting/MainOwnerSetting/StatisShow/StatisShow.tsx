import { ChangeEvent, useEffect, useState } from 'react';
import LineChart from '../../../../components/Chart/LineChart/LineChart';
import { PieChart } from '../../../../components/Chart/PieChart/PieChart';
import statisticApi from '../../../../services/statisticApi';

import './StatisShow.scss';

const StatisShow = () => {
    const [dataStatis, setDataStatis] = useState<any>();
    const [year, setYear] = useState<number>(0);

    useEffect(() => {
        statisticApi.getStatisticOfHost('').then((dataResponse) => {
            setDataStatis(dataResponse.data);
        });
    }, []);

    const handleChangeYear = (event: ChangeEvent<HTMLInputElement>) => {
        setYear(parseInt(event.currentTarget?.value));
    };

    const handleStatistic = () => {
        statisticApi.getStatisticOfHost(`${year !== 0 ? `?year=${year}` : ''}`).then((dataResponse) => {
            setDataStatis(dataResponse.data);
        });
    };

    return (
        <div className="statis-show">
            <div className="choose-year">
                <input
                    type="number"
                    min={2000}
                    max={2100}
                    defaultValue={2022}
                    className="input-year"
                    onChange={handleChangeYear}
                />
                <button onClick={handleStatistic} className="btn-statistic">
                    Thống kê
                </button>
            </div>
            <div className="row">
                <div className="col l-6">
                    <div className="card-statis">
                        <h3>{`Tổng số khách đã đặt phòng: ${dataStatis?.totalNumberOfBooking}`}</h3>
                    </div>
                </div>
                <div className="col l-6">
                    <div className="card-statis">
                        <h3>{`Tổng số khách đã hoàn thành dịch vụ (không cancel): ${dataStatis?.totalNumberOfBookingFinish}`}</h3>
                    </div>
                </div>
            </div>
            <br /> <br /> <br />
            <div className="row">
                <div className="col l-4">
                    <h2 style={{ marginLeft: '20px' }}>Thông số đặt phòng của từng nhà</h2>
                    <div style={{ padding: '15px' }}>
                        <PieChart data={dataStatis?.homeStatistic} />
                    </div>
                </div>
                <div className="col l-8">
                    <h2>Doanh thu theo tháng</h2>
                    <LineChart data={dataStatis?.revenueStatistics} />
                </div>
            </div>
        </div>
    );
};

export default StatisShow;
