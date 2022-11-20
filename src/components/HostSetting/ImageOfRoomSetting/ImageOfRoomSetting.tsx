import './ImageOfRoomSetting.scss';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import roomOfHomeApi from '../../../services/roomOfHome';
import { useParams } from 'react-router-dom';
import DialogCountOfRoom from '../../DialogCountOfRoom/DialogCountOfRoom';

import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

const ImageOfRoomSetting = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const params = useParams();

    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [listRoomOfHome, setListRoomOfHome] = React.useState<any>([]);

    React.useEffect(() => {
        roomOfHomeApi.getAllRoomOfHome(`${params.idHome}&`).then((dataRoom) => {
            setListRoomOfHome(dataRoom.data.content);
        });
    }, [params.idHome]);

    const handleClose = () => {
        setExpanded(false);
    };

    const handleRemoveRoom = (idRoom: string) => {
        roomOfHomeApi
            .deleteRoomOfHome(idRoom)
            .then(() => {
                enqueueSnackbar('Xóa thành công', { variant: 'success' });
                setListRoomOfHome(listRoomOfHome.filter(((room:any) => {return room.id !== idRoom})))
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="image-of-room__setting">
            {listRoomOfHome?.map((room: any, index: number) => (
                <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <p style={{ width: '33%', flexShrink: 0, fontSize: '18px', fontWeight: 'bold' }}>
                            {room?.name}
                        </p>
                    </AccordionSummary>
                    <AccordionDetails>
                        {room.categoryDetail.configBed && (
                            <div className="content__count-of-room">
                                <div>
                                    <h4>Bố trí chỗ ngủ</h4>
                                    <p>{room?.descriptionOfBed}</p>
                                </div>
                                <DialogCountOfRoom roomOfHomeId={room?.id} />
                            </div>
                        )}

                        <div className="btn">
                            <p onClick={handleClose} className="btn-close">
                                Hủy
                            </p>
                            <button className="btn-remove-room" onClick={() => handleRemoveRoom(room?.id)}>
                                Xóa
                            </button>
                            <button className="btn-save" type="submit">
                                Lưu
                            </button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default ImageOfRoomSetting;
