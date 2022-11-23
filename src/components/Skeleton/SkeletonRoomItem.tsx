import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const Array = [1, 2, 3, 4, 5, 6, 7, 8];

export default function SkeletonRoomItem() {
    return (
        <>
            {Array.map((data: any, index: number) => (
                <div className="col l-3 m-6 c-12" key={index}>
                    <Box>
                        <Skeleton variant="rectangular" width={'100%'} height={220} />
                        <Skeleton width="100%" sx={{height: '30px', marginTop: '8px'}}/>
                        <Skeleton width="80%" sx={{height: '30px'}}/>
                        <Skeleton width="60%" sx={{height: '25px'}}/>
                        <Skeleton width="50%" sx={{height: '20px'}}/>
                    </Box>
                </div>
            ))}
        </>
    );
}
