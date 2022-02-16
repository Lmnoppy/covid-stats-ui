import { MdSettings, MdOutlineHealthAndSafety } from 'react-icons/md';
import { SiTwitter, SiGithub } from 'react-icons/si';
import SideBarIcon from "./SideBarIcon";

const Divider = () => <hr className="sidebar-hr" />;

export default function SideBar() {
    return (

        <div className="fixed top-0 left-0 h-screen w-16  m-0 flex flex-col 
        bg-primary text-secondary shadow-lg">

            <div>
            <SideBarIcon icon={<MdOutlineHealthAndSafety size="28" />} text={'💡 tooltip: Covid UI home '} />
            </div>
            
            <Divider />
            <SideBarIcon icon={<SiGithub size="20" />} text={'💡 tooltip: Covid Grid'}/>

            <div className={"absolute bottom-0 inset-x-0"}>
            <Divider />
            <SideBarIcon icon={<SiTwitter size="20" />} text={'💡 tooltip: Covid UI Twiter feed '} />
            <SideBarIcon icon={<SiGithub size="20" />} text={'💡 tooltip: Covid UI Github'}/>
            <SideBarIcon icon={<MdSettings size="20" />} text={'💡tooltip: Covid UI Settings'}/>
            </div>

        </div>
    );
}