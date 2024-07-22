import "./Navbar.scss"

import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
          <DarkModeIcon className="icon" />


          </div>
          <div className="item">
          <FullscreenExitIcon className="icon" />
          

          </div>
          <div className="item">
          <NotificationsNoneIcon className="icon" />
          <div className="counter">1</div>


          </div>
          <div className="item">
          <ChatIcon className="icon"/>
          <div className="counter">2</div>


          </div>
          <div className="item">
          <FormatListBulletedIcon className="icon"/>
          

          </div>
          
        </div>


      </div>
    
    
    </div>
  )
}

export default Navbar