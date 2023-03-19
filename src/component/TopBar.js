import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../images/user.svg';

const TopBar = ({childToParent}) => {

  const search = (e)=>{
    const ser = e.target.value.toLowerCase()
    childToParent(ser)
  }

  return (
    <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLeft">
        <span className="logo">react <small> DATABASE</small></span>
        <div className="wrap">
   <div className="search">
      <input type="text" onChange={search} className="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" className="searchButton">
        <SearchIcon />
     </button>
   </div>
</div>
      </div>
      <div className="topRight">
        <div className="topbarIconContainer">
        < NotificationsNoneOutlinedIcon />
          <span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
        < LanguageOutlinedIcon />
          <span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
        < SettingsIcon />
        </div>
        <img   src={logo} alt="" className="topAvatar" />
      </div>
    </div>
    </div>
  )
}

export default TopBar