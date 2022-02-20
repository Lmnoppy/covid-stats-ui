import { MdSettings, MdOutlineHealthAndSafety, MdHelp, MdMenuBook, MdQueryStats, MdList } from 'react-icons/md';
import { SiTwitter, SiGithub } from 'react-icons/si';
import SideBarIcon from "./SideBarIcon";

const Divider = () => <hr className="sidebar-hr" />;

export default function SideBar() {
    return (

        <div className="fixed top-0 left-0 h-screen w-12  m-0 flex flex-col 
        bg-primary text-secondary shadow-lg">

            <div>
            <SideBarIcon icon={<MdOutlineHealthAndSafety size="16" />} text={'💡 tooltip: Covid UI home '} />
            </div>
            
            <Divider />
            <SideBarIcon icon={<MdQueryStats size="16" />} text={'💡 tooltip: Covid stats'}/>
            <SideBarIcon icon={<MdList size="16" />} text={'💡 tooltip: Data grid'}/>
            <SideBarIcon icon={<MdMenuBook size="16" />} text={'💡 tooltip: Symptons'}/>
            <SideBarIcon icon={<MdMenuBook size="16" />} text={'💡 tooltip: Variations'}/>
            <SideBarIcon icon={<MdMenuBook size="16" />} text={'💡 tooltip: Vacines'}/>
            <SideBarIcon icon={<MdMenuBook size="16" />} text={'💡 tooltip: Blog posts'}/>
            <SideBarIcon icon={<MdHelp size="16" />} text={'💡 tooltip: Help'}/>

            <div className={"absolute bottom-0 inset-x-0"}>
            <Divider />
            <SideBarIcon icon={<SiTwitter size="16" />} text={'💡 tooltip: Covid UI Twiter feed '} />
            <SideBarIcon icon={<SiGithub size="16" />} text={'💡 tooltip: Covid UI Github'}/>
            <SideBarIcon icon={<MdSettings size="16" />} text={'💡tooltip: Covid UI Settings'}/>
            </div>

        </div>
    );
}