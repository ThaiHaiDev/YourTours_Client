
interface ItemSidebar {
    active: boolean;
    title: string;
    icon: string;
}

const SidebarItem = (props: ItemSidebar) => {
    const active = props.active ? 'active' : '';

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>{props.title}</span>
            </div>
        </div>
    );
};

export default SidebarItem;
