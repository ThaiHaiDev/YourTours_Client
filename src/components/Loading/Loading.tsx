import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = (props: any) => {
    return (
        <div className="loading-comp">
            {props.loading ? (
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="success" />
                </Stack>
            ) : (
                ''
            )}
        </div>
    );
};

export default Loading;
