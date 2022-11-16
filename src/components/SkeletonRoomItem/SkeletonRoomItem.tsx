import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonRoomItem() {
    return (
        <div className="col l-3 m-6 c-12">
            <Box>
                <Skeleton variant="rectangular" width={'100%'} height={230} />
                <Skeleton width="100%" sx={{height: '30px', marginTop: '2px'}}/>
                <Skeleton width="80%" sx={{height: '30px'}}/>
                <Skeleton width="60%" sx={{height: '25px'}}/>
                <Skeleton width="50%" sx={{height: '20px'}}/>
            </Box>
        </div>
    );
}
