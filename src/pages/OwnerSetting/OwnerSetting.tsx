import NavbarOwner from "../../components/NavbarOwner/NavbarOwner"
import ScrollspyComponent from "../../components/Scrollspy/Scrollspy"

import './OwnerSetting.scss';

const OwnerSetting = () => {
    return (
        <div className="owner-setting">
            <NavbarOwner />
            <ScrollspyComponent />
        </div>
    )
}

export default OwnerSetting