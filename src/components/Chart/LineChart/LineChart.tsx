import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from 'chart.js';
ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler);

function LineChart(props: any) {
    const data = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Doanh thu theo tháng',
                data: props?.data !== undefined ? [
                    props.data[0].amount,
                    props.data[1].amount,
                    props.data[2].amount,
                    props.data[3].amount,
                    props.data[4].amount,
                    props.data[5].amount,
                    props.data[6].amount,
                    props.data[7].amount,
                    props.data[8].amount,
                    props.data[9].amount,
                    props.data[10].amount,
                    props.data[11].amount,
                ] : [0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0],
                backgroundColor: '#64b5f6',
                borderColor: 'green',
                tension: 0.4,
                fill: true,
                pointStyle: 'rect',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                showLine: true,
            },
        ],
    };
    return (
        <div>
            <Line data={data}>Hello</Line>
        </div>
    );
}

export default LineChart;
