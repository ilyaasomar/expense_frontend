import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
const Navbar = () => {
  return (
    <div className='flex px-5 py-1 justify-between'>
      <div className='flex items-center gap-5'>
        <span><MenuIcon /></span>
        <h3>Home</h3>
        <h3>Contact</h3>
      </div>
      {/* right section */}
      <div className='flex items-center gap-3'>
        <span><MarkChatUnreadIcon className="cursor-pointer" /></span>
        <span><NotificationsActiveIcon className="cursor-pointer" /></span>
        <span><SupervisedUserCircleIcon className="cursor-pointer" /></span>

      </div>
    </div>
  )
}

export default Navbar