import * as React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import ListDataNull from '../../../components/ListDataNull/ListDataNull';
import summaryHomeApi from '../../../services/summaryHostApi';
import StatisShow from './StatisShow/StatisShow';
import TableDataHostSummary from './TableDataHostSummary';

export default function TabComponent() {
    const [value, setValue] = React.useState('1');
    const [dataWaiting, setDataWaiting] = React.useState<any>([]);
    const [dataCheckIn, setDataCheckIn] = React.useState<any>([]);

    React.useEffect(() => {
        summaryHomeApi.getWaiting().then((dataResponse) => {
            setDataWaiting(dataResponse?.data?.content);
        });

        summaryHomeApi.getCheckIn().then((dataResponse) => {
            setDataCheckIn(dataResponse?.data?.content);
        });
    }, []);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Sắp nhận phòng" value="1" />
                        <Tab label="Hiện đang đón tiếp" value="2" />
                        <Tab label="Thống kê" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    {dataWaiting.length !== 0 ? (
                        <TableDataHostSummary data={dataWaiting} idTab="0" setDataCheckIn={setDataCheckIn} />
                    ) : (
                        <ListDataNull />
                    )}
                </TabPanel>
                <TabPanel value="2">
                    {dataCheckIn.length !== 0 ? (
                        <TableDataHostSummary data={dataCheckIn} idTab="1" />
                    ) : (
                        <ListDataNull />
                    )}
                </TabPanel>
                <TabPanel value="3">
                    <StatisShow />
                </TabPanel>
            </TabContext>
        </Box>
    );
}
