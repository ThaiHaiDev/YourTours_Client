import { useState, useEffect } from "react";
import roomCategoryApi from "../../services/roomCategoryApi";
import TypeRoomAdmin from "./RoomAdmin";

const LayoutTypeRoomAdmin = () => {
    const [listTypeRoom, setListTypeRoom] = useState<any>([]);

    useEffect(() => {
        roomCategoryApi.getAllRoomCategory().then((dataResponse) => {
            setListTypeRoom(dataResponse.data.content)
        })
    }, [])

    const handleChangeData = (data : any) => {
        setListTypeRoom(data)
    }
    
    return (
        <div>
            {listTypeRoom.length !== 0 && <TypeRoomAdmin data={listTypeRoom} setListTypeRoom={handleChangeData}/>}
        </div>
    )
}

export default LayoutTypeRoomAdmin