import {FaHashtag, FaRegBell, FaUserCircle, FaMoon, FaSun} from 'react-icons/fa';

export default function TopBar() {
    return (
        <div className='top-navigation'>
            <FaHashtag size='20' className='title-hashtag' />
            <h5 className='title-text'>Covid UI</h5>
            <FaSun size='24' className='top-navigation-icon' />
            <FaRegBell size='24' className='top-navigation-icon' />
            <FaUserCircle size='24' className='top-navigation-icon' />
        </div>
    );
};



