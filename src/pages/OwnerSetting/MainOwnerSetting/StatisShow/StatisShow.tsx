import LineChart from '../../../../components/Chart/LineChart/LineChart';
import { PieChart } from '../../../../components/Chart/PieChart/PieChart';

import './StatisShow.scss';

const StatisShow = () => {
    return (
        <div className="statis-show">
            <div className="row">
                <div className="col l-6">
                    <div className="card-statis">
                        <h3>Tổng số khách đã đặt phòng: </h3>
                    </div>
                </div>
                <div className="col l-6">
                    <div className="card-statis">
                        <h3>Tổng số khách đã hoàn thành dịch vụ (không cancel): </h3>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col l-4">
                    <h2>Thông số đặt phòng của từng nhà</h2>
                    <div style={{ padding: '15px' }}>
                        <PieChart />
                    </div>
                </div>
                <div className="col l-8">
                    <h2>Doanh thu theo tháng</h2>
                    <LineChart />
                </div>
            </div>
        </div>
    );
};

export default StatisShow;
