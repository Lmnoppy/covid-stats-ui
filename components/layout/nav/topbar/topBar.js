import {FaHashtag, FaUserCircle, FaSun} from 'react-icons/fa';

export default function TopBar({ siteTitle }) {
    return (
        <div className='top-navigation'>
            <FaHashtag size='20' className='title-hashtag' />
            <h5 className='title-text'>{siteTitle}</h5>
            <FaSun size='24' className='top-navigation-icon' />
            <FaUserCircle size='24' className='top-navigation-icon' />
        </div>
    );
};



