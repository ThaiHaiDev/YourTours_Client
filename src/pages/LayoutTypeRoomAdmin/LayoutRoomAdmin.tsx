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

    console.log(listTypeRoom)
    
    return (
        <div>
            {listTypeRoom.length !== 0 && <TypeRoomAdmin data={listTypeRoom} />}
        </div>
    )
}

export default LayoutTypeRoomAdmin