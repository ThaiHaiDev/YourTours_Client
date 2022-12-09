import { useState, useEffect } from "react";
import userApi from "../../services/userApi";
import UserAdmin from "./RoomAdmin";

const LayoutTypeRoomAdmin = () => {
    const [listUser, setListUser] = useState<any>([]);

    useEffect(() => {
        userApi.getAllUser().then((dataResponse) => {
            setListUser(dataResponse.data.content)
        })
    }, [])
    
    return (
        <div>
            {listUser.length !== 0 && <UserAdmin data={listUser} />}
        </div>
    )
}

export default LayoutTypeRoomAdmin